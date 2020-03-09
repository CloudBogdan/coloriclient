const card = $(".card");

card.each(i=> {
    $(".card .color_canvas").eq(i).css({
        background: $(".card .bottom_panel .color").eq(i).text()
    });
    card.eq(i).on("mouseover", ()=> {
        card.eq(i).css({
            "z-index": 50
        });
        $(".card ~ .card").eq(i).css({
            "z-index": 5
        });

        $(".card .color_canvas").eq(i).on("mouseover", ()=> {
            $(".card .action_button").text("open");
        });
        $(".card .bottom_panel").eq(i).on("mouseover", ()=> {
            $(".card .action_button").text("copy");
        });

        $("body").css({
            "--defcolor": $(".card .bottom_panel .color").eq(i).text()
        });
    });
});