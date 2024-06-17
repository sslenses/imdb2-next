'use client'

import { useEffect } from 'react'
import React from 'react'

export default function error() {
    useEffect(()=>{
    console.log('error')
  },[])
  return (
    <div>
        <h1>Error</h1>
    </div>
  )
}
