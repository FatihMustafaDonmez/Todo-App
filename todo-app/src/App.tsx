import './App.css'
import TodoCreate from './comopnents/TodoCreate'
import TodoList from './comopnents/TodoList'

function App() {

  return (
    <div style={{marginTop: '70px'}}>
      <div>
        <h1 style={{textAlign:'center', fontSize:'1.8rem' , marginBottom:'100px', textDecoration: 'underline'}}>TODO UYGULAMASI</h1>
        </div>
      <TodoCreate/>
      <TodoList/>
        
    </div>
  )
}

export default App
