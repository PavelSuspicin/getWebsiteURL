function calc(str) {
    let last = str.substring(str.length - 3)
    return str.length >= 3 ? last + str + last : false
}
console.log(calc('Ja'))
