import { Outlet, Link } from "react-router-dom";

function Staff(props) {
  const {selectedService,staffs,setStaffs,selectedStaff, setSelectedStaff} = props;

  function handleOnChange(event) {
    const value = event.target.value;
    setSelectedStaff(staffs.find(staff => staff.name === value));
  }

  const handleContinue = (event) => {
    event.preventDefault();
    console.log(selectedStaff)
  }

  return (
    <>
    <h3>Staff</h3>
     <div>
      {staffs.map((staff) => (
        <div key={staff.id}>
          <h3>{staff.name}</h3>
          <input
            type="radio"
            name="myRadioGroup"
            value={staff.name}
            onChange={handleOnChange}
            checked={selectedStaff === staff.name}
          />
          <p>{staff.description}</p>
        </div>
      ))}
    </div>
    <button> <Link to="/">Back</Link></button>

    {
          selectedStaff &&
          <button onClick={(event) => handleContinue(event)}><Link to="/Calender">Continue</Link></button>
        }
    <Outlet />
    </>
  )
}

export default Staff