import React from 'react'

const page = async({params}:{params: Promise<{productId: string; reviewId: string}>}) => {
    const {productId, reviewId} = await params;
  return (
    <div>review {reviewId} and product {productId}</div>
  )
}

export default page