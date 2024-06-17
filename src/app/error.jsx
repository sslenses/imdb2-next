'use client'

import { useEffect } from 'react'
import React from 'react'

export default function error({error, reset}) {
    useEffect(()=>{
    console.log('error')
  },[error])
  return (
    <div className='text-center mt-10'>
        <h1>Error banget</h1>
    </div>
  )
}
