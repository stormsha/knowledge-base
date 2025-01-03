import {Position} from '@vue-flow/core'
import {MAIN_NODE_WIDTH, ROOT_NODE_TOP} from '../constant';

// 根节点
export const ROOT_NODE = [
  // TODO, 增加其他学习路线图导航
  // TODO, 增加python相关学习路线图导航
  {
    id: 'h1vCO3m4',
    type: 'points',
    data: {
      label: 'Python',
      slug: 'h1vCO3m4',
      handles: [
        {
          id: 'handle-bottom',
          position: Position.Bottom,
          type: "source",
        },
      ]
    },
    position: {
      x: 380,
      y: ROOT_NODE_TOP
    },
    style: {width: `${MAIN_NODE_WIDTH}px`},
    targetPosition: Position.Top,
  }
]

export const ROOT_EDGES = [
  {
    id: 'h1vCO3m4-XvJ1wCns',
    source: 'h1vCO3m4',
    target: 'XvJ1wCns',
    targetHandle: 'handle-top',
    animated: true,
  },
]