export interface Group {
  name: string,
  id: string
}

export interface User {
  name: string,
  id: string,
  age?: number,
  vip: boolean
  group?: Group[]
}
export interface State {
  info: User,
  count: number
}
