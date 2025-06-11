import React from "react";

type CourseProps = {
    image: string;
    title: string;
    description: string;
};

const Course: React.FC<CourseProps> = ({ image, title, description }) => {
    return (
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default Course;
