/* eslint-disable react/prop-types */
import { Typography,Box,Link } from "@mui/material";


function ProjectCard({data}) {
    return ( 
        <Box width={"60%"}
             display={"flex"} 
             justifyContent={"space-between"} 
             bgcolor={"#111827"}
             m={"20px auto"}
             p={"20px"}
             flexDirection={{xs:"column",md:"row"}}>

                    <Box display={"flex"} 
                         flexDirection={"column"} 
                         gap={"10px"} flex={"2"}>

                        <Link variant="h5" sx={{color:"white",textDecoration:"none"}} href={`${data.url}`}>
                            {data.title}
                        </Link>

                        <Box display={"flex"} gap={"10px"}>
                            {
                                data.technologies.map((tec,index)=>(
                                    <Typography variant="body1" 
                                                color="white" 
                                                p={"5px"}
                                                borderRadius={"10px"}
                                                key={index}
                                                bgcolor={"black"}>
                                                    {tec}
                                    </Typography>
                                ))
                            }
                        </Box>

                        <Typography  variant="body1" color="white"> 
                            {data.description}
                        </Typography>
                    </Box>                

                <Box>
                    <Typography variant="body1" color="white" flex={"1"}>
                        {data.timeline}
                    </Typography>
                </Box>
        </Box>
    );
}

export default ProjectCard;