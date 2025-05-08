import React from "react";
import { useState } from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const LessonSnackbar = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClick = () => {
        setOpenSnackbar(true);
    };

    const action = (
        <React.Fragment> {/* React Fragment tag cannot be defined as <></> in a variable */} 
            <Button color="secondary" size="small">Undo</Button>
            <IconButton>
                <CloseIcon sx={{color: 'white'}} />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar open={openSnackbar} message="You received an error message" action={action} />
        </>
    );
};
