import React from 'react'
import { Card } from '../../../../components/card'
import Link from 'next/link'

const Notifications = () => {
  return (
    <>
      <Card>
        <div>
          Notifications
        </div>
        <Link href={"/dashboard/archive"}>Archive</Link>
      </Card>
    </>
  )
}

export default Notifications