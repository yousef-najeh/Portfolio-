import { Box, Typography } from "@mui/material";
import Skill from "./skill";

function Skills() {
  return (
    <Box
      width={"100%"}
      bgcolor={"#111827"}
      display={"flex"}
      flexDirection={"column"}
      id={"Skills"}
    >
      <Typography
        p={"5px 30px"}
        borderRadius={"20px"}
        margin={"20px auto"}
        variant="body1"
        color="white"
        bgcolor={"#374151"}
      >
        Skills
      </Typography>
      <Box display={"flex"} marginLeft={"10%"} width={"80%"} gap={"5px"} flexWrap={"wrap"}>
        {/* Frontend Skills */}
        <Box>
          <Typography
            variant={"body1"}
            color={"white"}
            textAlign={"center"}
            bgcolor={"#374151"}
          >
            Frontend Skills
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            <Skill text={"React"} photo={"./icon-react.svg"} />
            <Skill text={"CSS"} photo={"./css.png"} />
            <Skill text={"Sass"} photo={"./icon-sass.svg"} />
            <Skill text={"Figma"} photo={"./icon-figma.svg"} />
            <Skill text={"MUI"} photo={"./mui.png"} />
            <Skill text={"ChakraUI"} photo={"./chakraui.png"} />
            <Skill text={"JavaScript"} photo={"./icon-javscript.svg"} />
          </Box>
        </Box>

        {/* Backend Skills */}
        <Box mb={4}>
          <Typography
            variant={"body1"}
            color={"white"}
            textAlign={"center"}
            bgcolor={"#374151"}
          >
            Backend Skills
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            <Skill text={"Node.js"} photo={"./icon-nodejs.svg"} />
            <Skill text={"Express"} photo={"./icon-express.svg"} />
            <Skill text={"Socket.io"} photo={"./icon-socket.svg"} />
          </Box>
        </Box>

        {/* Database Skills */}
        <Box mb={4}>
          <Typography
            variant={"body1"}
            color={"white"}
            textAlign={"center"}
            bgcolor={"#374151"}
          >
            Database Skills
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            <Skill text={"MongoDB"} photo={"./icon-mongodb.svg"} />
            <Skill text={"Supabase"} photo={"./icon-supabase.png"} />
            <Skill text={"MySQL"} photo={"./mysql.png"} />
          </Box>
        </Box>

        {/* Basic & Miscellaneous Skills */}
        <Box>
          <Typography
            variant={"body1"}
            color={"white"}
            textAlign={"center"}
            bgcolor={"#374151"}
          >
            Basic & Miscellaneous Skills
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            <Skill text={"Java"} photo={"./java.webp"} />
            <Skill text={"C++"} photo={"./cpp.png"} />
            <Skill text={"Git"} photo={"./icon-git.svg"} />
            <Skill text={"GitHub"} photo={"./githup.png"} />
            <Skill text={"Data Structures"} photo={"./datast.png"} />
            <Skill text={"OOP"} photo={"./oop.png"} />
            <Skill text={"Algorithm"} photo={"./algo.png"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;
