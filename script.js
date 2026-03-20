// ================= تسجيل حساب =================
function register() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPass").value;
  let pass2 = document.getElementById("regPass2").value;

  if (!name || !email || !pass || !pass2) {
    alert("املأ كل الحقول");
    return;
  }

  if (pass !== pass2) {
    alert("كلمة المرور غير متطابقة");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email, pass }));
  alert("تم إنشاء الحساب");
  window.location = "index.html";
}

// ================= تسجيل دخول =================
function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.pass === pass) {
    window.location = "dashboard.html";
  } else {
    alert("بيانات غلط");
  }
}

// ================= الخدمات =================
if (document.getElementById("services")) {

  let services = [

  "🎬┆↫ تـــزويـــد مشاهدات تيك توك",
  "❤️┆↫ تـــزويـــد لايكات تيك توك",
  "👥┆↫ تـــزويـــد متابعين تيك توك",

  "▶️┆↫ تـــزويـــد مشاهدات يوتيوب",
  "👍┆↫ تـــزويـــد لايكات يوتيوب",
  "👤┆↫ تـــزويـــد متابعين يوتيوب",
  "💬┆↫ تـــزويـــد تعليقات يوتيوب",

  "📲┆↫ تـــزويـــد متابعين واتساب",
  "🔥┆↫ تـــزويـــد تفاعلات واتساب",

  "📸┆↫ تـــزويـــد مشاهدات انستا",
  "❤️┆↫ تـــزويـــد لايكات انستا",
  "👥┆↫ تـــزويـــد متابعين انستا",
  "💬┆↫ تـــزويـــد تعليقات انستا",

  "🌐┆↫ KICK",
  "🌐┆↫ TELEGRAM",
  "🌐┆↫ TWITER",

  "🛡️┆↫ الـــحـصـول علـى حــمـايـة Meta",
  "📞┆↫ أرقــام وهــمـيـة",
  "👥┆↫ جـــروبــات +200",
  "📢┆↫ قـنــوات واتساب",
  "🚀┆↫ رشــق تــفـاعل واتسـاب",
  "🤖┆↫ بــوتـات واتـسـاب 300 امر",

  "💰┆↫ شــحـن UC Pubg",
  "💎┆↫ شــحـن جـــواهـر Free Fire",
  "🎲┆↫ شـحـن Ludo",
  "⚽┆↫ شــحـن Fifa Points",
  "🕹️┆↫ العاب اخرى قريباً",

  "🎮┆↫ بيع حسابات Pubg mobile",
  "🎮┆↫ بيع حسابات Fifa mobile",
  "🎮┆↫ بيع حسابات pes mobile",
  "🎮┆↫ بيع حسابات Total Football",

  "🎨┆↫ تصميم لوجوهات Anime",
  "🏪┆↫ تصميم لوجوهات محلات",
  "✨┆↫ تصميمات اخرى",

  "📱┆↫ طريقة 120FPS PUBG (تقليل لاج)"

  ];

  let container = document.getElementById("services");

services.forEach(service => {

  let div = document.createElement("div");
  div.className = "service";

  div.innerHTML = `
    <h3>${service}</h3>

    <div class="counter">
      <button class="minus">-</button>
      <span>100</span>
      <button class="plus">+</button>
    </div>

    <button class="orderBtn">طلب / استفسار</button>
  `;

  let minus = div.querySelector(".minus");
  let plus = div.querySelector(".plus");
  let countSpan = div.querySelector("span");

  // هل الخدمة سوشيال؟
  let isSocial =
    service.includes("تيك توك") ||
    service.includes("يوتيوب") ||
    service.includes("انستا");

  let step = isSocial ? 100 : 1;

  minus.onclick = () => {
    let val = parseInt(countSpan.innerText);
    if (val > step) countSpan.innerText = val - step;
  };

  plus.onclick = () => {
    let val = parseInt(countSpan.innerText);
    countSpan.innerText = val + step;
  };

  let orderBtn = div.querySelector(".orderBtn");

  orderBtn.onclick = () => {
    let count = countSpan.innerText;
    let msg = `اريد ${service} العدد: ${count}`;
    let url = `https://wa.me/972599351264?text=${encodeURIComponent(msg)}`;
    window.open(url);
  };

  container.appendChild(div);
});
