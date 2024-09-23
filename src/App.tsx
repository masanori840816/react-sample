import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { IndexPage } from './IndexPage';
import { PointCloudPage } from './PointCloudPage';
import { ChartPage } from './ChartPage';

function App() {

  return (
    <>
      <Router>

        <Link to="/">TOP</Link>
        <Link to="/pointcloud">Point Cloud</Link>
        <Link to="/chart">Sample Chart</Link>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/pointcloud" element={<PointCloudPage />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes  >
      </Router>
    </>
  )
}

export default App
