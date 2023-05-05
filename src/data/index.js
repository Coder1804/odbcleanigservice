import {StarIcon , MoneyIcon , ToolIcon} from "./icons.jsx";
import {shoes, towel} from "../assets/index.js";

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
        slogan:'Bizda chet eldan olib kelingan va oxirgi rusmdagi zamonaviy uskunalar',
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

    }
]