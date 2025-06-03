import { Metadata } from "next";

type props = {
    params: Promise<{ productId: string }> 
}

export const generateMetadata = async ({params}: props): Promise<Metadata> =>{
  const id = (await params).productId;
  const title = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`iphone ${id}`)
    }, 100)
  })
  return {
    title: `Product ${title}`,
  }}

const page = async ({ params }: props) => {
  const productId = (await params).productId;
  return (
    <div>product detail page. {productId}</div>
  )
}

export default page