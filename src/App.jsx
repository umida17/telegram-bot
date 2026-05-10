
import React from 'react'

const App = () => {

  const sendMessge = (event)=>{
    event.preventDefault();
    const token ="8794405647:AAGN8HKIqAYSes1Vl3q1T7fZr0WtolczAoU"
    const chat_id = 1643133355


    
  }
  return (
     <>
     <div>
        <form >
          <label>Ismingizni kiriting</label>
          <input type="text"placeholder='Ismingizni kiriting' /><br />
          <label>Telefon raqamingizni kiriting</label>
          <input type="text"placeholder='Raqamingizni kiritinng' />


          <button type='subnit'>Jo'natish</button>
        </form>
    </div>
     </>
  )
}

export default App
