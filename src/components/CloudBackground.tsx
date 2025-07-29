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
      bgImage="url('https://play-lh.googleusercontent.com/proxy/cUVgmQOxGWI67trSBHHIL_soFyfNzZENWezLgl6dwlIyE9uJyjxCORMzJzYFznRmkRinWko6u_xCM7yY6KoI1iu9OetRV00nGUWwcHfWsLkk_dOG4w=s1920-w1920-h1080')"
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