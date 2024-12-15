import { Box, Typography, Link } from "@mui/material";

function AboutContent() {
    return (
        <Box
            width={{ xs: "90%", md: "584px" }} 
            margin="50px auto" 
            display="flex"
            flexDirection="column"
            gap="15px"
        >
            <Typography
                variant="h4"
                color="white"
                sx={{
                    textAlign: { xs: "center", md: "left" }, 
                }}
            >
                About me
            </Typography>

            <Typography variant="body1" color="white">
                I&apos;m a passionate, self-proclaimed designer who specializes in full stack
                development (React.js & Node.js). I am very enthusiastic about bringing the
                technical and visual aspects of digital products to life. User experience, pixel-perfect
                design, and writing clear, readable, highly performant code matters to me.
            </Typography>

            <Typography variant="body1" color="white">
                I began my journey as a software developer in 2020, and since then, I&apos;ve continued to
                grow and evolve as a developer, taking on new challenges and learning the latest
                technologies along the way. Now, in my early twenties—3 years after starting my
                web development journey—I&apos;m building cutting-edge web applications using
                modern technologies such as React.js, Express, MongoDB, Supabase, and much more.
            </Typography>

            <Typography variant="body1" color="white">
                I am very much a progressive thinker and enjoy working on products end to end, from
                ideation all the way to development.
            </Typography>

            <Typography variant="body1" color="white">
                When I&apos;m not in full-on developer mode, you can find me hovering around on
                LinkedIn or on LeetCode, witnessing the journey of early startups, or enjoying some
                free time. You can follow me on{" "}
                <Link href="https://linkedin.com" target="_blank" color="#3b82f6" underline="hover">
                    LinkedIn
                </Link>{" "}
                where I share my tech-related bites and build in public, or you can follow me on{" "}
                <Link href="https://github.com" target="_blank" color="#3b82f6" underline="hover">
                    GitHub
                </Link>.
            </Typography>
        </Box>
    );
}

export default AboutContent;
