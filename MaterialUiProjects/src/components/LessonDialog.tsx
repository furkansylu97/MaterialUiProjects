import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

export const LessonDialog = () => {

    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setDialogOpen(true)}>Open the Dialog</Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Which one do you like?</DialogTitle>
                <DialogContent>
                    <DialogContentText>Which Front-End framework do you prefer?</DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setDialogOpen(false)}>Angular</Button>
                        <Button onClick={() => setDialogOpen(false)}>React</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    );
};
