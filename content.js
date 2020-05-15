const prev = document.querySelector(".paging-lay .blk1-lay a");
const next = document.querySelector(".paging-lay .blk2-lay a");
const prevOnly = document.querySelector(".paging-lay .blk3-lay a");

document.addEventListener("keydown", event => {
    switch(event.keyCode) {
        case 37:
            prev ? prev.click() : prevOnly.click();
            break;
        case 39:
            next.click();
            break
    }
});