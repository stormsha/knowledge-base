import {Position} from "@vue-flow/core";
import {
  BASIC_W,
  MAIN_NODE_COLOR,
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  NODE_LEFT, NODE_MARGIN, ROOT_NODE_TOP,
  SECOND_LEVEL_NODE_COLOR
} from "../constant";

const BASIC_Y = 1200


//noinspection all
export const TYPING_NODE = [
  {
    id: 'mwfviW',
    type: 'points',
    data: {
      label: '静态类型检查',
      slug: 'mwfviW',
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
          id: 'handle-bottom',
          position: Position.Bottom,
          type: "source",
        },
      ]
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: ROOT_NODE_TOP + BASIC_Y
    },
    style: {
      backgroundColor: MAIN_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'BzFCDm',
    type: 'points',
    data: {
      label: 'typing',
      slug: 'BzFCDm',
      handles: [
        {
          id: 'handle-top',
          position: Position.Top,
          type: "target",
        },
      ]
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'Go3HEB',
    type: 'points',
    data: {
      label: 'mypy',
      slug: 'Go3HEB',
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2 - NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'Glw8JR',
    type: 'points',
    data: {
      label: 'pyright',
      slug: 'Glw8JR',
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W * 3 / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'i4XjCd',
    type: 'points',
    data: {
      label: 'pyre',
      slug: 'i4XjCd',
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2 - NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '03yUHm',
    type: 'points',
    data: {
      label: 'Pydantic',
      slug: '03yUHm',
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W * 3 / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
]


//noinspection all
export const TYPING_EDGES = [
  {
    id: 'mwfviW-BzFCDm',
    source: 'mwfviW',
    target: 'BzFCDm',
    sourceHandle: 'handle-bottom',
    targetHandle: 'handle-top',
  },
  {
    id: 'mwfviW-9gpOrWc',
    source: 'mwfviW',
    target: '9gpOrWc',
    sourceHandle: 'handle-right',
    targetHandle: 'handle-left',
    animated: true,
  }
]