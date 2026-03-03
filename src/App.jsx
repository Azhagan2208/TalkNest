import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './router/routes.jsx'
import CompleteSubmission from './pages/CompleteSubmission.jsx'

const App = () => {
  return (
    <div>
      <RouterProvider router={routes}/>      
    </div>
  )
}

export default App