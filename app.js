function Menu(e) {
    let list = document.querySelector('#list');
    let title = document.querySelector('#text-title');

    if (e.name === 'menu') {
        document.querySelector('#text-title').style.visibility = 'hidden';
    } else if (e.name = 'close') {
        document.querySelector('#text-title').style.visibility = 'visible';
    }

    
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'),list.classList.remove('opacity-0'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'),list.classList.add('opacity-0'))
}

let members = [
    {
        name: "กิตติธร เหลาะหมาน",
        no: "1",
        position: "รองหัวหน้ากลุ่ม",
        image: "images/not.jpg"
    },
    {
        name: "จิตติพัฒน์ ตุ้ยนะ",
        no: "3",
        position: "หัวหน้ากลุ่ม",
        image: "images/tum.jpg"
    },
    {
        name: "ศนิชา ศรีผล",
        no: "31",
        position: "เลขานุการ",
        image: "images/sanicha.jpg"
    },
    {
        name: "ธนาดร ยิ้มละม่อม",
        no: "8",
        position: "สมาชิกในกลุ่ม",
        image: "images/golf.jpg"
    },
    {
        name: "ธัญชนก แดงศรีวัลย์",
        no: "17",
        position: "สมาชิกในกลุ่ม",
        image: "images/fah.jpg"
    },
    {
        name: "อรอุมา ณ อุบล",
        no: "35",
        position: "สมาชิกในกลุ่ม",
        image: "images/pan.jpg"
    }
]

let card = '';
members.map((member) => {
    card += `<div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">`
    card += `<div class="flex justify-center md:justify-end -mt-16">`
    card += `<img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="${member.image}">`
    card += ` </div>`
    card += `<div>`
    card += `<h2 class="text-gray-800 text-3xl font-semibold">${member.position}</h2>`
    card += `<p class="mt-2 text-gray-600"></p>`
    card += `</div>`
    card += `<div class="flex justify-end mt-4">`
    card += `<a class="text-xl font-medium text-indigo-500">${member.name}</a>`
    card += ` </div>`
    card += `</div>`
})

document.querySelector('.members').innerHTML = card