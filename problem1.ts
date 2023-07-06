function studentScore(score: number) {
    let namaMahasiswa = "Budi"
    if (score >= 80 && score <= 100) {
        return namaMahasiswa + " Mendapatkan Nilai A"
    } else if (score >= 65 && score <= 79) {
        return namaMahasiswa + " Mendapatkan Nilai B+"
    } else if (score >= 50 && score <= 64) {
        return namaMahasiswa + " Mendapatkan Nilai B"
    } else if (score >= 35 && score <= 49) {
        return namaMahasiswa + " Mendapatkan Nilai C"
    } else if (score >= 0 && score <= 34) {
        return namaMahasiswa + " Mendapatkan Nilai D"
    } else {
        return "invalid"
    }

}
console.log(studentScore(80))
console.log(studentScore(101))
console.log(studentScore(-1))
