import React,{useState} from 'react'
import BeforeStart from './BeforeStart';
import AppContent from './AppContent';
const App = () => {
  const [showBeforeStart,setShowStart]=useState(true);
  setTimeout(() => {
    setShowStart(false)
  }, 9000);
  return (
  <>
  {showBeforeStart?<BeforeStart/>:<AppContent/>}
  
  
  </>
  )
}

export default App
