import { useState } from 'react'
import Header from './components/Header'
import "./App.css"
import Todo from './components/Todo'

function App() {

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div>
         <Header />
      </div>
   
      <Todo />
    </div>
  )
}

export default App
