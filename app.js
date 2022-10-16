// //## Bài 1: Liệt kê ước số
// //Cho phép nhập vào một số nguyên dương n. Hãy in ra màn hình các ước số của số nguyên n.

// nhap number
let number = Number(prompt("Nhap so nguyen duong"));

//lietkeuocso
function timUocSo(acbc){
    let array = [];
    
    for (let index = 0; index <= acbc; index++){
        if(acbc % index === 0){
            array.push(index);
        }
    }

    return array;
}

const uocSoArray = timUocSo(number);
console.log('Bai 1: Cac uoc so =>>>', uocSoArray);

//Bai 2: Liệt kê ước số chẵn
//Cho phép nhập vào một số nguyên dương n. Hãy in ra màn hình các ước số chẵn của số nguyên n.

function timUocSoChan(bien){
    let uocsobai1 = timUocSo(bien)
    let arraybai2 = []
    for (let index = 0; index < uocsobai1.length; index++){
        if(uocsobai1[index] % 2 === 0){
            arraybai2.push(uocsobai1[index])
        }
    }
    return arraybai2
}
const ketQuaBai2 = timUocSoChan(number)
console.log("Bai 2: Cac uoc chan ===>", ketQuaBai2)

// Bài 3: Tổng ước số
//Cho phép nhập vào một số nguyên dương n. Hãy in tính tổng các ước số của số nguyên n.

function timTongUocSo(bien3){
    let uocsobai1 = timUocSo(bien3)
    let S = 0
    for(let index = 0; index < uocsobai1.length; index ++){
        S= uocsobai1[index] + S
    }
    return S
}
const tongUocSo = timTongUocSo(number)
console.log("Bai 3: Tong uoc so ===>", tongUocSo)

//Bài 4: Tích ước số chẵn
//Cho phép nhập vào một số nguyên dương n. Hãy in tính tích các ước số chẵn của số nguyên n.

function timTichUocSoChan(bien4){
    let dayCacUocSoChan = timUocSoChan(bien4)
    let V = 1
    for(let index = 0; index < dayCacUocSoChan.length; index++){
        V = dayCacUocSoChan[index]*V
    }
    return V
}
const tichUocSo = timTichUocSoChan(number)
console.log("Bai 4: Tich uoc so chan ===>", tichUocSo)

// Bài 5: Đếm ước số
//Cho phép nhập vào một số nguyên dương n. Hãy đếm xem n có bao nhiêu ước số.

function demUocSo(bien5){
    let dayUocSo = timUocSo (bien5)
    return dayUocSo.length
}
const k = demUocSo(number)
console.log("Bai 5: Dem uoc so ===> ", k)

//Bài 6: Số nguyên tố
//Cho trước một số nguyên n. Hãy cho biết n có phải là số nguyên tố không. Số nguyên tố là số chỉ có 2 ước số là 1 và chính nó. Ví dụ: 7 là số nguyên tố, 9 không phải là số nguyên tố.

function kiemTraSoNguyenTo(bien6){
    let dayuocso
}



