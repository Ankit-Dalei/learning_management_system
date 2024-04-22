import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HodQuizesDetails = () => {
    const batches = [
        {
            batch: '2021-25',
            batchid: 202125,
            startedon: '2021-09-20',  //  YYYY-MM-DD
            endon: '2025-03-20' 
        },
        {
            batch: '2022-26',
            batchid: 202226,
            startedon: '2022-09-20', 
            endon: '2026-03-20' 
        },
        {
            batch: '2023-27',
            batchid: 202327,
            startedon: '2023-09-20', //  YYYY-MM-DD
            endon: '2027-03-20' 
        },
        {
            batch: '2024-28',
            batchid: 202428,
            startedon: '2024-09-20', 
            endon: '2028-03-20' 
        }
    ];

    const [selectedBatch, setSelectedBatch] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleBatchChange = (e) => {
        const batchId = parseInt(e.target.value);
        setSelectedBatch(batchId);

        // Find the selected batch object from the array
        const selectedBatchObj = batches.find(batch => batch.batchid === batchId);
        if (selectedBatchObj) {
            setStartDate(new Date(selectedBatchObj.startedon));
            setEndDate(new Date()); // Today's date
        }
    };

    return (
        <div className='d-flex flex-column text-light'>
      <div className="text-light p-0 m-0 d-flex flex-row ">
        <div className="d-flex flex-row d-flex align-items-center">
          <div>
            <label htmlFor="batch">Batches :</label>
            <select value={selectedBatch} onChange={handleBatchChange} id='batch'>
              <option value="">Select Batch</option>
              {batches.map((batch) => (
                <option key={batch.batchid} value={batch.batchid}>
                  {batch.batch}
                </option>
              ))}
            </select>
          </div>

        </div>
        <div className="d-flex flex-row ms-4">
          <div>
            <label htmlFor="fromDate">From Date:</label>
            <DatePicker
              id="fromDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              minDate={startDate} // Set minDate to startDate
              maxDate={endDate} // Set maxDate to endDate
            />
          </div>
          <div>
            <label htmlFor="toDate">To Date:</label>
            <DatePicker
              id="toDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              minDate={startDate} // Set minDate to startDate
              maxDate={endDate} // Set maxDate to endDate
            />
          </div>

        </div>
        <div className=' mx-4 d-flex flex-column align-items-center'>
          <p>Start Date: {startDate ? startDate.toDateString() : ''}</p>
          <p>End Date: {endDate ? endDate.toDateString() : ''}</p>
        </div>

      </div>

      <div className='mt-4'>
        <button className='btn btn-outline-primary '>Search</button>
      </div>

    </div>
    );
}

export default HodQuizesDetails;
