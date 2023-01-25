import React, { useMemo } from 'react';
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import About from './pages/About';
import Detail from './pages/Detail';
import { Route, Routes } from 'react-router';

const App = () => {

  const person = 7878787.998;
  const isLogin = true;
  let personName = '9090.90';
  const personNumber=Number.parseInt(personName);
  console.log(personNumber);

  const per = `person amount is ${person}`;
  const id = 1;
  const showUserData = `api/${id}`;

  const colors = ['red', 'green'];
  const newColors = ['gold', 'silver'];

  const some = (name, ...args) => {
    console.log([...colors, ...newColors]);
    console.log(name);
    console.log(args);
  }

  some('hari', 90, 20, 70, 60);

// const[c,setC]=useState(20);

//   const[sec,setSec]= useState({
//     hours:null,
//     minutes:null,
//     seconds:null
//   });

//   const[count, setCount]=useState(20);

// setInterval(()=>{
//   let date=new Date();
//   setSec({
//    hr:date.getHours(),
//    min:date.getMinutes(),
//    sec:date.getSeconds() 
//   });
// },1000)

const[count1,setCount1]=useState(0);
const[count2,setCount2]=useState(0);

const multiply= useMemo(()=>{
 console.log('call this');
 return count1*10;

},[count1]);

// const val=multiply();

 return (
    <div>

      <Header />

      {/* <Home />

      <Contact />

      <About />

       <div>
        <h1 className='text-2xl'>{multiply}</h1>
        <button onClick={()=>setCount1(count1+1)}>Add1</button>
        <button onClick={()=>setCount2(count2+1)}>Add2</button>

       </div> */}



     {/* <h1>{c}</h1> */}
     {/* <button onClick={()=>(setCount(count + 1))}>add</button> */}
      
     {/* <Home nums={12345678} name={'Nishan Kumal'} incre={setC} n={c} /> */}
    
     {/* {sec.hr}:{sec.min}:{sec.sec} */}
     
     {/* <button onClick={()=> setSec('Mysterious')}>increment</button> */}

      <Routes>
      <Route path='/'element={<Home />}/>
         <Route path='about'element={<About />} />
        <Route path='contact'element={<Contact />} />
        <Route path='detail'element={<Detail />} /> 
      </Routes>
      
      
    </div>
  )
}

export default App
