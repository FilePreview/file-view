export function Path () {
  this.node = []
}

Path.prototype = {
  join: function (path) {
    path = path.replace('/', '')
    this.node.push(path)
  },
  back: function () {
    this.node.pop()
  },
  toString: function () {
    if (this.node.length === 1)
      return '/' + this.node[0]
    let str = ''
    this.node.forEach(item => str += '/' + item)
    return str
  }
}

Path.fromString = function (str) {
  let s = str.split('/')
  let node = []
  for (let sElement of s) {
    node.push(sElement)
  }

  let path = new Path()
  path.node = node
  return path
}

Path.back = function (path) {
  let index = path.lastIndexOf('/')
  if (index === 0) return ''
  path = path.substr(0, index)
  return path
}