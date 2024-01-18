import Sider from '../components/Sider'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex items-start'>
      <Sider />
      <main className='max-w-[2230px] mx-auto border h-screen w-[calc(100%-244px)] overflow-y-auto'>
        <Outlet />
      </main>
    </div>

  )
}

export default Home
