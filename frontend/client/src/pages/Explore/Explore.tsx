import video from '/assets/122419655_871425817997637_3127889363119988461_n.mp4'
import img from '/assets/419031539_1311600062869506_2843158237902233968_n.jpg'
const Explore = () => {
  return (
    <div className='max-w-[972px] mx-auto h-screen bg-black my-4'>
      {
        Array.from({ length: 2 }).map(() =>
          <>
            <div className='grid grid-cols-3 grid-rows-2 explore_grid_container_left h-full w-full max-h-[645px]'>
              <div>
                <img src={img} alt="" />
              </div>
              <div>Content 2</div>
              <div>
                <video className='h-full w-full object-cover' controls>
                  <source src={video} />
                </video>
              </div>
              <div>Content 4</div>
              <div>Content 5</div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 explore_grid_container_right h-full w-full max-h-[645px]'>
              <div>Content 1</div>
              <div>Content 2</div>
              <div>Content 3</div>
              <div>Content 4</div>
              <div>Content 5</div>
            </div>
          </>
        )
      }

    </div>
  )
}

export default Explore