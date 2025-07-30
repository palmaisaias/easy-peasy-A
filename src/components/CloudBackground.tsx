import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MotionBox = motion(Box);

const CloudBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPositionX: ["0%", "100%"],
      transition: { repeat: Infinity, duration: 60, ease: "linear" },
    });
  }, [controls]);

  return (
    <MotionBox
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('https://m.media-amazon.com/images/S/pv-target-images/31811239a8eefccd46211ec9eee7c36ac571ea3d93a8ab819f1974be4535d704._SX1080_FMjpg_.jpg')"
      bgSize="cover"
      bgRepeat="repeat-x"
      bgPos="0% 50%"
      animate={controls}
    >
      {children}
    </MotionBox>
  );
};

export default CloudBackground;