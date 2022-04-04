import React from 'react'
import './App.css'
function App() {
  const [name,setName]=React.useState("posts")
  const [item,setItem]=React.useState([])
  const [windowwidth,setWindowwidth]=React.useState(window.innerWidth)
  function handleclick(){
    setWindowwidth(window.innerWidth)
  }
  React.useEffect(()=>{
    window.addEventListener('resize',handleclick)
  },[])
  React.useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${name}`)
    .then(res=>res.json())
    .then(json=>setItem(json))
  },[name])
  return (
    <div className="App">
      <p>window size: {windowwidth}</p>
      <button onClick={()=>{setName('posts')}}>Posts</button>
      <button onClick={()=>{setName('users')}}>Users</button>
      <button onClick={()=>{setName('comments')}}>Comments</button>
      <h1>{name}</h1>
      {item.map((data)=>{
        return <p>{JSON.stringify(data)}</p>
      })}
    </div>
  );
}

export default App;
