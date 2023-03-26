import Navbar from "../../NavBar/Navbar";
import { Outlet, Link } from "react-router-dom";

const Service = (props) => {
  const {
    services,
    setServices,
    showDescription,
    setShowDescription,
    selectedService,
    setSelectedService,
  } = props;

  const handleDescription = (event, serv) => {
    event.preventDefault();
    setShowDescription(serv.name);
  };

  function handleSelectedService(event) {
    event.preventDefault();
    const value = event.target.value;
    setSelectedService(value);
    console.log(value);
  }

  const handleContinue = (event) => {
    event.preventDefault();
  };

  //this is part 1/2 for sending email reminders. Some additional code added in index.html. This doesn't seems to work (it does not really send an email, apparently)
  // const [formState, setFormState] = useState({});

  // const changeHandler = (event) => {
  //   setFormState({ ...formState, [event.target.name]: event.target.value });
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const config = { // we will need to replace some of this info with an encrypted version so users can't see this. 8:40 in the video https://www.youtube.com/watch?v=wUK40U6sPH0
  //     Username: "oslot@mailhog.local",
  //     Password: "9035ACBC1327C0ABC78E7BAA80092A42FFC1",
  //     Host: "smtp.elasticemail.com",
  //     Post: 2525,
  //     To: "oslot@mailhog.local",
  //     From: formState.email,
  //     Subject: "This is the subject",
  //     Body: `${formState.name} connected to you over email`,
  //   };
  //   if(window.Email) {
  //     window.Email.send(config).then(() => alert("email sent succesfully"));
  //   }
  // };
  //above is part 1/2 for sending email reminders. Some additional code added in index.html
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        {/* below is part 2/2 for sending email reminders. Some additional code added in index.html */}
        {/* <div>
              <form className='flex flex-col justify-center items-center' onSubmit={submitHandler}>
                <input type='text' name='name' placeholder='Your Name' value={formState.name || ''} onChange={changeHandler} />
                <input type='email' name='email' placeholder='Your Email' value={formState.email || ''} onChange={changeHandler} />
                <input type='submit' value='Send Email' />
              </form>
            </div> */}
        {/* above is part 2/2 for sending email reminders. Some additional code added in index.html */}
        <div>
          <form className="container">
            <h2>Select a Service</h2>
            {services.map((serv) => (
              <div key={serv.id}>
                <h3>{serv.name}</h3>
                <h4>Price: ${serv.price}</h4>

                {/* More Info button is not running dynamically*/}
                <button onClick={(event) => handleDescription(event, serv)}>
                  More Info
                </button>
                {showDescription && <p>{serv.description}</p>}

                {/* Radio Button to Select Service */}
                <div className="radio">
                  <input
                    type="radio"
                    name="myRadioGroup"
                    value={serv.name}
                    onChange={handleSelectedService}
                    checked={selectedService === serv.name}
                  />
                </div>
              </div>
            ))}
            <br></br>
            {selectedService && (
              <button onClick={(event) => handleContinue(event)}>
                <Link to="/Staff">Continue</Link>
              </button>
            )}
          </form>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Service;
