
export const resetFormProductIntroduction = () => {
    let inputs = document.querySelectorAll('.productIntroduction__content-left input');
    for (let i of inputs) {
        i.value = '';
    }
}