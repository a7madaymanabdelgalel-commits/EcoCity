// تحديث شريط التقدم عند التمرير
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollTracker").style.width = scrolled + "%";
};

// وظيفة الخروج الآمن
function exitApp() {
    if(confirm("هل انتهيت من جولتك في EcoCity؟")) {
        window.close();
        alert("شكراً لك! تذكر أن مستقبلك يبدأ بخطوة خضراء.");
    }
}
