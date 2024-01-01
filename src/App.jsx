import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Entry from "./components/Entry"
import data from "./data.js"
import Navbar from "./components/Navbar"

function App() {

  console.log(data)

  const entries = data.map((entry) => {
    return (
      <Entry 
        key = {entry.id}
        entry = {entry}
      />
    )
  })
  console.log(entries)

  return (
    <>
      <div>
        <Navbar />
        <section>
          {entries}
        </section>
      </div>
    </>
  )
}

export default App
