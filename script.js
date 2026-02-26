// 1. إخفاء شاشة التحميل بعد ثانيتين
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash');
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 1000);
    }, 2000);
});

// 2. وظيفة زر التنبيه
function showAlert() {
    alert("شكراً لاهتمامك بالبيئة! ابدأ بتصنيف نفاياتك المنزلية اليوم.");
}

// 3. وظيفة الخروج (إغلاق أو توجيه)
document.getElementById('exit-btn').addEventListener('click', () => {
    if (confirm("هل تريد حقاً مغادرة الموقع؟")) {
        window.location.href = "https://www.google.com";
    }
});

// 4. تأثيرات التمرير السلس (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
