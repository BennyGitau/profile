import { Route, createRoutesFromElements } from "react-router-dom";
import Home from './Pages/Home'
import ErrorBoundary from "./Pages/ErrorBoundary";
import HomeLayout from "./Components/Layout/HomeLayout";
import Skills from "./Pages/Skills";
import Services from './Pages/Services';
import HireMe from "./Pages/HireMe";
import Resume from "./Pages/Resume";
import Blog from "./Pages/Blog";


const router = createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />}/>
        <Route path='skills' element={<Skills />}/>
        <Route path="services" element={<Services />} />
        <Route path="resume" element={<Resume />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="contact" element={< HireMe/>}/>
        <Route path="*" errorElement={<ErrorBoundary />} />
    </Route>
)
export default router