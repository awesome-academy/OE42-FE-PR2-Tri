import * as types from './../constants/index';

let initialState = {
    hotTrendData: [],
    menClothesData: [],
    womenClothesData: [],
    kidsClothesData: [],
    handbagAndShoesData: []
}

export const homeDataReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SET_HOT_TREND_DATA:
            const hotTrendData = [...action.payload].sort((a,b) => b.quantitySold - a.quantitySold);
            const newProducts = hotTrendData.filter((product, index)=>{
                return index < 8 ? product : null;
            });
            return{
                ...state,
                hotTrendData: newProducts
            };
        case types.SET_MEN_CLOTHES_DATA:
            const menData = action.payload.filter((product)=>{
                return (product.categoryId === "men-clothes") ? product : null
            }).slice(0,8);
            return{
                ...state,
                menClothesData: menData
            }
        case types.SET_WOMEN_CLOTHES_DATA:
            const womenData = action.payload.filter((product)=>{
                return (product.categoryId === "women-clothes") ? product : null
            }).slice(0,8);
            return{
                ...state,
                womenClothesData: womenData
            }
        case types.SET_KIDS_CLOTHES_DATA:
            const kidsData = action.payload.filter((product)=>{
                return (product.categoryId === "kids-clothes") ? product : null
            }).slice(0,8);
            return{
                ...state,
                kidsClothesData: kidsData
            }
        case types.SET_HANDBAG_AND_SHOES_DATA:
            const handbag_ShoesData = action.payload.filter((product)=>{
                return (product.categoryId === "handbag-and-shoes") ? product : null
            }).slice(0,8);
            return{
                ...state,
                handbagAndShoesData: handbag_ShoesData
            }
        default:
            return state;
    }
}

export default homeDataReducer;