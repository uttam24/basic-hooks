import React,{useState} from 'react';
import './App.css';

const App=()=> {
  const [values, setValues] =useState({
    firstName:'',
    lastName:'',
    email:'',
  });
  const[submitted, setSubmitted] = useState(false);
  const[valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event)=>{
    setValues({...values, firstName:event.target.value})
  }
  const handleLastNameInputChange = (event)=>{
    setValues({...values, lastName:event.target.value})
  }
  const handleEmailInputChange = (event)=>{
    setValues({...values, email:event.target.value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true); 
    }
    setSubmitted(true); 
  }
  return (
    <div className="App">
          <div className='App-header'>
            <form className='register-form'  onClick={handleSubmit}>
            {submitted && valid ? <div className='success-message'>Success !Thank you for registering</div>:null}
              <input 
              type='text'
              onChange={handleFirstNameInputChange}
              value={values.firstName}
              className='form-field'
              placeholder='First Name'
              name='firstName'/>
              {submitted && !values.firstName ? <span>Please enter a first name</span> :null}  
              <input 
              type='text'
              onChange={handleLastNameInputChange}
              value={values.lastName}
              className='form-field'
              placeholder='Last Name'
              name='lastName'/>
               {submitted && !values.lastName ?  <span>Please enter a last name</span> : null}
              <input 
              type='text'
              onChange={handleEmailInputChange}
              value={values.email}
              className='form-field'
              placeholder='Email'
              name='email'/>
              {submitted && !values.email ? <span>Please enter an email</span> :null}
               <input 
              type='submit'
             
              className='button'
              value='register'
              />

            </form> 
      </div>
    </div>
  );
}

export default App;
