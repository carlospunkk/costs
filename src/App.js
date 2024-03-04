
import {BrowserRouter as Router , Route,  Routes , Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/NewProject';


import Container from './components/layout/Container';

function App() {
  return (
   <Router>
    <div>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contact'>Contato</Link></li>
      <li><Link to='/company'>Empresa</Link></li>
      <li><Link to='/newproject'>Novo projeto</Link></li>
    </div>


    <p>Footer</p>
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/newproject' element={<Newproject/>}/>
      </Routes>
    </Container>
    

   </Router>
  );
}

export default App;
