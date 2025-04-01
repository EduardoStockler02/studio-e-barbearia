$(document).ready(function () {
    // Menu Toggle
    $(".fa-bars").click(function () {
        $(this).toggleClass("fa-times");
        $("nav").toggleClass("nav-toggle");
    });

    // Animated Counting Effect
    $(".count").each(function () {
        var $this = $(this),
        countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
                duration: 5000,
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                },
            }
        );
    });

    // Magnific Popup for Project Images
    $(".projects").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true,
        },
    });
});
