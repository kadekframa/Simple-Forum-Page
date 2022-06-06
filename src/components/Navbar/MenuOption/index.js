import React, { useState, useEffect  } from 'react';
import './MenuOption.css'
import './MenuOptionsResponsive.css'

const MenuOption = (props) => {
  const[modalRegister, setModalRegister] = useState(false);
  const[modalLogin, setModalLogin] = useState(false);

  const initialValuesRegister = { username: "", email: "", password: "" };
  const initialValuesLogin = { email: "", password: "" };

  const[formValuesRegister, setFormValuesRegister] = useState(initialValuesRegister);
  const[formValues, setFormValues] = useState(initialValuesLogin);

  const[formErrorsRegister, setFormErrorsRegister] = useState({});
  const[formErrors, setFormErrors] = useState({});

  const[isSubmitRegister, setIsSubmitRegister] = useState(false);
  const[isSubmit, setIsSubmit] = useState(false);

  // Login Form
  const handleChange = (e) => {
    console.info(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.info(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.info(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.info(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.email) {
      errors.email = "Wajib diisi";
    } else if(!regex.test(values.email)) {
      errors.email = "Format email salah";
    }

    if(!values.password) {
      errors.password = "Wajib diisi";
    }else if(values.password.length <= 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  const reloadPageAfterSubmitSuccess = () => {
    document.location.reload();
  }



  // Register Form
  const handleChangeRegister = (e) => {
    console.info(e.target);
    const { name, value } = e.target;
    setFormValuesRegister({ ...formValuesRegister, [name]: value });
    console.info(formValuesRegister);
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    setFormErrorsRegister(validateRegister(formValuesRegister));
    setIsSubmitRegister(true);
  }

  useEffect(() => {
    console.info(formErrorsRegister);
    if(Object.keys(formErrorsRegister).length === 0 && isSubmitRegister) {
      console.info(formValuesRegister);
    }
  }, [formErrorsRegister]);

  const validateRegister = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username) {
      errors.username = "Wajib diisi";
    } 

    if(!values.email) {
      errors.email = "Email is required";
    } else if(!regex.test(values.email)) {
      errors.email = "Format email salah";
    }

    if(!values.password) {
      errors.password = "Wajib diisi";
    }else if(values.password.length <= 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  const reloadPageAfterSubmitSuccessRegister = () => {
    document.location.reload();
  }



  // Login Modal
  const toggleModalLogin = () => {
    setModalLogin(!modalLogin);
  }

  if(modalLogin) {
    document.body.classList.add('active-modal-login');
  } else {
    document.body.classList.remove('active-modal-login');
  }


  // Register Modal
  const toggleModalRegister = () => {
    setModalRegister(!modalRegister);
  }

  if(modalRegister) {
    document.body.classList.add('active-modal-register');
  } else {
    document.body.classList.remove('active-modal-register');
  }

  return (
    <>
      <nav className={props.className}>
        <button className='nav-btn'>Categories</button>
        <button onClick={toggleModalLogin} className='nav-btn'>Login</button>
        <button onClick={toggleModalRegister}  className='nav-btn'>Register</button>
      </nav>

      {modalLogin ? 
        (
          <div className="modal">
            <div className="overlay" onClick={toggleModalLogin}></div>
            <div className="modal-success-login">
              {Object.keys(formErrors).length === 0 && isSubmit ?
                  ( <div className='success-popup'>
                      <p>Login Successfully</p>
                      <button onClick={reloadPageAfterSubmitSuccess}>OK</button>
                    </div>
                  ) : ""}
            </div>
              <div className='modal-content'>
                <div className="container">
                  <form onSubmit={handleSubmit}>
                    <h1 className='login-heading'>Login</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                      <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={ formValues.email } onChange={handleChange}/>
                      </div>
                      <p className='error-warning'>{formErrors.email}</p>

                      <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={ formValues.password } onChange={handleChange}/>
                      </div>
                      <p className='error-warning'>{formErrors.password}</p>

                      <button className="btn">Login</button>
                    </div>
                  </form>
                </div>
                <button className="close-modal" onClick={toggleModalLogin}>X</button>
              </div>
          </div>
        ) : ""
      }

      {modalRegister ? 
        (
          <div className="modal">
            <div className="overlay" onClick={toggleModalRegister}></div>
            <div className="modal-success-login">
              {Object.keys(formErrorsRegister).length === 0 && isSubmitRegister ?
                  ( <div className='success-popup'>
                      <p>Register Successfully</p>
                      <button onClick={reloadPageAfterSubmitSuccessRegister}>OK</button>
                    </div>
                  ) : ""}
            </div>
              <div className='modal-content'>
                <div className="container">
                  <form onSubmit={handleSubmitRegister}>
                    <h1 className='login-heading'>Register</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                      <div className="field">
                        <label>Name</label>
                        <input type="text" name="username"  placeholder="Name" value={ formValuesRegister.username } onChange={handleChangeRegister}/>
                      </div>
                      <p className='error-warning'>{formErrorsRegister.username}</p>
                      
                      <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={ formValuesRegister.email } onChange={handleChangeRegister}/>
                      </div>
                      <p className='error-warning'>{formErrorsRegister.email}</p>

                      <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={ formValuesRegister.password } onChange={handleChangeRegister}/>
                      </div>
                      <p className='error-warning'>{formErrorsRegister.password}</p>

                      <button className="btn">Create Account</button>
                    </div>
                  </form>
                </div>
                <button className="close-modal" onClick={toggleModalRegister}>X</button>
              </div>
          </div>
        ) : ""
      }
    </>
  )
}

export default MenuOption;
