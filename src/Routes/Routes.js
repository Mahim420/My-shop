import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home/Home';
import Sajek_Booked from '../Components/Origin/Sajek/Sajek_Booked';
import Shreemangal from '../Components/Origin/Shreemangal/Shreemangal';
import Sundar_Bans from '../Components/Origin/Sundar_Bans/Sundar_Bans';
import Blog from '../Components/Blog/Blog';
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration';
import PrivateRoutes from './PrivateRoutes';
import Rules from '../Components/Terms&Condtions/Rules';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/', element:<Home></Home>},
            {path:'/sajek', element:<Sajek_Booked></Sajek_Booked>},
            {path:'/shree', element:<Shreemangal></Shreemangal>},
            {path:'/sundor', element:<Sundar_Bans></Sundar_Bans>},
            {path:'/blog', element:<PrivateRoutes><Blog></Blog></PrivateRoutes>},
            {path:'/login', element:<Login></Login>},
            {path:'/signup', element:<Registration></Registration>},
            {path:'/terms', element:<Rules></Rules>}
        ]
    }
])