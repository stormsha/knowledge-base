import {Position} from '@vue-flow/core'
import {
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    MAIN_NODE_WIDTH_MAX, NODE_MARGIN,
    ROOT_NODE_TOP,
    SECOND_LEVEL_NODE_COLOR
} from "../constant";

const BASIC_Y = 425
const BASIC_W = 120

export const MODULES_NODE = [
    {
        id: '4',
        type: 'points',
        data: {
            label: '模块',
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
            ]
        },
        position: {
            x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
            y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT * 2
        },
        style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH + 30}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
    {
        id: '4a',
        data: {label: '内置'},
        position: {
            x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
            y: ROOT_NODE_TOP + BASIC_Y
        },
        targetPosition: Position.Bottom,
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH_MAX / 2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '4b',
        data: {label: '自定义'},
        position: {
            x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2 + MAIN_NODE_WIDTH_MAX / 2,
            y: ROOT_NODE_TOP + BASIC_Y
        },
        targetPosition: Position.Bottom,
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH_MAX / 2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '5',
        data: {label: '匿名函数'},
        position: {
            x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
            y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN
        },
        sourcePosition: Position.Right,
        style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH_MAX}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
    {
        id: '6',
        data: {label: '装饰器'},
        position: {
            x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
            y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 2
        },
        sourcePosition: Position.Right,
        style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH_MAX}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
    {
        id: '7',
        data: {label: '迭代器'},
        position: {
            x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
            y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT * 5 + NODE_MARGIN * 3
        },
        sourcePosition: Position.Right,
        style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH_MAX}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
    {
        id: '8',
        data: {label: '正则表达式'},
        position: {
            x: 20 + MAIN_NODE_WIDTH * 2 + BASIC_W * 2,
            y: ROOT_NODE_TOP + BASIC_Y + MAIN_NODE_HEIGHT * 6 + NODE_MARGIN * 4
        },
        sourcePosition: Position.Right,
        style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH_MAX}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
]

//noinspection all
export const MODULES_EDGES = [
    {
        id: 'e4-4a',
        source: '4a',
        target: '4',
        targetHandle: 'left25',
    },
    {
        id: 'e4-4b',
        source: '4b',
        target: '4',
        targetHandle: 'right25',
    },
]