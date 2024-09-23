import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { IndexPage } from './IndexPage';

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<IndexPage />} /> 
          <Route path="/pointcloud" />
        </Routes  >
      </Router>
    </>
  )
}

export default App
