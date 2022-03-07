import React from 'react'
import RenderList from './RenderList';
import { useGlobalContext } from './context';

function App() {
  const {loading} = useGlobalContext();
  if(loading){
    return <h2 className='loading'>Loading...</h2>
  }
  return (
  <main>
    <div className="section-title">
      <h1>pagination</h1>
      <div className="underline"></div>
    </div>
    <RenderList/>
  </main>
  )
}

export default App
