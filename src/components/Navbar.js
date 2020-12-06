import React, { Component } from 'react'
import { Breadcrumb, Button } from 'antd'
import './Navbar.css'
import { connect } from 'react-redux'
import { backAsync, getFileListAsync } from '../redux/actions'
import { Path } from '../Path'

class Navbar extends Component {

  handleBack = ()=> {
    let path = this.props.path
    this.props.backAsync(path)
  }

  render () {
    return (
      <div className="Navbar">
        <div className="left">
          <div>
            <Button danger onClick={this.handleBack}>Back</Button>
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
        </div>
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