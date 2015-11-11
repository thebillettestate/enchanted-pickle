$(document).ready(function() {

    var pickleToCart = $('div.caption h3:eq(0)').text();
    var picklesToCart = $('div.caption h3:eq(1)').text();
    var hoodieToCart = $('div.caption h3:eq(2)').text();

    $('.btn.btn-success:eq(0)').click(function() {
        event.preventDefault();
        $('.cart-item-1').after('<p>' + pickleToCart + '</p>');
    });

    $('.btn.btn-success:eq(1)').click(function() {
        event.preventDefault();
        $('.cart-item-1').after('<p>' + picklesToCart + '</p>');
    });

    $('.btn.btn-success:eq(2)').click(function() {
        event.preventDefault();
        $('.cart-item-1').after('<p>' + hoodieToCart + '</p>');
    });

});
