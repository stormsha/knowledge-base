import {Position} from "@vue-flow/core";
import {
    BASIC_W,
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_LEFT,
} from "../constant";

const BASIC_Y = 1220

export const CONCURRENCY_NODE = [
    {
        id: '16',
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
            x: NODE_LEFT + MAIN_NODE_WIDTH + BASIC_W,
            y: BASIC_Y
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]


export const CONCURRENCY_EDGES = [

]