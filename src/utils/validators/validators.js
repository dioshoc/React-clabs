export const required = (value) => {
    if (value) return undefined;
    return 'Field is required'
}

export const maxLengthCreator = (maxLendth) => (value = '') => {
    if (value.length > maxLendth) return `Max length is ${maxLendth} symbols`;
    return undefined
}
