import { IconButton } from '@material-tailwind/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import abdulaziz from '/assets/abdulaziz.jpg'
import React from 'react';
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 8
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 8
    }
};
interface ButtonGroupProps {
    next: () => void;
    previous: () => void;
    goToSlide: (index: number) => void;
    carouselState: {
        currentSlide: number;
    };
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous, carouselState, }) => {
    const { currentSlide } = carouselState;
    return (
        <React.Fragment>
            <IconButton className={currentSlide == 0 ? 'hidden' : '!absolute left-0 mb-4 z-10 hover:!shadow-none !shadow-none bg-transparent !min-w-fit rounded-full '} onClick={() => previous()}>
                <div className=' bg-no-repeat bg-position-arrow-right-icon  w-[45px] h-[45px] bg-[url(https://static.cdninstagram.com/rsrc.php/v3/y8/r/ZWR9C7_JdnP.png)]'>
                </div>
            </IconButton>
            <IconButton className='!absolute right-0 z-10 bg-transparent hover:!shadow-none mb-4 !shadow-none !min-w-fit rounded-full ' onClick={() => next()}>
                <div className='bg-no-repeat bg-position-arrow-left-icon  w-[45px] h-[45px] bg-[url(https://static.cdninstagram.com/rsrc.php/v3/y8/r/ZWR9C7_JdnP.png)]'>
                </div>
            </IconButton>
        </React.Fragment>
    );
};
const StoryCard: React.FC<{ image: string, username: string }> = ({ image, username }) => <React.Fragment>
    <div className='w-[66px] h-[66px] relative story_border_style rounded-full'>
        <div className='rounded-full absolute z-10 bg-white w-[62px] h-[62px] p-[2px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img src={image} alt="" className='rounded-full' />
        </div>
    </div>
    <span className='text-one-line text-xs text-center'>{username}</span>
</React.Fragment>
const StoryCarousel = () => {
    const arr = {
        carouselState: { currentSlide: 1 },
        goToSlide: () => { }, next: () => { }, previous: () => { },
        key: 1
    }
    return (
        <div className='max-h-28 relative mb-3 px-[1%]'>
            <Carousel responsive={responsive} customButtonGroup={<ButtonGroup {...arr} />} arrows={false}>
                {
                    Array.from({ length: 12 }).map((_, index) => <Link to={'#'} key={index}>
                        <StoryCard image={abdulaziz} username='shadiev.abdulaziz' />
                    </Link>)
                }
            </Carousel>
        </div >
    )
}

export default StoryCarousel