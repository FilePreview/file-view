import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

export class Navbar extends Component {

  render () {
    return (
      <div className="Navbar">
        <div className="left">
          <Breadcrumb style={{color: 'white'}}>
            <Breadcrumb.Item style={{color: 'white'}}>/</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="right">

        </div>
      </div>
    )
  }
}