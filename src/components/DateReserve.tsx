"use client"
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select,MenuItem } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { use } from "react"

export default function DateReserve() {

  const [reserveDate,setReserveDate] = useState(null)
  const [location,setLocation] = useState('Chula')

  return (
    <div className=" space-x-10  w-fit px-10 py-5 flex flex-row justify-center">
      

      <TextField id="Name-Lastname" label="Name-Lastname" variant="standard" />
      <TextField id="Citizen ID" label="Citizen ID" variant="standard" />
      <Select variant="standard" name="location" id="location" value={location} 
      onChange={(e)=>setLocation(e.target.value)}
      >
        <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat"> Thammasat University Hospital</MenuItem>
      </Select>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white" value={reserveDate} onChange={(value)=>{setReserveDate(value);alert(value)}} />
      </LocalizationProvider>
    </div>
  )
}
