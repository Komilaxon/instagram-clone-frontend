import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import { useSelector } from 'react-redux'
import Home from "./pages/Home"
import { RootState } from "./redux/store"
import Register from "./pages/register/Register"
import BirthdaySelect from "./pages/register/BirthdaySelect"
import EmailOrPhoneVerification from "./pages/register/EmailOrPhoneVerification"
import HeroHome from "./pages/HeroHome"

function App() {
  const user = useSelector((state: RootState) => state.user);
  const { tab_index } = useSelector((state: RootState) => state.register);

  const RegisterUserPages = () => {
    const components: { [key: number]: JSX.Element } = {
      0: <Register />,
      1: <BirthdaySelect />,
      2: <EmailOrPhoneVerification />,
    };
    return components[tab_index] || null;
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: user?.auth ? <Home /> : <Login />,
      children: [
        {
          path: "/",
          element: <HeroHome />
        }, {
          path: "/search",
          element: <></>
        }
      ]
    },
    {
      path: "/sign-up",
      element: <div className="flex-center h-screen flex-col">
        <RegisterUserPages />
        <div className='lg:border  md:border w-full max-w-[360px] mt-5 py-[21px] gap-1 border-[#DBDBDB] flex items-center justify-center'>
          <p className='text-sm text-black'>Have an account?</p>
          <Link to={'/'} className='text-[#0095F6] font-semibold text-sm cursor-pointer'>Log in</Link>
        </div>
      </div>
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App;
