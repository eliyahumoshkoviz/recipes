import React from 'react'

export default function Loading() {

   return (
      <section >
         {Array(10).fill('k').map((j, i) => <div style={{width: "200px", height: "200px", background: "red"}} key={i} ></div>)}
      </section>
   )
}