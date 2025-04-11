import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { PopBrowse } from './components/PopBrowse/PopBrowse'
import { PopNewCard } from './components/PopNewCard/PopNewCard'
import { PopUser } from './components/PopUser/PopUser'
import { Loader } from './components/Loader'
import styled from 'styled-components'


const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;


function App() {
  const [loading, setLoading] = useState(true);
    
       useEffect(() => {
          setTimeout(() => {
             setLoading(false);
          }, 3000);
       }, []);

  return (
    <>
      <Wrapper>
        {/* <!-- pop-up start--> */}

        <PopUser/>

        <PopNewCard/>
        
        <PopBrowse/>

        {/* <!-- pop-up end--> */}

        <Header/>

        {
          loading ? <Loader/> : <Main/>
        }

      </Wrapper>
    </>
  )
}

export default App
