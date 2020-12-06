import React from 'react'
import { Tree } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFileListAsync, openFolder } from '../redux/actions'

function convert (data) {
  let count = 0
}

class FileDirectory extends React.Component {


  componentDidMount () {
    this.props.getFileListAsync(this.props.path)
  }

  handleSelect = e => {
    let folder = e[0]
    console.log(folder)
    this.props.openFolder(folder)
    this.props.getFileListAsync(folder)
  }

  render () {
    return (
      <div className="FileDirectory">
        <Tree treeData={this.props.fileTree} onSelect={this.handleSelect}/>
      </div>
    )
  }
}

FileDirectory.propTypes = {
  fileTree: PropTypes.any
}

FileDirectory = connect(
  state =>{
    let { fileTree, path } = state['Explorer']
    path = path.toString()
    return {
      fileTree,
      path
    }
  },
  { getFileListAsync, openFolder }
)(FileDirectory)

export { FileDirectory }