import React from 'react'

const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const productId = (await params).productId;
  return (
    <div>product detail page. {productId}</div>
  )
}

export default page