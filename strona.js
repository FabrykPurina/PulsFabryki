// 1. Funkcja pomocnicza do ładowania skryptów z ominięciem cache SharePointa
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        // v=Date.now() gwarantuje, że zawsze pobierzesz najnowszą wersję index.js i buttons.js
        s.src = src + "?v=" + Date.now(); 
        s.onload = resolve;
        s.onerror = () => reject(new Error("Błąd ładowania: " + src));
        document.body.appendChild(s);
    });
}

// 2. Główna logika budowania strony
window.addEventListener("DOMContentLoaded", async () => {

    // DEFINIUJEMY FUNKCJE GLOBALNE (muszą być w window, by onclick w HTML je widział)
    window.openInNewWindow = function(event, url) {
        event.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    window.openLink = function(event) {
        // Szukamy przycisku, nawet jeśli kliknięto w ikonę środku
        const btn = event.target.closest('button');
        const url = btn ? btn.getAttribute('data-url') : null;
        if (url) {
            window.open(url, '_blank');
        } else {
            console.error("Nie znaleziono atrybutu data-url na przycisku.");
        }
    };

    // TWORZYMY KONTENER I WSTRZYKUJEMY HTML
    const app = document.createElement("div");
    app.id = "app";
    app.innerHTML = `
    
        <header class="main-header">
            <div class="header-content">
                 <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/PF.jpg" class="site-logo" alt="Site Logo">
                <span class="header-title">PULS Fabryki</span>
                 <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/Purina.webp" class="company-logo" alt="Company Logo">
            </div>
        </header>
        <div class="sidebar">
            <ul>
                <li>
                    <h2></h2>
                </li>
                <li>
                    <a href="https://nestle.service-now.com/itsp?id=nesa_itsp_index" onclick="openInNewWindow(event, this.href)"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/ITPortal.png" alt="">IT service portal</a>
                </li>
                <li>
                    <a href="https://nlxp.edcast.com/" onclick="openInNewWindow(event, this.href)"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/Grow.png" alt="">Grow</a>
                </li>
                <li>
                    <a href="https://nesgpt.genai.nestle.com/?trk=public_post_comment-text" onclick="openInNewWindow(event, this.href)"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/NesGPT.png" alt="">NesGPT</a>
                </li>
                <li>
                    <a href="https://engage.cloud.microsoft/main/org/nestle.onmicrosoft.com/feed" onclick="openInNewWindow(event, this.href)"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/Viva.png" alt="">Viva Engage</a>
                </li>
                <li>
                    <a href="https://outlook.office.com/mail/0/" onclick="openInNewWindow(event, this.href)"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/Outlook.png" alt="">
        Poczta </a>
                </li>
                <li>
                    <a href="https://nowawies01.poka.io/app/" onclick="openInNewWindow(event, this.href)" style="text-align: center;"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/Poka.png" alt="">
                     POKA</a>
                </li>
                <li>
                    <a href="https://app.powerbi.com/groups/me/apps/39516a30-ecae-4d88-afa0-2d669ff93260/reports/7903b9e2-1af2-426d-bb15-baf8bf67c0a3/eb7995bd294db18cd897?ctid=12a3af23-a769-4654-847f-958f3d479f4a&amp;experience=power-bi" onclick="openInNewWindow(event, this.href)"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/Power.png" alt="">Sprawdzanie Tagów</a>
                </li>
                <li>
                    <a href="https://teams.microsoft.com/l/chat/19:7de1b6e6b2804481acb5798289835c96@thread.v2/conversations?context=%7B%22contextType%22%3A%22chat%22%7D" onclick="openInNewWindow(event, this.href)"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/Teams.png" alt="">Teams</a>
                </li>
                <li>
                    <a href="https://nestle.evk.pl/logowanie.html" onclick="openInNewWindow(event, this.href)"> <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/SideBar/Sprzedaz.png" alt="">Używany sprzęt</a>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="main-wrapper">
                <div class="allButtons">
                    <button class="icon-btn" data-url="https://apps.powerapps.com/play/e/6540417d-b50a-e7e2-91fe-afc927930051/a/6a69fc03-acc6-4ab6-b626-50722d0249e8?tenantId=12a3af23-a769-4654-847f-958f3d479f4a&amp;hint=09e14d55-eaa9-492c-9727-b857177c6b0f&amp;sourcetime=1768825107931" onclick="openLink(event)"> 
                        <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/Susa.svg" alt="Susa">
                    </button>
                    <button class="icon-btn" data-url="https://apps.powerapps.com/play/e/278bb57c-90c9-e1fb-b56f-aaedeff4f947/a/ef8b320f-04d8-4196-b399-5d77907d50d2?tenantId=12a3af23-a769-4654-847f-958f3d479f4a&hint=dfd1d4c1-99d4-4e76-9456-ff5327e0d91a&sourcetime=1758035119092&source=portal" onclick="openLink(event)">
                         <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/DRA.svg" alt="DRA">
                    </button>
                    <div class="dropdown">
                        <div class="dropdown">
                            <button class="icon-btn">
                                <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/Grafik.svg" alt="Grafik">
                            </button>
                            <div class="dropdown-content" id="monthsContainer"></div>
                        </div>
                    </div>
                    <button class="day-btn " data-url="https://nestle.sharepoint.com/:x:/r/teams/Planprodukcyjny6-72/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7B32c7ceab-b07b-48db-a56a-d3c70c4d64d3%7D&wdOrigin=TEAMS-MAGLEV.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1772129511302&web=1" onclick="openLink(event)"  style="background: transparent; border: none; padding: 0; cursor: pointer; outline: none; transition: none !important; transform: none !important; ">
                        <svg class="prodBtn" width="200" height="50" viewBox="0 0 300 160">
                            <defs>
                                <!-- Тень -->
                                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                                    <feDropShadow dx="0" dy="10" stdDeviation="4" flood-color="#000" flood-opacity="0.25"></feDropShadow>
                                </filter>
                                <!-- Внутренняя тень -->
                                <filter id="linnerShadowinnerShadow">
                                    <feOffset dx="0" dy="3"></feOffset>
                                    <feGaussianBlur stdDeviation="4" result="blur"></feGaussianBlur>
                                    <feComposite in="SourceGraphic" in2="blur" operator="out"></feComposite>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 0.5 0"></feColorMatrix>
                                    <feBlend in="SourceGraphic"></feBlend>
                                </filter>
                                <!-- Градиент кнопки -->
                                <linearGradient id="btnGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#6fc1ff"></stop>
                                    <stop offset="100%" stop-color="#1b5fa3"></stop>
                                </linearGradient>
                                <!-- Блик -->
                                <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="white" stop-opacity="0.35"></stop>
                                    <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <!-- КНОПКА -->
                            <rect x="-150" y="0" width="600" height="160" rx="24" fill="url(#btnGrad)" filter="url(#shadow)"></rect>
                            <rect x="-150" y="0" width="600" height="160" rx="24" fill="transparent" filter="url(linnerShadowinnerShadow)"></rect>
                            <rect x="-150" y="0" width="600" height="58" rx="18" fill="url(#shine)"></rect>
                            <!-- НАТУРАЛЬНЫЙ КАЛЕНДАРЬ -->
                            <g transform="translate(-130,46) scale(1.6)" style="pointer-events: none;">
                                <!-- лист с тенью -->
                                <rect x="3" y="3" width="50" height="48" rx="8" fill="#d9e6f7"></rect>
                                <!-- основной лист -->
                                <rect width="50" height="48" rx="8" fill="white" stroke="#c7d3e6" stroke-width="1.5"></rect>
                                <!-- верхняя панель -->
                                <rect width="52" height="14" rx="8" fill="#1b5fa3"></rect>
                                <!-- кольца -->
                                <circle cx="12" cy="-2" r="3" fill="#1b5fa3"></circle>
                                <circle cx="38" cy="-2" r="3" fill="#1b5fa3"></circle>
                                <!-- дата -->
                                 <text id="dayNum" x="25" y="38" text-anchor="middle" font-size="24" font-weight="1000" font-family="Arial" fill="#1b5fa3" >
                                    01
</text>
                            </g>
                            <!-- ТЕКСТ -->
                            <text x="185" y="68" text-anchor="middle" fill="white" font-size="55" font-weight="800" font-family="Arial" letter-spacing="1">
                                PLAN
</text>
                            <text x="185" y="140" text-anchor="middle" fill="white" font-size="55" font-weight="700" font-family="Arial" letter-spacing="1">
                                PRODUKCYJNY
</text>
                        </svg>
                    </button>
                    <div class="dropdown">
                        <button class="icon-btn">
                            <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/Dmo.svg" alt="DMO"> 
                        </button>
                        <div class="dropdown-content">
                            <div class="menu-item">
                                <a href="https://plwrol0254.nestle.com/dmo" class="menu-link" onclick="openInNewWindow(event, this.href)">
               Faza 6 </a>
                            </div>
                            <div class="menu-item">
                                <a href="https://plwrol0084.nestle.com/dmo" class="menu-link" onclick="openInNewWindow(event, this.href)">
               Faza 7 </a>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="icon-btn" onclick="openLink(event) " data-url="https://globe7eur.nestle.com:26001/irj/portal#Shell-home"> 
                            <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/sap.png" alt="SAP"> 
                        </button>
                        <div class="dropdown-content">
                            <h3>&nbsp;&nbsp;Robocze:</h3>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22coid%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)">
        Sprawdzanie laminatu </a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/COID.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22prolist%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)">
        Zamawianie laminatu </a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/zamawianie%20laminatu.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22rfgi%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
        Konsumpcja laminatu </a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/konsumpcja.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%22%2C%22labelPlural%22%3A%22%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%22%7D%2C%22searchTerm%22%3A%22lt10%20create%20transfer%20order%20from%20stock%20list%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D class=" enu-link" onclick="openInNewWindow(event, this.href)"> 
                         Stan laminatu na linii</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/stan laminatu na linii.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22lt27%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                        Historia palet</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/historia palet.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22iw21%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                        Napisanie TAG'w</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/napisanie TAG.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22iw22%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                        Zamknięcie TAG'w</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/zamknięcie TAG.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22iw29%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                        Sprawdzanie swoich TAG'w</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/sprawdzanie tagów .mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22lrf2%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                         Sprawdzanie kolejki palet</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/status laminatu.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22ls26%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                         Stan magazynowy palet</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/palety laminatu.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22qe51n%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                        Cheki w SAP</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/Cheki w SAP.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Aplikacje%22%2C%22labelPlural%22%3A%22Aplikacje%22%7D%2C%22searchTerm%22%3A%22lt32%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                         Drukowanie etykiety</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/drukowanie etykiety.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%22%2C%22labelPlural%22%3A%22%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%22%7D%2C%22searchTerm%22%3A%22gdsm%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" class="menu-link" onclick="openInNewWindow(event, this.href)"> 
                        Sprawdzanie konsupmcji całego zlecenia</a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/sprawdzanie konsumpcji.mp4">▶</span>
                            </div>
                            <h3>&nbsp;&nbsp;Prywatne:</h3>
                            <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Apps%22%2C%22labelPlural%22%3A%22Apps%22%7D%2C%22searchTerm%22%3A%22remuneration%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" onclick="openInNewWindow(event, this.href)">1. Sprawdzić wypłatę</a>
                            <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Apps%22%2C%22labelPlural%22%3A%22Apps%22%7D%2C%22searchTerm%22%3A%22Create%20Leave%20Request%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" onclick="openInNewWindow(event, this.href)">2. Wziąć urlop</a>
                            <a href="https://globe7eur.nestle.com:26001/irj/portal#Action-search&amp;/top=20&amp;filter=%7B%22dataSource%22%3A%7B%22type%22%3A%22Category%22%2C%22id%22%3A%22%24%24APPS%24%24%22%2C%22label%22%3A%22Apps%22%2C%22labelPlural%22%3A%22Apps%22%7D%2C%22searchTerm%22%3A%22manage%20leave%20requests%20payroll%22%2C%22rootCondition%22%3A%7B%22type%22%3A%22Complex%22%2C%22operator%22%3A%22And%22%2C%22conditions%22%3A%5B%5D%7D%7D" onclick="openInNewWindow(event, this.href)">3. Sprawdzić ilość urlopów</a>
                        </div>
                    </div>
                    <!-- одно общее превью -->
                    <div class="video-preview" id="videoPreview">
                        <video id="previewVideo" muted loop></video>
                    </div>
                    <!-- превью для картинок -->
                    <div id="previewBox">
                        <img id="previewImg" src="" style="width:100%; height:auto; display:block;">
                    </div>
                    <div class="dropdown">
                        <button class="icon-btn">
                           <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/plik.jpg" alt=Plik">
                        </button>
                        <div class="dropdown-content">
                            <div class="menu-item">
                                <a class="menu-link" href="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/Pliki/CZERWONE GILZY.docx" download>
                1. Gilzy czerwone.docx </a>
                            </div>
                            <div class="menu-item">
                                <a class="menu-link" href="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/Pliki/SZARE GILZY.docx" download>
                2. Gilzy szare.docx </a>
                            </div>
                            <div class="menu-item">
                                <a class="menu-link" href="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/Pliki/OPL - pusta formatka.xlsx" download>
                3. OPL - pusta formatka.xlsx </a>
                            </div>
                            <div class="menu-item">
                                <a class="menu-link" href="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/Pliki/GSTD.xlsx" download>
                4. GSTD - pusta formatka.xlsx </a>
                            </div>
                            <div class="menu-item">
                                <a class="menu-link" href="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/Pliki/lista do wózków.docx" download>
                5. Lista do wózków </a>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="icon-btn">
                             <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/instrukcja.svg">
                            
                        </button>
                        <div class="dropdown-content">
                            <div class="menu-item">
                                <a href="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/Instrukcje/susa.mp4" class="menu-link" onclick="openInNewWindow(event, this.href)">
               1. Jak wykonać SUSA </a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/videos/Instrukcje/susa.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="videos/instrukcje/dra.mp4" class="menu-link" onclick="openInNewWindow(event, this.href)">
               2. Jak wykonać DRA </a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/Instrukcje/dra.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="videos/instrukcje/biny.mp4" class="menu-link" onclick="openInNewWindow(event, this.href)">
               3. Jak podpiąć BINY </a>
                                <span class="video-btn" data-video="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/videos/Instrukcje/biny.mp4">▶</span>
                            </div>
                            <div class="menu-item">
                                <a href="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/Pliki/8zasad.jpg" class="menu-link" download>
               4. 8 zasad chroniące życie </a>
                            </div>
                            <div class="menu-item">
                                <a href="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/Pliki/POL_MANUAL_C004.01566_POL_AS_BUILT.pdf" class="menu-link" download>
               5.HFFS "Herman" – instrukcja </a>
                            </div>
                        </div>
                    </div>
                     <div class="dropdown">
                        <button class="icon-btn tooltip">
                           <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/wms.svg" alt="WMS"> 
                          <div class="dropdown-content">
                            <div class="menu-item">
                         
                            </div>
                            <div class="menu-item">
                                <a href="https://plwrol9996.nestle.com/DMO_PREPROD/core/ajs-operator-console-listing" class="menu-link" onclick="openInNewWindow(event, this.href)">
               WMS_DMO </a>
                        </div>
                        </div>
                    </div>
                    </button>

                    <button class="icon-gig" data-url="http://plwroa0006/common/login/" onclick="openLink(event)"> 
                        <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/Grading.svg" alt="Grading">
                    </button>
                    <button class="icon-gig" data-url="https://apps.powerapps.com/play/e/05e8eefc-65ae-e3f5-a2bd-4a27ec468350/a/4bac5811-fdf5-495a-a077-3f855d8702d0?tenantId=12a3af23-a769-4654-847f-958f3d479f4a&amp;hint=d860ea56-a3b9-4230-bd47-c9fe60cf58a4&amp;sourcetime=1733746156858&amp;source=portal" onclick="openLink(event)">
                         <img src="https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/assets/icons/Incydent.svg" alt="Incydent">
                    </button>
                </div>
                <!-- ====== INFO SECTION / SŁUŻBOWE DANE ====== -->
                <section class="info-section">
                    <div class="info-grid">
                        <!-- ================= DRUKARKI ================= -->
                        <div class="info-box">
                           
                                <div class="info-header">
                                    <span>Drukarki</span>
                                    <button class="toggle-btn" aria-label="Zwiń">−</button>                                     
                                </div>
                                <div class="info-content two-cols">
                                    <div class="info-col">
                                        <h4>Drukarki</h4>
                                        <ul class="info-list">
                                            <li>Faza 5: PLWROPR029</li>
                                            <li>Faza 7: PLWROPR087</li>
                                            <li>Faza 7: PLWROPR019 (biuro)</li>
                                        </ul>
                                    </div>
                                    <div class="info-col">
                                        <h4>Drukarki na etykiety</h4>
                                        <ul class="info-list">
                                            <li>Faza 6: PLWROPR074</li>
                                            <li>Faza 7: PLWROPR091</li>
                                        </ul>
                                   
                                </div>
                            </div>
                        </div>
       <!-- ================= PALLETIZER ================= -->
                        <div class="info-box">
                            
                                <div class="info-header">
                                    <span>Palletizer</span>
                                    <button class="toggle-btn" aria-label="Zwiń">−</button>
                                </div>
                                <div class="info-content two-cols">
                                    <div class="info-col">
                                        <h4>Drukarki na etykiety</h4>
                                        Faza 6: PLWROPR119<br>
                                        Faza 6: PLWROPR076<br>
                                        Faza 7: PLWROPR128<br>
                                    </div>
                                    <div class="info-col">
                                        <h4>Materiały</h4>
                                        Kątowniki: 104 426 731<br>
                                        Folia: 436 53 567<br>
                                        Przekładki: 433 577 18<br>
                                        Etykieta Logopak:43769853<br>
                                    </div>
                               
                            </div>
                        </div>
                        <!-- ================= AUTOMATYCY ================= -->
             <div class="info-box">
    <div class="info-header">
        <span>Automatycy</span>
        <button class="toggle-btn" aria-expanded="true">−</button>
    </div>

    <label for="automatycySearch" class="visually-hidden"></label>
    <input type="text" id="automatycySearch" class="local-search" placeholder="Szukaj osoby...">

    <div class="info-content scrollable" id="automatycyContainer">
        <div class="person">Ładowanie danych...</div>
    </div>
</div>
   
                    <!-- ================= SŁUŻBY ================= -->
                        <div class="info-box">
                            
                                <div>
                                    <div class="info-header">
                                        <span>Służby</span>
                                        <button class="toggle-btn" aria-label="Zwiń">−</button>
                                    </div>
                                    <div class="info-content two-cols">
                                        <div class="info-col"> 
                                            <h4>Mechanicy</h4>
                                            <ul class="info-list">
                                                <b>Proces:</b> 660630106<br>
                                                <b>FFS:</b>
                                                <br>660630233<br>
                                            </ul>
                                        </div>
                                        <div class="info-col">
                                            <h4>Logistyka:</h4> 660630240<br>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
    


                    
                    
<!-- ===== PDF SECTION (MATCHED TO SHAREPOINT COLOR #f3f2f1) ===== -->
<div id="pdfSection" style="
    margin: 40px auto; 
    padding: 15px; 
    background: linear-gradient(to bottom right, #cec3c3, #c7c1c17b); 
    border-radius: 8px; 
    border: 1px solid #9a9292;
    box-shadow: 4px 4px 15px rgba(0,0,0,0.1);
    /* USTAWIENIE POD SZEROKOŚĆ KARTKI */
    width: fit-content;      
    min-width: 1490px;       
    max-width: 98%;         
">
    
    <!-- Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #9a9292; padding-bottom: 10px;">
        
        <!-- 1. Lewa sekcja (pusta, aby zrównoważyć środek) -->
        <div style="flex: 1;"></div>

        <!-- 2. Środkowa sekcja (Tytuł) -->
        <div style="flex: 2; text-align: center;">
            <h2 id="pdfTitle" style="font-size: 18px; font-weight: 700; color: #444; margin: 0; text-transform: uppercase; letter-spacing: 1px; font-family: sans-serif;">
                Informacja tygodniowa
            </h2>
        </div>

        <!-- 3. Prawa sekcja (Przycisk) -->
        <div style="flex: 1; text-align: right;">
            <button onclick="const frame = document.getElementById('pdfFrame'); if(frame.src) { window.open(frame.src, '_blank'); } else { alert('Brak załadowanego dokumentu!'); }" 
                style="
                    background: #555; 
                    color: #fff; 
                    border: 1px solid #444; 
                    padding: 6px 16px; 
                    border-radius: 4px; 
                    cursor: pointer; 
                    font-size: 11px; 
                    font-weight: bold; 
                    box-shadow: 2px 2px 5px rgba(0,0,0,0.1); 
                    transition: 0.2s;
                    white-space: nowrap;" 
                onmouseover="this.style.background='#333'" 
                onmouseout="this.style.background='#555'">
                OTWÓRZ PEŁNY EKRAN
            </button>
        </div>
    </div>

    <!-- Container dla iframe -->
  <!-- Container dla iframe - dopasowany do Twojego gradientu -->
<div class="custom-scroll-container" style="
    width: 101%;  
    height: 850px; 
    /* TWÓJ GRADIENT TUTAJ: */
    background: linear-gradient(to bottom right, #cec3c3, #c7c1c17b); 
    border-radius: 4px; 
    overflow: hidden; 
    border: 1px solid #8e8686;
    display: flex;
    justify-content: center; /* Wyśrodkowanie PDF-a w poziomie */
    align-items: center;    /* Wyśrodkowanie PDF-a w pionie */
">
    <iframe 
        id="pdfFrame" 
        src="" 
        width="100%" 
        height="100%" 
        style="border: none; display: block; background: transparent;"
        allowtransparency="true">
    </iframe>
</div>
    
</div>

                <!-- ====== / INFO SECTION ====== -->
            </div>
        </div>
       

`;
// DODAJEMY WSZYSTKO DO BODY
    document.body.appendChild(app);

    // 3. ŁADUJEMY LOGIKĘ (Dopiero gdy HTML już siedzi w dokumencie)
    try {
        console.log("Inicjalizacja skryptów...");
        
        // Czekamy na buttons.js
        await loadScript("https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/buttons.js");
        
        // Czekamy na index.js (ten, w którym usunąłeś DOMContentLoaded)
        await loadScript("https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/index.js");
        
         await loadScript("https://nestle.sharepoint.com/teams/PULS_Fabryky/Shared%20Documents/PulsFabryky/Zegarek.js");
         
        console.log("PULS Factory gotowy!");
    } catch (err) {
        console.error("Krytyczny błąd inicjalizacji:", err);
    }
});