$(document).ready(function () {


   



    $(".imageLoad").on("click", function () {
        $(".imageLoad").css("display", "none");

    });
/* 
    $(".gallery").mouseover(function () {
        var imageText = $(this).attr("alt")
        $(".infopop").html(imageText);
        $(".gallery").css({ "opacity": "0.8" });
        $("img:hover").css({ "transform": " scale(1.01)", "opacity": "1" });
    });


 */


    //image view loader
    $(".wrapperGallery").on("click", "img", function (event) {
        $(".imageLoad").css("display", "grid");
        let display = $(event.target).attr("alt");
        $(".titleImage").html("<h2>" + display + "</h2>");

        $.getJSON("../data/gallerydata.json", function (data) {

            var popgalleryId = data.filter(function (el) {
                return el["id"].indexOf(display) !== -1;
            });

            
            console.log(popgalleryId);

            $.each(popgalleryId, function (key, val) {

                var infoPop =
                    `<li>Telescope: &nbsp ${val.telescope}</li>
                 <li><b>Camera</b> : &nbsp ${val.camera}</li>
                 <li><b>CMount</b>: &nbsp ${val.mount}</li>
                 <li><b>CFilters</b>: &nbsp ${val.filters}</li>
                 <li><b>CGuiding</b>: &nbsp ${val.guiding}</li>
                 <li><b>CExposure</b>: &nbsp ${val.exposure}</li>
                 <li><b>COther</b>: &nbsp ${val.Other}</li>
                      `
                $(".infoimage ul").html(infoPop);
                $(".generalinfo").html(`<p>${val.info}</p>`);
                $(".imageFull img").attr("src", `${val.srclink}`)
            });

        });


    })

});