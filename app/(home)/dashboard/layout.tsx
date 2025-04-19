import { ProtectedLayout } from '@/component/common/ProtectedLayout'
import React from 'react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <ProtectedLayout role='admin'>
    <div>{children}</div>
    </ProtectedLayout>
  )
}

export default DashboardLayout