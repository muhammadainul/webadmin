jQuery(document).on('click', '.openActionAddEmployee', function (){
    jQuery("#actionAddedConfirmation").modal('show')

    setTimeout(function (){
        window.location.href='/employee'
    }, 3000)
})