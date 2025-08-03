// src/pages/Player.tsx
'use client';

import React, { useEffect } from 'react';
import { Box, Button, Flex, Spinner, Text, VStack } from '@chakra-ui/react';

const VIDEO_SRC = 'https://youtu.be/q0sNRgi-I4s?si=81SEEslcak5EUICp';

export default function Player() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = VIDEO_SRC;
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      minH="100vh"
      justify="center"
      align="center"
      bgGradient="linear(to-br, pink.400, orange.200)"
      px={4}
    >
      <VStack
        gap={6}
        bg="whiteAlpha.800"
        p={8}
        borderRadius="2xl"
        boxShadow="2xl"
        maxW="md"
        w="full"
      >
        <Spinner size="xl" color="pink.600" />
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="pink.800"
          textAlign="center"
        >
          Hang tight — your movie’s loading…
        </Text>
        <a href={VIDEO_SRC} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
          <Button colorScheme="pink" w="full" size="md">
            Click here if nothing happens
          </Button>
        </a>
      </VStack>
    </Flex>
  );
}