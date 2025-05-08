import { useState } from "react";
import { Box, Skeleton } from "@mui/material";

export const LessonSkeleton = () => {
    const [loading, setLoading] = useState(true);

    return <Box>
            {loading ? 
            (<Skeleton 
                width={250} 
                height={145} 
                animation="wave" 
                />
            ) : (
                <img 
                src="https://plus.unsplash.com/premium_photo-1724634778442-591d8d42ce2c?q=80&w=2119&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="skeleton" 
                width={250} 
                height={145} 
                />
            )
            }
        </Box>;
};
