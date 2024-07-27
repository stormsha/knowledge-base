---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'home-layout'

hero:
  name: "stormsha"
  text: "知识库"
  tagline: 每一次点击，都是知识的积累
#  image:
#    src: /home-hero-image.svg
#    alt: 知识库
  actions:
    - text: 个人主页
      link: https://stormsha.com
    - text: 个人主页
      link: https://stormsha.com

features:
  - icon: 📖
    title: 个人主页
    link: https://stormsha.com
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    linkText: ssss
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
/*爱的魔力转圈圈*/
.home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.home-layout .details small {
  opacity: 0.8;
}

.home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>