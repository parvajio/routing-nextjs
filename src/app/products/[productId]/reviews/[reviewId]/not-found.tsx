"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const NotFound = () => {

  const pathname = usePathname();
  const productId = pathname?.split('/')[2];
  const reviewId = pathname?.split('/')[4];

  return (
    <div>
      <h1>{reviewId} no. Review Not Found in {productId} product Id </h1>
    </div>
  )
}

export default NotFound