function cekPalindrome(textPalindrome: string): boolean {
    let hasilPalindrome = textPalindrome.toLowerCase().split('').reverse().join('')
    if (textPalindrome === hasilPalindrome) {
        return true
    } else {
        return false
    }
}

console.log(cekPalindrome("civic"))
console.log(cekPalindrome("katak"))
console.log(cekPalindrome("kasur rusak"))
console.log(cekPalindrome("kupu-kupu"))
console.log(cekPalindrome("lion"))

