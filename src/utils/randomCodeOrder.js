import randomString from 'randomstring';

export const randomCodeOrder = () => {
    return randomString.generate({
        length: 12,
        charset: 'alphanumeric'
    })
}