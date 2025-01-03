import {Position} from "@vue-flow/core";
import {
  BASIC_W,
  MAIN_NODE_COLOR,
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  NODE_LEFT, NODE_MARGIN, SECOND_LEVEL_NODE_COLOR,
} from "../constant";

const BASIC_Y = 1200


//noinspection all
export const TEST_NODE = [
  {
    id: '9gpOrWc',
    type: 'points',
    data: {
      label: '测试',
      slug: '9gpOrWc',
      handles: [
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
      x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W + 10,
      y: BASIC_Y
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${BASIC_W * 3 + 20}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'L62Ttov',
    type: 'points',
    data: {
      label: 'unittest / pyUnit',
      slug: 'L62Ttov',
      handles: [
        {
          id: 'handle-top',
          position: Position.Top,
          type: "target",
        },
      ]
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W + 10,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W * 3 + 20}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '9aGRodHI',
    type: 'points',
    data: {
      label: 'tox',
      slug: '9aGRodHI'
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W + 10,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W * 3 / 2 + NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'IuSH2r6M',
    type: 'points',
    data: {
      label: 'nose',
      slug: 'IuSH2r6M',
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W * 5 / 2 + 20,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W * 3 / 2 + 10}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'YR4STCX',
    type: 'points',
    data: {
      label: 'doctest',
      slug: 'YR4STCX',
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W + 10,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W * 3 / 2 + NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'NoYMUi',
    type: 'points',
    data: {
      label: 'pytest',
      slug: 'YR4STCX',
    },
    targetHandle: Position.Left,
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W * 5 / 2 + 20,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${BASIC_W * 3 / 2 + 10}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
]


//noinspection all
export const TEST_EDGES = [
  {
    id: '9gpOrWc-L62Ttov',
    source: '9gpOrWc',
    target: 'L62Ttov',
    sourceHandle: 'handle-bottom',
    targetHandle: 'handle-top',
  }
]