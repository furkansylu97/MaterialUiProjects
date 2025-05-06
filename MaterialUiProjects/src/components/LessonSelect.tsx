import { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

export const LessonSelect = () => {

    const [country, setCountry] = useState<string[]>([]);
    console.log(country);

    return (
        <>
            {/* <Box width='150px'>
                <TextField label='Select Country' select fullWidth value={country} onChange={(e) => setCountry(e.target.value)}>
                    <MenuItem value='TR'>Turkey</MenuItem>
                    <MenuItem value='ABD'>United States</MenuItem>
                    <MenuItem value='FR'>France</MenuItem>
                    <MenuItem value='CAN'>Canada</MenuItem>
                </TextField>
            </Box> */}

            <Box width='150px'>
                <TextField 
                SelectProps={{multiple: true,}} 
                label='Select Country' 
                select fullWidth value={country} 
                onChange={(e) => setCountry(typeof e.target.value === 'string' 
                    ? e.target.value.split(',')
                    : e.target.value)
                }>
                    <MenuItem value='TR'>Turkey</MenuItem>
                    <MenuItem value='ABD'>United States</MenuItem>
                    <MenuItem value='FR'>France</MenuItem>
                    <MenuItem value='CAN'>Canada</MenuItem>
                </TextField>
            </Box>
        </>
    );
};
