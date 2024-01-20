
interface ImageCardProps {
    url: string,
}

const ImageCard: React.FC<ImageCardProps> = ({ url }) => {
    return <div className="max-h-[585px]">
        <img src={url} alt="" className="w-full max-h-[585px] object-cover" />
    </div>
}
export default ImageCard