export interface NAV_LINK {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

export interface WIZARDS {
  title: string
  items: NAV_LINK[]
}

export interface Post {
  title: string
  url: string
  html: string | undefined
}