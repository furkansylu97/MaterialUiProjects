import { Box, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const LessonToolTip = () => {
    return (
        <>
            <Box sx={{padding: '100px'}}>
                {/*Default placement value is bottom*/}
                <Tooltip title="Delete" placement="top-end">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    );
};
