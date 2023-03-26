import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import "./SignIn.scss";
import { useState } from "react";
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
} from "../../firebaseUtils";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from "./SignUp";
import AuthDetails from "./AuthDetails";

import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import Footer from "../Footer/Footer";
import { useFormik } from "formik";


//below is Kewin's added code

const initialValues = {
  email: '',
  password: ''
  // confirmPassword: ''
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

  // if(!values.confirmPassword) {
  //   errors.confirmPassword = 'Required'
  // }


  return errors
}

function SignIn() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  console.log('Form errors', formik.errors)


//above is Kewin's added code


// const SignIn = () => { Kewin disabled this for now
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-secondary"
        imageName={require("../../Assets/signUp.jpg")}
      />

      <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="formContainer">
          {/* <form onSubmit={signInHandler}> */}
            <h3>Log Into Your Account</h3>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
        </div>

        <div>
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

          <button className="signInBtn" type="submit">
            Sign In
          </button>
          <p className="error pink-text center-align"></p>

          <h5>Log in in With:</h5>
          <div className="buttonContainer">
            <FcGoogle onClick={signInWithGoogle} />
            <GrFacebook onClick={signInWithFacebook} color={"#4267B2"} />
          </div>
        </form>

        <SignUp />
      </div>

      <AuthDetails />
      <Footer />
    </>
  );
};

export default SignIn;
