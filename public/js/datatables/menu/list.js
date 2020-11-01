jQuery(document).ready(function() {
    var table = jQuery("#dataTableMenu").DataTable({
        paging     : true,
        sDom       : "<'top'lf>rt<'bottom'ip><'clear'>",
        responsive: true,
        serverSide : true,
        ajax       : {
            type : "POST",
            url  : "/menu/getAll",
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
            { data: "menu", orderable: false },
            { data: "createdAt", orderable: true },
            { data: "id", orderable: true }
        ],
        columnDefs: [
            {
                targets     : 1,
                createdCell : (td, cellData, rowData, row, col) => {
                    let date = new Date(cellData)
                    jQuery(td).html(date);
                }
            },
            {
                targets     : 2,
                createdCell : (td, cellData, rowData, row, col) => {
                    jQuery(td).html(`<center>
                    <a href='/menu/edit/` + cellData + `' data-id=` + cellData + ` style='margin: 5px'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></a>
                    <a href='#' class='openDeleteConfirmation' data-toggle='modal' data-id=` + cellData + ` style='margin: 5px'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></a>
                    </center>`);
                }
            }
        ]
    });
    // jQuery("#buttonFilterPricelist").click(() => {
    //     table.draw();
    // });
});
