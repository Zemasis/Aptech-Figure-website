import {Routes,Route} from 'react-router-dom';
import {useEffect} from 'react';
import './App.css';
// Import Page
import HomePage from './pages/HomePage/index.jsx';
import IntroductionPage from './pages/Introduction/index.jsx';
import ProductListPage from './pages/ProductList/index.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicy/index.jsx';
import ContractUs from './pages/ContractUs/index.jsx';
import TermsServicePage from './pages/TermsService/index.jsx';

// Import Component
import ComHeader from './componet/HeaderCom/ComHeader.jsx';
import ComNavBar from './componet/NavBarHeaderCom/ComNavBar.jsx';
import ComFooter from './componet/FooterCom/ComFooter.jsx';
import ScrollToTop from './componet/ComScrolltoTop/ComScrolltoTop.jsx';

// Import API Database
// import axios from 'axios';


function App() {
  // const [users, setUsers] = useState([]); 
  
  useEffect(() => { 
    // axios.get('http://localhost:5000/api/users') 
    // .then(response => { setUsers(response.data); }) 
    // .catch(error => { console.error("There was an error fetching the users!", error); }); 
    // console.log(users)
  });


  return (
    <div className="App">

      <ComHeader/>
      <ComNavBar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/Introduction' element ={<IntroductionPage/>}/>
        <Route path='ProductList' element ={<ProductListPage/>}/>
        <Route path='/PrivacyPolicy' element ={<PrivacyPolicyPage/>}/>
        <Route path='/ContractUs' element={<ContractUs/>}/>
        <Route path='/TermsService' element={<TermsServicePage/>}/>
      </Routes>
      <ComFooter/>

    </div>
  );
}

export default App;
