import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Album from './components/Album';
import About from './components/about';
import Checkout from './components/Checkout';
import Pricing from './components/price';
import Contact from './components/contact';
import Login from './components/login';
import SeatSelectionApp from './components/seatSelection';
import Signup from './components/SigninSide';
import { Provider } from 'react-redux';
import store from './components/store';
import FeedForm from './components/Feedback';

function App() {
  return (
    <Provider store={store}>
    <Router>
   
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/price' element={<Pricing/>}/>
      <Route path='/Album' element={<Album/>}/>
      <Route path='/SigninSide' element={<Signup/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/seatSelection' element={<SeatSelectionApp/>}/>
      <Route path='/Feedback' element={<FeedForm/>}/>
      
      

     
      
      

      </Routes>
    </Router>
    </Provider>
  );
}

export default App