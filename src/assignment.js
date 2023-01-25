import React from 'react'
import { Route } from 'react-router';
import assignment from './assignment';

const App = () => {
  // const personName='Pramila';
  // const greetType='Hii';
  // const greeting= () => {
  //   console.log(`${greetType} ${personName}`);
  // }
  // greeting();

  // const greeting=(greetType,personName)=>{
  //   console.log(`${greetType} ${personName}`);
  // }
  // greeting('Namaste','Maiju');
  // greeting('Hii','Sita');

  const age=100;

  const teaMake= ()=>{
    const age=40;
    console.log(age);
    return 'make fire boil water';
  }
  const m= teaMake();

  // setTimeout(()=>{
  //   console.log(m);
  // },5000);

  // setTimeout(()=>{
  //   console.log(m);
  // },5000);


  // const movie = {
  //   title: 'Avatar',
  //   detail: 'adventure movie',
  //   releaseDate: '2022',
  //   imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg'
  // };

  

  // const m = 'fizz', n = 'buzz';
  // const calcType = 'sum';
   
  // switch(calcType)
  //  {
  //   case 'sum':
  //   console.log(m+n);
  //   break;
  //  }

  //  const arrayNumbers = [1,3,5,7,9];
  //  let total=0;
  //  for(let array of arrayNumbers)
  //  {
  //   total = total+array;
  //  }
  //  console.log(total);

  // let i;
  // for(i=1; i<=15; i++)
  // {
  //   if(i%3==0 && i%5==0)
  //   {
  //     console.log('fizz buzz');
  //   }
  //   else if(i%3==0)
  //   {
  //     console.log('fizz');
  //   }
  //   else if(i%5==0)
  //   {
  //     console.log('buzz');
  //   }
  //   else
  //   {
  //     console.log('i');
  //   }
  // }
  

  // let i = 1;
  // while (i <= 15) {
  //   if (i % 3 == 0 && i % 5 == 0) {
  //     console.log("FizzBuzz");
  //   } else if (i % 3 == 0) {
  //     console.log("Fizz");
  //   } else if (i % 5 == 0) {
  //     console.log("Buzz");
  //   } else {
  //     console.log('i');
  //   }
  //   i++;
  // }

// let age1=0;
// while(age1<20){
//   age1++;
// }
// for(let v=0; v<=20; v++){
//   if(v%2==0){
//     console.log(`even number ${v}`);
//   }else{
//     console.log(`odd number ${v}`);
//   }
// }
// const k=30;
// const l=20;
// const clacType='sum';

// switch(clacType){
//   case 'sum':
//     console.log(k+l);
//     break;
// }

// const medal = 2;
// switch(medal){
//   case 1:
//     console.log('you got gold medal');
//     break;
//     case 2:
//       console.log('you got silver medal');
//     break;
//     default:
//       console.log('you got no medal');
// }

// const secNumbers=[22,55,66,100];
// let total=0;
// for(let sec of secNumbers){

// }


// const age=51;
// let ticketSome;

// if(age>20 && age<50){
//   ticketSome='your regular 20$ please'; 
// }else{
//   ticketSome='your junior 10$ please'; 
// }

// const greetPerson = () => {
//   console.log('hello user')
// };

// const person={
// name:'Shyam',
// age:40,
// email:'@'
//   };
// console.log(person.name);

let a = 90;
const b = 150;
// a++;



const sum = a + b / 2;

//  console.log(a + b);
//  console.log(a - b);
//  console.log(a * b);
//  console.log(a / b);
//  console.log(a % b);

//  console.log(a > b);
//  console.log(a < b);
//  console.log(a === b);
//  console.log(a !== b);
//  console.log(a <= b);
//  console.log(a >= b);

//  console.log(a > b || a===b || b>a);
//  console.log(a > b && a!==b && b>a);

//  const isShow = a>b ? 'yes' : a!==b? 'mm'
//  :'N0';
//  console.log(isShow);

//  const age = 99;
//   let ticketSome;

//   if (age > 20 && age < 50) {
//     ticketSome = 'your\'e regular 20$ please';
//   } else if (age > 50) {
//     ticketSome = 'your\'e senior 12$ please';
//   } else {
//     ticketSome = 'your\'e junior 10$ please';
//   }

// const car = {
//   model: 'BMW 3 series',
//   color: 'white',
//   year: 1975,
//   make: 'ford',
//   price: '47 lakhs',
//   imageUrl: 'https://carwow-uk-wp-0.imgix.net/bmw-3-series-facelift-saloon-front-1.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600'
// };

//  const person = {
//   name: 'Krishna',
//   height: 5.5,
//   age: 42,
//   contactNo: 9829814241,
//   email: '@',
//  };

// const animal= {
//   name: 'Dog(Tommy)',
//   color: 'white',
//   imageUrl:"https://media.istockphoto.com/id/1318666271/photo/yorkshire-terrier-dog-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=oB3HidkiMcO4vKCkpB1k3C5v-BQk-jd5DU46SYqiwM0="

// };

// const pN=['ram', 'sita', 'ankit','nisha'];
// pN.sort();
// console.log(pN);

const n=[11,22,33,99];
// n.pop();
// n.push(900);
//  n.shift();
// n.reverse();
console.log(n.indexOf(33));

let total =0;
const numbers=[10,20,30,40];
const newData = numbers.map((n)=>{
  return n*5;
});
numbers.forEach((n)=>{
  total=total+n;
})
console.log(total);

const users=[
  {
    id:1,
    name:'Raju',
    gender:'Male',
    post:'Teacher'
  },
  {
    id:2,
    name:'Anju',
    gender:'Female',
    post:'CEO'
  },
  {
    id:3,
    name:'Sagar',
    gender:'Male',
    post:'CTO'
  },
];

const [aaa,bbb,ccc]=users;
const{name}=bbb;
console.log(name);

// const femaleData=users.filter((user)=>{
//   return user.gender==='femle';

// });
// console.log(femaleData);

const car= {
  type:'Racing car',
  price:'4500000',
  company:'bmw',
  color:'white',
  drive :function(){
    console.log(this.color);
  },
}; 
car.drive();

const{price,company}=car;

const rating=9083.9502;
console.log(Math.floor(rating));
console.log(Math.round(rating));


const random=Math.random()*20;
console.log(Math.floor(random));
// const maxVal=Math.min(22,44,55,11);
// console.log(maxValue);

let nowDate=new Date();
console.log(nowDate.getFullYear());
console.log(nowDate.getHours());
console.log(nowDate.getMinutes());
console.log(nowDate.getSeconds());
console.log(nowDate);

// setTimeout(()=>{
// console.log('hiiiiiii');
// },
// 4000)


setInterval(()=>{
  console.log(`${nowDate.getHours()}-${nowDate.getMinutes()}-${nowDate.getSeconds()}`)
},
2000)
  return (

    <div>
  
      <h1>{`${car.price}${car.company}`}</h1>
    </div>

    
  )
}
export default App
 