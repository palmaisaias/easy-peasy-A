// src/pages/Home.tsx
'use client';

import React, { useState } from 'react';
import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CloudBackground from '../components/CloudBackground';
// ← pull in the standalone toast you set up earlier
import { toast } from '@/components/ui/toaster';

const MotionBox = motion(Box);

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
    const allCorrect = inputs.every(
      (entry, idx) => entry === inputConfigs[idx].password
    );

    if (allCorrect) {
      navigate('/player');
    } else {
      // use your standalone toast function
      toast({
        title: 'Incorrect entry',
        description:
          "One or more of your answers don’t match their clues. Try again.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <CloudBackground>
      <VStack gap={8} align="stretch" w="full" maxW="xl" mx="auto" p={4}>
        <MotionBox
          bg="sky.50"
          p={10}
          borderRadius="xl"
          boxShadow="lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap={6}>
            <Heading size="lg" color="vine.700">
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
              />
            ))}

            <Button colorScheme="sky" w="full" onClick={handleSubmit}>
              Enter
            </Button>
          </VStack>
        </MotionBox>
      </VStack>
    </CloudBackground>
  );
}
