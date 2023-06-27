import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { Box, TextField } from '@mui/material'
import { useState } from 'react'
import { DateRangePicker } from '@mui/x-date-pickers-pro';

const MuiDateRangePicker = () => {
    const [value, setValue] = useState([null, null])
    console.log({ value })

    return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                    className='form-control py-3 rounded-2'
                    startText='Check-in'
                    endText='Check-out'
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue)
                    }}
                    render Input={(startProps, endProps) => (
                        <>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                        </>
                    )}
                />
            </LocalizationProvider>

    )
}

export default MuiDateRangePicker