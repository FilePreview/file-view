import React from 'react'

export const Body = props => (
  <div className="Body">
    <div className="file-directory">{props.left}</div>
    <div className="file-list">{props.right}</div>
  </div>
)