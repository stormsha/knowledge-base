import {Position} from '@vue-flow/core'
import {
    MAIN_NODE_HEIGHT,
    MAIN_NODE_WIDTH,
    NODE_MARGIN,
    SECOND_LEVEL_NODE_COLOR
} from "../constant";
import {MAIN_NODE_COLOR} from "../constant";

const BASIC_X = 380
const BASIC_Y = 400

// 数据结构与算法学习
export const DATA_STRUCTURE = [
    {
        id: '3',
        type: 'points',
        position: {
            x: BASIC_X,
            y: BASIC_Y
        },
        style: {backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px`},
        data: {
            label: '数据结构与算法',
            url:'/roadmap/Python/basic.html',
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
                    id: 'handle-b',
                    position: Position.Bottom,
                    type: "source",
                },
            ]
        }
    },
    {
        id: '3a',
        type: 'input',
        data: {label: '数组和链表'},
        position: {
            x: BASIC_X,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 2 + NODE_MARGIN
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '3b',
        type: 'input',
        data: {label: '哈希表'},
        position: {
            x: BASIC_X,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 3 + NODE_MARGIN * 2
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '3c',
        type: 'input',
        data: {label: '堆、堆栈和队列'},
        position: {
            x: BASIC_X,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 4 + NODE_MARGIN * 3
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '3d',
        type: 'input',
        data: {label: '二叉搜索树'},
        position: {
            x: BASIC_X,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 5 + NODE_MARGIN * 4
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '3e',
        type: 'input',
        data: {label: '递归'},
        position: {
            x: BASIC_X,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 6 + NODE_MARGIN * 5
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '3f',
        type: 'input',
        data: {label: '排序算法'},
        position: {
            x: BASIC_X,
            y: BASIC_Y + MAIN_NODE_HEIGHT * 7 + NODE_MARGIN * 6
        },
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]

//noinspection all
export const DATA_STRUCTURE_EDGES = [
    {
        id: 'e3-3a',
        source: '3',
        target: '3a',
        sourceHandle: 'handle-bottom',
        targetHandle: 'handle-top'
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
        sourceHandle: 'handle-right',
        targetHandle: 'handle-left',
        animated: true,
        type: 'smoothstep'
    },
]