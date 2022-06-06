import React, { useState, useEffect  } from 'react';
import './AddingComments.css';
import Input from '../../../Atoms/Input/inbdex';
import Button from '../../../Atoms/Button';

const AddingComments = () => {
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Wajib diisi";
    }
    if (!values.email) {
      errors.email = "Wajib diisi, Format email salah";
    } else if (!regex.test(values.email)) {
      errors.email = "Format email salah";
    }
    if (!values.password) {
      errors.password = "Wajib diisi";
    } else if (values.password.length <= 4) {
      errors.password = "Password harus lebih dari 4 karakter";
    } else if (values.password.length > 10) {
      errors.password = "Password tidak boleh lebih dari 10 karakter";
    }
    return errors;
  };

  const submitComment = () => {
    if(isSubmit){
      document.location.reload();
    }
  }

  return (
    <div className="container-add-comment">
      <h3 className='add-komentar-heading'>Tambahkan Komentar</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-comment">
          <div className="field">
            <input type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange}/>
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <input type="text" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <textarea className='text-comment' type="password" name="password" placeholder="Komentar" cols="30" rows="6" value={formValues.password} onChange={handleChange}></textarea>
          </div>
          <p>{formErrors.password}</p>
          <div className='btn-add-comment'>
            <button disabled className="button btn-reset">Reset</button>
            <button className="button btn-submit" onClick={submitComment}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddingComments;
