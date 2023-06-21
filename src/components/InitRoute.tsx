import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './HomePage'
import GameEndPage from './GameEndPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'result',
        element: <GameEndPage />,
    },
])

function InitRoute() {
    return <RouterProvider router={router} />
}

export default InitRoute
