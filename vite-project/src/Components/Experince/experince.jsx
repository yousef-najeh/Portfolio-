import { Box,Typography } from "@mui/material"
import Card from "./card"

function Experience() {
    return ( 
        <Box width={"100%"}
             bgcolor={"#111827"}
             display={"flex"}
             flexDirection={"column"}>
            <Typography variant="body1" 
                        color="white"
                        margin={"20px auto"}
                        p={"5px 30px"}
                        bgcolor={"#374151"}
                        borderRadius={"20px"}>
                            Experience
            </Typography>
            <Box margin={"20px auto"} width={"70%"}>
                <Card/>
            </Box>
        </Box>
    )
}

export default Experience
