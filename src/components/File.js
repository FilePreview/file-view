import React, { Component } from 'react'
import { FileOutlined } from '@ant-design/icons'

export class File extends Component {

  render () {
    return (
      <div className="File">
        <div className="logo">
          <FileOutlined/>
        </div>
        <div className="file-name">
          {this.props.name}
        </div>
      </div>
    )
  }
}