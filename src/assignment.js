import React from 'react'

const assignment = () => {

const car={
  type:'Racing car',
  price:'4500000',
  company:'bmw',
  color:'white',
  drive :function(){
    console.log(this.company);
  },
}; 
car.drive();

  return (
    <div>
    
    </div>
  )
}

export default assignment
