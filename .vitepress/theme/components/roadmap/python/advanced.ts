import {
  MAIN_NODE_COLOR,
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  NODE_LEFT,
  NODE_MARGIN, ROOT_NODE_TOP,
} from "../constant";

const BASIC_Y = 920

export const ADVANCED_NODE = [
  {
    id: 'm4GRVc',
    type: 'points',
    data: {
      label: '列表推导式',
      slug: 'm4GRVc'
    },
    position: {
      x: NODE_LEFT,
      y: ROOT_NODE_TOP + BASIC_Y
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'cYtrM6',
    type: 'points',
    data: {
      label: '生成器表达式',
      slug: 'cYtrM6'
    },
    position: {
      x: NODE_LEFT,
      y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT + NODE_MARGIN
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'mKI3gUL',
    type: 'points',
    data: {
      label: '范式',
      slug: 'mKI3gUL'
    },
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'YkYr12',
    type: 'points',
    data: {
      label: '上下文管理器',
      slug: 'YkYr12'
    },
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 3
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
]


export const ADVANCED_EDGES = [
  {
    id: 'm4GRVc-2gLgd1r',
    source: 'm4GRVc',
    target: '2gLgd1r',
    targetHandle: 'handle-top',
    animated: true,
  },
]