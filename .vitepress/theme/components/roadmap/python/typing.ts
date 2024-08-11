import {Position} from "@vue-flow/core";
import {
    BASIC_W,
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_LEFT,
    SECOND_LEVEL_NODE_COLOR
} from "../constant";

const BASIC_Y = 1200


//noinspection all
export const TYPING_NODE = [
    {
        id: '17',
        type: 'points',
        data: {
            label: '静态类型检查',
            slug: 'SmGo36w0',
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
            y: BASIC_Y
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '17a',
        type: 'points',
        data: {
            label: 'typing',
            slug: '22aTIUJJ2UT',
            handles: [
                {
                    id: 'handle-left',
                    position: Position.Left,
                    type: "target",
                },
            ]
        },
        targetHandle: Position.Left,
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
        id: '17b',
        type: 'points',
        data: {
            label: 'mypy',
            slug: 'BiSOg4',
            handles: [
                {
                    id: 'handle-left',
                    position: Position.Left,
                    type: "target",
                },
            ]
        },
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 3
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH / 2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '17c',
        type: 'points',
        data: {
            label: 'pyright',
            slug: 'UN2l1A4',
            handles: [
                {
                    id: 'handle-left',
                    position: Position.Left,
                    type: "target",
                },
            ]
        },
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W * 3 / 2,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 3
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH / 2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '17d',
        type: 'points',
        data: {
            label: 'pyre',
            slug: 'XpWxrr',
            handles: [
                {
                    id: 'handle-left',
                    position: Position.Left,
                    type: "target",
                },
            ]
        },
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W / 2,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 4
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH / 2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '17e',
        type: 'points',
        data: {
            label: 'Pydantic',
            slug: '1OywGm',
            handles: [
                {
                    id: 'handle-left',
                    position: Position.Left,
                    type: "target",
                },
            ]
        },
        position: {
            x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W * 3 / 2,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 4
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH / 2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]

export const TYPING_EDGES = [
    {
        id: 'e17-17a',
        source: '17',
        target: '17a',
        sourceHandle: 'handle-bottom',
        targetHandle: 'handle-top',
    },
    {
        id: 'e17-17a',
        source: '17',
        target: '18',
        sourceHandle: 'handle-right',
        targetHandle: 'handle-left',
        animated: true,
    }
]