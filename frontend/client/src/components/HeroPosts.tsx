
import { useState } from "react"
import post_video from '/assets/46864641_726823699375476_2083549675304038437_n.mp4'
import post_video2 from '/assets/45195682_1046693183205494_2726514298683749099_n.mp4'
import img1 from '/assets/419031539_1311600062869506_2843158237902233968_n.jpg'
import VideoPlayer from "./heroPosts/VideoPlayer"
import ImageCard from "./heroPosts/ImageCard"
import PostHeader from "./heroPosts/PostHeader"
import PostFooter from "./heroPosts/PostFooter"
const HeroPosts = () => {
    const [isMuted, setIsMuted] = useState(true)
    let demo_posts = [
        {
            url: post_video,
            post_type: "video"
        },
        {
            url: post_video2,
            post_type: "video"

        },
        {
            url: post_video,
            post_type: "video"
        },
        {
            url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            post_type: "image"
        },
        {
            url: img1,
            post_type: "image"
        }
    ]
    return (
        <article className="p-4 pb-0 full">
            <div className="max-w-[470px] mx-auto">
                {
                    demo_posts.map((post, index) => <div className="bg-white space-y-2 " key={index}>
                        <PostHeader />
                        {post.post_type === "video" ? <VideoPlayer  {...post} isMuted={isMuted} setIsMuted={setIsMuted} /> :
                            <ImageCard {...post} />
                        }
                        <PostFooter />
                    </div>)}
            </div>
        </article >
    )
}


export default HeroPosts;
