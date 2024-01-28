import './App.css'
import Games from './components/topGames'
import React from 'react'

const App = () => {
  return (
    <div className="Card">
      <div className="header">
        <h1>🎮 Top 10 Video Games 🎮</h1>
        <h2>By Ethan Prendergast</h2>
      </div>
      <Games />
    </div>
  )
}
export default App
