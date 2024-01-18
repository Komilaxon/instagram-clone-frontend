import HeroPosts from '../components/HeroPosts'
import StoryCarousel from '../components/StoryCarousel'

const HeroHome = () => {
    return (
        <section className='w-full flex h-full pt-4'>
            <div className='max-w-[630px] mx-auto w-full'>
                <StoryCarousel />
                <HeroPosts />
            </div>
            <div className='max-w-[319px] w-full bg-black'>

            </div>
        </section>
    )
}

export default HeroHome