import { Button, Dialog } from "@mui/material";

export const LessonDialog = () => {
    return (
        <>
            <Button>Open the Dialog</Button>
            <Dialog open={false}></Dialog>
        </>
    );
};
