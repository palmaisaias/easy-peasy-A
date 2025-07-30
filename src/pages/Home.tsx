// src/pages/Home.tsx
'use client';

import React, { useState } from 'react';
import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CloudBackground from '../components/CloudBackground';
import { toast } from '../components/ui/toaster';

const MotionBox = motion(Box);

const errorMessages = [
  "Well, that didn’t work. Try again, champ.",
  "Oops—looks like you flunked cloud navigation.",
  "Are you even trying? Give it another whirl.",
  "Nope. The clouds are laughing at you right now.",
  "Try harder, retard",
  "Wrong answer. iDYYIIOOOTT.",
];

export default function Home() {
  const navigate = useNavigate();

  const inputConfigs = [
    { placeholder: "Paul's love interest", password: 'victoria' },
    { placeholder: 'Brother Pedro, aka...', password: 'pete' },
    { placeholder: 'Movie Setting', password: 'vineyard' },
    { placeholder: "Don Pedro's ingredient", password: 'salt' },
    { placeholder: "Paul's business", password: 'chocolate' },
    { placeholder: 'The Bon Bon...', password: 'deluxe' },
  ];

  const [inputs, setInputs] = useState<string[]>(
    Array(inputConfigs.length).fill('')
  );

  const handleChange = (index: number, value: string) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleSubmit = () => {
    const allCorrect = inputs.every((entry, idx) =>
      entry.trim().toLowerCase() === inputConfigs[idx].password.toLowerCase()
    );

       if (allCorrect) {
      navigate('/player');
    } else {
      // pick a random funny error message
      const description = errorMessages[
        Math.floor(Math.random() * errorMessages.length)
      ];

      toast({
        title: 'Incorrect entry',
        description,
        status: 'error',
        duration: 4000,
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
              fontFamily="'Great Vibes', cursive"
              fontSize={{ base: '4xl', md: '6xl' }}
              color="vine.700"
              textAlign="center"
              letterSpacing="tight"
              mb={{ base: 4, md: 6 }}
            >
              A Walk in the Clouds
            </Heading>

            {inputConfigs.map((cfg, idx) => (
              <Input
                key={idx}
                variant="subtle"
                placeholder={cfg.placeholder}
                type="password"
                value={inputs[idx]}
                onChange={(e) => handleChange(idx, e.currentTarget.value)}
                borderColor="sky.500"
                size={{ base: 'sm', md: 'md' }}
                fontSize={{ base: 'sm', md: 'md' }}
              />
            ))}

            <Button
              colorScheme="sky"
              w="full"
              size={{ base: 'sm', md: 'md' }}
              onClick={handleSubmit}
            >
              Enter
            </Button>
          </VStack>
        </MotionBox>
      </VStack>
    </CloudBackground>
  );
}