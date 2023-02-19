import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Err404page() {
  return (
    <div>
    <Header/>
    <main >
                <div style={{width:"100%", height:"60vh" , display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div className='ErrorWrapper'>
                <span className='code'>404</span>
                <span className='mood'>Opps!</span>
                    <h1 className='message'>
                        Page Couldn't Found!!!
                    </h1>
                    
                </div>
                </div>
                </main>
    <Footer/>
      
    </div>
  )
}

export default Err404page
