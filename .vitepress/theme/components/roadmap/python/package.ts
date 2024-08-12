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
    id: '2Gnugw',
    type: 'points',
    data: {
      label: '包管理',
      slug: '2Gnugw',
      handles: [
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
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 5
    },
    style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: 'KsWSVr',
    type: 'points',
    data: {
      label: 'Pip',
      slug: 'KsWSVr',
    },
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT + NODE_MARGIN
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2 - NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '49fXS0',
    type: 'points',
    data: {
      label: 'uv',
      slug: '49fXS0',
    },
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
    id: 'CLPMhn',
    type: 'points',
    data: {
      label: 'Conda',
      slug: 'CLPMhn',
    },
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN * 2
    },
    style: {
      backgroundColor: SECOND_LEVEL_NODE_COLOR,
      width: `${MAIN_NODE_WIDTH / 2 - NODE_MARGIN}px`,
      height: `${MAIN_NODE_HEIGHT}px`
    },
  },
  {
    id: '1US4xcF',
    type: 'points',
    data: {
      label: 'Poetry',
      slug: '1US4xcF',
    },
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
    id: 'JEThUy',
    type: 'points',
    data: {
      label: 'PyPi',
      slug: 'JEThUy',
    },
    position: {
      x: NODE_LEFT,
      y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 3
    },
    style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
  {
    id: '4YG8R6',
    type: 'points',
    data: {
      label: '常用包',
      slug: '4YG8R6',
    },
    position: {
      x: NODE_LEFT,
      y: BASIC_Y
    },
    style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
  },
]

export const PACKAGE_EDGES = [
  {
    id: '2Gnugw-JEThUy',
    source: 'JEThUy',
    target: '2Gnugw',
    targetHandle: 'handle-top',
  },
  {
    id: '2Gnugw-HpiMzOB',
    source: '2Gnugw',
    target: 'HpiMzOB',
    targetHandle: 'handle-top',
    animated: true,
  },
]