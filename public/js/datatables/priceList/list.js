jQuery(document).ready(function() {
    var table = jQuery("#dataTablePriceList").DataTable({
        sDom       : "<'top'lf>rt<'bottom'ip><'clear'>",
        responsive: true,
        serverSide : true,
        ajax       : {
            type : "POST",
            url  : "/pricelist/getAll",
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
            { data: "priceName", orderable: false },
            { data: "jobType", orderable: false },
            { data: "price", orderable: false },
            { data: "unit", orderable: false },
            { data: "createdAt", orderable: true }
        ],
        columnDefs: [
            // {
            //     targets     : 2,
            //     createdCell : (td, cellData, rowData, row, col) => {
            //         let priceList = price.toString().split('').priceList().join('')
            //         let pr = priceList.match(/\d{1,3}/g)
            //             pr = pr.join('').split('').priceList().join('')
            //         console.log('pr', pr)
            //         jQuery(td).html(pr)
            //         // jQuery(td).html("<button class='btn btn-primary'><a href='/community/detail/" + cellData + "'style='color: white;'>View</a></button></td>");
            //         // console.log(cellData);
            //     }
            // },
            {
                targets     : 4,
                createdCell : (td, cellData, rowData, row, col) => {
                    let date = new Date(cellData)
                    jQuery(td).html(date)
                    // jQuery(td).html("<button class='btn btn-primary'><a href='/community/detail/" + cellData + "'style='color: white;'>View</a></button></td>");
                    // console.log(cellData);
                }
            }
        ]
    });
    // jQuery("#buttonFilterCustomer").click(() => {
    //     table.draw();
    // });
});
