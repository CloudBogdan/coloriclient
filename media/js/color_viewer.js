const color_viewer = $(".color_viewer");
const canvas = $(".color_viewer .canvas");
const bg = $(".color_viewer .bg");

let color_testing = false;

color_viewer.on("click", ()=> {
    canvas.css({
        width: "200px",
        height: "200px",
        left: $(window).width() / 2 - color_viewer.offset().left,
        top: $(window).height() / 2 - color_viewer.offset().top + $(window).scrollTop(),
        "z-index": 1000
    });
    bg.css({
        opacity: 1,
        "z-index": 999
    });
    $("body").css({
        "overflow-y": "hidden"
    });
    
});
$(window).on("keyup", e=> {
    if (e.keyCode == 27) {
        canvas.css({
            width: "",
            height: "",
            left: "",
            top: ""
        });
        bg.css({
            opacity: "",
            "z-index": ""
        });
        $("body").css({
            "overflow-y": ""
        });
    }
});