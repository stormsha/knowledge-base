import {Position} from "@vue-flow/core";
import {
  BASIC_W,
  MAIN_NODE_COLOR,
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  NODE_LEFT, NODE_MARGIN, ROOT_NODE_TOP,
  SECOND_LEVEL_NODE_COLOR,
} from "../constant";

const BASIC_Y = 850

const color = "#ffffff"

export const FRAMEWORKS_NODE = [
  {
    id: '4Jn2cd',
    type: 'points',
    data: {
      label: '框架',
      slug: '4Jn2cd',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "target",
        },
        {
          id: 'handle-right',
          position: Position.Right,
          type: "source",
        },
        {
          id: 'handle-bottom',
          position: Position.Bottom,
          type: "source",
        },
      ]
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: BASIC_Y + MAIN_NODE_WIDTH
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'i7zO9b',
    type: 'points',
    data: {
      label: '同步 + 异步',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "target",
        }
      ]
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W + 10,
      y: ROOT_NODE_TOP + BASIC_Y
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W * 3 + 20}px`,
      height: `${MAIN_NODE_WIDTH}px`
    },
  },
  {
    id: '8D2GWjt',
    type: 'points',
    parentNode: 'i7zO9b',
    data: {
      label: 'Django',
      slug: '8D2GWjt',
    },
    position: {
      x: 10,
      y: 40
    },
    style: {
      backgroundColor: color,
      width: `${BASIC_W - 5}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'fg8e9hl',
    type: 'points',
    parentNode: 'i7zO9b',
    data: {
      label: 'Flask',
      slug: 'fg8e9hl',
    },
    position: {
      x: 10 + BASIC_W + NODE_MARGIN / 2,
      y: 40
    },
    style: {
      backgroundColor: color,
      width: `${BASIC_W - 5}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'CgW3n44c',
    type: 'points',
    parentNode: 'i7zO9b',
    data: {
      label: 'Fast API',
      slug: 'CgW3n44c',
    },
    position: {
      x: 10 + BASIC_W * 2 + NODE_MARGIN,
      y: 40
    },
    style: {
      backgroundColor: color,
      width: `${BASIC_W - 5}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '3N0RKB',
    type: 'points',
    parentNode: 'i7zO9b',
    data: {
      label: '同步',
    },
    position: {
      x: 10,
      y: 90
    },
    style: {
      backgroundColor: color,
      width: `${BASIC_W - NODE_MARGIN}px`,
      height: `${BASIC_W + 20}px`
    },
  },
  {
    id: 'kvxHAu',
    type: 'points',
    parentNode: 'i7zO9b',
    data: {
      label: '异步',
    },
    position: {
      x: 10 + (BASIC_W * 3) / 3,
      y: 90
    },
    style: {
      backgroundColor: color,
      width: `${BASIC_W * 2}px`,
      height: `${BASIC_W + 20}px`
    },
  },
  {
    id: '1AC9rs',
    type: 'points',
    parentNode: '3N0RKB',
    data: {
      label: 'Plotly Dash',
      slug: '1AC9rs',
    },
    position: {
      x: 10,
      y: 90
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W - 25}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'JhcC73',
    type: 'points',
    parentNode: '3N0RKB',
    data: {
      label: 'Pyramid',
      slug: 'JhcC73',
    },
    position: {
      x: 10,
      y: 40
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W - 25}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'dYtsES',
    type: 'points',
    parentNode: 'kvxHAu',
    data: {
      label: 'Sanic',
      slug: 'dYtsES',
    },
    position: {
      x: 10,
      y: 40
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W - 15}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'Ip5SbcK',
    type: 'points',
    parentNode: 'kvxHAu',
    data: {
      label: 'Tornado',
      slug: 'Ip5SbcK',
    },
    position: {
      x: BASIC_W + 5,
      y: 40
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W - 15}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'mCIwGK',
    type: 'points',
    parentNode: 'kvxHAu',
    data: {
      label: 'aiohttp',
      slug: 'mCIwGK',
    },
    position: {
      x: BASIC_W + 5,
      y: 90
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W - 15}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'e6Wxf0K',
    type: 'points',
    parentNode: 'kvxHAu',
    data: {
      label: 'gevent',
      slug: 'e6Wxf0K',
    },
    position: {
      x: 10,
      y: 90
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W - 15}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
]


//noinspection all
export const FRAMEWORKS_EDGES = [
  {
    id: '4Jn2cd-i7zO9b',
    source: 'i7zO9b',
    target: '4Jn2cd',
    sourceHandle: 'handle-left',
    targetHandle: 'handle-right',
    type: 'smoothstep'
  },
  {
    id: '4Jn2cd-mwfviW',
    source: '4Jn2cd',
    target: 'mwfviW',
    sourceHandle: 'handle-bottom',
    targetHandle: 'handle-top',
    type: 'smoothstep',
    animated: true,
  },
]