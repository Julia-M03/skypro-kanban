import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { PopBrowse } from './components/PopBrowse/PopBrowse'
import { PopNewCard } from './components/PopNewCard/PopNewCard'
import { PopUser } from './components/PopUser/PopUser'
import { Loader } from './components/Loader'


function App() {
  const [loading, setLoading] = useState(true);
    
       useEffect(() => {
          setTimeout(() => {
             setLoading(false);
          }, 3000);
       }, []);

  return (
    <>
      <div className="wrapper">
        {/* <!-- pop-up start--> */}

        <PopUser/>

        <PopNewCard/>
        
        <PopBrowse/>

        {/* <!-- pop-up end--> */}

        <Header/>

        {
          loading ? <Loader/> : <Main />
        }

        

      </div>
    </>
  )
}

export default App
