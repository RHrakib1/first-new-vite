import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      <Flat></Flat>
      <Peaisa></Peaisa>
      <Peaisa></Peaisa>
      <Peaisa></Peaisa>
      <Add></Add>
      <Add></Add>
      <Add></Add>

    </>
  )

}
const info = {
  name: "rakib hasan",
  age: 22,
  status: "web developer"
}
function Flat() {
  return <h1>my name is {info.name}. his statuse is {info.status}</h1>
}
const money = 100;
function Peaisa() {
  return (
    <div>
      <h2>I have a {money} rupiya</h2>
    </div>
  )
}


const number1 = 40;
const number2 = 40;
function Add() {

  return (
    <h3>My name is {info.name}. My age is {info.age} with {number1 + number2} money</h3>
  )
}

export default App
