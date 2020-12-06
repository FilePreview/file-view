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

const logoList = {
  file: <FileOutlined/>,
  dir: <FolderOpenOutlined/>,
  gif: <FileGifOutlined />,
  jpg: <FileJpgOutlined />,
  png: <FileJpgOutlined />,
  jpeg: <FileJpgOutlined />,
  md: <FileMarkdownOutlined />,
  ppt: <FilePptOutlined />,
  pptx: <FilePptOutlined />,
  txt: <FileTextOutlined />,
  pdf: <FilePdfOutlined />,
  xls: <FileExcelOutlined />,
  xlsx: <FileExcelOutlined />,
  zip: <FileZipOutlined />,
  rar: <FileZipOutlined />,
  doc: <FileWordOutlined />,
  docx: <FileWordOutlined />,
  unknown: <FileUnknownOutlined />
}

const Logo = props => {
  let { type } = props
  if (logoList.hasOwnProperty(type))
    return logoList[type]
  else return logoList['file']
}

export class File extends Component {

  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string
  }

  render () {
    return (
      <div className="File">
        <div className="logo">
          {<Logo type={this.props.type}/>}
        </div>
        <div className="file-name">
          {this.props.name}
        </div>
      </div>
    )
  }
}