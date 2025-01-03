import {Position} from '@vue-flow/core'
import {
  BASIC_W,
  MAIN_NODE_COLOR,
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  MAIN_NODE_WIDTH_MAX, NODE_MARGIN,
  ROOT_NODE_TOP,
  SECOND_LEVEL_NODE_COLOR
} from "../constant";

const BASIC_Y = 425

//noinspection all
export const MODULES_NODE = [
  {
    id: 'm3sCV7',
    type: 'points',
    data: {
      label: '模块',
      slug: "m3sCV7",
      handles: [
        {
          id: 'left25',
          position: Position.Top,
          type: "target",
        },
        {
          id: 'right25',
          position: Position.Top,
          type: "target",
        },
        {
          id: 'handle-left',
          position: Position.Left,
          type: "target",
        },
        {
          id: 'handle-bottom',
          position: Position.Bottom,
          type: "source",
        },
      ]
    },
    position: {
      x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT * 2
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH + 30}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'OPbDjGD',
    type: 'points',
    data: {
      label: '内置',
      slug: 'OPbDjGD',
      handles: [
        {
          id: 'handle-bottom',
          position: Position.Bottom,
          type: "target",
        },
      ]
    },
    position: {
      x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: BASIC_Y + ROOT_NODE_TOP
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MAX / 2 - NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'iuauDp',
    type: 'points',
    data: {
      label: '自定义',
      slug: 'iuauDp',
      handles: [
        {
          id: 'handle-bottom',
          position: Position.Bottom,
          type: "target",
        },
      ]
    },
    position: {
      x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2 + MAIN_NODE_WIDTH_MAX / 2 + NODE_MARGIN,
      y: ROOT_NODE_TOP + BASIC_Y
    },
    targetPosition: Position.Bottom,
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MAX / 2 - NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '51DBUJ9T',
    type: 'points',
    data: {
      label: '匿名函数',
      slug: '51DBUJ9T',
    },
    position: {
      x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT * 3 + MAIN_NODE_HEIGHT / 2
    },
    sourcePosition: Position.Right,
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MAX}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '3jxo5N6',
    type: 'points',
    data: {
      label: '装饰器',
      slug: '3jxo5N6',
    },
    position: {
      x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: BASIC_Y + ROOT_NODE_TOP + MAIN_NODE_HEIGHT * 5
    },
    sourcePosition: Position.Right,
    style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH_MAX}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: 'k2yAMO',
    type: 'points',
    data: {
      label: '迭代器',
      slug: 'k2yAMO',
    },
    position: {
      x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: BASIC_Y + ROOT_NODE_TOP + MAIN_NODE_HEIGHT * 6 + MAIN_NODE_HEIGHT / 2
    },
    sourcePosition: Position.Right,
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MAX}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'CidoaBt',
    type: 'points',
    data: {
      label: '正则表达式',
      slug: 'CidoaBt',
      handles: [
        {
          id: 'handle-top',
          position: Position.Top,
          type: "target",
        },
        {
          id: 'handle-left',
          position: Position.Left,
          type: "source",
        },
      ]
    },
    position: {
      x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
      y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT * 8
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MAX}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
]

//noinspection all
export const MODULES_EDGES = [
  {
    id: 'm3sCV7-OPbDjGD',
    source: 'OPbDjGD',
    target: 'm3sCV7',
    targetHandle: 'left25',
  },
  {
    id: 'm3sCV7-iuauDp',
    source: 'iuauDp',
    target: 'm3sCV7',
    targetHandle: 'right25',
  },
  {
    id: 'm3sCV7-CidoaBt',
    source: 'm3sCV7',
    target: 'CidoaBt',
    targetHandle: 'handle-top',
    animated: true,
  },
  {
    id: 'CidoaBt-Eb5dfJ',
    source: 'CidoaBt',
    target: 'Eb5dfJ',
    sourcetHandle: 'handle-left',
    targetHandle: 'handle-right',
    animated: true,
    type: 'smoothstep'
  },
]