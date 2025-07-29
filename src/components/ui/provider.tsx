// src/components/ui/provider.tsx
"use client"

import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import system from "../../theme"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export function Provider({
  children,
  ...colorModeProps
}: React.PropsWithChildren<ColorModeProviderProps>) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...colorModeProps}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}