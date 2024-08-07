import {Position} from '@vue-flow/core'
import {MAIN_NODE_HEIGHT, MAIN_NODE_WIDTH, ROOT_NODE_TOP} from "../constant";
import {MAIN_NODE_COLOR} from "../constant";

const BASIC_X = 20
const BASIC_W = 120

// Python 基础学习
export const BASIC = [
    {
        id: '2',
        position: { x: BASIC_X + MAIN_NODE_WIDTH + BASIC_W, y: ROOT_NODE_TOP + 235 },
        type: 'points',
        style: { backgroundColor: MAIN_NODE_COLOR, width: `${MAIN_NODE_WIDTH}px` },
        data: {
            label: '基础学习',
            handles:[
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
        }
    },
    {
        id: '2a',
        data: { label: '基础语法' },
        position: { x: BASIC_X, y: ROOT_NODE_TOP + 150 },
        sourcePosition: Position.Right,
        style: { backgroundColor: '#e7c699', width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
    {
        id: '2b',
        data: { label: '变量和数据类型' },
        position: { x: BASIC_X, y: ROOT_NODE_TOP + 205 },
        sourcePosition: Position.Right,
        style: { backgroundColor: '#e7c699', width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
    {
        id: '2c',
        data: { label: '条件' },
        position: { x: BASIC_X, y: ROOT_NODE_TOP + 260 },
        sourcePosition: Position.Right,
        style: { backgroundColor: '#e7c699', width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
    {
        id: '2d',
        data: { label: '循环' },
        position: { x: BASIC_X, y: ROOT_NODE_TOP + 315 },
        sourcePosition: Position.Right,
        style: { backgroundColor: '#e7c699', width: `${MAIN_NODE_WIDTH}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },

    // 右侧
    {
        id: '2e',
        data: { label: '类型转换' },
        position: { x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2, y: ROOT_NODE_TOP + 125 },
        sourcePosition: Position.Left,
        style: { backgroundColor: '#e7c699', width: `${MAIN_NODE_WIDTH + 30}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
    {
        id: '2f',
        data: { label: '异常处理' },
        position: { x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2, y: ROOT_NODE_TOP + 180 },
        sourcePosition: Position.Left,
        style: { backgroundColor: '#e7c699', width: `${MAIN_NODE_WIDTH + 30}px`, height: `${MAIN_NODE_HEIGHT}px` },

    },
    {
        id: '2g',
        data: { label: '函数、内置函数' },
        position: { x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2, y: ROOT_NODE_TOP + 235 },
        sourcePosition: Position.Left,
        style: { backgroundColor: '#e7c699', width: `${MAIN_NODE_WIDTH + 30}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
    {
        id: '2h1',
        data: { label: '元组' },
        position: { x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2, y: ROOT_NODE_TOP + 290 },
        sourcePosition: Position.Left,
        style: { backgroundColor: '#e7c699', width: `${(MAIN_NODE_WIDTH + 30)/3}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
    {
        id: '2h2',
        data: { label: '集合' },
        position: { x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2 + 90, y: ROOT_NODE_TOP + 290 },
        sourcePosition: Position.Left,
        style: { backgroundColor: '#e7c699', width: `${(MAIN_NODE_WIDTH + 30)/3}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
    {
        id: '2h3',
        data: { label: '列表' },
        position: { x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2 + 180, y: ROOT_NODE_TOP + 290 },
        sourcePosition: Position.Left,
        style: { backgroundColor: '#e7c699', width: `${(MAIN_NODE_WIDTH + 30)/3}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
    {
        id: '2i',
        data: { label: '字典' },
        position: { x: BASIC_X + MAIN_NODE_WIDTH * 2 + BASIC_W * 2, y: ROOT_NODE_TOP + 345 },
        sourcePosition: Position.Left,
        style: { backgroundColor: '#e7c699', width: `${MAIN_NODE_WIDTH + 30}px`, height: `${MAIN_NODE_HEIGHT}px` },
    },
]


export const BASIC_NODE_EDGES = [
    {
        id: 'e2-2a',
        source: '2a',
        target: '2',
        targetHandle: 'handle-left'
    },
    {
        id: 'e2-2b',
        source: '2b',
        target: '2',
        targetHandle: 'handle-left'
    },
    {
        id: 'e2-2c',
        source: '2c',
        target: '2',
        targetHandle: 'handle-left'
    },
    {
        id: 'e2-2d',
        source: '2d',
        target: '2',
        targetHandle: 'handle-left'
    },
    {
        id: 'e2-2e',
        source: '2e',
        target: '2',
        targetHandle: 'handle-right'
    },
    {
        id: 'e2-2f',
        source: '2f',
        target: '2',
        targetHandle: 'handle-right'
    },
    {
        id: 'e2-2g',
        source: '2g',
        target: '2',
        targetHandle: 'handle-right'
    },
    {
        id: 'e2-2h1',
        source: '2h1',
        target: '2',
        targetHandle: 'handle-right'
    },
    {
        id: 'e2-2i',
        source: '2i',
        target: '2',
        targetHandle: 'handle-right'
    },
]
