import { Box, AspectRatio } from "@chakra-ui/react";
import CloudBackground from "../components/CloudBackground";

/**
 * DigitalOcean link – replace with your actual object-storage URL
 */
const VIDEO_SRC =
  "https://a-grape-walk.sfo3.cdn.digitaloceanspaces.com";

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