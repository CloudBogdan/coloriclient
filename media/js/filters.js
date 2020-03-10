const filter_button = $(".filter_button");
const panel = $(".filter_panel");

let open = false;
filter_opener();

filter_button.on("click", ()=>{
    open = !open;

    filter_opener();
});

function filter_opener() {
    panel.css({
        width: Number(open) * 200 + "px",
        height: open ? "unset": 0,
        "min-height": Number(open) * 170 + "px",
        opacity: Number(open),
        padding: `${Number(open) * 20}px ${Number(open) * 20}px ${Number(open) * 20}px ${Number(open) * 80}px`,
    });
}