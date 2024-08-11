import {
  MAIN_NODE_COLOR,
  MAIN_NODE_HEIGHT,
  MAIN_NODE_WIDTH,
  NODE_LEFT,
  BASIC_W, NODE_MARGIN, SECOND_LEVEL_NODE_COLOR,
} from "../constant";
import {Position} from "@vue-flow/core";

const BASIC_Y = 795


export const OBJECT_NODE = [
  {
    id: '9',
    data: {
      label: '面向对象编程',
      slug: 'Eb5dfJ',
      handles: [
        {
          id: 'handle-left',
          position: Position.Left,
          type: "source",
        },
        {
          id: 'handle-right',
          position: Position.Right,
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
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W/2,
      y: BASIC_Y
    },
    style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: '9a',
    data: {label: '类'},
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W/2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN
    },
    style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: '9b',
    data: {label: '继承'},
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W/2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 2
    },
    style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: '9c',
    data: {label: '类方法'},
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W/2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 3
    },
    style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
]


//noinspection all
export const OBJECT_EDGES = [
  {
    id: 'e9-9a',
    source: '9',
    target: '9a',
    sourceHandle: 'handle-bottom',
  },
  {
    id: 'e9-10',
    source: '9',
    target: '10',
    sourceHandle: 'handle-left',
    targetHandle: 'handle-right',
    animated: true,
    type: 'smoothstep'
  },
]