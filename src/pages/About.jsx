import React from 'react';
import {ServicesList} from "../components/index.js";
import {styles} from "../data/styles.js";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const About = () => {
    return (
        <div className="_container flex gap-10">
            <ServicesList/>
            <div className="w-full">
                <h1 className={`${styles.postTitle}`}>BIZ HAQIMIZDA</h1>
                <div className="flex flex-col gap-4 my-2">
                    <p>
                        Bizning kir yuvish va kimyoviy tozalash bo'yicha mutaxassislarimiz har doim sizning
                        buyumlaringizga g'amxo'rlik qilish bilan bog'liq har qanday mushkullikni qabul qilishga tayyor.
                        Sizga xizmatimizning sifati, shuningdek, kiyimingizni tozalash, yuvish yoki dazmollash
                        masalasiga qanchalik ehtiyotkorlik bilan va puxta yondashayotganimizdan mamnun bo'lishingiz
                        kafolatlanadi.
                    </p>
                    <p>
                        Qayerda bo'lsangiz ham, buyumlarni yuvish va quritish bilan bog'liq barcha savollarni
                        professional mutaxassislarga ishonib topshirishingizni maslahat beramiz. Buning uchun faqat
                        bizning XONQA XIMCHISTKA kompaniyamizga murojaat qilishingiz kerak. Biz bilan ishlashda siz
                        o'zingizning shaxsiy kir yuvish xonasi va bu masala bilan shug'ullanadigan xodimlarni qayerdan
                        topish haqida o'ylashingiz shart emas. Bundan tashqari, siz qimmatbaho uskunalarni sotib olish,
                        unga texnik xizmat ko'rsatish va ta'mirlash uchun pul sarflamaysiz. Bundan tashqari, siz elektr
                        energiyasi va suv uchun to'lovlarni tejashingiz mumkin.
                    </p>
                    <p>
                        Katta hajmdagi kiyim yoki to'qimachilik haqida gap ketganda, buyumlarni oddiy dazmollash ham juda jiddiy manbalarni talab qilishi mumkinligini tushunishingiz kerak. Ehtimol, ushbu jarayonni korxonangizda o'rnatish uchun siz alohida xodimlarni yo'llashingiz kerak bo'ladi. O'zingizning kir yuvish xonasini tashkil qilish ham qiyinlik tug'diradi. Yuvish uchun zamonaviy uskunalar juda e'htiyotkorlik va puxta yondashuvni talab qiladi, aks holda bu ishlamay qolishi mumkin. Bugungi kunda kir yuvish mashinasini ta'mirlash juda qimmat xizmatdir. Siz har doim kiyimlarni yuvish, quritish va dazmollash masalasini xodimlarimizga ishonib topshirishingiz mumkin bo'lganida, nima uchun tavakkal qilish kerak?
                    </p>
                    <p>
                        Jismoniy shaxslar uchun kimyoviy tozalash va kir yuvish
                    </p>
                    <p>
                        Biz jismoniy shaxslarga ham xizmat ko'rsatamiz. Eng yangi texnologiyalar va professional kimyoviy vositalardan foydalanish tufayli biz sizning buyumlaringizni yumshoq, puxta va tez tozalashga tayyormiz. Endi sevimli kiyim yoki tekstil buyumingizni qanday tozalash kerakligi haqida bosh qotirishingizga hojat yo'q, chunki biz uni imkon qadar tezroq pok va go'zal ko'rinishiga qaytarishga tayyormiz.
                    </p>
                    <p>
                        Bizning afzalliklarimiz:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Buyurtmani tez bajarish;</li>
                        <li>Hatto eng qiyin ifloslanish va dog'larni olib tashlash qobiliyati;</li>
                        <li>Zamonaviy texnologiyalar, eksklyuziv kimyoviy moddalar va zamonaviy uskunalarni qo'llash;</li>
                        <li>Ehtiyotkorlik bilan narsalarni qadoqlash;</li>
                        <li>Hamyonbop narxlar.</li>
                    </ul>
                    <p>
                        Buyurtma bermoqchimisiz? Unda bugunoq bizga qo'ng'iroq qiling!
                    </p>
                   <div className="flex gap-4">
                       <Link to = 'tel:+998975265677'  className="bg-primary my-2 p-2 rounded font-medium w-fit">Qo'ng'iroq qiling</Link>
                       <HashLink smooth className="bg-primary my-2 p-2 rounded font-medium w-fit" to="../#xabar-qoldirish">Xabar qoldirish</HashLink>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default About;
