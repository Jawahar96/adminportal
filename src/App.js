
import './App.css';
import './css/sb-admin-2.css'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Users from './Users';
import {  Routes,Route, BrowserRouter } from 'react-router-dom';
import CreateUser from './CreateUser';
import Login from './Login'
function App() {
  return (
  <BrowserRouter>
  <div id="wrapper">
  <Sidebar />
  <div id="content-wrapper" class="d-flex flex-column">
  <div id="content">
  <Topbar />
   <Routes>

   <Route path='/login' element={<Login />}/>
   <Route path=  '/create-user' element={<CreateUser /> }/>
   <Route path=  '/users' element={<Users /> } />
      <Route path=  '/dashboard' element={<Dashboard />} />
     
     
     
      </Routes>
    
      </div>
    </div>
  </div>
    </BrowserRouter>
  );
}

export default App;
