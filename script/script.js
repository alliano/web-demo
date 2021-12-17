
// let hash1 = hash('aku');

// console.log(hash1);

// async function hash(string) {
    //   const utf8 = new TextEncoder().encode(string);
    //   const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    //   const hashArray = Array.from(new Uint8Array(hashBuffer));
    //   const hashHex = hashArray
    //     .map((bytes) => bytes.toString(16).padStart(2, '0'))
    //     .join('');
    //   return hashHex;
    // }
    
    (function returnHeadEl() {
          const head = document.getElementsByTagName('head');
        const newHeadElmts = `<meta charset="UTF-8">
                                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
                                <link rel="preconnect" href="https://fonts.googleapis.com">
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap" rel="stylesheet">
                                <link rel="preconnect" href="https://fonts.googleapis.com">
                                <link rel="preconnect" href="https://fonts.gstatic.com"     crossorigin>`;
        
        const afterTitle =      ` <!-- font logo -->
        
                                <link rel="preconnect" href="https://fonts.googleapis.com">
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap" rel="stylesheet"> `;
         
        })();

        (function () {
            const header = document.getElementsByTagName('header');
            const returnElements = `
            <nav>
                <div class="core">
                    <div id="logo"></div>
                    <h1 id="nama">ABC CENTER</h1>
                </div>
                <div class="menu-toggle">
                    <input type="checkbox">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="nav-slide">
                    <div class="list-slide">
                        <ul>
                            <li><a class="${localStorage.getItem('page') === 'home' ? 'active' : ''} home" >Home</a></li>
                            <li><a class="${localStorage.getItem('page') === 'contac' ? 'active' : ''} contac">Contact</a></li>
                            <li><a class="${localStorage.getItem('page') === 'about' ? 'active' : ''} about">About</a></li>
                            <li><a class="${localStorage.getItem('page') === 'courses' ? 'active' : ''}  courses">Courses</a></li>
                            <li><a class="${localStorage.getItem('page') === 'sitemap' ? 'active' : ''} sitemap ">Sitemap</a><are/li>
                            <li><a class="${localStorage.getItem('page') === 'courseDetail' ? 'active' : ''} courseDetail">course detail</a></li>
                        </ul>
                    </div>
                </div>
            </nav>`;
          
                if (document.body.classList.contains("home")) {
                    const b = document.getElementsByClassName('menu-toggle');
                    console.log(b[0])
                }
               
            header[0].innerHTML = returnElements;
        })();
        
        (function () {
            const footer = document.getElementsByTagName('footer');
            const ell = `<div class="ket">
            <ul>
            <h3>SiteMap</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Sechdule</a></li>
            <li><a href="#">Courses</a></li>
            </ul>
            <ul>
            <h3>About developer</h3>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Github</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Tweeter</a></li>
            </ul>
            </div>
            <div class="copyright"><h2>&copy;copyright2021</h2></div>`;
            footer[0].innerHTML = ell;
            
        })();



        
        AOS.init();
