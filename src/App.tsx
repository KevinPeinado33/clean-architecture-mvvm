import 'reflect-metadata'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/application/router'

const App = () => <RouterProvider router={ router } />

export default App
