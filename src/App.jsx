import { createBrowserRouter, RouterProvider } from "react-router-dom"
import router from "./router"

const routes = createBrowserRouter(router)
function App() {
  return (<RouterProvider router={routes}/>)
}

export default App
