import React from 'react'


export default function ExpediLog(props) {
  
            return (
            <div >
              <h4>Name: {props.name}</h4>
              <p>Email: {props.email}</p>
              <p>Gen: {props.gen}</p>
              <p>Date: {props.date}</p>
              <hr />
            </div>
          
          );
        
    
}