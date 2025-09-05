'use client'
import React from 'react'
import { motion } from "motion/react";

interface motionProps{
    head: string
    paragraph: string
}

function MotionHead({head, paragraph}: motionProps) {
  return (
    <div>
        <div className="max-w-3xl mx-auto text-center py-10">
          <motion.h2 
            className="text-5xl font-serif tracking-tight leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            dangerouslySetInnerHTML={{ __html: head }}
          />
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
           
        </div> 
    </div>
  )
}

export default MotionHead