import { useEffect, useState } from 'react'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { PopBrowse } from '../components/PopBrowse/PopBrowse'
// import { PopNewCard } from '../components/PopNewCard/PopNewCard'
// import { PopUser } from '../components/PopUser/PopUser'
import { Loader } from '../components/Loader'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'


const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;


function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Wrapper>
        
        {/* <PopUser /> */}
        {/* <PopNewCard /> */}
        {/* <PopBrowse /> */}

        <Header />
        {
          loading ? <Loader /> : <Main />
        }
        <Outlet />
      </Wrapper>
    </>
  )
}

export default MainPage;

 


