import pythonRoute from './roadmap/python'
import goRoute from './roadmap/go'
import javaRoute from './roadmap/java'

//noinspection all
export const RouteMap: Route = {
  '学习路线图/index.md':'roadmap.md',
  ...pythonRoute,
  ...goRoute,
  ...javaRoute,
}