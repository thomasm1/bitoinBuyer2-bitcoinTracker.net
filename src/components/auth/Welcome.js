import React from 'react';

const welcomeStyle = { 
     textAlign: 'center',
     color: 'darkslategrey',
     minHeight: '300px'
}
const p = { fontSize:"1.4rem",
     color: 'darkslategrey'}
const horizRule = {
  backgroundColor:"lightblue"
  }
export default function Welcome() {
  return (
    <section className="section auth">
      <div style={welcomeStyle} className="container">
        <p style={p}><strong>Welcome to your Bitcoin-Tracker Armchair!</strong></p>
        <hr style={horizRule} />
        <p style={p}><strong>Please check your email to confirm  your account registration.</strong></p>
         <hr style={horizRule} />
      </div>
    </section>
  )
}
