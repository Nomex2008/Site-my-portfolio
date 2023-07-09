$(function(){

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var blockId = $(this).data('scroll');
        var blockOffcet = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffcet
        })
    })
})