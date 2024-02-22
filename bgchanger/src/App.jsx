import { useState } from 'react'

function App() {
  const [Color, setColor] = useState('olive')

  return (
   <>
    <div  style={{
      height:'97vh',
      width:'100%',
      backgroundColor:Color,
      color:'black',
      display: 'flex',
      justifyContent: 'center',
    }}>
  <h1>Background Color changer</h1> 
  

  <div style={{
    position:'fixed',
    padding:'10px',
    backgroundColor:'white',
    width:'70%',
    margin:'500px auto 10px auto',  
    outline:'none',
    borderRadius:'10px',
  }}>

    <button style={{
      outline: 'none',
      backgroundColor:'red',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('red')}}>Red</button>


<button style={{
      outline: 'none',
      backgroundColor:'yellow',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('yellow')}}>Yellow</button>

<button style={{
      outline: 'none',
      backgroundColor:'blue',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('blue')}}>Blue</button>

<button style={{
      outline: 'none',
      backgroundColor:'gray',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('gray')}}>Gray</button>

<button style={{
      outline: 'none',
      backgroundColor:'pink',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('pink')}}>Pink</button>

<button style={{
      outline: 'none',
      backgroundColor:'olive',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('olive')}}>Olive</button>

<button style={{
      outline: 'none',
      backgroundColor:'green',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('green')}}>Green</button>

<button style={{
      outline: 'none',
      backgroundColor:'purple',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('purple')}}>Purple</button>

<button style={{
      outline: 'none',
      backgroundColor:'brown',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'black',
      margin: '0 2px',
    }} onClick={()=>{setColor('brown')}}>Brown</button>

<button style={{
      outline: 'none',
      backgroundColor:'black',
      padding:'5px',
      width:'80px',
      borderRadius:'10px',
      color:'white',
      margin: '0 2px',
    }} onClick={()=>{setColor('black')}}>Black</button>
  </div>
    </div>
  
 </>
  )
}

export default App
