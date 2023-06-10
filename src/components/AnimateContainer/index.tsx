'use client'
import React from 'react'
import { AnimatePresence } from 'framer-motion'

interface Props {
    children: React.ReactNode
}

export default function AnimateContainer({ children }: Props) {
  return (
    <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)} >
        {children}
    </AnimatePresence>
  )
}
