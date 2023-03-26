import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About/About";
import Service from "./Components/Routes/Book/Service";
import Staff from "./Components/Routes/Book/Staff";
import Calender from "./Components/Routes/Book/Calender";
import Details from "./Components/Routes/Book/Details";
import ConfirmationPage from "./Components/Routes/Book/ConfirmationPage";
import Contact from "./Components/Routes/Contact/Contact";
import SignIn from "./Components/Sign-in/SignIn";
import Privacy from "./Components/Routes/Privacy/Privacy";
import Cookies from "./Components/Routes/Cookies/Cookies";
import Terms from "./Components/Routes/TermsAndConditions";

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Haircut",
      price: 35,
      description:
        "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
      moreInfo: false,
    },
    {
      id: 2,
      name: "Beard ",
      price: 20,
      description:
        "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
      moreInfo: false,
    },
    {
      id: 3,
      name: "Head Massage",
      price: 25,
      description:
        "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
      moreInfo: false,
    },
    {
      id: 4,
      name: "Hair Styling",
      price: 10,
      description:
        "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
      moreInfo: false,
    },
  ]);

  const [staffs, setStaffs] = useState([
    {
      id: 1,
      name: "ABC",
      description:
        "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
      time_slot: [
        "10.00 am",
        "11.00 am",
        "12.00 pm",
        "02.00 pm",
        "03.00 pm",
        "04.00 pm",
        "05.00 pm",
        "06.00 pm",
      ],
    },
    {
      id: 2,
      name: "DEF ",
      description:
        "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
      time_slot: [
        "10.00 am",
        "11.00 am",
        "12.00 pm",
        "02.00 pm",
        "03.00 pm",
        "04.00 pm",
        "05.00 pm",
        "06.00 pm",
      ],
    },
    {
      id: 3,
      name: "GHI",
      description:
        "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
      time_slot: [
        "10.00 am",
        "11.00 am",
        "12.00 pm",
        "02.00 pm",
        "03.00 pm",
        "04.00 pm",
        "05.00 pm",
        "06.00 pm",
      ],
    },
    {
      id: 4,
      name: "KLM",
      description:
        "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae varius lectus. Curabitur sit amet ex gravida erat.",
      time_slot: [
        "10.00 am",
        "11.00 am",
        "12.00 pm",
        "02.00 pm",
        "03.00 pm",
        "04.00 pm",
        "05.00 pm",
        "06.00 pm",
      ],
    },
  ]);

  // Variables for service, staff , time slot: Story Point 14 can be done by displaying these vairables
  const [showDescription, setShowDescription] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  //  Variables for Form Details: Story Point 15 can be done by displaying these vairables
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [appointmentNotes, setAppointmentNotes] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/service"
          element={
            <Service
              services={services}
              setServices={setServices}
              showDescription={showDescription}
              setShowDescription={setShowDescription}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          }
        />
        <Route
          path="staff"
          element={
            <Staff
              selectedService={selectedService}
              staffs={staffs}
              setStaffs={setStaffs}
              selectedStaff={selectedStaff}
              setSelectedStaff={setSelectedStaff}
            />
          }
        />

        <Route
          path="Calender"
          element={
            <Calender
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              selectedStaff={selectedStaff}
              setSelectedStaff={setSelectedStaff}
              staffs={staffs}
              setStaffs={setStaffs}
            />
          }
        />

        <Route
          path="Details"
          element={
            <Details
              contact={contact}
              setContact={setContact}
              email={email}
              setEmail={setEmail}
              fname={fname}
              setFname={setFname}
              lname={lname}
              setLname={setLname}
              appointmentNotes={appointmentNotes}
              setAppointmentNotes={setAppointmentNotes}
            />
          }
        />

        <Route
          path="Confirmation Page"
          element={
            <ConfirmationPage
              selectedService={selectedService}
              selectedStaff={selectedStaff}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              contact={contact}
              email={email}
              fname={fname}
              lname={lname}
              appointmentNotes={appointmentNotes}
              setContact={setContact}
              setEmail={setEmail}
              setFname={setFname}
              setLname={setLname}
              setAppointmentNotes={setAppointmentNotes}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
//npm add formik