import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HodBatchDetails = () => {
  const batches = [
    {
      batch: '2021-25',
      batchid: 202125,
      startedon: '2021-09-20',
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
      startedon: '2023-09-20',
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
    const selectedBatchObj = batches.find((batch) => batch.batchid === batchId);
    if (selectedBatchObj) {
      setStartDate(new Date(selectedBatchObj.startedon));
      setEndDate(new Date()); // Today's date
    }
  };

  return (
    <div className='d-flex flex-row text-light'>
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
        
       

      </div>

      <div className='mt-4 mx-4'>
        <button className='btn btn-outline-primary '>Search</button>
      </div>

    </div>
  );
};

export default HodBatchDetails;
