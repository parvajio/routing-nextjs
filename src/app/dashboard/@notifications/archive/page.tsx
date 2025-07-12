import React from 'react'
import Link from 'next/link'
import { Card } from '../../../../../components/card'

const ArchiveNotifications = () => {
  return (
    <>
      <Card>
        <div>
          Archive Notifications
        </div>
        <Link href={"/dashboard"}>default</Link>
      </Card>
    </>
  )
}

export default ArchiveNotifications