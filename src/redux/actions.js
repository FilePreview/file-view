import * as req from '../api/api'
import { BACK, GET_FILE_LIST, OPEN_FOLDER } from './action-types'
import { Path } from '../Path'

const ext = str => str.substr(str.lastIndexOf('.') + 1)

export const getFileList = ({ path, result }) => {
  let fileTree = []
  let files = []
  let j = 0
  for (let i = 0; i < result.length; i++) {
    let { name, type } = result[i]
    files[i] = {
      title: name,
      type: type === 'dir' ? type : ext(name)
    }
    if (type !== 'dir') continue
    fileTree[j++] = {
      title: name,
      key: `${path}/${name}`,
      children: [{ title: '' }]
    }
  }

  return {
    type: GET_FILE_LIST,
    data: { path, fileTree, files }
  }
}

export const openFolder = folder =>
  ({
    type: OPEN_FOLDER,
    data: folder
  })

export const getFileListAsync = path =>
  async dispatch => {
    let { result } = await req.getFileList(path)
    dispatch(getFileList({ path, result }))
  }

export const backAsync = p =>
  async dispatch => {
    let path = Path.back(p)
    let { result } = await req.getFileList(path)
    dispatch(getFileList({ path, result }))
  }

