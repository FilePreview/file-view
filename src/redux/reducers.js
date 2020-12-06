import { GET_FILE_LIST } from './action-types'

const init = {
  fileTree: [],
  files: []
}

export function Explorer (state = init, action) {
  switch (action.type) {
    case GET_FILE_LIST:
      let { fileTree, files } = action.data
      return { ...state, fileTree, files }
    default:
      return state
  }
}