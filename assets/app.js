let input = document.getElementById("input");
let button = document.getElementById("btn");
let liste = document.getElementById("liste");

// inputu yazdır
function yazdir() {
    //eğer içerik boş ie
    if (input.value === "") {
        Swal.fire({
            title: "içerik boş!",
            icon: "warning",
            draggable: true
        });
        //eğer içerik yazdıysa
    } else {
        let li = document.createElement("li");
        liste.appendChild(li);
        li.innerHTML = input.value;


        let span = document.createElement("span");
        li.appendChild(span);
        span.innerHTML = "&#10060";


        Swal.fire({
            title: "Kaydedildi!",
            icon: "success"
        });

        kaydet();
        //inputu boşalt
        input.value = "";
    }
}

// sil tışu
liste.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        kaydet();
    }
    // seçildi tuşu
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    kaydet();
})
//kaydet
function kaydet() {
    localStorage.setItem("data", liste.innerHTML);
}
//gör
function gorme() {
    liste.innerHTML = localStorage.getItem("data");
}

gorme();
button.addEventListener("click", yazdir);
// enter'a basınca kaydedilsin
input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        yazdir();
    }
})