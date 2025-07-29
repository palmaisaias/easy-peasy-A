// src/components/ui/toaster.tsx
"use client";
import * as React from "react";
// ✅ import createStandaloneToast from the toast package
import { createStandaloneToast } from "@chakra-ui/toast";
// Portal still comes from core
import { Portal } from "@chakra-ui/react";

const { toast, ToastContainer } = createStandaloneToast();

// re‑export the toast function for calls anywhere
export { toast };

export function Toaster() {
  return (
    <Portal>
      <ToastContainer />
    </Portal>
  );
}
