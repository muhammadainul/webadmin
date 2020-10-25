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
            { data: "orderId", orderable: false },
            { data: "customerName", orderable: false },
            { data: "employeeName", orderable: false },
            { data: "orderDate", orderable: false },
            { data: "orderTime", orderable: false },
            { data: "totalPrice", orderable: false },
            { data: "orderId", orderable: false }
        ],
        columnDefs: [
            {
                targets     : 3,
                createdCell : (td, cellData, rowData, row, col) => {
                    console.log(cellData)
                    const date = new Date(cellData)
                    jQuery(td).html(date)
                }
            },
            {
                targets     : 6,
                createdCell : (td, cellData, rowData, row, col) => {
                    jQuery(td).html(`<center>
                    <a href='/community/detail/'` + cellData + ` style='margin: 5px'><span class='glyphicon glyphicon-eye-open' aria-hidden='true'></span></a>
                    <a href='/community/detail/'` + cellData + ` style='margin: 5px'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></a>
                    </center>`);
                    console.log(cellData);
                }
            }
        ]
    });
    // jQuery("#buttonFilterCustomer").click(() => {
    //     table.draw();
    // });
});
