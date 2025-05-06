import { useState } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

export const LessonSelect = () => {

    const [country, setCountry] = useState('');
    console.log(country);

    return (
            <Box width='150px'>
                <TextField label='Select Country' select fullWidth value={country} onChange={(e) => setCountry(e.target.value)}> {/* default value of select is true */}
                    <MenuItem value='TR'>Turkey</MenuItem>
                    <MenuItem value='ABD'>United States</MenuItem>
                    <MenuItem value='FR'>France</MenuItem>
                    <MenuItem value='CAN'>Canada</MenuItem>
                </TextField>
            </Box>
    );
};
