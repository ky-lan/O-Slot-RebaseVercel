import React from 'react';
import { Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";  

function Details(props) {
    const {contact, setContact, email, setEmail, fname, lname, setFname, setLname, appointmentNotes, setAppointmentNotes, allDetails} = props
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        if( contact && email && fname && lname !== "") {
            console.log(contact, email, fname ,lname, appointmentNotes);
            navigate("/Confirmation Page")
        }
        else {
            alert(" Some Details are missing !")

        }
    }

    function handleContact(event){
        setContact(event.target.value)
    }

    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handleFname(event){
        setFname(event.target.value)
    }

    function handleLname(event){
        setLname(event.target.value)
    }

    function handleAppointmentNotes(event){
        setAppointmentNotes(event.target.value)
    }

    return (
    <>
    <form>
        <h3>Enter your personal Details here</h3>
        <label htmlFor="contact">Contact Number:</label>
        <input type="tel" id="contact" value={contact} onChange={handleContact} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" required></input>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmail} placeholder='Email' required></input>
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" value={fname} onChange={handleFname} placeholder="First Name" required></input>
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" value={lname} onChange={handleLname} placeholder="Last Name" required></input>
        <label htmlFor="email">Appointment Notes:</label>
        <textarea rows={10} cols={8} id="notes" value={appointmentNotes} onChange={handleAppointmentNotes} placeholder="Additional Information"></textarea>    
    </form>
    
    <button onClick={handleSubmit}>Book Appointment</button> 

    {
        allDetails &&
        {}
    }
    <Outlet />
    </>
  )
}

export default Details