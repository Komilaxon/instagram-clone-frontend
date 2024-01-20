import { useEffect, useRef } from "react";
import { Muted_icon, UnMuted_icon } from "../../helpers/icons";

interface VideoPlayerProps {
    url: string,
    isMuted: boolean,
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, isMuted, setIsMuted }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    const wasPlayingBeforeHidden = useRef(false);
    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handleMuteVideo = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };
    const handleVisibilityChange = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            if (document.hidden) {
                wasPlayingBeforeHidden.current = !videoElement.paused;
                if (!videoElement.paused) {
                    videoElement.pause();
                }
            } else {
                if (wasPlayingBeforeHidden.current) {
                    videoElement.play();
                }
            }
        }
    };
    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            document.addEventListener('visibilitychange', handleVisibilityChange);

            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            };

            const callback: IntersectionObserverCallback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (videoElement.paused) {
                            videoElement.play();
                        }
                    } else {
                        if (!videoElement.paused) {
                            videoElement.pause();
                        }
                    }
                });
            };

            observer.current = new IntersectionObserver(callback, options);
            observer.current.observe(videoElement);

            return () => {
                document.removeEventListener('visibilitychange', handleVisibilityChange);
                if (observer.current) {
                    observer.current.unobserve(videoElement);
                }
            };
        }
    }, [url]);

    useEffect(() => {
        return () => {
            const videoElement = videoRef.current;
            if (videoElement && observer.current) {
                document.removeEventListener('visibilitychange', handleVisibilityChange);
                observer.current.unobserve(videoElement);
            }
        };
    }, []);

    return <div className="bg-black h-[585px] relative rounded-md cursor-pointer">
        <video onClick={handleVideoClick} muted={isMuted} ref={videoRef} className="w-full  z-10 h-full rounded-md object-contain">
            <source src={url} />
        </video>
        <button className="absolute bg-[#262626] text-white p-2 rounded-full left-[90%] top-[92%] z-20" onClick={handleMuteVideo}>
            {isMuted ? <Muted_icon /> : <UnMuted_icon />}
        </button>
    </div>
}
export default VideoPlayer