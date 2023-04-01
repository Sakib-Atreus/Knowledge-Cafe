import React from 'react'
import './App.css'
import Header from './component/Header/Header'
import Content from './component/Content/Content'
import Questions from './component/Questions/Questions'

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Content></Content>
        <Questions></Questions>
      </main>
    </div>
  )
}

export default App
