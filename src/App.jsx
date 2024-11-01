import React from 'react'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Center from './Component/Center'

function App() {
 
  return (
    <>
    <Header/>
    {/* <Sidebar/> */}
    <div className='flex gap-4'>
      <Sidebar/>
      <Center/>
    </div>
    </>
  )
}

export default App
