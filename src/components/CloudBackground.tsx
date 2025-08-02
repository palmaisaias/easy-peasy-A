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
      bgImage="url('https://images.squarespace-cdn.com/content/v1/5a7dcf69d7bdce185884a6b5/1568122951523-J3DESIZROJTR3J8D0QJN/ea+4.jpeg')"
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