import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../feature/stockSlice';

const DataNtimePick = ({ symbol }) => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const dispatch = useDispatch();

  const handleDateChange = (start, end) => {
    const formattedStart = start.format('YYYY-MM-DD');
    const formattedEnd = end.format('YYYY-MM-DD');
    console.log("start date", formattedStart);
    console.log("end date", formattedEnd);
    dispatch(fetchStockData({ symbol, startdate: formattedStart, enddate: formattedEnd }));
  };

  const handleStartDateChange = (date) => {
    if (date.isAfter(endDate)) {
      alert("Invalid date format: Start date cannot be after end date.");
    } else {
      setStartDate(date);
      handleDateChange(date, endDate);
    }
  };

  const handleEndDateChange = (date) => {
    if (date.isBefore(startDate)) {
      alert("Invalid date format: End date cannot be before start date.");
    } else {
      setEndDate(date);
      handleDateChange(startDate, date);
    }
  };

  useEffect(() => {
    if (symbol) {
      handleDateChange(startDate, endDate);
    }
  }, [symbol]);

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <MobileDatePicker
          label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DataNtimePick;
