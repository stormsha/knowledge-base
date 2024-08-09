import {Position} from "@vue-flow/core";
import {
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_LEFT, NODE_MARGIN, SECOND_LEVEL_NODE_COLOR,
} from "../constant";

const BASIC_Y = 1220

export const CONCURRENCY_NODE = [
    {
        id: '15',
        type: 'points',
        data: {
            label: '并发编程',
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
            y: BASIC_Y
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '15a',
        data: {label: '多进程'},
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN
        },
        style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
    {
        id: '15b',
        data: {label: '携程'},
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 2
        },
        style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
    {
        id: '15c',
        data: {label: '多线程'},
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 3
        },
        style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
    {
        id: '15d',
        data: {label: '全局解释器锁 (GIL)'},
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 5 + NODE_MARGIN * 4
        },
        style: {backgroundColor: SECOND_LEVEL_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px`},
    },
]


export const CONCURRENCY_EDGES = [
    {
        id: 'e15-16',
        source: '15',
        target: '16',
        sourceHandle: 'handle-right',
        targetHandle: 'handle-left',
        animated: true,
    },
    {
        id: 'e15-15a',
        source: '15',
        target: '15a',
        sourceHandle: 'handle-bottom',
    },
]