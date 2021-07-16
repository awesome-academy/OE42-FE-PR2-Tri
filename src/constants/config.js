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
        price: "600.000đ - 800.000đ"
    },
    {
        id: 5,
        price: "800.000đ - 1.000.000đ"
    },
    {
        id: 6,
        price: "1.000.000đ"
    }
]

export const unStyled = [
    {
        name: "introducing TMart",
        path: "/introduce",
    },
    {
        name: "contact",
        path: "/contact"
    },
    {
        name: "recruitment",
        path: "/introduce"
    },
    {
        name: "map",
        path: "/contact"
    },
    {
        name: "privacy policy",
        path: "/introduce"
    },
    {
        name: "ordering guide",
        path: "/introduce"
    },
    {
        name: "size guide",
        path: "/introduce"
    },
    {
        name: "payment policy - delivery",
        path: "/introduce"
    },
    {
        name: "exchange policy",
        path: "/introduce"
    },
    {
        name: "vip guest policy",
        path: "/introduce"
    },
    {
        name: "frequently asked questions",
        path: "/introduce"
    }
];

export const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const REGISTER_URL = '/register';
export const LOGIN_URL = '/login';
export const ADMIN_URL = '/admin';
export const profileURL = (email) => {
    return `/profile/${email}`;
}
export const purchaseHistoryURL = (email) => {
    return `/purchase-history/${email}`;
}
