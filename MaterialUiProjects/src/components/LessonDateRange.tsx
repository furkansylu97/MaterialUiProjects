import { useState } from "react";
import { Dayjs } from "dayjs";
import { Box, Stack, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import type { DateRange } from "@mui/lab";


export const LessonDateRange = () => {
    const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
    console.log(value);

    return (
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{start:'start', end: 'end'}}>
                <DateRangePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    label="Time"
                    slotProps={{ textField: { fullWidth: false } }}
                    slots={{
                        field: (ownerState) => (
                          <>
                            <TextField {...ownerState.startTextFieldProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...ownerState.endTextFieldProps} />
                          </>
                        ),
                      }}
                />
            </LocalizationProvider>
        </Stack>
    );
};
