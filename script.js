const selectBtn = document.querySelector(".select-btn"),
    content = document.querySelector(".content"),
    searchInp = document.querySelector("input"),
    items = document.querySelectorAll(".item");
var cont = 0;

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
    if (cont == 0) {
        content.style.display = "block";
        cont = 1;
    } else {
        content.style.display = "none";
        cont = 0;
    }

});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        let itemText = item.querySelector(".item-text").innerText;

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

        if (checked && checked.length > 0) {
            let selectedItems = Array.from(checked).map(item => item.querySelector(".item-text").innerText);
            console.log(selectedItems);
            if (selectedItems.join(", ").length > 28) {
                btnText.innerText = `${checked.length} Selected`;
            } else {
                btnText.innerText = `${selectedItems.join(", ")} `;
            }

        } else {
            btnText.innerText = "Select clubs";
        }
    });
})

searchInp.addEventListener("keyup", () => {
    let searchWord = searchInp.value.toLowerCase();
    items.forEach(item => {
        let itemText = item.querySelector(".item-text").innerText.toLowerCase();
        if (itemText.startsWith(searchWord)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});