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
        favoritesTitle: "فیلم و زنجیرە دڵخوازەکان:", logoutBtn: "چوونەدەرەوە (Log out)",
        completeProfileTitle: "تکایە زانیارییەکانت تەواو بکە", completeProfileDesc: "چونکە ئەمە یەکەمجارەتە، پێویستە ناو و تەمەنت تۆمار بکەیت:",
        saveBtn: "تۆمارکردن", addToFav: "زیادکردن بۆ دڵخوازەکان", removeFromFav: "لابردن لە دڵخوازەکان"
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
        favoritesTitle: "الأفلام والمسلسلات المفضلة:", logoutBtn: "تسجيل الخروج (Log out)",
        completeProfileTitle: "يرجى إكمال معلوماتك", completeProfileDesc: "نظرًا لأن هذه هي زيارتك الأولى، يرجى إدخال الاسم والعمر:",
        saveBtn: "حفظ", addToFav: "إضافة إلى المفضلة", removeFromFav: "إزالة من المفضلة"
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
        favoritesTitle: "Favorite Movies & Series:", logoutBtn: "Log out",
        completeProfileTitle: "Complete Your Profile", completeProfileDesc: "Since this is your first time, please enter your name and age:",
        saveBtn: "Save", addToFav: "Add to Favorites", removeFromFav: "Remove from Favorites"
    }
};

