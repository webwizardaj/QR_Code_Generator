let image = document.querySelector("#size");
let qrtext = document.querySelector("#qrtext");
let Generate_Qr = document.querySelector(".Generate_Qr");

function generator() {
    let qrValue = qrtext.value.trim();
    if (qrValue) {
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrValue)}`;
    } else {
        alert("Please enter text or URL");
    }
}

Generate_Qr.addEventListener("click", generator);
