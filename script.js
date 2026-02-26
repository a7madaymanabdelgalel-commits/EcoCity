function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFact() {
    const facts = [
        "إعادة تدوير طن واحد من الورق يوفر 17 شجرة.",
        "إعادة تدوير الألومنيوم يوفر 95% من الطاقة.",
        "التدوير يقلل من كمية النفايات في المدافن بنسبة كبيرة."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact").textContent = randomFact;
}

function submitForm() {
    alert("تم إرسال رسالتك بنجاح!");
    return false;
}
