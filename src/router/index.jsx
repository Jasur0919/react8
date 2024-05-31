import { Route, RouterProvider,  createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import App from '../App'
import { Login, Users } from "../pages"
const index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
            <Route index element={<Login />}/>
            <Route path=" users" element={<Users />}/>

            </Route>
        )
    )
  return <RouterProvider router={router}/>
}

export default index