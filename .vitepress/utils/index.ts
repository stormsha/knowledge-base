import * as fs from "fs";
import * as path from "path";

// 定义侧边栏项的类型
interface SidebarItem {
  text: string; // 显示的标题
  collapsible?: boolean; // 是否可折叠
  items?: SidebarItem[]; // 子项目（目录下的文件或文件夹）
  link?: string; // 路径
}

// 定义返回值的类型
interface SidebarResult {
  sidebarMap: SidebarItem[]; // 侧边栏结构
  routeMap: Record<string, string>; // 路由映射表
}

// 提取文件名前缀中的数字部分
function extractNumberPrefix(name: string): number {
  const match = name.match(/^(\d+(\.\d+)?)/); // 匹配开头的数字前缀，支持小数点
  if (match) {
    return parseFloat(match[0]); // 转换为浮点数
  }
  return Infinity; // 没有数字前缀的排在最后
}

// 排序函数：根据数字前缀统一排序
function sortFilesAndFolders(files: string[], absolutePath: string): string[] {
  return files.sort((a, b) => {
    const aPrefix = extractNumberPrefix(a);
    const bPrefix = extractNumberPrefix(b);

    if (aPrefix !== bPrefix) {
      return aPrefix - bPrefix; // 数字小的排在前面
    }

    return a.localeCompare(b); // 如果数字相同，按文件名排序
  });
}

// 处理文件名，生成路由规则
function generateRoute(file: string, base: string): string {
  const match = file.match(/@(.*?)\.md$/); // 提取 @ 后的标识符（如 kg7svs）
  if (match) {
    const identifier = match[1]; // 提取 @ 后的部分
    return `${base}/${identifier}.md`.replace(/\\/g, "/"); // 生成新路由规则
  }
  return `${base}/${file.replace(".md", "")}.md`.replace(/\\/g, "/"); // 默认规则
}

// 递归扫描目录并生成侧边栏和路由配置
export function GenerateSidebarWithRoutes(
  dir: string,
  base: string
): SidebarResult {
  const absolutePath = path.resolve(__dirname, "../../docs", dir); // 计算绝对路径
  const files = fs.readdirSync(absolutePath); // 读取目录中的所有文件和文件夹

  const sidebarMap: SidebarItem[] = [];
  const routeMap: Record<string, string> = {};

  // 对文件和目录进行排序
  const sortedFiles = sortFilesAndFolders(files, absolutePath);

  sortedFiles.forEach((file) => {
    const fullPath = path.join(absolutePath, file); // 生成文件的绝对路径
    const relativePath = path.join(dir, file).replace(/\\/g, "/"); // 生成文件的相对路径
    const stat = fs.statSync(fullPath); // 获取文件/目录的状态信息

    if (stat.isDirectory()) {
      // 处理目录
      const { sidebarMap: children, routeMap: childRouteMap } = GenerateSidebarWithRoutes(relativePath, base); // 递归处理子目录
      sidebarMap.push({
        text: file.replace(/^\d+(\.\d+)?\./, ""), // 去掉数字前缀作为标题
        collapsible: true, // 设置为可折叠
        items: children.length > 0 ? children : undefined, // 如果有子项目，添加子项目
      });
      Object.assign(routeMap, childRouteMap); // 合并子目录的路由映射
    } else if (file.endsWith(".md")) {
      // 处理 Markdown 文件
      const route = generateRoute(file, base); // 使用新的路由规则
      const text = file.replace(/^\d+(\.\d+)?\./, "").replace(/@.*\.md$/, ""); // 去掉数字前缀和 @xxx 后缀作为显示文本

      sidebarMap.push({
        text: text, // 文本内容
        link: route, // 新的路由规则
      });
      routeMap[relativePath] = route; // 路由映射
    }
  });
  return { sidebarMap, routeMap };
}
