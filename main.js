$(document).ready(() => {
    const $cart = $('#cart');
    const $account = $('#account');
    const $help = $('#help');

    $cart.click(() => {
        $('#cartMenu').show();
    })

    $cart.mouseleave(() => {
        $('#cartMenu').hide();
    })

    $account.click(() => {
        $('#accountMenu').show();
    })

    $account.mouseleave(() => {
        $('#accountMenu').hide();
    })

    $help.click(() => {
        $('#helpMenu').show();
    })

    $help.mouseleave(() => {
        $('#helpMenu').hide();
    })


})