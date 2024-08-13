import {Position} from "@vue-flow/core";
import {
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_LEFT, NODE_MARGIN, SECOND_LEVEL_NODE_COLOR,
} from "../constant";

const BASIC_Y = 1140

export const CONCURRENCY_NODE = [
    {
        id: '2gLgd1r',
        type: 'points',
        data: {
            label: '并发编程',
            slug: "2gLgd1r",
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
        id: '4WDvv7',
        type: 'points',
        data: {
            label: '多进程',
            slug: "4WDvv7",
        },
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '1RJJ5G',
        type: 'points',
        data: {
            label: '携程',
            slug: "1RJJ5G",
        },
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 2
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: 'DceBgz',
        type: 'points',
        data: {
            label: '多线程',
            slug: "DceBgz",
        },
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 3
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: 'SyC7SO6',
        type: 'points',
        data: {
            label: '全局解释器锁 (GIL)',
            slug: "SyC7SO6",
        },
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 5 + NODE_MARGIN * 4
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]

//noinspection all
export const CONCURRENCY_EDGES = [
    {
        id: '2gLgd1r-4WDvv7',
        source: '2gLgd1r',
        target: '4WDvv7',
        sourceHandle: 'handle-bottom',
    },
    {
        id: '2gLgd1r-16',
        source: '2gLgd1r',
        target: '16',
        sourceHandle: 'handle-right',
        targetHandle: 'handle-left',
        animated: true,
        type: 'smoothstep',
    },
]