jQuery(document).on('click', '.openDeleteConfirmation', function() {
    var myVal = $(this).attr('data-id')
    jQuery('.deleteEmployee').html("<form id='deleteConfirm' method='post' action='/employee/delete'>" +
        "<input type='hidden' name='id' id='id' value=" + myVal + ">" +
        "<button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-times' aria-hidden='true'></i> Cancel</button>" +
        "<button type='submit' id='deleted' class='openActionConfirmation btn btn-primary btn-sm' name='deleted' data-toggle='modal'>" +
        "<i class='fa fa-check' aria-hidden='true'></i> Delete</button></form>")
    jQuery("#deleteEmployeeConfirmation").modal('show')

    jQuery(".openActionConfirmation").click(function (){
        console.log('oKdj')
        jQuery("#actionDeletedConfirmation").modal('show')
        jQuery("#deleteEmployeeConfirmation").modal('hide')
        setTimeout(function (){
            window.location.href='/employee'
        }, 3000)
    })
});