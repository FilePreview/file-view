import './App.css'
import { Navbar } from './components/Navbar'
import React from 'react'
import { Body } from './components/Body'
import { FileDirectory } from './components/FileDirectory'
import { FileList } from './components/FileList'
import { connect } from 'react-redux'
import { getFileListAsync } from './redux/actions'

class App extends React.Component {
  componentWillMount () {
    this.props.getFileListAsync('/')
  }

  render () {
    return (
      <div className="App">
        <Navbar/>
        <Body
          left={<FileDirectory/>}
          right={<FileList/>}
        />
      </div>
    )
  }
}

App = connect(
  ()=>({}),
  { getFileListAsync }
)(App)

export default App
