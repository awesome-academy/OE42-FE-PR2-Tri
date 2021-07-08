
const resetBrandChecked = () => {
    const inputs = document.querySelectorAll('.filter__brands-content input');
    for (let input of inputs) {
        input.checked = false;
    }
}

export default resetBrandChecked;