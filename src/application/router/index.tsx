import {
    createBrowserRouter,
    Navigate
} from 'react-router-dom'

import { AuthTemplate, DashboardTemplate } from '@/ui/components/templates'
import { HomePage } from '@/ui/pages/home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/dashboard' replace />
    },
    {
        path: '/dashboard',
        element: <DashboardTemplate />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'products',
                element: <>products</>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthTemplate />,
        children: [
            {
                path: '',
                element: <Navigate to='/auth/login' replace />
            },
            {
                path: 'login',
                element: <>login pe</>
            },
            {
                path: 'register',
                element: <>register pe</>
            }
        ]
    }
])
