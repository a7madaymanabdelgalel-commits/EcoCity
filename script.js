function scrollToSection() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function sendMessage() {
    alert("تم إرسال رسالتك بنجاح ✅");
}

function exitSite() {
    window.close();
}

let count = 0;
let counter = document.getElementById("count");

let interval = setInterval(() => {
    if (count < 500) {
        count += 5;
        counter.textContent = count;
    } else {
        clearInterval(interval);
    }
}, 50);
