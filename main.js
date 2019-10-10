$(document).ready( () => {
    const $cart = $('#cart');
    const $account = $('#account');
    const $help = $('#help');

    $cart.on('mouseenter', ()=>{
        $('#cartMenu').show();
    })

    $cart.on('mouseleave', ()=>{
        $('#cartMenu').hide();
    })

    $account.on('mouseenter', ()=> {
        $('#accountMenu').show();
    })

    $account.on('mouseleave', ()=>{
        $('#accountMenu').hide();
    })

    $help.on('mouseenter', ()=>{
        $('#helpMenu').show();
    })

    $help.on('mouseleave', ()=>{
        $('#helpMenu').hide();
    })    
})