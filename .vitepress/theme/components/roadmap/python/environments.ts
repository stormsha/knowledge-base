import {MAIN_NODE_COLOR, MAIN_NODE_HEIGHT, MAIN_NODE_WIDTH, NODE_LEFT, SECOND_LEVEL_NODE_COLOR} from "../constant";

const BASIC_Y = 760

export const ENVIRONMENTS_NODE = [
    {
        id: 'env',
        data: {label: '虚拟环境'},
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
        id: 'env1',
        data: {label: 'virutalenv'},
        position: {x: NODE_LEFT, y: MAIN_NODE_HEIGHT},
        parentNode: 'env',
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH * 4 / 5}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: 'env2',
        data: {label: 'Pipenv'},
        position: {x: NODE_LEFT, y: 110},
        parentNode: 'env',
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH * 2 / 5 -2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
    {
        id: 'env3',
        data: {label: 'pyenv'},
        position: {x: MAIN_NODE_WIDTH * 2 / 5 + NODE_LEFT + 2, y: 110},
        parentNode: 'env',
        style: {
            backgroundColor: SECOND_LEVEL_NODE_COLOR,
            width: `${MAIN_NODE_WIDTH * 2 / 5 - 2}px`,
            height: `${MAIN_NODE_HEIGHT}px`
        },
    },
]