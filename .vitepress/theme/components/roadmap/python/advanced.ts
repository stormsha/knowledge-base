import {
    MAIN_NODE_COLOR,
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_LEFT,
    NODE_MARGIN,
} from "../constant";

const BASIC_Y = 920

export const ADVANCED_NODE = [
    {
        id: '11',
        data: {label: '列表推导式'},
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
        id: '12',
        data: {label: '生成器表达式'},
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT + NODE_MARGIN
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '13',
        data: {label: '范式'},
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN * 2
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '14',
        data: {label: '上下文管理器'},
        position: {
            x: NODE_LEFT,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 3
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]


export const ADVANCED_EDGES = [
    {
        id: 'e14-15',
        source: '14',
        target: '15',
        targetHandle: 'handle-top',
        animated: true,
    },
]