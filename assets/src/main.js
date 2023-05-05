function listAct(no, activities, date) {
    return `
    <hr/>
    <div class="list-activities">
        <span class="count-number">${no}</span>. ${activities} <time>(${date})</time>
    </div>
    `
}

function link(link, label) {
    return `<a href='${link}' target='_blank'>${label}</a>`
}

function listInfo(label, value) {
    return `
    <hr/>
    <div class="list-info">
        <h1 class="label-info">${label}: </h1>
        <p>${value}</p>
    </div>`
}

document.querySelector("#profile-information").innerHTML = 
listInfo("Nama", "Muhammad Naufal Yafi'")
+ listInfo("NIM", "21.240.0057")
+ listInfo("Jurusan", "Teknik Informatika")
+ listInfo("Riwayat Pendidikan", "SDN 01 Pekuncen <br/> SMP 02 Wiradesa <br/> SMA 01 Wiradesa")
+ listInfo("Alamat", "Pekuncen, Wiradesa")
+ listInfo("No. HP", "+62-896-1940-6731")
+ listInfo("Email", "naufalyn306 @gmail.com") + "<hr/>"


document.querySelector("#social-information").innerHTML = 
listInfo("Gmail", link("https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJqSvjQznTTQhrwwRnpDMsTxHbtlJGTVNncppVZqSTZnqqMJgsXcXtqKcHFXPWvHDpvgBdB", "naufalyn306@gmail.com"))
+ listInfo("Whatsapp", link("https://wa.me/6289619406731", "wa.me/6289619406731"))
+ listInfo("Instagram", link("https://instagram.com/naufal_yaf", "instagram.com/naufal_yaf"))
+ listInfo("Github", link("https://github.com/naufal-yafi", "github.com/naufal-yafi"))
+ listInfo("Hackerrank", link("https://www.hackerrank.com/muhammadnaufaly1", "hackerrank.com/muhammadnaufaly1"))
+ listInfo("Behance", link("http://be.net/naufal-yafi", "be.net/naufal-yafi"))
+ listInfo("Medium", link("https://medium.com/@muhammadnaufalyafi00", "medium.com/@muhammadnaufalyafi00")) + "<hr/>"

document.querySelector('.link').innerHTML = `<a href="https://github.com/naufal-yafi" target="_blank">- Muhammad Naufal Yafi' - 01/04/2023</a>`

let count = 1

document.querySelector("#list-history").innerHTML = 
listAct(count++, "INAGURASI MAHASISWA 2021", "25-09-2021")
+ listAct(count++, "TALKSHOW PEMBEKALAN ALUMNI NOVERMBER 2021", "13-11-2021")
+ listAct(count++, "PEMBEKALAN WISUDAWAN TH.AKADEMIK 2021/2022 SEMESTER GASAL", "21-05-2022")
+ listAct(count++, "STMIK BERSHOLAWAT TAHUN 2022", "28-05-2022")
+ listAct(count++, "MINI CONCERT PARTFORIA#2 UKM KESENIAN PATRIOT", "25-06-2022")
+ listAct(count++, "EXPO STMIK 2022", "28-07-2022")
+ listAct(count++, "BEDAH FILM AGUSTUS 2022", "13-08-2022")
+ listAct(count++, "TALENT SCOUTING SCC STMIK WIDYA PRATAMA 2022", "03-09-2022")
+ listAct(count++, "KEAKTIFAN PRODUKSI ACARA TV", "01-09-2022")
+ listAct(count++, "MOBILE E-SPORT COMPETITION", "10-09-2022") + "<hr/>"
