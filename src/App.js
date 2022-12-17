import React from 'react';
import './App.css';
import Company from './CompanyDetails';
import CreditCard from './CreditCardInfo';
import Product from './ProductInfo';
import UserDetails from './UserDetails';

function App() {
  return (
     <div>
     <UserDetails/>
     <Company/>
     <CreditCard/>
     <Product/>
   </div>
    
  );
}

export default App;