const allMediaItems = [
    { id: 'm1', title: 'نیشانەی ئازایەتی', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80', rating: '8.4', budget: '150 ملیۆن دۆلار', revenue: '420 ملیۆن دۆلار', year: '٢٠٢٦', director: 'کریستۆفەر نۆلان', desc: 'ئەم فیلمە پڕ لە چێژ و سەرکێشی باس لە سەردەمی داهاتوو و جەنگە جیهانییەکان دەکات...', type: 'movie' },
    { id: 'm2', title: 'جیهانی ونبوو', poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80', rating: '8.1', budget: '120 ملیۆن دۆلار', revenue: '380 ملیۆن دۆلار', year: '٢٠٢٥', director: 'جەیمس کامیرۆن', desc: 'گەشتێکی خەیاڵی پڕ لە نهێنی بۆ قووڵایی زەوی...', type: 'movie' },
    { id: 's1', title: 'کۆتا کادر', poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80', rating: '8.8', budget: '50 ملیۆن دۆلار', revenue: '180 ملیۆن دۆلار', year: '٢٠٢٦', director: 'ڤینس گیلیگان', desc: 'زنجیرەیەکی تەلەڤزیۆنی سەرنجڕاکێش دەربارەی جیهانی تاوان...', type: 'series' },
    { id: 'a1', title: 'هێرشی تایتانەکان', poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80', rating: '9.1', budget: '40 ملیۆن دۆلار', revenue: '200 ملیۆن دۆلار', year: '٢٠٢٣', director: 'هاتسورو ئاراگی', desc: 'چیرۆکی جیهانێک کە تێیدا مرۆڤەکان لەژێر هەڕەشەی بوونەوەرە زەبەلاحەکاندا دەژین...', type: 'anime' }
];

let currentUserData = null;
let currentActiveItem = null;

function initApp() { 
    switchPage('home'); 
    renderMediaGrids();
    
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            const userDocRef = db.collection('users').doc(user.uid);
            const docSnap = await userDocRef.get();

            if (docSnap.exists) {
                currentUserData = docSnap.data();
                updateProfileUI(user, currentUserData);
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
        if(item.type === 'movie') {
            homeGrid.innerHTML += cardHTML;
            moviesGrid.innerHTML += cardHTML;
        } else if(item.type === 'series') {
            seriesGrid.innerHTML += cardHTML;
        } else if(item.type === 'anime') {
            animeGrid.innerHTML += cardHTML;
        }
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
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(async (result) => {
        const user = result.user;
        const userDocRef = db.collection('users').doc(user.uid);
        const docSnap = await userDocRef.get();

        if (!docSnap.exists) {
            await firebase.auth().signOut();
            alert("ئەم ئەکاونتە بوونی نییە! تکایە سەرەتا لە بەشی دروستکردنی ئەکاونتی نوێ تۆمار بکە.");
            backToAuthSelection();
        } else {
            currentUserData = docSnap.data();
            updateProfileUI(user, currentUserData);
        }
    }).catch((error) => {
        alert("هەڵە لە چوونەژوورەوە: " + error.message);
    });
}

function handleRegisterGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(async (result) => {
        const user = result.user;
        const userDocRef = db.collection('users').doc(user.uid);
        const docSnap = await userDocRef.get();

        if (docSnap.exists) {
            currentUserData = docSnap.data();
            updateProfileUI(user, currentUserData);
            alert("ئەم ئەکاونتە پێشتر هەبوو، ڕاستەوخۆ چوویە ژوورەوە!");
        } else {
            window.tempGoogleUser = user;
            document.getElementById('registerModal').style.display = 'flex';
        }
    }).catch((error) => {
        alert("هەڵە لە دروستکردنی ئەکاونت: " + error.message);
    });
}

function saveNewUserRegistration() {
    const name = document.getElementById('regNameInput').value.trim();
    const age = document.getElementById('regAgeInput').value.trim();

    if (!name || !age) {
        alert("تکایە ناو و تەمەن بە تەواوی بنووسە!");
        return;
    }

    const user = window.tempGoogleUser;
    const userData = {
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        name: name,
        age: age,
        favorites: []
    };

    db.collection('users').doc(user.uid).set(userData).then(() => {
        currentUserData = userData;
        document.getElementById('registerModal').style.display = 'none';
        updateProfileUI(user, userData);
        alert("ئەکاونتەکەت بە سەرکەوتوویی دروستکرا!");
    }).catch(error => {
        alert("هەڵە ڕوویدا: " + error.message);
    });
}

function updateProfileUI(user, data) {
    document.getElementById('authSelectionView').style.display = 'none';
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('registerView').style.display = 'none';
    document.getElementById('loggedInView').style.display = 'block';

    document.getElementById('userProfileImg').src = data.photoURL || user.photoURL;
    document.getElementById('userProfileName').innerText = data.name;
    document.getElementById('userProfileEmail').innerText = data.email;
    document.getElementById('userProfileAge').innerText = "تەمەن: " + data.age;

    renderFavoritesList();
}

function resetProfileUI() {
    document.getElementById('authSelectionView').style.display = 'block';
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('registerView').style.display = 'none';
    document.getElementById('loggedInView').style.display = 'none';
}

function renderFavoritesList() {
    const favContainer = document.getElementById('userFavoritesList');
    favContainer.innerHTML = '';

    if (!currentUserData || !currentUserData.favorites || currentUserData.favorites.length === 0) {
        favContainer.innerHTML = '<p style="color:var(--text-muted); font-size:13px;">هیچ فیلم یان زنجیرەیەک لە دڵخوازەکانتدا نییە.</p>';
        return;
    }

    currentUserData.favorites.forEach(favId => {
        const item = allMediaItems.find(x => x.id === favId);
        if (item) {
            favContainer.innerHTML += `
                <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-dark); padding:8px 12px; border-radius:6px;">
                    <span style="font-size:14px; cursor:pointer; color:var(--text-color);" onclick='openMediaItem("${item.id}")'>${item.title}</span>
                    <button onclick='removeFromFavorites("${item.id}")' style="background:none; border:none; color:red; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        }
    });
}

function toggleFavoriteCurrent() {
    if (!firebase.auth().currentUser) {
        alert("تکایە سەرەتا چوونەژوورەوە ئەنجام بدە بۆ زیادکردن بۆ دڵخوازەکان!");
        switchPage('profile');
        return;
    }

    if (!currentActiveItem) return;
    if (!currentUserData.favorites) currentUserData.favorites = [];

    const index = currentUserData.favorites.indexOf(currentActiveItem.id);
    if (index > -1) {
        currentUserData.favorites.splice(index, 1);
    } else {
        currentUserData.favorites.push(currentActiveItem.id);
    }

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
    if (!currentActiveItem || !currentUserData || !currentUserData.favorites) {
        document.getElementById('favoriteBtnText').innerText = "زیادکردن بۆ دڵخوازەکان";
        return;
    }
    const isFav = currentUserData.favorites.includes(currentActiveItem.id);
    const lang = document.getElementById('htmlRoot').getAttribute('lang') || 'ku';
    const t = translations[lang];
    document.getElementById('favoriteBtnText').innerText = isFav ? t.removeFromFav : t.addToFav;
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
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-280px';
        overlay.style.display = 'none';
    } else {
        sidebar.style.right = '0px';
        overlay.style.display = 'block';
    }
}

function toggleSearchBox() {
    document.getElementById('searchExpandBox').classList.toggle('active');
}

function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active-page'));
    document.getElementById(pageId).classList.add('active-page');

    const topNavBar = document.getElementById('topNavBar');
    const btnHome = document.getElementById('btnHome');
    const btnMovies = document.getElementById('btnMovies');
    const btnSeries = document.getElementById('btnSeries');
    const btnAnime = document.getElementById('btnAnime');
    const headerSearchBtn = document.getElementById('headerSearchBtn');

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
        document.getElementById('searchExpandBox').classList.remove('active');
    }

    if (document.getElementById('sidebar').style.right === '0px') toggleMenu();
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

    document.getElementById('seriesSeasonsBox').style.display = 'none';
    switchPage('detailView');
}

function openSeriesDetail(title, poster, rating, budget, revenue, year, director, desc) {
    openDetail(title, poster, rating, budget, revenue, year, director, desc);
    document.getElementById('seriesSeasonsBox').style.display = 'block';
    
    const seasonsList = document.getElementById('seasonsList');
    seasonsList.innerHTML = '';
    for(let s = 1; s <= 3; s++) {
        const btn = document.createElement('button');
        btn.className = 'season-chip' + (s === 1 ? ' active' : '');
        btn.innerText = (document.getElementById('htmlRoot').getAttribute('lang') === 'en' ? 'Season ' : 'وەرز ') + s;
        btn.onclick = () => {
            document.querySelectorAll('.season-chip').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            loadEpisodes(s);
        };
        seasonsList.appendChild(btn);
    }
    loadEpisodes(1);
}

function loadEpisodes(seasonNum) {
    const episodesList = document.getElementById('episodesList');
    episodesList.innerHTML = '';
    const lang = document.getElementById('htmlRoot').getAttribute('lang') || 'ku';
    for(let e = 1; e <= 6; e++) {
        const eBtn = document.createElement('button');
        eBtn.className = 'episode-chip';
        eBtn.innerText = (lang === 'en' ? 'Episode ' : 'ئەڵقەی ') + e;
        eBtn.onclick = () => {
            document.querySelectorAll('.episode-chip').forEach(c => c.classList.remove('active'));
            eBtn.classList.add('active');
        };
        episodesList.appendChild(eBtn);
    }
}

function clearAppCache() {
    const currentLang = document.getElementById('htmlRoot').getAttribute('lang') || 'ku';
    alert(translations[currentLang].cacheClearedAlert);
}

function changeLanguage(lang) {
    const htmlRoot = document.getElementById('htmlRoot');
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
