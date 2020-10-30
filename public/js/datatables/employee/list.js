jQuery(document).ready(function() {
    var table = jQuery("#dataTable-employee").DataTable({
        sDom       : "<'top'lf>rt<'bottom'ip><'clear'>",
        responsive: true,
        serverSide : true,
        ajax       : {
            type : "POST",
            url  : "/employee/getAll",
            data : data => {
                // Read values
                // var hashTag  = jQuery("#searchByHashTag").val();
                // var username = jQuery("#searchByUsername").val();
                var start    = jQuery("#startDate").val();
                var end      = jQuery("#endDate").val();

                console.log('data', data)
                // Append to data
                // data.searchByHashTag  = hashTag;
                // data.searchByUsername = username;
                data.startDate        = start;
                data.endDate          = end;
                // data.query            = 'com';
            }
        },
        orderCellsTop : true,
        fixedHeader   : true,
        columns       : [
            { data: "id", orderable: false },
            { data: "firstname", orderable: false },
            { data: "lastname", orderable: false },
            { data: "phone", orderable: false },
            { data: "address", orderable: true },
            { data: "id", orderable: false }
        ],
        columnDefs: [
            {
                targets     : 5,
                createdCell : (td, cellData, rowData, row, col) => {
                    jQuery(td).html(`<center>
                    <a href='#' data-id=` + cellData + ` style='margin: 5px'><span class='glyphicon glyphicon-eye-open' aria-hidden='true'></span></a>
                    <a href='/employee/edit/` + cellData + `' data-id=` + cellData + ` style='margin: 5px'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></a>
                    <a href='#' class='openDeleteConfirmation' data-toggle='modal' data-id=` + cellData + ` style='margin: 5px'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></a>
                    </center>`);
                }
            }
        ]
    });
    // jQuery("#buttonFilterCustomer").click(() => {
    //     table.draw();
    // });
});
