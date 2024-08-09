import {Position} from "@vue-flow/core";
import {
    BASIC_W,
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_LEFT, NODE_MARGIN,
    SECOND_LEVEL_NODE_COLOR,
} from "../constant";

const BASIC_Y = 1100

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
            y: BASIC_Y
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '16a',
        type: 'points',
        data: {
            label: '同步 + 异步',
            handles: [
                {
                    id: 'handle-left',
                    position: Position.Left,
                    type: "target",
                }
            ]
        },
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W + 10,
            y: 900
        },
        style: {
            backgroundColor: "#ffffff",
            width: `${BASIC_W * 3 + 20}px`,
            height: `${MAIN_NODE_WIDTH}px`
        },
    },
    {
        id: '16a1',
        parentNode: '16a',
        data: {label: 'Django'},
        position: {
            x: 10,
            y: 40
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${BASIC_W - 5}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '16a2',
        parentNode: '16a',
        data: {label: 'Flask'},
        position: {
            x: 10 + BASIC_W + NODE_MARGIN / 2,
            y: 40
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${BASIC_W - 5}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '16a3',
        parentNode: '16a',
        data: {label: 'Fast API'},
        position: {
            x: 10 + BASIC_W * 2 + NODE_MARGIN,
            y: 40
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${BASIC_W - 5}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '16b',
        parentNode: '16a',
        data: {label: '同步'},
        position: {
            x: 10,
            y: 100
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH * 2 / 3}px`,
            height: `${BASIC_W}px`
        },
    },
]


//noinspection all
export const FRAMEWORKS_EDGES = [
    {
        id: 'e16-16a',
        source: '16a',
        target: '16',
        sourceHandle: 'handle-left',
        targetHandle: 'handle-right',
        type: 'smoothstep'
    },
    {
        id: 'e16-17',
        source: '16',
        target: '17',
        sourceHandle: 'handle-bottom',
        targetHandle: 'handle-top',
        type: 'smoothstep',
        animated: true,
    },
]