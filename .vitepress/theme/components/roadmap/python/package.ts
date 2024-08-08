import {Position} from "@vue-flow/core";
import {
  MAIN_NODE_COLOR,
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  NODE_LEFT,
  NODE_MARGIN,
  SECOND_LEVEL_NODE_COLOR
} from "../constant";

const BASIC_Y = 430

export const PACKAGE_NODE = [
  {
    id: '10',
    data: {
      label: '包管理',
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
    type: 'points',
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 5
    },
    style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: '10a',
    data: {label: 'Pip'},
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '10b',
    data: {label: 'uv'},
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '10c',
    data: {label: 'Conda'},
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '10d',
    data: {label: 'Poetry'},
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '10e',
    data: {label: 'PyPi'},
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 3
    },
    style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: '10f',
    data: {label: '常用包'},
    position: {
      x: NODE_LEFT,
      y: BASIC_Y
    },
    style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
]

export const PACKAGE_EDGES = [
  {
    id: 'e10e-10',
    source: '10e',
    target: '10',
    targetHandle: 'handle-top',
  },
  {
    id: 'e10-11',
    source: '10',
    target: '11',
    targetHandle: 'handle-top',
    animated: true,
  },
]