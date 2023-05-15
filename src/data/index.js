import {StarIcon , MoneyIcon , ToolIcon} from "./icons.jsx";
import {shoes, towel , xalat , kurtka} from "../assets/index.js";

export const navLinks = [
    {
        id:0,
        linkName:'narxlar',
        link:'price',
    },
    {
        id:1,
        linkName:'bloglar',
        link:'blogs',
    },
    {
        id:2,
        linkName:'yetkazish',
        link:'delivery',

    },
    {
        id:3,
        linkName:'Biz haqimizda',
        link:'aboutus',

    },
    {
        id:4,
        linkName:'Bog\'lanish',
        link:'contact',
    },
]

export const chooseOptions = [
    {
        id:0,
        title:'YUQORI SIFAT',
        slogan:'Biz ishimizni yuqori sifatda bajaramiz',
        Icon:StarIcon
    },
    {
        id:1,
        title:'FOYDALI NARXLAR',
        slogan:'Bizda narxlar siz o\'ylagandan arzon',
        Icon:MoneyIcon
    },
    {
        id:2,
        title:'ZAMONAVIY USKUNALAR',
        slogan:'Bizda yuqori texnologiya asosidagi oxirgi rusmdagi zamonaviy uskunalar',
        Icon:ToolIcon
    },
]

export const servicesList = [
    {
        id:0,
        service:'Tekistil maxsulotlari',
        img:shoes,
        pathId:'#tekstil-maxsulotlari'
    },
    {
        id:1,
        service:'Yotoq qurollari',
        img:towel,
        pathId:'#yotoq-qurollari'
    }
]

export const prices = [
    {
        id:0,
        name:'Tekstil mahsulotlari',
        img:shoes,
        pathId:'#tekstil-maxsulotlari',
        products:[
            {
                id:0,
                name:'Kostyum shim | Kostyum yubka  Katta o\'lchamdagi',
                price:'20 000'
            },
            {
                id:1,
                name:'Kostyum | Jaket | Maxsus forma',
                price:'15 000'
            },
            {
                id:2,
                name:'Yoshbolalar jaketlari',
                price:'13 000'
            },
            {
                id:3,
                name:'Jensi shim | Jensi yubka',
                price:'8 000'
            },
            {
                id:4,
                name:'Yoqasiz kuylak | Jempr | Sviter',
                price:'10 000'
            },
            {
                id:5,
                name:'Sport kiymi | Isssiq sport kiymi',
                price:'16 000'
            },
            {
                id:6,
                name:'Kimano',
                price:'15 000'
            },
            {
                id:7,
                name:'O\'rtacha kuylak',
                price:'15 000'
            },
            {
                id:8,
                name:'Bazm kuylagi',
                price:'20 000 - 31 000'
            },
            {
                id:9,
                name:'Jensi kurtka | Jensi jaket',
                price:'13 000'
            },
            {
                id:25,
                name:'Djemper | Angolka kalta (Claudio)',
                price:'13 000'
            },
            {
                id:26,
                name:'Djemper | Angolka o\'rta (Claudio)',
                price:'15 000'
            },
            {
                id:27,
                name:'Djemper | Angolka uzun (Claudio)',
                price:'17 000'
            },
        ]
    },
    {
        id:1,
        name:'Ustki kiyim',
        img:kurtka,
        pathId:'#ustki-kiyim',
        products: [
            {
                id:10,
                name:'Kurtka | Yengil yoqali kurtka (60 sm gacha)',
                price:'16 000'
            },
            {
                id:11,
                name:'Issiq kurtka',
                price:'20 000'
            },
            {
                id:12,
                name:'Kurtka | o\'rta no\'xat gulli kurtka',
                price:'22 000'
            }, {
                id:13,
                name:'Uzun issiq kurtka',
                price:'24 000'
            },
            {
                id:14,
                name:'Kurtka puxoviy kalta  | O\'rta uzun',
                price:'22 000 - 32 000'
            },
            {
                id:15,
                name:'O\'rtacha plash',
                price:'21 000'
            },
            {
                id:16,
                name:'Qisqa palto 60-70sm',
                price:'19 000'
            },
            {
                id:17,
                name:'O\'rtacha palto',
                price:'22 000'
            },
            {
                id:18,
                name:'Uzun palto',
                price:'26 000'
            },
            {
                id:19,
                name:'Yoqali palto',
                price:'27 000'
            },
            {
                id:20,
                name:'Mo\'yna yoqali palto',
                price:'36 000'
            },
            {
                id:21,
                name:'Dublyonka | Suniy shuba | Kalta (o\'lchamsiz)',
                price:'27 000'
            },
            {
                id:22,
                name:'Dublyonka | Suniy shuba (o\'rtacha)',
                price:'32 000'
            },
            {
                id:23,
                name:'Dublyonka | Suniy shuba uzun',
                price:'38 000'
            },
            {
                id:24,
                name:'Dublyonka | Suniy uzun yoqali shuba',
                price:'44 000'
            },
        ]
    },

    {
        id:3,
        name:'Yotoq qurollari',
        img:towel,
        pathId:'#yotoq-qurollari',
        products: [
            {
                id:30,
                name:'Ko\'rpa | Bir qavatli | Bir yotoqlik',
                price:'13 000'
            },
            {
                id:31,
                name:'Ko\'rpa | Bir qavatli | 1.5 yotoqlik',
                price:'16 000'
            },
            {
                id:32,
                name:'Ko\'rpa | Bir qavatli | Ikki yotoqlik',
                price:'18 000'
            },
            {
                id:33,
                name:'Ko\'rpa | Bir qavatli | Ikki yotoqlik sintifon',
                price:'31 000'
            },
            {
                id:41,
                name:'Yotoq kiymi (1kg)gacha',
                price:'6 500'
            },
            {
                id:42,
                name:'Prastina , Yostiq jildi bir kishi',
                price:'6 500'
            },
            {
                id:43,
                name:'Prastina , Yostiq jildi ikki kishi',
                price:'8 500'
            },
        ]
    },
    {
        id:4,
        name:"Boshqa narsalar",
        img:xalat,
        pathId: '#boshqa-narsalar',
        products: [
            {
                id:28,
                name:'Yumshoq o\'yinchoqlar',
                price:'7 000 - 33 000'
            },
            {
                id:29,
                name:'Pux ro\'mol',
                price:'11 000'
            },

            {
                id:34,
                name:'Mashina chexoli yengil',
                price:'21 000'
            },
            {
                id:35,
                name:'Qalin to\'qilgan mashina chexoli',
                price:'29 000'
            },
            {
                id:36,
                name:'Mashina chexoli tabiiy tolali',
                price:'27 000'
            },
            {
                id:37,
                name:'Bir joy o\'rinlik chexol',
                price:'27 000'
            },
            {
                id:38,
                name:'Parda tyuli bir premetri',
                price:'5 500'
            },
            {
                id:39,
                name:'Rasmli | Qismli bo\'laklar (oyoq tagi uchun)',
                price:'6 500'
            },
            {
                id:40,
                name:'Hammom xalati',
                price:'11 000 - 16 000'
            },

            {
                id:44,
                name:'Hammom sochig\'i katta',
                price:'7 000'
            },
            {
                id:45,
                name:'Hammom sochig\'i o\'rta',
                price:'5 500'
            },
            {
                id:46,
                name:'Hammom sochig\'i kichik',
                price:'4 000'
            },
        ]
    }


]

