import React from 'react'
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: Promise<{ productId: string; reviewId: string }> }) => {
  const { productId, reviewId } = await params;

  if(parseInt(reviewId) > 1000){
    notFound();
  }

  return (
    <div>review {reviewId} and product {productId}</div>
  )
}

export default page