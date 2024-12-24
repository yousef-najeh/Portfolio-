import ProjectCard from "./projectCard";
import {Box} from "@mui/material"
import { useEffect, useState } from "react";

function ProjectSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/data.json") // Adjust the path if the file is not in the root public directory
        .then((response) => {
            if (!response.ok) {
            throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((data) => setProjects(data))
        .catch((error) => console.error("Error loading data:", error));
    }, []);

    return ( 
        <Box bgcolor={"#030712"} display={"flex"} flexWrap={"wrap"}>
           {
            projects.map((project,index)=>(
                <ProjectCard data={project} key={index}/>
            ))
           }
        
        </Box>
    );
}

export default ProjectSection;