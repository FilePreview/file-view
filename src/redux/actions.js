import * as req from '../api/api'
import { GET_FILE_LIST } from './action-types'

export const getFileList = ({ path,  result }) => {
  let treeList = []
  let j = 0
  for (let i = 0; i < result.length; i++) {
    let { name, type } = result[i]
    if (type !== 'dir') continue
    treeList[j++] = {
      title: name,
      key: path + i,
      children: [{ title: '' }]
    }
  }

  return {
    type: GET_FILE_LIST,
    data: { path, list: treeList }
  }
}

export const getFileListAsync = path =>
  async dispatch => {
    let { result } = await req.getFileList(path)
    dispatch(getFileList({ path, result }))
  }