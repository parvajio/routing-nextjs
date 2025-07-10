"use client"
import Link from 'next/link';
import React, { use } from 'react'

const Page = ({params, searchParams}: {
    params: Promise<{ articleId: string}>;
    searchParams: Promise<{lang? : "en"| "bn" }>
}) => {
    const {articleId} =  use(params);
    const {lang = "en"} =  use(searchParams);

  return (
    <>
        <h1>Reading in {lang}</h1>
        <Link href={`/articles/${articleId}?lang=en`}> English </Link>
        <Link href={`/articles/${articleId}?lang=bn`}> Bangla </Link>
    </>
  )
}

export default Page