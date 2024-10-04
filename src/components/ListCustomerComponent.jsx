import React , {useEffect, useState} from 'react'
import {  deleteCustomer, listCustomers } from '../services/CustomerService'
import { useNavigate } from 'react-router-dom'
import { FooterComponent } from './FooterComponent'

const ListCustomerComponent = () => {

    const [customers, setCustomers] =useState([])

  const navigator =useNavigate();


    useEffect(()=> { 
      getAllCustomers();
}, [])

function getAllCustomers() {
    listCustomers().then((response) => {
        setCustomers(response.data);
    }).catch(error => {
        console.error(error);

    })
}

function addNewCustomer()
{
   navigator('/add-customer')
}

function updateCustomer(id)
{
    navigator(`/edit-customer/${id}`)
}

function removeCustomer(id)
{
    console.log(id);
    deleteCustomer(id).then((response) =>{
        getAllCustomers();
    }).catch(error => {
        console.error(error);
    })
}
  return (
    <div className='containers wrapper'>

        <h2 className='text-center'>List of Customers</h2>
        <button className='btn-btn-primary mb-2'onClick={addNewCustomer}>Add Customer</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Occupants</th>
                    <th>Arrival Date</th>
                    <th>Arrival Time</th>
                    <th>Departure Date</th>
                    <th>Departure Time</th>
                    <th>Breakfast</th>
                    <th>Lunch</th>
                    <th>Dinner</th>
                    <th>Actions</th>
                </tr>
            </thead>
        <tbody>
            {
                customers.map(customer=>
                    <tr key={customer.id}>
                         <td>{customer.id}</td>
                         <td>{customer.name}</td>
                         <td>{customer.contact}</td>
                         <td>{customer.email}</td>
                         <td>{customer.occupants}</td>
                         <td>{customer.arrivaldate}</td>
                         <td>{customer.arrivaltime}</td>
                         <td>{customer.departuredate}</td>
                         <td>{customer.departuretime}</td>
                         <td>{customer.breakfast}</td>
                         <td>{customer.lunch}</td>
                         <td>{customer.dinner}</td>
                         <td>
                            <button className='btn btn-info' onClick={()=> updateCustomer(customer.id)}>Update</button>
                            </td>
                        <td>
                            <button className='btn btn-danger' onClick={()=> removeCustomer(customer.id)} >Delete</button></td>    
                    </tr>)
            }
        </tbody>
         
        </table>
        <FooterComponent/>
    
    </div>

    
  )
}

export default ListCustomerComponent

