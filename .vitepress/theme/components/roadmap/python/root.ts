import {Position} from '@vue-flow/core'
import {MAIN_NODE_WIDTH, ROOT_NODE_TOP} from '../constant';

// 根节点
export const ROOT_NODE = [
    // TODO, 增加其他学习路线图导航
    // TODO, 增加python相关学习路线图导航
    {
        id: '1',
        type: 'input',
        data: { label: 'Python' },
        position: { x: 380, y: ROOT_NODE_TOP },
        style: { width: `${MAIN_NODE_WIDTH}px` },
        targetPosition: Position.Top,
    }
]

export const ROOT_EDGES = [
    { id: 'e1-2',
        source: '1',
        target: '2',
        targetHandle: 'handle-top',
        animated: true,
    },
]