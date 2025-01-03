import {Position} from '@vue-flow/core'
import {
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  NODE_MARGIN,
  SECOND_LEVEL_NODE_COLOR
} from "../constant";
import {MAIN_NODE_COLOR} from "../constant";

const BASIC_X = 380
const BASIC_Y = 400

// 数据结构与算法学习
export const DATA_STRUCTURE = [
  {
    id: 'VPke7ElM8',
    type: 'points',
    data: {
      label: '数据结构与算法',
      slug: 'VPke7ElM8',
      handles: [
        {
          id: 'handle-right',
          position: Position.Right,
          type: "source",
        },
        {
          id: 'handle-top',
          position: Position.Top,
          type: "target",
        },
        {
          id: 'handle-b',
          position: Position.Bottom,
          type: "source",
        },
      ]
    },
    position: {
      x: BASIC_X,
      y: BASIC_Y
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`
    },
  },
  {
    id: 'jx99DF',
    type: 'points',
    data: {
      label: '数组和链表',
      slug: 'jx99DF',
      handles: [
        {
          id: 'handle-top',
          position: Position.Top,
          type: "target",
        },
      ]
    },
    position: {
      x: BASIC_X,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'MwhTzK',
    type: 'points',
    data: {
      label: '哈希表',
      slug: 'MwhTzK',
    },
    position: {
      x: BASIC_X,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'wOp9lT3',
    type: 'points',
    data: {
      label: '堆、堆栈和队列',
      slug: 'wOp9lT3',
    },
    position: {
      x: BASIC_X,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 3
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'LYiWXfj',
    type: 'points',
    data: {
      label: '二叉搜索树',
      slug: 'LYiWXfj',
    },
    position: {
      x: BASIC_X,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 5 + NODE_MARGIN * 4
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'MokKT7',
    type: 'points',
    data: {
      label: '递归',
      slug: 'MokKT7'
    },
    position: {
      x: BASIC_X,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 6 + NODE_MARGIN * 5
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'EjAgP7',
    type: 'points',
    data: {
      label: '排序算法',
      slug: 'EjAgP7'
    },
    position: {
      x: BASIC_X,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 7 + NODE_MARGIN * 6
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
]

//noinspection all
export const DATA_STRUCTURE_EDGES = [
  {
    id: 'VPke7ElM8-jx99DF',
    source: 'VPke7ElM8',
    target: 'jx99DF',
    sourceHandle: 'handle-bottom',
    targetHandle: 'handle-top'
  },
  {
    id: 'VPke7ElM8-m3sCV7',
    source: 'VPke7ElM8',
    target: 'm3sCV7',
    sourceHandle: 'handle-right',
    targetHandle: 'handle-left',
    animated: true,
    type: 'smoothstep'
  },
]