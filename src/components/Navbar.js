import React, { Component } from 'react'
import { Breadcrumb, Button, Input, Modal, Upload, message } from 'antd'
import './Navbar.css'
import { UploadOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { backAsync, getFileListAsync } from '../redux/actions'
import { Path } from '../Path'

const props = {
  name: 'file',
  action: '/fileUpload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange (info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败.`)
    }
  },
}

class Navbar extends Component {

  state = {
    showModal: false
  }

  handleBack = () => {
    let path = this.props.path
    this.props.backAsync(path)
  }

  handleUpload = () => {
    this.setState({ showModal: true })
  }

  handleCancel = () => {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div className="Navbar">
        <div className="left">
          <div>
            <Button primary onClick={this.handleBack}>Back</Button>
          </div>
          {/*<Breadcrumb style={{color: 'white'}}>*/}
          {/*  <Breadcrumb.Item key={'first-node'} style={{color: 'white'}}>/</Breadcrumb.Item>*/}
          {/*  {*/}
          {/*    this.props.path.node.map((item, index) => <Breadcrumb.Item key={index} style={{color: 'white'}}>{item}</Breadcrumb.Item>)*/}
          {/*  }*/}
          {/*</Breadcrumb>*/}
          <div>
            {this.props.path.length > 0 ? this.props.path : '/'}
          </div>
        </div>
        <div className="right">
          <Button onClick={this.handleUpload}>上传文件</Button>
        </div>
        <Modal visible={this.state.showModal} onCancel={this.handleCancel} footer={null}>
          <Upload {...props}>
            <Button icon={<UploadOutlined/>}>点击上传</Button>
          </Upload>
        </Modal>
      </div>
    )
  }
}

Navbar = connect(
  state => ({
    path: state['Explorer'].path
  }),
  { backAsync, getFileListAsync }
)(Navbar)

export { Navbar }