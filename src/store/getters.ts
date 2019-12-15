/** @format */

import { State, ITodoItem } from './state'

export const getters = {
  getCurrentTodoList(state: State): ITodoItem[] {
    return state.todoList
  }
}
