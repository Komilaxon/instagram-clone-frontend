import { IconButton } from "@material-tailwind/react"
import quloq from '../../public/assets/quloq.jpg'
import React, { LegacyRef, Ref, useRef } from "react"
import { More_icon } from "../helpers/icons"
import post_video from '../../public/assets/46864641_726823699375476_2083549675304038437_n.mp4'
import post_video2 from '../../public/assets/45195682_1046693183205494_2726514298683749099_n.mp4'
interface PostCardProps {
    videoRef: LegacyRef<HTMLVideoElement>,
    onPlay: (videoRef: any) => void,
    url: string
}
const PostCard: React.FC<PostCardProps> = ({ videoRef, onPlay, url }) => {
    return <div className="bg-white space-y-2">
        {/* header */}
        <div className="p-1 flex items-center justify-between">
            <div className="flex items-center gap-x-2">
                <div className='w-[42px] h-[42px] relative story_border_style rounded-full'>
                    <div className='rounded-full absolute z-10 bg-white w-[37px] h-[37px] p-[2px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <img src={quloq} alt="quloq" className='rounded-full' />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-x-1">
                        <span className="font-semibold text-[14px]">quloq.news</span>
                        <span className="text-[#737373] text-[14px]">•</span>
                        <time className="text-[#737373] text-[14px]">4 hour ago</time>
                    </div>
                    <span className="text-xs">Оригинальное аудио</span>
                </div>
            </div>
            <IconButton className="bg-transparent dark:text-white text-black !shadow-none">
                <More_icon />
            </IconButton>
        </div>
        {/* body */}
        <div className="bg-black h-[585px] rounded-md cursor-pointer" onClick={() => onPlay(videoRef)}>
            <video ref={videoRef} className="w-full h-full rounded-md object-contain">
                <source src={url} />
            </video>
        </div>
        {/* footer */}
        <hr />

    </div>
}
const HeroPosts = () => {
    let demo_posts = [
        {
            url: post_video,
            videoRef: useRef<HTMLVideoElement>(null)
        },
        {
            url: post_video2,
            videoRef: useRef<HTMLVideoElement>(null)
        },
        {
            url: post_video,
            videoRef: useRef<HTMLVideoElement>(null)
        },
        {
            url: post_video2,
            videoRef: useRef<HTMLVideoElement>(null)
        }
    ]
    const handleVideoPlay = (videoRef: any) => {
        if (videoRef.current) {
            videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
        }
    }
    return (
        <article className="p-4 pb-0 full">
            <div className="max-w-[470px]  mx-auto space-y-4">
                {
                    demo_posts.map(post => <PostCard {...post} onPlay={handleVideoPlay} videoRef={post.videoRef} />
                    )
                }
            </div>
        </article >
    )
}

export default HeroPosts