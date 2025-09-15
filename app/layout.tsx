"use client";
import { ReactNode, useEffect, useState } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import RoleGate from "@/components/RoleGate";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#ffffffdd",
            colorPrimary: "#0e78f9b9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#ffffffdd",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          <RoleGate>{children}</RoleGate>
        </body>
      </ClerkProvider>
    </html>
  );
}
