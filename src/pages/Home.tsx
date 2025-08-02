// src/pages/Home.tsx
'use client';

import React, { useState } from 'react';
import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CloudBackground from '../components/CloudBackground';
import { toast } from '../components/ui/toaster';

const MotionBox = motion(Box);

const letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i),
);

const burnMessages = [
  "Rumor has it you can’t read.",
  "This ain’t Pretty Little Liars — try again.",
  "Still not getting any.",
  "Detention-worthy guess.",
  "That’s not the A we’re looking for.",
];

export default function Home() {
  const navigate = useNavigate();

  const [correctLetter] = useState(
    () => letters[Math.floor(Math.random() * letters.length)],
  );
  const [clicked, setClicked] = useState<string[]>([]);
  const [selected, setSelected] = useState('');
  const [found, setFound] = useState(false);

  const handleLetterClick = (letter: string) => {
    if (clicked.includes(letter) || found) return;

    setClicked([...clicked, letter]);

    if (letter === correctLetter) {
      toast({
        title: 'You found it!',
        description: 'That’s the Scarlet Letter.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setFound(true);
      setSelected(letter);
    } else {
      const msg =
        burnMessages[Math.floor(Math.random() * burnMessages.length)];
      toast({
        title: 'Nope.',
        description: msg,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = () => {
    if (selected.trim().toUpperCase() === correctLetter) {
      navigate('/player');
    } else {
      toast({
        title: 'Still wrong.',
        description: 'Are you sure you found the right letter?',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <CloudBackground>
      <VStack
        w="full"
        maxW={{ base: '100%', md: 'xl' }}
        mx="auto"
        p={{ base: 4, md: 8 }}
        gap={{ base: 6, md: 8 }}
      >
        <MotionBox
          bg="sky.50"
          p={{ base: 6, md: 10 }}
          borderRadius="xl"
          boxShadow="lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap={{ base: 4, md: 6 }}>
            <Heading
              fontFamily="'Pacifico', cursive"
              fontSize={{ base: '4xl', md: '6xl' }}
              color="wine.600"
              textAlign="center"
              letterSpacing="tight"
              mb={{ base: 4, md: 6 }}
            >
              Easy A
            </Heading>

            {/* letter grid */}
            <Box
              display="grid"
              gridTemplateColumns={{
                base: 'repeat(4, 1fr)',
                md: 'repeat(6, 1fr)',
              }}
              gap={{ base: 4, md: 6 }}
            >
              {letters.map((ltr) => (
                <Button
                  key={ltr}
                  onClick={() => handleLetterClick(ltr)}
                  disabled={clicked.includes(ltr) || found}
                  colorScheme="red"
                  variant="outline"
                  size={{ base: 'sm', md: 'md' }}
                >
                  {ltr}
                </Button>
              ))}
            </Box>

            <Box fontSize="md" textAlign="center">
              Only one of these letters is the password.
            </Box>

            {/* password entry */}
            <VStack w="full" gap={2}>
              <Input
                variant="subtle"
                placeholder="Enter the letter"
                maxLength={1}
                value={selected}
                onChange={(e) => setSelected(e.currentTarget.value)}
                disabled={!found}
                size={{ base: 'sm', md: 'md' }}
                fontSize={{ base: 'sm', md: 'md' }}
              />
              <Button
                colorScheme="red"
                w="full"
                size={{ base: 'sm', md: 'md' }}
                onClick={handleSubmit}
                disabled={!found}
              >
                Submit
              </Button>
            </VStack>
          </VStack>
        </MotionBox>
      </VStack>
    </CloudBackground>
  );
}