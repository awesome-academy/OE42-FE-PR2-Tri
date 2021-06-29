
const resetBrandChecked = () => {
    const path = document.querySelectorAll('.filter__brands-content path');
    const muiButtonBaseRoot = document.querySelectorAll('.filter__brands-content .MuiButtonBase-root');
    for (let p of path) {
        p.outerHTML = '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>'
    }
    for (let check of muiButtonBaseRoot) {
        check.classList.remove('Mui-checked', "PrivateSwitchBase-checked-2");
    }
}

export default resetBrandChecked;