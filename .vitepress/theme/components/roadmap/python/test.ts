import {Position} from "@vue-flow/core";
import {
    BASIC_W,
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_LEFT, SECOND_LEVEL_NODE_COLOR,
} from "../constant";

const BASIC_Y = 1200


//noinspection all
export const TEST_NODE = [
    {
        id: '18',
        type: 'points',
        data: {
            label: '测试',
            slug: 'GUaPMjJo',
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
        id: '18a',
        type: 'points',
        data: {
            label: 'unittest / pyUnit',
            slug: '8hsE9m',
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
        id: '18b',
        data: {label: 'tox'},
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W + 10,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 3
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${BASIC_W * 3 / 2 + 10}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '18c',
        type: 'points',
        data: {
            label: 'nose',
            slug: 'relnApFJAV',
        },
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W * 5 / 2 + 20,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 3
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${BASIC_W * 3 / 2 + 10}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '18d',
        data: {label: 'doctest'},
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W + 10,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 4
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${BASIC_W * 3 / 2 + 10}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '18e',
        data: {label: 'pytest'},
        targetHandle: Position.Left,
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH * 2 + BASIC_W * 5 / 2 + 20,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 4
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${BASIC_W * 3 / 2 + 10}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]

export const TEST_EDGES = [
    {
        id: 'e18-18a',
        source: '18',
        target: '18a',
        sourceHandle: 'handle-bottom',
        targetHandle: 'handle-top',
    }
]