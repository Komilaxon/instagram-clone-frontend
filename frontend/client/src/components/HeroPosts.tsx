
import { useState } from "react"
import shift from '/assets/10000000_398952369191366_2140464514156870462_n.mp4'
import shift_image from '/assets/shift_img.jpg'
import VideoPlayer from "./heroPosts/VideoPlayer"
import ImageCard from "./heroPosts/ImageCard"
import PostHeader from "./heroPosts/PostHeader"
import PostFooter from "./heroPosts/PostFooter"
const HeroPosts = () => {
    const [isMuted, setIsMuted] = useState(true)
    let demo_posts = [
        {
            url: shift,
            author: {
                name: "shiftacademyuz",
                image: shift_image
            },
            audio: "Original audio",
            desc: `⚡️Qo’lingizdagi telefondan vaqtni o’tkazish uchun emas, daromad topish uchun foydalaning!
            Zamonaviy kasblardan biri bo’lgan Mobilografiyani 2 oy ichida o’rganing va boshlanishiga oyiga $200’dan 500’gacha daromad qiling!
            
            2 oy mobilografiya kursida o’qib nimalarni o’rganasiz?
            
            To’g’ri videoga olish, ya’ni rakurslarni to’g’ri tanlash, chiroyli kadrlarni terish. Umumiy qilib aytganda sifatli video olishni o’rganasiz!
            
            Studiyada chiroqlar bilan ishlash va undan tashqari barcha texnikalar bilan ishlash, mikrafon, shtativlarda ishlashni o’rganasiz!
            
            10 ta dasturda videolarni professional montaj qilishni, musiqa, perexotlar va boshqa resurslarni foydalanishni o’rganasiz!
            
            Darslar amaliyotga asoslangan, dars jarayonlarida shaharning ko’zga ko’rinarli lokatsiyalarida amaliyotlar bo’ladi!
            
            2 oylik kurs tugagandan so’ng, 1 oylik amaliyot mavjud! Amaliyot o’zimizni marketing agentsvamizda bo’ladi
            
            3 oylik umumiy kurs tugatilgandan so’ng, o’zimizda ishda qolishingiz mumkin!
            
            Bitta guruhda 5 kishi o’qiydi, shoshiling 4 ta joy qoldi!
            
            Hoziroq pastdagi tugmachani bosib ro’yxatdan o’ting!`,
            post_type: "video",
            like_count: 26
        },
        {
            url: shift,
            author: {
                name: "shiftacademyuz",
                image: shift_image
            },
            audio: "Original audio",
            desc: `⚡️Qo’lingizdagi telefondan vaqtni o’tkazish uchun emas, daromad topish uchun foydalaning!
            Zamonaviy kasblardan biri bo’lgan Mobilografiyani 2 oy ichida o’rganing va boshlanishiga oyiga $200’dan 500’gacha daromad qiling!
            
            2 oy mobilografiya kursida o’qib nimalarni o’rganasiz?
            
            To’g’ri videoga olish, ya’ni rakurslarni to’g’ri tanlash, chiroyli kadrlarni terish. Umumiy qilib aytganda sifatli video olishni o’rganasiz!
            
            Studiyada chiroqlar bilan ishlash va undan tashqari barcha texnikalar bilan ishlash, mikrafon, shtativlarda ishlashni o’rganasiz!
            
            10 ta dasturda videolarni professional montaj qilishni, musiqa, perexotlar va boshqa resurslarni foydalanishni o’rganasiz!
            
            Darslar amaliyotga asoslangan, dars jarayonlarida shaharning ko’zga ko’rinarli lokatsiyalarida amaliyotlar bo’ladi!
            
            2 oylik kurs tugagandan so’ng, 1 oylik amaliyot mavjud! Amaliyot o’zimizni marketing agentsvamizda bo’ladi
            
            3 oylik umumiy kurs tugatilgandan so’ng, o’zimizda ishda qolishingiz mumkin!
            
            Bitta guruhda 5 kishi o’qiydi, shoshiling 4 ta joy qoldi!
            
            Hoziroq pastdagi tugmachani bosib ro’yxatdan o’ting!`,
            post_type: "video",
            like_count: 26
        },
        {
            url: shift,
            author: {
                name: "shiftacademyuz",
                image: shift_image
            },
            audio: "Original audio",
            desc: `⚡️Qo’lingizdagi telefondan vaqtni o’tkazish uchun emas, daromad topish uchun foydalaning!
            Zamonaviy kasblardan biri bo’lgan Mobilografiyani 2 oy ichida o’rganing va boshlanishiga oyiga $200’dan 500’gacha daromad qiling!
            
            2 oy mobilografiya kursida o’qib nimalarni o’rganasiz?
            
            To’g’ri videoga olish, ya’ni rakurslarni to’g’ri tanlash, chiroyli kadrlarni terish. Umumiy qilib aytganda sifatli video olishni o’rganasiz!
            
            Studiyada chiroqlar bilan ishlash va undan tashqari barcha texnikalar bilan ishlash, mikrafon, shtativlarda ishlashni o’rganasiz!
            
            10 ta dasturda videolarni professional montaj qilishni, musiqa, perexotlar va boshqa resurslarni foydalanishni o’rganasiz!
            
            Darslar amaliyotga asoslangan, dars jarayonlarida shaharning ko’zga ko’rinarli lokatsiyalarida amaliyotlar bo’ladi!
            
            2 oylik kurs tugagandan so’ng, 1 oylik amaliyot mavjud! Amaliyot o’zimizni marketing agentsvamizda bo’ladi
            
            3 oylik umumiy kurs tugatilgandan so’ng, o’zimizda ishda qolishingiz mumkin!
            
            Bitta guruhda 5 kishi o’qiydi, shoshiling 4 ta joy qoldi!
            
            Hoziroq pastdagi tugmachani bosib ro’yxatdan o’ting!`,
            post_type: "video",
            like_count: 26
        },
        {
            url: shift,
            author: {
                name: "shiftacademyuz",
                image: shift_image
            },
            audio: "Original audio",
            desc: `⚡️Qo’lingizdagi telefondan vaqtni o’tkazish uchun emas, daromad topish uchun foydalaning!
            Zamonaviy kasblardan biri bo’lgan Mobilografiyani 2 oy ichida o’rganing va boshlanishiga oyiga $200’dan 500’gacha daromad qiling!
            
            2 oy mobilografiya kursida o’qib nimalarni o’rganasiz?
            
            To’g’ri videoga olish, ya’ni rakurslarni to’g’ri tanlash, chiroyli kadrlarni terish. Umumiy qilib aytganda sifatli video olishni o’rganasiz!
            
            Studiyada chiroqlar bilan ishlash va undan tashqari barcha texnikalar bilan ishlash, mikrafon, shtativlarda ishlashni o’rganasiz!
            
            10 ta dasturda videolarni professional montaj qilishni, musiqa, perexotlar va boshqa resurslarni foydalanishni o’rganasiz!
            
            Darslar amaliyotga asoslangan, dars jarayonlarida shaharning ko’zga ko’rinarli lokatsiyalarida amaliyotlar bo’ladi!
            
            2 oylik kurs tugagandan so’ng, 1 oylik amaliyot mavjud! Amaliyot o’zimizni marketing agentsvamizda bo’ladi
            
            3 oylik umumiy kurs tugatilgandan so’ng, o’zimizda ishda qolishingiz mumkin!
            
            Bitta guruhda 5 kishi o’qiydi, shoshiling 4 ta joy qoldi!
            
            Hoziroq pastdagi tugmachani bosib ro’yxatdan o’ting!`,
            post_type: "video",
            like_count: 26
        },

    ]
    return (
        <article className="w-full">
            <div className="max-w-[470px] mx-auto">
                {
                    demo_posts.map((post, index) => <div className="bg-white space-y-2 " key={index}>
                        <PostHeader {...post} />
                        {post.post_type === "video" ? <VideoPlayer  {...post} isMuted={isMuted} setIsMuted={setIsMuted} /> :
                            <ImageCard {...post} />
                        }
                        <PostFooter {...post} />
                    </div>)}
            </div>
        </article >
    )
}


export default HeroPosts;
