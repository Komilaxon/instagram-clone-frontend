import { useState } from 'react'
import { Comment_icon, Like_icon, Liked_icon, Save_icon, Saved_icon, Share_icon } from '../../helpers/icons'

const PostFooter = () => {
  const [isSaved, setIsSaved] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showAllComment, setShowAllComment] = useState(false)
  const toogleSave = () => setIsSaved(!isSaved)
  const toogleLike = () => setIsLiked(!isLiked)
  const toogleComment = () => setShowAllComment(!showAllComment)
  return (
    <div className='space-y-0.5 flex flex-col justify-between h-full'>
      {/* header */}
      <div className='grid grid-cols-2 py-1'>
        <div className='flex items-center gap-x-4'>
          <button onClick={toogleLike} className={!isLiked ? 'hover:text-[#807777]' : 'text-[#FE3A49]'}>
            {isLiked ? <Liked_icon /> : <Like_icon />}
          </button>
          <button className='hover:text-[#807777]'>
            <Comment_icon />
          </button>
          <button className='hover:text-[#807777]'>
            <Share_icon />
          </button>
        </div>
        <div className='flex items-center justify-end'>
          <button onClick={toogleSave} className={isSaved ? 'hover:text-black' : 'hover:text-[#807777]'}>{isSaved ? <Saved_icon /> : <Save_icon />}</button>
        </div>
      </div>
      {/* body */}
      <div>
        <span className='text-[14px] font-semibold'>1 221  отметок "Нравится"</span>
        <div className='space-x-1'>
          <span className={`font-semibold text-[14px] select-none ${showAllComment ? '' : 'text-two-line'}`}>quloq.news {" "}
            <span className='text-[14px] font-normal select-all' onClick={toogleComment}>В каком районе Ташкента самая дешевая аренда квартиры? Отправь своему областному корешу
              Согласно данным Центра экономических исследований и реформ, средняя стоимость аренды жилья в Ташкенте составляет $9,2 за квадратный метр
            </span>
          </span>
        </div>
      </div>
      {/* footer */}
      <div className='pt-4'>
        <form>
          <input type="text" placeholder='Add a comment...' className='w-full outline-none text-[14px]' />
          <button>Post</button>
        </form>
        <div className='bg-[#DBDBDB] w-full h-[1.2px] mt-3'></div>
      </div>
    </div >
  )
}

export default PostFooter