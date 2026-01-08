import React from 'react'

export default function Footer() {
  return (
    <footer className="footer content has-text-centered"> 

        <span> Copyright &copy; 2019 All Rights Reserved. </span><br /> 
        <span><a href="mailto:thomasm1.maestas@gmail.com" title="Contact Information: thomasmaestas.net/">
          Contact Thomas Maestas</a> &nbsp;&nbsp; | &nbsp;&nbsp; <a
            href="https://thomasmaestas.net">thomasmaestas.net</a>
        </span><br />
        <p><small style={{color:"red"}}>An AWS Lambda-DynamoDB &amp; ReactJS Application</small></p>
  
    </footer>
  )
}
