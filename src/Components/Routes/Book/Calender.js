import { Outlet, Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender(props) {
  const {selectedDate, setSelectedDate, selectedTime, setSelectedTime, selectedStaff, setSelectedStaff, staffs, setStaffs} = props;

  console.log(selectedDate)
  //Minimum date to today
  const minDate = new Date();

  //Maximum date to next 7 days 
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);

  function handleDateChange(date) {
    setSelectedDate(date);
    console.log(selectedDate)
  }

  function handleTime(event){
    setSelectedTime(event.target.value);
    console.log(selectedDate, " " ,selectedTime)
  }

  const handleContinue = (event) => {
    event.preventDefault();
  }

  return (
    <>
    <div>Calender</div>
    <button> <Link to="/staff">Back</Link></button>
    <br></br>
    <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
      />
      <div className='time_slot'>
        {selectedStaff.time_slot.map((time,index) => (
          <button key={index} value={time} onClick={handleTime}>{time}</button>
        ))}
      </div>
      <button onClick={(event) => handleContinue(event)}><Link to="/Details">Continue</Link></button>
    <Outlet/>
    </>
  )
}

export default Calender
