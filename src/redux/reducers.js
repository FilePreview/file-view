import { GET_FILE_LIST } from './action-types'

const fileTree = [
  {
    title: 'parent 1-0',
    key: '0-0-0'
  },
  {
    title: 'parent 1-1',
    key: '0-0-1'
  },
  {
    title: 'parent 1-2',
    key: '0-0-2'
  },
]

const init = {
  fileTree
}

export function Explorer (state = init, action) {
  switch (action.type) {
    case GET_FILE_LIST:
      return { fileTree: action.data.list }
    default:
      return state
  }
}