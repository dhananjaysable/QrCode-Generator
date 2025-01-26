const urlInput = document.getElementById("url-input")
const btn = document.getElementById("btn")
const urlImg = document.getElementById("qr-img")

btn.addEventListener("click", () => {
    const inputValue = urlInput.value;
    if (!inputValue) {
        alert("Please enter something!")
        return;
    } else {
        urlImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        urlImg.alt = `Qr Code for ${inputValue}`
    }
})