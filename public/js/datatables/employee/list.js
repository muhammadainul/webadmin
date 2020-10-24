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
            { data: "address", orderable: true }
        ],
        columnDefs: [
            // {
            //     targets     : 4,
            //     createdCell : (td, cellData, rowData, row, col) => {
            //         jQuery(td).html("<button class='btn btn-primary'><a href='/community/detail/" + cellData + "'style='color: white;'>View</a></button></td>");
            //         console.log(cellData);
            //     }
            // }
        ]
    });
    // jQuery("#buttonFilterCustomer").click(() => {
    //     table.draw();
    // });
});
