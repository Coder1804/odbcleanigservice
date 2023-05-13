import React from 'react';
import {ServicesList} from "../components/index.js";
import {styles} from "../data/styles.js";
import {khiva} from "../assets/index.js";

const Delivery = () => {
    return (
        <div className="_container flex gap-10">
            <ServicesList/>
            <div className="w-full">
                <h1 className={`${styles.postTitle}`}>YETKAZISH</h1>
                <div className=" w-full mt-4">
                    <div className="relative isolate">
                        <img  className="w-full h-80 delivery-img" src={khiva} alt="delivery image" />
                        <div className="absolute top-1/2 left-6 -translate-y-1/2 text-white z-10">
                            <h3 className="text-4xl  font-semibold">KATTA BUYURTMALAR UCHUN</h3>
                            <h1 className="text-5xl my-4 font-bold">BEPUL</h1>
                            <h3 className="text-4xl font-semibold">YETKAZISH</h3>
                        </div>
                        <span className="w-full h-full bg-black absolute inset-0 opacity-50"></span>
                    </div>
                   <div className="mt-4 mb-20">
                       <p className="my-4 tracking-wide font-normal">Tozalash - butun dunyoda nihoyatda ommabop va talab qilinadigan xizmat bo'lib, bu kiyim,
                           tekstil va boshqa buyumlardagi turli xil kir va dog'larni tez va samarali tozalashga imkon
                           beradi. So'nggi paytgacha bu xizmatdan foydalanish uchun siz buyumingizni salonga olib
                           kelishingiz kerak bo'lgan. Shu bilan birga, kiyim egasi yo'l uchun vaqt va pul sarflashi kerak
                           edi, bu har doim ham qulay emas.

                       </p>
                       <p className="tracking-wide font-normal">
                           Bizning tozalash xizmatimiz Xonqa tumani ichida yetkazib berishni amalga oshiradi. Batafsil
                           ma'lumotni  +99862-399-27-75 raqamiga qo'ng'iroq qilib olishingiz mumkin.
                       </p>
                   </div>
                </div>
            </div>
        </div>
    )
    ;
};

export default Delivery;
