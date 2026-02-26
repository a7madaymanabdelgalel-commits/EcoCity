// تحديث شريط التقدم عند التمرير
window.onscroll = function() { updateProgress() };

function updateProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// وظيفة الخروج الاحترافية (شرط المسابقة رقم 15)
function exitApp() {
    if (confirm("هل انتهيت من استكشاف EcoCity؟ سيتم إغلاق النافذة الآن.")) {
        window.close();
        alert("شكراً لمشاركتك في رؤية مصر 2030!");
    }
}

// إضافة تأثير الظهور التدريجي للعناصر
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
});
