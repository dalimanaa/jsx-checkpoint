import React from 'react'

function Address() {
    
      
      function fullAdress() {
        const building= "angham 4"
      const city=" Mourouj"
      const street =" Rue de madina"
        return `${building}, ${street}, ${city}`
      }
    
  return (
    <div>
       <h3>{fullAdress()} </h3> 
    </div>
  )
}

export default Address