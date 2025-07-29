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
      bgImage="url('https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
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