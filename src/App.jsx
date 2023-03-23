import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const products = [
  //   { name:"laptop", price:"175000" },
  //   { name:"phone", price:"70000" },
  //   { name:"watch", price:"5000" },
  //   { name:"tablet", price:"25000" }
  // ]
  return (
   
    <div className="App">
      <ExternalUsers></ExternalUsers>


      {/* <Counter></Counter> */}
      {/* {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="laptop" price="75000"></Product>
      <Product name="phone" price="75000"></Product>
      <Product name="watch" price="75000"></Product>
      <Product name="tablet" price="75000"></Product> */}
      
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>External users</h1>
      <p>{users.length}</p>
      {
        users.map(user =><User name={user.name} email={user.email}></User>)
      }
    </div>

  )
}

function User(props){
  console.log(props);
  return(
    <div className='user'>
      <h3>name:{props.name}</h3>
      <p>email:{props.email}</p>
    </div>
  )
}


function Counter(){
  const [count, setCount]= useState(668957);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // const increaseCount =()=>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>decrease</button>

      <ExternalUsers></ExternalUsers>
    </div>
  )
}






// function Product(props){
//   return(
//     <div className="product">
//       <h1>Name: {props.name}</h1>
//       <p>price: {props.price}</p>
//     </div>
//   )
// }
export default App
