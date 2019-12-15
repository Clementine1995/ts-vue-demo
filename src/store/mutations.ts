/** @format */

import { MutationTree } from 'vuex'
import { State, ITodoItem, Mode } from './state'
import { _ } from '../libs/utils'

export const mutations: MutationTree<State> = {
  // 创建 todo
  createTodoItem(state: State, todoItem: ITodoItem) {
    state.todoList.push(todoItem)
  },
  selectColor(state: State, payload: { id: string; color: string }) {
    const list = state.todoList
    const item = _.find(list, payload.id)
    if (item) {
      item.color = payload.color
    }
  },
  // 选择图标
  selectIcon(state: State, payload: { id: string; icon: string }) {
    const list = state.todoList
    const todo = _.find(list, payload.id)
    if (todo) {
      todo.iconName = payload.icon
    }
  },
  // 编辑任务名称
  changeName(state: State, payload: { id: string; value: string }) {
    const list = state.todoList
    const todo = _.find(list, payload.id)
    if (todo) {
      todo.name = payload.value
    }
  },
  deleteTodoItem(state: State, id: string) {
    const list: ITodoItem[] = state.todoList
    state.todoList = list.filter(item => item.id !== id)
  },
  // 将此任务设置为完成
  doneTodoItem(state: State, id: string) {
    const list: ITodoItem[] = state.todoList
    const todo = _.find(list, id)
    if (todo) {
      todo.isDone = true
    }
  },
  // 从编辑模式进入完成模式
  finishTodoItem(state: State) {
    const list: ITodoItem[] = state.todoList
    const todo = list[list.length - 1]
    if (todo) {
      todo.mode = Mode.finish
    }
  }
}
