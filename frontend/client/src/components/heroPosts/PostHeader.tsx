import { IconButton } from '@material-tailwind/react'
import { More_icon } from '../../helpers/icons'
import PostTools from './PostTools'
import { useState } from 'react'
const PostHeader = ({ author, audio }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toogleToolModal = () => setIsOpen(!isOpen);
    return (
        <div className="p-1 flex items-center justify-between ">
            <div className="flex items-center gap-x-2">
                <div className='w-[42px] h-[42px] relative story_border_style rounded-full'>
                    <div className='rounded-full absolute z-10 bg-white w-[38px] h-[38px] p-[2px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <img src={author.image} alt="quloq" className='rounded-full' />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-x-1">
                        <span className="font-semibold text-[14px]">{author.name}</span>
                        <span className="text-[#737373] text-[14px]">•</span>
                        <time className="text-[#737373] text-[14px]">4h</time>
                    </div>
                    <span className="text-xs">{audio}</span>
                </div>
            </div>
            <IconButton onClick={toogleToolModal} className="bg-transparent dark:text-white text-black !shadow-none">
                <More_icon />
            </IconButton>
            <PostTools open={isOpen} toogleToolModal={toogleToolModal} />
        </div>
    )
}

export default PostHeader