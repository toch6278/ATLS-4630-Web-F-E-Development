// import * as 'rita.js';
console.log("hello");
rhymeButton = document.querySelector("#find");
rhymeButton.addEventListener("click", ()=>{
    console.log("reloading");
    window.location.reload(true);
});
function findRhymes() {
    let rhymes = RiTa.rhymes(field.value());
    if (rhymes.length > 0) text(rhymes.join(" "), 10, 10, width - 10, height - 10);
}

//# sourceMappingURL=index.e72c3fb5.js.map
