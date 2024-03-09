import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const prompts = [
    {question: "What is my name?", answer: "Mubarak"},

    {question: "What is my name?", answer: "Mubarak"}
  ]
  return (
    <>
      {prompts.map((prompt, index) => {
        return <Card key={index} answer={prompt.answer} question={prompt.question} />
      })}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
