import React from 'react'
import { Tree } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function convert (data) {
  let count = 0
}

let FileDirectory = props => {
  return (
    <div className="FileDirectory">
      <Tree treeData={props.fileTree}/>
    </div>
  )
}

FileDirectory.propTypes = {
  fileTree: PropTypes.any
}

FileDirectory = connect(
  state => ({
    fileTree: state['Explorer'].fileTree
  })
)(FileDirectory)

export { FileDirectory }