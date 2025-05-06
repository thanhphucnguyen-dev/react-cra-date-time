import { useEffect, useState } from 'react';
import './DateContainer.css';
import moment from 'moment/moment';

const DateContainer = () => {
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    console.log(date);
  }, [date])

  return (
    <div className="date-container">  
      <input type="date" name="" id="" className="date-input" onChange={(e) => setDate(e.target.value)} />
      <section className="date-display" date={date}>
        My date is: {moment(date).format('LL')}
      </section>
    </div>
  );

}

export default DateContainer;
