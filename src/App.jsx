import './App.css'
import AppRoutes from './components/AppRoutes'
import AuthProvider from './context/AuthProvider'
import TasksProvider from './context/TasksProvider'

function App() {
  return (
    <AuthProvider>
      <TasksProvider data={""}>
        <AppRoutes />
      </TasksProvider>
    </AuthProvider>
  )
}

export default App
