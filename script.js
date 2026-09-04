// ڕێکخستنی فایەربەیس
const firebaseConfig = {
  apiKey: "AIzaSyCRIeABo38myXZ23aMOb-FMK9K_MTgIxTY",
  authDomain: "kurd-frame.firebaseapp.com",
  projectId: "kurd-frame",
  storageBucket: "kurd-frame.firebasestorage.app",
  messagingSenderId: "816317120635",
  appId: "1:816317120635:web:15e236df337c3b3349e2de",
  measurementId: "G-S154H5KN6P"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

const translations = {
    ku: {
        home: "سەرەکی", movies: "فلیمەکان", series: "زنجیرەکان", anime: "ئەنیمی",
        profile: "پڕۆفایلی من / چوونەژوورەوە", developer: "دیڤلۆپەر",
        settings: "ڕێکخستنەکان", notificationsMenu: "ئاگادارکردنەوەکان",
        menuTitle: "لیستی سەرەکی", latestMovies: "دوایین فیلمە بڵاوکراوەکان",
        moviesTitle: "هەموو فلیمەکان", seriesTitle: "زنجیرە تەلەڤزیۆنییەکان", animeTitle: "ئەنیمییە بەناوبانگەکان",
        searchPlaceholder: "گەڕان بەدوای فیلم، زنجیرە یان ئەنیمی...", searchBtn: "گەڕان",
        watch: "بینین", playerTitle: "بەشی لێخوڕین و پەخشی ڕاستەوخۆی بینین",
        videoPlaceholderText: "فیدۆ و پەخشی ڕاستەوخۆ لێرەوە دەست پێدەکات",
        seasonsTitle: "هەڵبژاردنی وەرزەکان:", episodesTitle: "ئەڵقەکانی ئەم وەرچە:",
        backBtn: "گەڕانەوە", imdbRating: "رێزبەندی IMDb", budget: "بودجە", revenue: "داهات",
        year: "ساڵ", director: "دەرهێنەر", streamType: "جۆری پەخش",
        noNotifications: "هیچ ئاگادارکردنەوەیەکی نوێ نییە لە ئێستادا.",
        authPrompt: "تکایە یەکێک لەم هەڵبژاردنانە دیاری بکە:",
        loginTabBtn: "چوونەژوورەوە (Log in)",
        registerTabBtn: "دروستکردنی ئەکاونتی نوێ (Create new account)",
        loginPromptText: "بۆ چوونەژوورەوە، ئەکاونتی پێشووت هەڵبژێرە:",
        registerPromptText: "بۆ دروستکردنی ئەکاونتی نوێ، جیمێلەکەت ببەستەوە:",
        selectLang: "زمان (Language):", darkMode: "دۆخی تاریک (Dark Mode):",
        qualityLabel: "کوالێتی پەخش (Streaming Quality):", notificationsLabel: "ئاگادارکردنەوەکانی سیستم:",
        clearCacheLabel: "پاککردنەوەی خەزنەی کاتی (Clear Cache):", clearBtn: "پاککردنەوە",
        cacheClearedAlert: "خەزنەی کاتی بە سەرکەوتوویی پاککرایەوە!",
        footerRights: "هەموو مافێک پارێزراوە بۆ ماڵپەڕی KurdFrame © ٢٠٢٦",
        favoritesTitle: "فیلم، زنجیرە و ئەنیمییە دڵخوازەکان:", logoutBtn: "چوونەدەرەوە (Log out)",
        completeProfileTitle: "تکایە زانیارییەکانت تەواو بکە", 
        step1Desc: "هەنگاوی ١ لە ٢: ناوی خۆت بنووسە",
        step2Desc: "هەنگاوی ٢ لە ٢: بەرواری لەدایکبوونت بنووسە",
        nextBtn: "دواتر", saveBtn: "تۆمارکردن", addToFav: "زیادکردن بۆ دڵخوازەکان", removeFromFav: "لابردن لە دڵخوازەکان"
    },
    ar: {
        home: "الرئيسية", movies: "الأفلام", series: "المسلسلات", anime: "أنيمي",
        profile: "الملف الشخصي / تسجيل الدخول", developer: "المطور",
        settings: "الإعدادات", notificationsMenu: "الإشعارات",
        menuTitle: "القائمة الرئيسية", latestMovies: "أحدث الأفلام المضافة",
        moviesTitle: "جميع الأفلام", seriesTitle: "المسلسلات التلفزيونية", animeTitle: "أشهر الأنميات",
        searchPlaceholder: "ابحث عن فيلم، مسلسل أو أنيمي...", searchBtn: "بحث",
        watch: "مشاهدة", playerTitle: "مشغل البث المباشر",
        videoPlaceholderText: "يبدأ الفيديو والبث المباشر من هنا",
        seasonsTitle: "اختر المواسم:", episodesTitle: "حلقات هذا الموسم:",
        backBtn: "رجوع", imdbRating: "تقييم IMDb", budget: "الميزانية", revenue: "الإيرادات",
        year: "السنة", director: "المخرج", streamType: "نوع البث",
        noNotifications: "لا توجد إشعارات جديدة في الوقت الحالي.",
        authPrompt: "يرجى اختيار أحد الخيارات التالية:",
        loginTabBtn: "تسجيل الدخول (Log in)",
        registerTabBtn: "إنشاء حساب جديد (Create new account)",
        loginPromptText: "لتسجيل الدخول، اختر حسابك السابق:",
        registerPromptText: "لإنشاء حساب جديد، اربط بريدك الإلكتروني:",
        selectLang: "اللغة (Language):", darkMode: "الوضع المظلم (Dark Mode):",
        qualityLabel: "جودة البث (Streaming Quality):", notificationsLabel: "إشعارات النظام:",
        clearCacheLabel: "مسح ذاكرة التخزين المؤقت (Clear Cache):", clearBtn: "مسح",
        cacheClearedAlert: "تم مسح ذاكرة التخزين المؤقت بنجاح!",
        footerRights: "جميع الحقوق محفوظة لموقع KurdFrame © ٢٠٢٦",
        favoritesTitle: "الأفلام، المسلسلات والأنيمي المفضلة:", logoutBtn: "تسجيل الخروج (Log out)",
        completeProfileTitle: "يرجى إكمال معلوماتك", 
        step1Desc: "الخطوة 1 من 2: أدخل اسمك",
        step2Desc: "الخطوة 2 من 2: أدخل تاريخ ميلادك",
        nextBtn: "التالي", saveBtn: "حفظ", addToFav: "إضافة إلى المفضلة", removeFromFav: "إزالة من المفضلة"
    },
    en: {
        home: "Home", movies: "Movies", series: "Series", anime: "Anime",
        profile: "My Profile / Login", developer: "Developer",
        settings: "Settings", notificationsMenu: "Notifications",
        menuTitle: "Main Menu", latestMovies: "Latest Released Movies",
        moviesTitle: "All Movies", seriesTitle: "TV Series", animeTitle: "Popular Anime",
        searchPlaceholder: "Search for a movie, series or anime...", searchBtn: "Search",
        watch: "Watch", playerTitle: "Live Streaming Player",
        videoPlaceholderText: "Video and live streaming starts here",
        seasonsTitle: "Select Seasons:", episodesTitle: "Episodes of this season:",
        backBtn: "Back", imdbRating: "IMDb Rating", budget: "Budget", revenue: "Revenue",
        year: "Year", director: "Director", streamType: "Stream Type",
        noNotifications: "No new notifications right now.",
        authPrompt: "Please select one of the options below:",
        loginTabBtn: "Log in",
        registerTabBtn: "Create new account",
        loginPromptText: "To log in, select your existing account:",
        registerPromptText: "To create a new account, connect your Google account:",
        selectLang: "Language:", darkMode: "Dark Mode:",
        qualityLabel: "Streaming Quality:", notificationsLabel: "System Notifications:",
        clearCacheLabel: "Clear Cache:", clearBtn: "Clear",
        cacheClearedAlert: "Cache cleared successfully!",
        footerRights: "All rights reserved to KurdFrame © 2026",
        favoritesTitle: "Favorite Movies, Series & Anime:", logoutBtn: "Log out",
        completeProfileTitle: "Complete Your Profile", 
        step1Desc: "Step 1 of 2: Enter your name",
        step2Desc: "Step 2 of 2: Enter your birthdate",
        nextBtn: "Next", saveBtn: "Save", addToFav: "Add to Favorites", removeFromFav: "Remove from Favorites"
    }
};

const allMediaItems = [
    { id: 'm1', title: 'نیشانەی ئازایەتی', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80', rating: '8.4', budget: '150 ملیۆن دۆلار', revenue: '420 ملیۆن دۆلار', year: '٢٠٢٦', director: 'کریستۆفەر نۆلان', desc: 'ئەم فیلمە پڕ لە چێژ و سەرکێشی...', type: 'movie' },
    { id: 's1', title: 'کۆتا کادر', poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80', rating: '8.8', budget: '50 ملیۆن دۆلار', revenue: '180 ملیۆن دۆلار', year: '٢٠٢٦', director: 'ڤینس گیلیگان', desc: 'زنجیرەیەکی تەلەڤزیۆنی...', type: 'series' },
    { id: 'a1', title: 'هێرشی تایتانەکان', poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80', rating: '9.1', budget: '40 ملیۆن دۆلار', revenue: '200 ملیۆن دۆلار', year: '٢٠٢٣', director: 'هاتسورو ئاراگی', desc: 'چیرۆکی جیهانێک...', type: 'anime' }
];

let currentUserData = null;
let currentActiveItem = null;
let isLoggingIn = false;
let tempRegName = "";

function initApp() { 
    switchPage('home'); 
    renderMediaGrids();
    
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            const userDocRef = db.collection('users').doc(user.uid);
            try {
                const docSnap = await userDocRef.get();
                if (docSnap.exists) {
                    currentUserData = docSnap.data();
                    updateProfileUI(user, currentUserData);
                }
            } catch (e) {
                console.log("Offline mode");
            }
        } else {
            currentUserData = null;
            resetProfileUI();
        }
    });
}

function renderMediaGrids() {
    const homeGrid = document.getElementById('homeMoviesGrid');
    const moviesGrid = document.getElementById('moviesGrid');
    const seriesGrid = document.getElementById('seriesGrid');
    const animeGrid = document.getElementById('animeGrid');

    if(!homeGrid) return;

    homeGrid.innerHTML = '';
    moviesGrid.innerHTML = '';
    seriesGrid.innerHTML = '';
    animeGrid.innerHTML = '';

    allMediaItems.forEach(item => {
        const cardHTML = `
            <div class="movie-card" onclick='openMediaItem("${item.id}")'>
                <img class="movie-poster" src="${item.poster}" alt="Poster">
                <div class="movie-info">
                    <div class="movie-title">${item.title}</div>
                    <div class="movie-meta"><span>${item.year}</span><span>⭐ ${item.rating}</span></div>
                    <button class="watch-btn" data-i18n="watch">بینین</button>
                </div>
            </div>
        `;
        if(item.type === 'movie') { homeGrid.innerHTML += cardHTML; moviesGrid.innerHTML += cardHTML; }
        else if(item.type === 'series') { seriesGrid.innerHTML += cardHTML; }
        else if(item.type === 'anime') { animeGrid.innerHTML += cardHTML; }
    });
}

function openMediaItem(id) {
    const item = allMediaItems.find(x => x.id === id);
    if (!item) return;
    currentActiveItem = item;
    if (item.type === 'movie') {
        openDetail(item.title, item.poster, item.rating, item.budget, item.revenue, item.year, item.director, item.desc);
    } else {
        openSeriesDetail(item.title, item.poster, item.rating, item.budget, item.revenue, item.year, item.director, item.desc);
    }
    checkFavoriteStatus();
}

function showLoginView() {
    document.getElementById('authSelectionView').style.display = 'none';
    document.getElementById('loginView').style.display = 'block';
    document.getElementById('registerView').style.display = 'none';
}

function showRegisterView() {
    document.getElementById('authSelectionView').style.display = 'none';
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('registerView').style.display = 'block';
}

function backToAuthSelection() {
    document.getElementById('authSelectionView').style.display = 'block';
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('registerView').style.display = 'none';
}

function handleLoginGoogle() {
    if (isLoggingIn) return;
    isLoggingIn = true;
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(async (result) => {
        isLoggingIn = false;
        const user = result.user;
        const userDocRef = db.collection('users').doc(user.uid);
        const docSnap = await userDocRef.get();

        if (!docSnap.exists) {
            await firebase.auth().signOut();
            alert("ئەم ئەکاونتە بوونی نییە! تکایە لە بەشی دروستکردنی ئەکاونت تۆمار بکە.");
            backToAuthSelection();
        } else {
            currentUserData = docSnap.data();
            updateProfileUI(user, currentUserData);
        }
    }).catch((error) => {
        isLoggingIn = false;
        if (error.code === 'auth/cancelled-popup-request') return;
        alert("هەڵە: " + error.message);
    });
}

function handleRegisterGoogle() {
    if (isLoggingIn) return;
    isLoggingIn = true;
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(async (result) => {
        isLoggingIn = false;
        const user = result.user;
        const userDocRef = db.collection('users').doc(user.uid);
        const docSnap = await userDocRef.get();

        if (docSnap.exists) {
            currentUserData = docSnap.data();
            updateProfileUI(user, currentUserData);
            alert("ئەم ئەکاونتە پێشتر هەیە! ڕاستەوخۆ چوویە ژوورەوە.");
        } else {
            window.tempGoogleUser = user;
            const step1 = document.getElementById('regStep1');
            const step2 = document.getElementById('regStep2');
            const modal = document.getElementById('registerModal');
            if(step1) step1.style.display = 'block';
            if(step2) step2.style.display = 'none';
            if(modal) modal.style.display = 'flex';
        }
    }).catch((error) => {
        isLoggingIn = false;
        if (error.code === 'auth/cancelled-popup-request') return;
        alert("هەڵە: " + error.message);
    });
}

function proceedToStep2() {
    const nameInput = document.getElementById('regNameInput').value.trim();
    if (!nameInput) {
        alert("تکایە ناوی خۆت بنووسە!");
        return;
    }
    tempRegName = nameInput;
    const step1 = document.getElementById('regStep1');
    const step2 = document.getElementById('regStep2');
    if(step1) step1.style.display = 'none';
    if(step2) step2.style.display = 'block';
}

function saveNewUserRegistration() {
    const birthDateInput = document.getElementById('regBirthDateInput');
    const birthDate = birthDateInput ? birthDateInput.value : '';
    if (!birthDate) {
        alert("تکایە بەرواری لەدایکبوونت دیاری بکە!");
        return;
    }

    const user = window.tempGoogleUser;
    const userData = {
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL || '',
        name: tempRegName,
        birthDate: birthDate,
        favorites: []
    };

    db.collection('users').doc(user.uid).set(userData).then(() => {
        currentUserData = userData;
        const modal = document.getElementById('registerModal');
        if(modal) modal.style.display = 'none';
        updateProfileUI(user, userData);
        alert("ئەکاونتەکەت بە سەرکەوتوویی دروستکرا!");
    }).catch(error => {
        alert("هەڵە ڕوویدا: " + error.message);
    });
}

function updateProfileUI(user, data) {
    const authSel = document.getElementById('authSelectionView');
    const loginV = document.getElementById('loginView');
    const regV = document.getElementById('registerView');
    const loggedV = document.getElementById('loggedInView');

    if(authSel) authSel.style.display = 'none';
    if(loginV) loginV.style.display = 'none';
    if(regV) regV.style.display = 'none';
    if(loggedV) loggedV.style.display = 'block';

    const pImg = document.getElementById('userProfileImg');
    const pName = document.getElementById('userProfileName');
    const pEmail = document.getElementById('userProfileEmail');
    const pAge = document.getElementById('userProfileAge');

    if(pImg) pImg.src = data.photoURL || user.photoURL || '';
    if(pName) pName.innerText = data.name || '';
    if(pEmail) pEmail.innerText = "ئیمەیڵ: " + (data.email || user.email);
    if(pAge) pAge.innerText = "بەرواری لەدایکبوون: " + (data.birthDate || '');

    renderFavoritesList();
}

function resetProfileUI() {
    const authSel = document.getElementById('authSelectionView');
    const loggedV = document.getElementById('loggedInView');
    if(authSel) authSel.style.display = 'block';
    if(loggedV) loggedV.style.display = 'none';
}

function renderFavoritesList() {
    const favContainer = document.getElementById('userFavoritesList');
    if(!favContainer) return;
    favContainer.innerHTML = '';

    if (!currentUserData || !currentUserData.favorites || currentUserData.favorites.length === 0) {
        favContainer.innerHTML = '<p style="color:var(--text-muted); font-size:13px;">هیچ فیلم، زنجیرە یان ئەنیمییەک لە دڵخوازەکانتدا نییە.</p>';
        return;
    }

    currentUserData.favorites.forEach(favId => {
        const item = allMediaItems.find(x => x.id === favId);
        if (item) {
            favContainer.innerHTML += `
                <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-dark); padding:8px 12px; border-radius:6px; margin-bottom:5px;">
                    <span style="font-size:14px; cursor:pointer; color:var(--text-color);" onclick='openMediaItem("${item.id}")'>${item.title} (${item.type})</span>
                    <button onclick='removeFromFavorites("${item.id}")' style="background:none; border:none; color:red; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        }
    });
}

function toggleFavoriteCurrent() {
    if (!firebase.auth().currentUser) {
        alert("تکایە سەرەتا چوونەژوورەوە ئەنجام بدە!");
        switchPage('profile');
        return;
    }
    if (!currentActiveItem) return;
    if (!currentUserData.favorites) currentUserData.favorites = [];

    const index = currentUserData.favorites.indexOf(currentActiveItem.id);
    if (index > -1) currentUserData.favorites.splice(index, 1);
    else currentUserData.favorites.push(currentActiveItem.id);

    db.collection('users').doc(currentUserData.uid).update({
        favorites: currentUserData.favorites
    }).then(() => {
        checkFavoriteStatus();
        renderFavoritesList();
    });
}

function removeFromFavorites(id) {
    if (!currentUserData) return;
    currentUserData.favorites = currentUserData.favorites.filter(x => x !== id);
    db.collection('users').doc(currentUserData.uid).update({
        favorites: currentUserData.favorites
    }).then(() => {
        checkFavoriteStatus();
        renderFavoritesList();
    });
}

function checkFavoriteStatus() {
    if (!currentActiveItem || !currentUserData || !currentUserData.favorites) return;
    const isFav = currentUserData.favorites.includes(currentActiveItem.id);
    const lang = document.getElementById('htmlRoot').getAttribute('lang') || 'ku';
    const t = translations[lang];
    const btnText = document.getElementById('favoriteBtnText');
    if(btnText) btnText.innerText = isFav ? t.removeFromFav : t.addToFav;
}

function googleLogout() {
    firebase.auth().signOut().then(() => {
        alert("بە سەرکەوتوویی چوویە دەرەوە.");
        switchPage('home');
    });
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if(!sidebar || !overlay) return;
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-280px';
        overlay.style.display = 'none';
    } else {
        sidebar.style.right = '0px';
        overlay.style.display = 'block';
    }
}

function toggleSearchBox() {
    const searchBox = document.getElementById('searchExpandBox');
    if(searchBox) searchBox.classList.toggle('active');
}

function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active-page'));
    const targetPage = document.getElementById(pageId);
    if(targetPage) targetPage.classList.add('active-page');

    const topNavBar = document.getElementById('topNavBar');
    const btnHome = document.getElementById('btnHome');
    const btnMovies = document.getElementById('btnMovies');
    const btnSeries = document.getElementById('btnSeries');
    const btnAnime = document.getElementById('btnAnime');
    const headerSearchBtn = document.getElementById('headerSearchBtn');

    if(topNavBar && btnHome && btnMovies && btnSeries && btnAnime && headerSearchBtn) {
        topNavBar.classList.remove('active-nav');
        btnHome.classList.remove('show-btn');
        btnMovies.classList.remove('show-btn');
        btnSeries.classList.remove('show-btn');
        btnAnime.classList.remove('show-btn');

        if (['home', 'movies', 'series', 'anime'].includes(pageId)) {
            headerSearchBtn.style.display = 'flex';
            topNavBar.classList.add('active-nav');
            btnHome.classList.add('show-btn');
            btnMovies.classList.add('show-btn');
            btnSeries.classList.add('show-btn');
            btnAnime.classList.add('show-btn');
        } else {
            headerSearchBtn.style.display = 'none';
            const searchBox = document.getElementById('searchExpandBox');
            if(searchBox) searchBox.classList.remove('active');
        }
    }

    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.style.right === '0px') toggleMenu();
    window.scrollTo(0, 0);
}

function openDetail(title, poster, rating, budget, revenue, year, director, desc) {
    document.getElementById('detTitle').innerText = title;
    document.getElementById('detPoster').src = poster;
    document.getElementById('detRating').innerText = rating + " ⭐";
    document.getElementById('detBudget').innerText = budget;
    document.getElementById('detRevenue').innerText = revenue;
    document.getElementById('detYear').innerText = year;
    document.getElementById('detDirector').innerText = director;
    document.getElementById('detDesc').innerText = desc;
    const seasonsBox = document.getElementById('seriesSeasonsBox');
    if(seasonsBox) seasonsBox.style.display = 'none';
    switchPage('detailView');
}

function openSeriesDetail(title, poster, rating, budget, revenue, year, director, desc) {
    openDetail(title, poster, rating, budget, revenue, year, director, desc);
    const seasonsBox = document.getElementById('seriesSeasonsBox');
    if(seasonsBox) seasonsBox.style.display = 'block';
}

function clearAppCache() {
    const currentLang = document.getElementById('htmlRoot').getAttribute('lang') || 'ku';
    alert(translations[currentLang].cacheClearedAlert);
}

function changeLanguage(lang) {
    const htmlRoot = document.getElementById('htmlRoot');
    if(!htmlRoot) return;
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    const texts = translations[lang] || translations.ku;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) el.innerText = texts[key];
    });
    const searchInput = document.getElementById('searchInput');
    if(searchInput) searchInput.placeholder = texts.searchPlaceholder;
    checkFavoriteStatus();
}

function toggleDarkMode(checkbox) {
    if (checkbox.checked) document.body.classList.remove('light-mode');
    else document.body.classList.add('light-mode');
}
