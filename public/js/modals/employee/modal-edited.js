jQuery(document).on('click', '.openActionEditEmployee', function (){
    jQuery("#actionEditedConfirmation").modal('show')

    setTimeout(function (){
        window.location.href='/employee'
    }, 3000)
})