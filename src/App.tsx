import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { IndexPage } from './IndexPage';
import { PointCloudPage } from './PointCloudPage';

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<IndexPage />} /> 
          <Route path="/pointcloud" element={<PointCloudPage />}/>
        </Routes  >
      </Router>
    </>
  )
}

export default App
