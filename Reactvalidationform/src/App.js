import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", mobile: "" };
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

//Username Validation
    if (!values.username) 
    {
      errors.username = "Username is required!";
    }
      
    if((values.username.length <=2) || (values.username.length >10))
    {
          errors.username ="Username length must be between 2 and 10";
    }
      
    if(!isNaN(values.username))
    {
          errors.username = "** Only Character are Allowed";
    }
  

//validation for mobile
    if(values.mobile == "")
    {
        errors.mobile=  "Please Fill the mobie number";
        
    }
    if(isNaN(values.mobile))
    {
        errors.mobile= "Only Numbers are Allowed";
        
    }
    if(values.mobile.length!=10)
    {
        errors.mobile ="Mobile number must by only 10 digits";
        
    }
    
    return errors;
};



  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify()}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="mobile"
              value={formValues.mobile}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.mobile}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;