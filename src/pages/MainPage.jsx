import { useCallback, useEffect, useState } from 'react'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Loader } from '../components/Loader'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { fetchTasks } from '../services/api'
import { TasksProvider } from '../context/TasksProvider'


const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;


function MainPage() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks({
        // пока у нас не реализована авторизация, передаём токен вручную
        token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <TasksProvider>
        <Wrapper>
          <Header />
          {
            loading ? <Loader /> : <Main error={error} tasks={tasks} />
          }
          <Outlet />
        </Wrapper>
      </TasksProvider>
    </>
  )
}

export default MainPage;




