import { useDispatch, useSelector } from 'react-redux';
import Sider from '../components/sider/Sider';
import { Outlet } from 'react-router-dom';
import { RootState } from '../redux/store';
import MiniSider from '../components/sider/MiniSider';
import { useEffect } from 'react';
import { setSiderState } from '../redux/reducers/sider.reducer';

const Home = () => {
  // Get the search and notification visibility from the Redux store
  const { search_visible, notification_visible } = useSelector((state: RootState) => state.sider);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSearchVisibility = () => {
      const newInnerWidth = window.innerWidth;
      dispatch(setSiderState({ search_visible: newInnerWidth < 1115 }));
    };
    updateSearchVisibility(); // Initial call
    const handleResize = () => {
      updateSearchVisibility(); // Call the same function on resize
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='flex items-start justify-between'>
      {/* Conditionally render MiniSider or Sider based on visibility */}
      {search_visible || notification_visible ? <MiniSider /> : <Sider />}
      <main className={`flex justify-center h-screen ${search_visible || notification_visible ? 'w-[calc(100%-74px)]' : 'w-[calc(100%-244px)]'} overflow-y-auto`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
