import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type CourseProps = {
    image: string;
    title: string;
    description: string;
};

const Course: React.FC<CourseProps> = ({ image, title, description }) => {
    return (
        <div>
            <Card>
                <CardMedia sx={{ height: 140 }} image={image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Course;
