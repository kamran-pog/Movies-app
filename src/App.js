import React from 'react';

import Movies from './components/Movies';
import SignIn from './components/SignIn';
import Home from './components/Home';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    
    <Router>
        <Home/>
    </Router>
  );
}

export default App;

// return (
//   <Router>
//     <div className="App">
//       <ul>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/logout">Logout</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>
//       <Switch>
//         <PrivateRoute exact path='/protected' component={GasPrices}/>
//         <Route path="/logout" component={Logout} />
//         <Route path="/login" component={Login} />
//         <Route path="/" component={Login} />    
//       </Switch>
//     </div>
//   </Router>
// );
// }