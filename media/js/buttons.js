const button = $(".button.pulse");

button.each(i=> {
    button.eq(i).append("<div class=\"inpulse\"></div>");
});


const inpulse = $(".button.pulse .inpulse");

button.each(i=> {
    button.eq(i).on("mousemove", e=> {
        const size = Math.max(button.eq(i).width(), button.eq(i).height()) + 40;

        inpulse.eq(i).css({
            width: size + "px",
            height: size + "px"
        });
    });
    button.eq(i).on("mouseout", e=> {
        inpulse.eq(i).css({
            width: 0,
            height: 0
        });
    });
});