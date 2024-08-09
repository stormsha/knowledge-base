import {Position} from "@vue-flow/core";
import {
  BASIC_W,
  MAIN_NODE_COLOR,
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH, MAIN_NODE_WIDTH_MAX, MAIN_NODE_WIDTH_MIN,
  NODE_LEFT, SECOND_LEVEL_NODE_COLOR,
} from "../constant";

const BASIC_Y = 1220

export const FRAMEWORKS_NODE = [
  {
    id: '16',
    type: 'points',
    data: {
      label: '框架',
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
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W,
      y: BASIC_Y
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MAX}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '16a',
    data: {label: '同步 + 异步'},
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2
    },
    style: {
      backgroundColor: "#ffffff",
      width: `${MAIN_NODE_WIDTH * 2}px`,
      height: `${MAIN_NODE_WIDTH}px`
    },
  },
  {
    id: '16a1',
    parentNode: '16a',
    data: {label: 'Django'},
    position: {
      x: 10,
      y: 10
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MIN * 2 / 3}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '16a2',
    parentNode: '16a',
    data: {label: 'Flask'},
    position: {
      x: 10 + MAIN_NODE_WIDTH * 2 / 3,
      y: 10
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MIN * 2 / 3}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '16a3',
    parentNode: '16a',
    data: {label: 'Fast API'},
    position: {
      x: 10 + MAIN_NODE_WIDTH * 4 / 3,
      y: 10
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH_MIN * 2 / 3}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '16b',
    parentNode: '16a',
    data: {label: '同步'},
    position: {
      x: 10,
      y: 80
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH * 2 /3}px`,
      height: `${MAIN_NODE_HEIGHT * 3}px`
    },
  },
]


export const FRAMEWORKS_EDGES = []