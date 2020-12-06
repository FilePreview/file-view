import { BACK, GET_FILE_LIST, OPEN_FOLDER } from './action-types'
import { Path } from '../Path'

const init = {
  fileTree: [],
  files: [],
  path: ''
}

export function Explorer (state = init, action) {
  switch (action.type) {
    case GET_FILE_LIST:
      let { fileTree, files, path } = action.data
      return { ...state, fileTree, files, path }
    case OPEN_FOLDER:
      return { ...state, path: action.data }
    case BACK:
    {
      let path = Path.back(state.path)
      return { ...state, path }
    }
    default:
      return state
  }
}