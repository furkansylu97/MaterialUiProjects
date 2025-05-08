import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { Stack } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


export const LessonDatePickerTimePicker = () => {
    
    const [value, setValue] = useState<Dayjs | null>(null)

  return (
    <Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={value} onChange={(newValue) => {setValue(newValue); }} label='Date' slotProps={{textField: { fullWidth: true }}}  />
        </LocalizationProvider>
    </Stack>
  )
}
