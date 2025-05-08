import { Button, Dialog } from "@mui/material";
import { useState } from "react";

export const LessonDialog = () => {

    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setDialogOpen(true)}>Open the Dialog</Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}></Dialog>
        </>
    );
};
