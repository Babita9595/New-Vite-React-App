
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Container from './components/Container'
import Controls from './components/Controls'
import DisplayCounter from './components/DisplayCounter'

function App() {
 

  return (
  
      <div className="col-lg-6 mx-auto">
      <Container>
      <Header/>
      <DisplayCounter/>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
       <Controls/>
      </div>
      </Container>
    </div> 
    
  )
}

export default App
