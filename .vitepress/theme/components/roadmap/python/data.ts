import {BASIC, BASIC_NODE_EDGES} from './basic'
import {ROOT_EDGES, ROOT_NODE} from "./root";
import {DATA_STRUCTURE, DATA_STRUCTURE_EDGES} from "./data_structure";
import {MODULES_EDGES, MODULES_NODE} from "./modules";
import {OBJECT_EDGES, OBJECT_NODE} from "./object";
import {PACKAGE_EDGES, PACKAGE_NODE} from "./package";
import {ADVANCED_EDGES, ADVANCED_NODE} from "./advanced";
import {FRAMEWORKS_EDGES, FRAMEWORKS_NODE} from "./frameworks";
import {ENVIRONMENTS_NODE} from "./environments";
import {CONCURRENCY_EDGES, CONCURRENCY_NODE} from "./concurrency";


// 学习路线节点
export const NODES = [
  ...ROOT_NODE, // Python 学习路线根节点
  ...BASIC, // Python 基础学习节点
  ...DATA_STRUCTURE, // 数据结构与算法学习节点
  ...MODULES_NODE, // 模块
  ...OBJECT_NODE, // 面向对象编程
  ...PACKAGE_NODE, // 包管理
  ...ENVIRONMENTS_NODE, // 虚拟环境
  ...ADVANCED_NODE, // 进阶
  ...CONCURRENCY_NODE, // 并发编程
  ...FRAMEWORKS_NODE, // 框架
]

// 学习路线路径
export const EDGES = [
  ...ROOT_EDGES, // 根节点路径
  ...BASIC_NODE_EDGES, // 基础学习路径
  ...DATA_STRUCTURE_EDGES, // 数据结构与算法路径
  ...MODULES_EDGES, // 模块路径
  ...OBJECT_EDGES, // 面向对象编程路径
  ...PACKAGE_EDGES, // 包管理路径
  ...ADVANCED_EDGES, // 进阶路径
  ...CONCURRENCY_EDGES, // 并发编程路径
  ...FRAMEWORKS_EDGES, // 框架理路径
]