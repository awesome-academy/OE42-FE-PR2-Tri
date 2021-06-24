import vietnam from  './../assets/images/vietnam.svg';
import english from  './../assets/images/english.svg';

export const API_URL = 'http://localhost:3000';

export const language = [
    {
        icon: vietnam,
        value: "vi",
        label: "vietnamese"
    },
    {
        icon: english,
        value: "en",
        label: "english"
    }
]

export const ratings = [1 ,2 ,3 ,4 ,5];

export const prices = [
    {
        id: 1,
        price: "0đ - 200.000đ"
    },
    {
        id: 2,
        price: "200.000đ - 400.000đ"
    },
    {
        id: 3,
        price: "400.000đ - 600.000đ"
    },
    {
        id: 4,
        price: "800.000đ - 1.000.000đ"
    },
    {
        id: 5,
        price: "1.000.000đ"
    }
]