import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './HomePage'
import GameEndPage from './GameEndPage'
import ScorePage from './ScorePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'result',
        element: <GameEndPage />,
    },
    {
        path: 'score',
        element: <ScorePage />,
    },
])

function InitRoute() {
    return <RouterProvider router={router} />
}

export default InitRoute
