
import React from 'react'

const App = () => {

  const sendMessge = (event)=>{
    event.preventDefault();
    const token ="8794405647:AAGN8HKIqAYSes1Vl3q1T7fZr0WtolczAoU"
    const chat_id = 1643133355


    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("text").value
    const phone = document.getElementById("username").value


    const messageContent = `Ism : {name}\n Telefon raqam: ${phone}`

    axios ({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      }
    })
    .then(()=>{
      alert("xamasi joyida")
    }).catch((err)=>{
      console.log(err);
      
    })

  }
  return (
     <>
     <div>
        <form onSubmit={sendMessge} >
          <label>Ismingizni kiriting</label>
          <input type="text"id='text' placeholder='Ismingizni kiriting' /><br />
          <label>Telefon raqamingizni kiriting</label>
          <input type="text"id='username' placeholder='Raqamingizni kiritinng' />


          <button type='subnit'>Jo'natish</button>
        </form>
    </div>
     </>
  )
}

export default App
