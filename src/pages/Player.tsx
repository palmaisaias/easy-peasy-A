import { Box, AspectRatio } from "@chakra-ui/react";
import CloudBackground from "../components/CloudBackground";

/**
 * DigitalOcean link – replace with your actual object-storage URL
 */
const VIDEO_SRC =
  "https://your-digitalocean-space.nyc3.digitaloceanspaces.com/movie.mp4";

const Player = () => (
  <CloudBackground>
    <Box maxW="5xl" mx="auto" p="4">
      <AspectRatio ratio={16 / 9} w="full">
        <video src={VIDEO_SRC} controls playsInline />
      </AspectRatio>
    </Box>
  </CloudBackground>
);

export default Player;