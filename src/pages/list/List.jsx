import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setoptions] = useState(location.state.options)
  console.log(location)
  return (
    <div><Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type='text' />


            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}
              </span>
              <input type='text' />
              {openDate && (<DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirst Selection={false}
                ranges={date}
                className="date"
                minDate={new Date()} />
              )}

            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">


                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="1sOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="1sOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adults
                  </span>
                  <input type="number" min={1} className="1sOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="1sOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="1sOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
<button>Search</button>

          </div>


        

        <div className="listResult"> 
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        </div>
      </div>
    </div>
</div>

  )
}

export default List