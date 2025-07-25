import React from 'react'
import { notFound } from 'next/navigation';

const getRandomInt = (count: number) =>{
  return Math.floor(Math.random() * count)
}

const page = async ({ params }: { params: Promise<{ productId: string; reviewId: string }> }) => {

  const randm = getRandomInt(2);
  if(randm == 1){
    throw new Error("Error in review Id");
  }

  const { productId, reviewId } = await params;

  if(parseInt(reviewId) > 1000){
    notFound();
  }

  return (
    <div>review {reviewId} and product {productId} h</div>
  )
}

export default page