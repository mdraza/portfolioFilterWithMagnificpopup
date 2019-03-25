var $grid = $(".stud_work").isotope({
    itemSelector: ".work-item",
    layoutMode: "fitRows"
});

$(".filter_btn a").on("click", function () {
    var value = $(this).attr("data-name");
    $grid.isotope({
        filter: value
    });
});

$('.view').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

$('.video-view').magnificPopup({
    type: 'iframe'
});