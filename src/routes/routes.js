import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/Signin/Signin';
import Dashboard from '../pages/Dashboard/Dashboard';
import Dashboards from '../controllers/DashboardPages/Dashboard/Dashboards';
import Draw from '../controllers/DashboardPages/Draw/Draw';
import Play from '../controllers/DashboardPages/Play/Play';

export const Routes = () => {
  return (
    <Router>
      <RouterCover>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/dashboards" element={<Dashboards />} />
          <Route path="/dashboard/draw" element={<Draw />} />
          <Route path="/dashboard/play-draw" element={<Play />} />
        </Route>
      </RouterCover>
    </Router>
  )
}
export default Routes