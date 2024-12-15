import { Box, Link, Typography } from "@mui/material";

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




function content() {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={"20px"} marginTop={"50px"}>
            <Box>
                <Typography variant="h2" color="white">
                    Hi, Im Yousef
                </Typography>
                <Typography variant="body1" color="white" maxWidth={"500px"}>
                    I&apos;m a full stack developer (React.js & Node.js) with a focus on creating
                    (and occasionally designing) exceptional digital experiences that are fast,
                    accessible, visually appealing, and responsive. Even though I have been creating
                    web applications for over 7 years, I still love it as if it was something new.
                </Typography>
            </Box>

            <Box>
                <Typography variant="body1" color="white" sx={{ alignItems: "center" }}>
                    <PlaceOutlinedIcon />Ramallah , Palestine
                </Typography>
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Box sx={{ width: "5px", height: "5px", borderRadius: "50%" }} bgcolor={"green"}>.</Box>
                <Typography variant="body1" color="white">
                    Available for new Projects
                </Typography>
            </Box>

            <Box display={"flex"} gap={"30px"} alignItems={"center"}>
                <Link href={"https://github.com/yousefQJ19"}  sx={{ alignItems: "center" }}><GitHubIcon /></Link>
                <Link   sx={{ alignItems: "center" }}><TwitterIcon /></Link>
                <Link  href={"https://www.linkedin.com/in/yousef-najeh-364577234/"} sx={{ alignItems: "center" }}><LinkedInIcon /></Link>
            </Box>
        </Box>
    );
}

export default content;