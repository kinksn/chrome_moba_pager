const prev = document.getElementsByClassName( "paging-lay" )[0].children[0].children[0].getElementsByTagName("a")[0];
const next = document.getElementsByClassName( "paging-lay" )[0].children[0].children[1].getElementsByTagName("a")[0];

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 37) {
        prev.click();
    } else if (event.isComposing || event.keyCode === 39) {
        next.click();
    }
});

