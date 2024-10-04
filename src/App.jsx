
import './App.css'
import CustomerComponent from './components/CustomerComponent'
import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import ListCustomerComponent from './components/ListCustomerComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
 

  return (
    <>
    <BrowserRouter>
    
    <HeaderComponent/>
    <Routes>
      {/* //http://localhost:3000 */ }
      <Route path='/' element ={ <ListCustomerComponent/>}> </Route>
     
      {/*//http://localhost:3000/customers*/}
      <Route path='/customers' element={ <ListCustomerComponent/>}></Route>
    
      {/*//http://localhost:3000/add-customers*/}
      <Route path='/add-customer' element={ <CustomerComponent/>}></Route>

      {/* // http://localhost:3000/edit-employee/1 */}
      <Route path='/edit-customer/:id' element={<CustomerComponent/>}></Route> 

    </Routes>

    </BrowserRouter>
     </>
  )
}

export default App
