import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='add'>Vite + React</h1>
      <Daynamic name="Mobile" price="1700"></Daynamic>
      <Daynamic name="Laptop" price="50000"></Daynamic>
      <Daynamic name="Camera" price="70100"></Daynamic>
      <Daynamic name="bluetooth" price="10000"></Daynamic>
      <Student name="Torabi hasan" age="19"></Student>
      <Student name="Rakib hasan" age="22" ></Student>
      <Student name='tarin hasan' age='20' ></Student>
      <Student name='torabi rahman' age='18'></Student>
      <Flat></Flat>
      <Peaisa></Peaisa>
      <Add></Add>
      <Fram></Fram>
      <Sector employer="Rakib hasan" section="font-end developer" sallary="20,000"></Sector>
      <Sector employer="Raju " section="Wordpress developer" sallary="30,000"></Sector>
      <Sector employer="Rifat " section="Instructor" sallary="25,000"></Sector>
      <Sector employer="All amni " section="font-end developer" sallary="40,000"></Sector>

    </>
  )

}




// akhane props diye data neoya hoyese
function Daynamic(props) {
  // console.log(props);
  return (
    <div>
      <h2>My device name is: {props.name} </h2>
      <h4>This device price is :  {props.price}</h4>
    </div>
  )
}



// distruckcharing kora hoyese
function Student({name, age}) {
  console.log(name,age);
  const fram = {
    padding: "30px",
    border: "10px solid red",
    margin: "10px",
    borderRadius: "10px"
  }
  return (
    <div style={fram}>
      <h2>Student name is: {name}</h2>
      <h3>Student age: {age}</h3>
    </div>
  )
}



function Sector({employer, section, sallary}){
  return(
    <div className='add'>
      <h1>The jobplacement Sector</h1>
      <h2>Name: {employer}</h2>
      <p>Section: {section}</p>
      <p>Salary: {sallary}</p>
    </div>
  )
}






// object theke ki vabe data nibo seta akhane ase 
const info = {
  name: "rakib hasan",
  age: 22,
  status: "web developer"
}
function Flat() {
  return <h1 className='flat'>my name is {info.name}. his statuse is {info.status}</h1>
}
const money = 100;
function Peaisa() {
  return (
    <div>
      <h2 className='peisa'>I have a {money} rupiya</h2>
    </div>
  )
}
const number1 = 40;
const number2 = 40;
function Add() {

  return (
    <h3 className='add'>My name is {info.name}. My age is {info.age} with {number1 + number2} money</h3>
  )
}





// style add kora hoyese
function Fram() {
  const fram = {
    padding: "30px",
    border: "10px solid red",
    margin: "10px",
    borderRadius: "10px"
  }
  return (
    <div>
      <h2 style={fram}>I am a font-end developer with react. I wish i have a vary good salary job offer.I want to skill develop in technology</h2>
    </div>
  )
}

export default App
