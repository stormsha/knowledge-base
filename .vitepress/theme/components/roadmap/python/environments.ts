import {MAIN_NODE_COLOR, MAIN_NODE_HEIGHT, MAIN_NODE_WIDTH, NODE_LEFT, SECOND_LEVEL_NODE_COLOR} from "../constant";

const BASIC_Y = 700

export const ENVIRONMENTS_NODE = [
    {
        id: 'HpiMzOB',
        type: 'points',
        data: {
            label: '虚拟环境',
            slug: 'HpiMzOB'
        },
        position: {
            x: NODE_LEFT,
            y: BASIC_Y
        },
        style: {
            backgroundColor: MAIN_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH}px`,
            height: `${MAIN_NODE_WIDTH * 3 / 4}px`
        },
    },
    {
        id: 'o41kvs',
        type: 'points',
        data: {
            label: 'virutalenv',
            slug: 'o41kvs'
        },
        position: {x: NODE_LEFT, y: MAIN_NODE_HEIGHT},
        parentNode: 'HpiMzOB',
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH * 4 / 5}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: '5nvTeG19',
        type: 'points',
        data: {
            label: 'Pipenv',
            slug: '5nvTeG19'
        },
        position: {x: NODE_LEFT, y: 110},
        parentNode: 'HpiMzOB',
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH * 2 / 5 -2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: 'zdmi8hA',
        type: 'points',
        data: {
            label: 'pyenv',
            slug: 'zdmi8hA'
        },
        position: {x: MAIN_NODE_WIDTH * 2 / 5 + NODE_LEFT + 2, y: 110},
        parentNode: 'HpiMzOB',
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH * 2 / 5 - 2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]