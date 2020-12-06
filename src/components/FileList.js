import React, { Component } from 'react'
import { File } from './File'
import { connect } from 'react-redux'

class FileList extends Component {

  render () {
    return (
      <div className="FileList">
        {
          this.props.files.map((item, index) => <File key={index} name={item.title}/>)
        }
      </div>
    )
  }
}

FileList = connect(
  state => ({
    files: state['Explorer'].fileTree
  })
)(FileList)

export { FileList }