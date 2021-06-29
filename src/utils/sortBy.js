
const sortByName = (field, reverse, primer) => {

    var key = primer ?
        function (x) { return primer(x[field]) } :
        function (x) { return x[field] };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
        return (a = key(a), b = key(b), reverse * ((a > b) - (b > a)));
    }
}

const sortBy = (sortId, filterProducts, t) => {
    switch(sortId){
        case 1:
            return filterProducts.sort(sortByName('productName', false, (name) => {
                return t(`${name}`).toLowerCase();
            }));
        case 2:
            return filterProducts.sort(sortByName('productName', true, (name) => {
                return t(`${name}`).toLowerCase();
            }));
        case 3:
            return filterProducts.sort((a, b) => {
                return a.totalRating - b.totalRating;
            });
        case 4:
            return filterProducts.sort((a, b) => {
                return b.totalRating - a.totalRating;
            });
        case 5:
            return filterProducts.sort((a, b) => {
                return a.newPrice - b.newPrice;
            });
        case 6:
            return filterProducts.sort((a, b) => {
                return b.newPrice - a.newPrice;
            });
        default:
            return filterProducts.sort((a, b) => {
                return b.id - a.id;
            });
    }
}

export default sortBy;