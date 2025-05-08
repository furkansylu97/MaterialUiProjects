import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { Stack } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export const LessonDatePickerTimePicker = () => {
    
    const [value, setValue] = useState<Dayjs | null>(null)

  return (
    <Stack>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={value} onChange={(newValue) => {setValue(newValue); }} label='Date' slotProps={{textField: { fullWidth: true }}} />
        </LocalizationProvider> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
             <TimePicker value={value} onChange={(newValue) => {setValue(newValue); }} label='Time' slotProps={{textField: { fullWidth: true }}} />
        </LocalizationProvider>
    </Stack>
  )
}
