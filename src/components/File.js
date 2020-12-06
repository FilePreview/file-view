import React, { Component } from 'react'
import {
  FileExcelOutlined,
  FileGifOutlined,
  FileImageOutlined, FileJpgOutlined, FileMarkdownOutlined,
  FileOutlined, FilePdfOutlined,
  FilePptOutlined, FileTextOutlined, FileUnknownOutlined, FileWordOutlined, FileZipOutlined,
  FolderOpenOutlined
} from '@ant-design/icons'
import PropTypes from 'prop-types'
import './File.css'
import { connect } from 'react-redux'
import { getFileListAsync, openFolder } from '../redux/actions'

const logoList = {
  file: <FileOutlined/>,
  dir: <FolderOpenOutlined/>,
  gif: <FileGifOutlined/>,
  jpg: <FileJpgOutlined/>,
  png: <FileJpgOutlined/>,
  jpeg: <FileJpgOutlined/>,
  md: <FileMarkdownOutlined/>,
  ppt: <FilePptOutlined/>,
  pptx: <FilePptOutlined/>,
  txt: <FileTextOutlined/>,
  pdf: <FilePdfOutlined/>,
  xls: <FileExcelOutlined/>,
  xlsx: <FileExcelOutlined/>,
  zip: <FileZipOutlined/>,
  rar: <FileZipOutlined/>,
  doc: <FileWordOutlined/>,
  docx: <FileWordOutlined/>,
  unknown: <FileUnknownOutlined/>
}

const Logo = props => {
  let { type } = props
  if (logoList.hasOwnProperty(type))
    return logoList[type]
  else return logoList['file']
}

class File extends Component {

  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string
  }

  handleClick = () => {
    if (this.props.type === 'dir') {
      let path = this.props.path + '/' + this.props.name
      this.props.openFolder(path)
      this.props.getFileListAsync(path)
    }
  }

  render () {
    return (
      <div className="File" onClick={this.handleClick}>
        <div className="logo">
          {<Logo type={this.props.type}/>}
        </div>
        <p className="file-name">
          {this.props.name}
        </p>
      </div>
    )
  }
}

File = connect(
  state => {
    return {
      path: state['Explorer'].path,
    }
  },
  { getFileListAsync, openFolder }
)(File)

export { File }