// .vitepress/loadContent.ts

type MarkdownModule = {
  default: string;
};

type MarkdownModules = Record<string, () => Promise<MarkdownModule>>;

// @ts-ignore
const modules: MarkdownModules = import.meta.glob('/Python/*.md');
console.log(modules, "modules")
export async function loadMarkdown(filePath: string): Promise<string> {
  const moduleLoader = modules[filePath];
  console.log(moduleLoader, "moduleLoader")
  if (!moduleLoader) {
    throw new Error(`Module not found: ${filePath}`);
  }

  try {
    const module = await moduleLoader();
    console.log(module, "module")
    return module.default;
  } catch (error) {
    console.error('Failed to load markdown:', error);
    throw error;
  }
}
