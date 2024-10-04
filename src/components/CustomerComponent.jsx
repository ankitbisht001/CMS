import React, { useEffect, useState } from 'react'
import { createCustomer, getCustomer, updateCustomer } from '../services/CustomerService'
import { useNavigate , useParams} from 'react-router-dom'

const CustomerComponent = () => {

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [occupants, setOccupants] = useState('')
  const [arrivaldate, setArrivaldate] = useState('')
  const [arrivaltime, setArrivaltime] = useState('')
  const [departuredate, setDeparturedate] = useState('')
  const [departuretime, setDeparturetime] = useState('')
  const [breakfast, setBreakfast] = useState('')
  const [lunch, setLunch] = useState('')
  const [dinner, setDinner] = useState('')
  
  
  const {id}=useParams();
  const [errors, setErrors] = useState({ name: '', contact: '' })
  const [apiError ,setApiError] = useState('');

  const navigator = useNavigate();

  useEffect(()=> {
   if(id){
    getCustomer(id).then((response)=>{
      setName(response.data.name);
      setContact(response.data.contact);
      setEmail(response.data.email);
      setOccupants(response.data.occupants);
      setArrivaldate(response.data.arrivaldate);
      setArrivaltime(response.data.arrivaltime);
      setDeparturedate(response.data.departuredate);
      setDeparturetime(response.data.departuretime);
      setBreakfast(response.data.breakfast);
      setLunch(response.data.lunch);
      setDinner(response.data.dinner);
 
    }).catch(error => {
      console.error(error)
    })
   }
  }, [id])

  function saveCustomer(e) {
    e.preventDefault();

    if (validateForm()) {

      const customer = { name,contact,email,occupants,arrivaldate,arrivaltime,departuredate,departuretime,breakfast,lunch,dinner}
      console.log(customer);
      setApiError('');

      
      if(id){
        updateCustomer(id, customer).then((response) => {
          navigator('/customers');
          console.log(response.data);
        }).catch(error => {
        console.error(error);
        setApiError('Failed to save customer')
      }) 
        
      } else {
      
      createCustomer(customer).then((response) => {
        console.log(response.data);
        navigator('/customers')
      }).catch(error => {
        console.error(error);
        setApiError('Failed to save customer')
      }) }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors }

    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = 'name is required';
      valid = false;
    }

    if (contact.trim()) {
      errorsCopy.contact = '';
    } else {
      errorsCopy.contact = 'contact is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center wrap'>Update Customer</h2>
    }
    else
      return <h2 className='text-center wrap'>Add Customer</h2> 
  }

  return (
    <div className='container'>

      <div className='row'>
        <div>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  placeholder='xxxxx'
                  value={name}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Contact</label>
                <input
                  type='tel'
                  placeholder='xxxx-xxxx'
                  value={contact}
                  minLength={10} title='please enter a valid no.'
                  className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                  onChange={(e) => setContact(e.target.value)}
                />
                {errors.contact && <div className='invalid-feedback'>{errors.contact}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  placeholder='xxxxx@gmail.com'
                  value={email} title='please enter a valid gmail'
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Occupants</label>
                <input
                  type='number'
                  placeholder='xx'
                  value={occupants}
                  className={`form-control ${errors.occupants ? 'is-invalid' : ''}`}
                  onChange={(e) => setOccupants(e.target.value)}
                />
                {errors.occupants && <div className='invalid-feedback'>{errors.occupants}</div>}
              </div>


              <div className='form-group mb-2'>
                <label className='form-label'>Arrival Date</label>
                <input
                  type='date'
                  placeholder='xxxx-xx-xx'
                  value={arrivaldate}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setArrivaldate(e.target.value)}
                />
                {errors.arrivaldate && <div className='invalid-feedback'>{errors.arrivaldate}</div>}
              </div>
 
              <div className='form-group mb-2'>
                <label className='form-label'>Arrival Time</label>
                <input
                  type='time'
                  placeholder='xx-xx-xx'
                  value={arrivaltime}
                  className={`form-control ${errors.arrivaltime ? 'is-invalid' : ''}`}
                  onChange={(e) => setArrivaltime(e.target.value)}
                />
                {errors.arrivaltime && <div className='invalid-feedback'>{errors.arrivaltime}</div>}
              </div>

             
              <div className='form-group mb-2'>
                <label className='form-label'>Departure Date</label>
                <input
                  type='date'
                  placeholder='xxxx-xx-xx'
                  value={departuredate}
                  className={`form-control ${errors.departuredate ? 'is-invalid' : ''}`}
                  onChange={(e) => setDeparturedate(e.target.value)}
                />
                {errors.departuredate && <div className='invalid-feedback'>{errors.departuredate}</div>}
              </div>
 
              <div className='form-group mb-2'>
                <label className='form-label'>Departure Time</label>
                <input
                  type='time'
                  placeholder='xx-xx-xx'
                  value={departuretime}
                  className={`form-control ${errors.departuretimetime ? 'is-invalid' : ''}`}
                  onChange={(e) => setDeparturetime(e.target.value)}
                />
                {errors.departuretime && <div className='invalid-feedback'>{errors.departuretime}</div>}
              </div>
             

              <div className='form-group mb-2'>
                <label className='form-label'>Breakfast</label>
                <input
                  type='number'
                  placeholder='x'
                  value={breakfast}
                  className={`form-control ${errors.breakfast ? 'is-invalid' : ''}`}
                  onChange={(e) => setBreakfast(e.target.value)}
                />
                {errors.breakfast && <div className='invalid-feedback'>{errors.breakfast}</div>}
              </div>


              <div className='form-group mb-2'>
                <label className='form-label'>Lunch</label>
                <input
                  type='number'
                  placeholder='x'
                  value={lunch}
                  className={`form-control ${errors.breakfast ? 'is-invalid' : ''}`}
                  onChange={(e) => setLunch(e.target.value)}
                />
                {errors.breakfast && <div className='invalid-feedback'>{errors.lunch}</div>}
              </div>
 
                
              <div className='form-group mb-2'>
                <label className='form-label'>Dinner</label>
                <input
                  type='number'
                  placeholder='x'
                  value={dinner}
                  className={`form-control ${errors.breakfast ? 'is-invalid' : ''}`}
                  onChange={(e) => setDinner(e.target.value)}
                />
                {errors.dinner && <div className='invalid-feedback'>{errors.dinner}</div>}
              </div>
                



              <button className='btn btn-success' onClick={saveCustomer}>Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomerComponent
