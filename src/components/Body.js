import React from 'react'

export const Body = props => (
  <div className="Body">
    <div className="file-directory box">{props.left}</div>
    <div className="file-list box">{props.right}</div>
  </div>
)