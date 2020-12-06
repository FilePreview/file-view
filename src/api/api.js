import { postInit, request } from './req'

/**
 *
 * @returns {Promise<JSON>}
 * @param path
 */
export const getFileList = path =>
  request('/list', postInit({ action: 'list', path }))


