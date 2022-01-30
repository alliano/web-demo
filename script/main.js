$(document).ready(function () {
    $('.menu-toggle input').click(function () {
        $('.nav-slide').slideToggle(500);
    });

    $('.nav-slide .list-slide ul li a').click(function (args) {
        
        let list = $('.nav-slide .list-slide ul li a');
        const data = $('.nav-slide .list-slide ul li');
        
        $('.nav-slide .list-slide ul li a').removeClass("active");
        $(this).addClass("active");
        
        for (let i = 0; i < list.length; i++) {
            $(list[i]).click(function () {
                switch (i) {
                case 0:
                    localStorage.setItem('page', 'index');
                    window.location.href = `index.html`
                    break;
                case 1:
                    localStorage.setItem('page', 'contac');
                    window.location.href = `contac.html`
                    break;
                case 2:
                    localStorage.setItem('page', 'about');
                    window.location.href = `About.html`
                    break;
                case 3:
                    localStorage.setItem('page', 'courses');
                    window.location.href = `courses.html`
                    break;
                case 4:
                    localStorage.setItem('page', 'sitemap');
                    window.location.href = `sitemap.html`
                    break;
                case 5:
                    localStorage.setItem("page", "courseDetail");
                    window.location.href = "/courseDetail.html"
                default:
                    break;
            }
            //     if (i === 0) {
            //         localStorage.setItem('page', 'index');
            //          window.location.href = `index.html`
            //     } else {
            //         if (i === 1) {
            //             localStorage.setItem('page', 'contac');
            //             window.location.href = `contac.html`
            //         } else {
            //             if (i === 2) {
            //                 localStorage.setItem('page', 'about');
            //                 window.location.href = `About.html`
            //             } else {
            //                 if (i === 3) {
            //                     localStorage.setItem('page', 'courses');
            //                     window.location.href = `courses.html`
            //                 } else {
            //                     if (i === 4) {
            //                         localStorage.setItem('page', 'sitemap');
            //                         window.location.href = `sitemap.html`
            //                     } else {
            //                         if (i === 5) {
            //                             localStorage.setItem("page", "courseDetail");
            //                             window.location.href = "/courseDetail.html"
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            })
            
        }
        
        args.preventDefault(); 

    });


    /////////////////////////////////
    ////////VIDIO////////////////////
    /////////////////////////////////



    $.ajax({
        type: "get",
        url: "https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails,player&id=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&key=AIzaSyCsy7fIaTA90lta3gvp1FFsgiVdHYv-8I8",
        data: "json",
        success: function (response) {

            $('#vidio').html(response.items[0].player.embedHtml);
        }
    });


    $('#vidio').css({
        "width" : "100%",
        "height": "100%",
        "border" : "1px solid #000"
    })
    $('.play-vidio iframe').css({
        "width" : "800px",
        "height": "700px",
        "border": "2px solid aqua",
        "position" : "absolute"
    })


    ////////////////////////
    //////END VIDIO////////
    ///////////////////////


    $('.jumbo #login').css({
        "cursor": "pointer"
    });
    $('.jumbo #login').click(function () {
        window.location.href = "login.html"
    })
    $('.jumbo #sigin').click(function () {
        window.location.href = "rengister.html"
    })


});


