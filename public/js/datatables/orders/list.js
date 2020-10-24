jQuery(document).ready(function() {
    var table = jQuery("#dataTableOrders").DataTable({
        sDom       : "<'top'lf>rt<'bottom'ip><'clear'>",
        responsive: true,
        serverSide : true,
        ajax       : {
            type : "POST",
            url  : "/order/getAll",
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
            { data: "customerName", orderable: false },
            { data: "employeeName", orderable: false },
            { data: "orderDate", orderable: false },
            { data: "orderTime", orderable: true },
            { data: "totalPrice", orderable: true },
            { data: "createdAt", orderable: true }
        ],
        columnDefs: [
            {
                targets     : 3,
                createdCell : (td, cellData, rowData, row, col) => {
                    console.log(cellData)
                    const date = new Date(cellData)
                    jQuery(td).html(date)
                    // jQuery(td).html("<button class='btn btn-primary'><a href='/community/detail/" + cellData + "'style='color: white;'>View</a></button></td>");
                    // console.log(cellData);
                }
            },
            {
                targets     : 6,
                createdCell : (td, cellData, rowData, row, col) => {
                    console.log(cellData)
                    const date = new Date(cellData)
                    jQuery(td).html(date)
                }
            }
        ]
    });
    // jQuery("#buttonFilterCustomer").click(() => {
    //     table.draw();
    // });
});
