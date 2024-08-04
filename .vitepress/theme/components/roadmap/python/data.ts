import {BASIC, BASIC_NODE_EDGES} from './basic'
import {ROOT_EDGES, ROOT_NODE} from "./root";
import {DATA_STRUCTURE, DATA_STRUCTURE_EDGES} from "./data_structure";


// 学习路线节点
export const NODES = [
    ...ROOT_NODE, // Python 学习路线根节点
    ...BASIC, // Python 基础学习节点
    ...DATA_STRUCTURE // 数据结构与算法学习节点
]

// 学习路线路径
export const EDGES = [
    ...ROOT_EDGES, // 根节点路径
    ...BASIC_NODE_EDGES, // 基础学习路径
    ...DATA_STRUCTURE_EDGES, // 数据结构与算法路径
]