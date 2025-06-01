import React from 'react'

const page = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
    const slug = (await params).slug || [];

    if(slug?.length === 1){
        return (
            <div>viewing docs for fearture{slug[0]}</div>
        )
    }else if(slug?.length === 2){
        return(
            <div>viewing docs for feature {slug[0]} and sub-feature {slug[1]}</div>
        )
    }
    return (
        <div>page</div>
    )
}

export default page