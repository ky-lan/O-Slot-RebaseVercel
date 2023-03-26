import "./SignUp.scss";
import { useState } from "react";
import { auth } from "../../firebaseUtils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";

//below is Kewin's added code

const initialValues = {
  email: '',
  password: '',
  confirmPassword: ''
}

const onSubmit = values => {
  console.log('Form data', values)
}

const validate =  values => {
  // values.email values.password values.confirmPassword
  // errors.email errors.password errors.confirmPassword
  // errors.email = 'This field is required'

  let errors = {}

  if(!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if(!values.password) {
    errors.password = 'Required'
  }

  if(!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  }


  return errors
}

function SignUp() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  console.log('Form errors', formik.errors)


//above is Kewin's added code
//const SignUp = () => { //Kewin disabled this for now
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    // form validations
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);

        // Clear form fields
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
      <div className='form-control'>
        <h3>No Account? Register Below:</h3>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className='form-control'>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className='error'>{formik.errors.password}</div>
        ) : null}
      </div>

      <div className='form-control'>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.errors.confirmPassword ? (
          <div className='error'>{formik.errors.confirmPassword}</div>
        ) : null}
      </div>

        <button type='submit'>Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
