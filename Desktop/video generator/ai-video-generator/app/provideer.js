"use client"

import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

function Provideer({ children }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  )
}

export default Provideer
