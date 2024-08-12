import {Position} from '@vue-flow/core'
import {
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  MAIN_NODE_WIDTH_MAX, NODE_MARGIN,
  ROOT_NODE_TOP,
  SECOND_LEVEL_NODE_COLOR
} from "../constant";
import {MAIN_NODE_COLOR} from "../constant";

const BASIC_X = 20
const BASIC_W = 120

// Python 基础学习
//noinspection all
export const BASIC = [
  {
    id: 'XvJ1wCns',
    position: {
      x: BASIC_X + MAIN_NODE_WIDTH + BASIC_W,
      y: ROOT_NODE_TOP + 235
    },
    type: 'points',
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`
    },
    data: {
      label: '基础学习',
      slug: 'XvJ1wCns',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "target",
        },
        {
          id: 'handle-right',
          position: Position.Right,
          type: "target",
        },
        {
          id: 'handle-top',
          position: Position.Top,
          type: "target",
        },
        {
          id: 'handle-bottom',
          position: Position.Bottom,
          type: "source",
        },
      ]
    }
  },
  {
    id: 'hoiII9V',
    type: 'points',
    data: {
      label: '基础语法',
      slug: 'hoiII9V',
      handles: [
        {
          id: 'handle-right',
          position: Position.Right,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X,
      y: ROOT_NODE_TOP + 150
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'OsIFG8T',
    type: 'points',
    data: {
      label: '变量和数据类型',
      slug: 'OsIFG8T',
      handles: [
        {
          id: 'handle-right',
          position: Position.Right,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X,
      y: ROOT_NODE_TOP + 205
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'bHKm0pwB',
    type: 'points',
    data: {
      label: '条件',
      slug: 'bHKm0pwB',
      handles: [
        {
          id: 'handle-right',
          position: Position.Right,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X,
      y: ROOT_NODE_TOP + 260
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'NOhFv5j4O',
    type: 'points',
    data: {
      label: '循环',
      slug: 'NOhFv5j4O',
      handles: [
        {
          id: 'handle-right',
          position: Position.Right,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X,
      y: ROOT_NODE_TOP + 315
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },

  // 右侧
  {
    id: 'iR30hY8',
    type: 'points',
    data: {
      label: '类型转换',
      slug: 'iR30hY8',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: ROOT_NODE_TOP + 125
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH + 30}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'V6WjOa',
    type: 'points',
    data: {
      label: '异常处理',
      slug: 'V6WjOa',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: ROOT_NODE_TOP + 180
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH + 30}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },

  },
  {
    id: '14toUXAm',
    type: 'points',
    data: {
      label: '函数、内置函数',
      slug: '14toUXAm',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: ROOT_NODE_TOP + 235
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH + 30}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'vicbejRa',
    type: 'points',
    data: {
      label: '元组',
      slug: 'vicbejRa',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: ROOT_NODE_TOP + 290
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${(MAIN_NODE_WIDTH + 30) / 3}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'll5cyV7F3',
    type: 'points',
    data: {
      label: '集合',
      slug: 'll5cyV7F3',
    },
    position: {
      x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2 + MAIN_NODE_WIDTH_MAX / 3 + NODE_MARGIN,
      y: ROOT_NODE_TOP + 290
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${(MAIN_NODE_WIDTH + 30) / 3 - NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'UIlB6RgkW',
    type: 'points',
    data: {
      label: '列表',
      slug: 'UIlB6RgkW',
    },
    position: {
      x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2 + MAIN_NODE_WIDTH_MAX * 2 / 3 + NODE_MARGIN,
      y: ROOT_NODE_TOP + 290
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${(MAIN_NODE_WIDTH + 30) / 3 - NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '00umcxaJb',
    type: 'points',
    data: {
      label: '字典',
      slug: '00umcxaJb',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: ROOT_NODE_TOP + 345
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH + 30}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
]


export const BASIC_NODE_EDGES = [
  {
    id: 'XvJ1wCns-hoiII9V',
    source: 'hoiII9V',
    target: 'XvJ1wCns',
    targetHandle: 'handle-left'
  },
  {
    id: 'XvJ1wCns-OsIFG8T',
    source: 'OsIFG8T',
    target: 'XvJ1wCns',
    targetHandle: 'handle-left'
  },
  {
    id: 'XvJ1wCns-bHKm0pwB',
    source: 'bHKm0pwB',
    target: 'XvJ1wCns',
    targetHandle: 'handle-left'
  },
  {
    id: 'XvJ1wCns-NOhFv5j4O',
    source: 'NOhFv5j4O',
    target: 'XvJ1wCns',
    targetHandle: 'handle-left'
  },
  {
    id: 'XvJ1wCns-iR30hY8',
    source: 'iR30hY8',
    target: 'XvJ1wCns',
    targetHandle: 'handle-right'
  },
  {
    id: 'XvJ1wCns-V6WjOa',
    source: 'V6WjOa',
    target: 'XvJ1wCns',
    targetHandle: 'handle-right'
  },
  {
    id: 'XvJ1wCns-14toUXAm',
    source: '14toUXAm',
    target: 'XvJ1wCns',
    targetHandle: 'handle-right'
  },
  {
    id: 'XvJ1wCns-vicbejRa',
    source: 'vicbejRa',
    target: 'XvJ1wCns',
    targetHandle: 'handle-right'
  },
  {
    id: 'XvJ1wCns-00umcxaJb',
    source: '00umcxaJb',
    target: 'XvJ1wCns',
    targetHandle: 'handle-right'
  },
  {
    id: 'XvJ1wCns-3',
    source: 'XvJ1wCns',
    target: '3',
    sourceHandle: 'handle-bottom',
    targetHandle: 'handle-top',
    animated: true,
  },
]
