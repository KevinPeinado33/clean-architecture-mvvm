import { Outlet } from 'react-router-dom'

import { NavbarAdmin } from '../molecules/navbar'
import { SidebarAdmin } from '../molecules/sidebar'

export const DashboardTemplate = () => {
  return (
    <main className='flex'>
        
        {/* navbar */}
        <NavbarAdmin />
        
        {/* sidebar */}
        <SidebarAdmin />

        <div className='transform ease-in-out duration-50 w-full mt-20 ml-24 mr-10'>
          <Outlet /> 
        </div>

    </main>
  )
}
