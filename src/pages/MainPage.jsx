import { useContext } from 'react'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Loader } from '../components/Loader'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { TasksContext } from '../context/TasksContext'


const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;


function MainPage() {
  const { hasGot } = useContext(TasksContext)

  return (
    <>
      <Wrapper>
        <Header />
        {
          hasGot ? <Main /> : <Loader />
        }
        <Outlet />
      </Wrapper>
    </>
  )
}

export default MainPage;
