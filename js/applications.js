let coordcontent = "";
let test;


$(document).ready(function () {



    fillgrid(coordcontent);
    test = $.getJSON("../data/datacoord.json", function (data) {
        $.each(data, function (key, val) {
            if (key < 10) {
                coordrow += `
                    <tr class="tabrow" data-key="${key}">
              <td >${key}</td>
              <td >${val.OBJECT}</td>
              <td >${val.TYPE}</td>
              <td >${val.DEC}</20x15td>
              <td >${val.RA}</td>  
              <td >${val.MAG}</20x15td>
              </tr>`;



            };

        });
        $(".grid").html("<tbody>" + coordrow + "</tbody>")

    });



    $(".mobButtons>span>p").click(function () {
        $(".mainApp").toggle();
    });




    $(".table").on("click", function () {
        $("#myModal").css("display", "block");
    });

    $(".modal-header").click(function () {
        $("#myModal").css("display", "none");
    });

    var modal = document.getElementById("myModal");

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

});





//fill grid
function fillgrid(el) {

    coordrow = `
    <thead class="thead-dark  " >
    <tr>
    <th >#</th>
    <th >ID</th>
    <th >Type</th>
    <th >DEC</th>
    <th >RA</th>
    <th >Size</th>
    </tr>
    </thead>`;
    $(".grid").html(coordrow);


};
