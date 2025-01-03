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
    id: 'Eb5dfJ',
    type: 'points',
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
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: BASIC_Y
    },
    style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: 'IeiJ4jcu',
    type: 'points',
    data: {
      label: '类',
      slug: 'IeiJ4jcu',
      handles: [
        {
          id: 'handle-top',
          position: Position.Top,
          type: "source",
        }
      ]
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'd2zVahVDh',
    type: 'points',
    data: {
      label: '继承',
      slug: 'd2zVahVDh',
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: 'bIBUi3t',
    type: 'points',
    data: {
      label: '类方法',
      slug: 'bIBUi3t',
    },
    position: {
      x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 3
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
]


//noinspection all
export const OBJECT_EDGES = [
  {
    id: 'Eb5dfJ',
    source: 'Eb5dfJ',
    target: 'IeiJ4jcu',
    sourceHandle: 'handle-bottom',
  },
  {
    id: 'Eb5dfJ-2Gnugw',
    source: 'Eb5dfJ',
    target: '2Gnugw',
    sourceHandle: 'handle-left',
    targetHandle: 'handle-right',
    animated: true,
    type: 'smoothstep'
  },
]