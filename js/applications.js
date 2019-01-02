let coordcontent = ""; 
let  test;


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
