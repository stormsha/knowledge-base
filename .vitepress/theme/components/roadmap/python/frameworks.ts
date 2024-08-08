import {Position} from "@vue-flow/core";
import {
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_LEFT,
} from "../constant";

const BASIC_Y = 1220

export const FRAMEWORKS_NODE = [
    {
        id: '15',
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
            x: NODE_LEFT,
            y: BASIC_Y
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]


export const FRAMEWORKS_EDGES = [
    {
        id: 'e15-16',
        source: '15',
        target: '16',
        sourceHandle: 'handle-right',
        targetHandle: 'handle-left',
        animated: true,
    },
]