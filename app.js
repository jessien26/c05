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
    let chieuDaiDayUocSo = timUocSo(bien6).length
    if (chieuDaiDayUocSo < 2) {
        return true
    }
    else{
        return false
    }
}
const y = kiemTraSoNguyenTo(number)
    if(y === true){
        console.log("Day la so nguyen to")
    }
    else{
        console.log("Day khong phai la so nguyen to")
    }

//## Bài 7: Liệt kê chẵn
//Liệt kê các số chẵn trong mảng một chiều số nguyên.

let bai7array = [1,2,4,5,6,7,9]
function lietkechan(bien7){
    let n = bien7.length
    let bai7arraySoChan =[]
    for(let index = 0; index < n; index++){
        if(bien7[index] % 2 === 0){
            bai7arraySoChan.push(bien7[index])
        }
    }
    return bai7arraySoChan
}
let ketQuaBai7 = lietkechan(bai7array)
console.log("Bai 7 ===> ", ketQuaBai7)

//Bài 8: Liệt kê dương
//Liệt kê các số dương trong mảng một chiều số nguyên.

let bai8array = [-1, -2, -4, 7, -9, 2, 4, 5]
function lietKeDuong (array8){
    let n = array8.length
    let bai8arraySoDuong =[]
    for(let index = 0; index < n; index++){
        if(array8[index] > 0){
            bai8arraySoDuong.push(array8[index])
        }
    }
    return bai8arraySoDuong
}
let ketQuaBai8 = lietKeDuong (bai8array)
console.log("Bai 8 ===> ", ketQuaBai8)

//## Bài 9: Liệt kê số nguyên tố
//Liệt kê các số nguyên tố có trong mảng một chiều số nguyên.

let bai9array = [-1, -2, -4, 7, -9, 2, 4, 5]
function lietKeSoNguyenTo (array9){
    let arraySoNguyenDuongBai9 = []
    for (let index = 0; index < array9.length; index++){
        if (array9[index] > 0){
            arraySoNguyenDuongBai9.push(array9[index])
        }
    }
    return arraySoNguyenDuongBai9
    }
function inSoNguyenToBai9(){
    let arraySoNguyenToBai9 =[]
    let a = timUocSo(arraySoNguyenDuongBai9)
    if (a.length > 2) {
        arraySoNguyenToBai9.push[a]
        }
    return arraySoNguyenToBai9
}
let ketQuaBai9 = lietKeSoNguyenTo(bai9array)
console.log("Ket qua bai 9 ===> ", ketQuaBai9)

//## Bài 10: Tổng âm
//Tính tổng các số âm trong mảng một chiều số nguyên.

let bai10array = [-1, -2, -4, 7, -9, 2, 4, 5]
function tinhTongSoAm(array10){
    let tongSoAm = 0
    for(index = 0; index < array10.length; index++){
        if (array10[index] < 0){
            tongSoAm = tongSoAm + array10[index]
        }
    }
    return tongSoAm
}
const ketQuaBai10 = tinhTongSoAm(bai10array)
console.log ("Bai 10 ====> ", ketQuaBai10)

// Bài 11: Tích số nguyên tố
//Tính tích các số nguyên tố có trong mảng một chiều số nguyên.

let bai11array = [-1, -2, -4, 7, -9, 2, 4, 5]
function tinhTichSoNguyenTo(array11){
    let daySoNguyenToBai11 = lietKeSoNguyenTo (array11)
    let V1 = 1
    for(let index = 0; index < daySoNguyenToBai11.length; index++){
        V1 = V1 * daySoNguyenToBai11[index]
    }
    return V1
}
const ketQuaBai11 = tinhTichSoNguyenTo(bai11array)
console.log("Bai 11 =>>>>> ", ketQuaBai11)

//## Bài 12: Đếm lẻ
//Đếm các số lẻ trong mảng một chiều số nguyên.

let bai12array = [-1, -2, -4, 7, -9, 3, 4, 5]
function demSoLe(array12){
    let dem = 0
    for(let index = 0; index < array12.length; index++){
        if(array12[index] % 2 === 1){
            dem++
        }
    }
    return dem
}
const ketQuaBai12 = demSoLe(bai12array)
console.log("Bai 12 ===> ", ketQuaBai12)

//## Bài 13: Đếm số nguyên tố
//Đếm các số nguyên tố có trong mảng một chiều số nguyên.
let bai13array = [-1, -2, -4, 7, -9, 3, 4, 5]
function 