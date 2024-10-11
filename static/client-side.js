function new_item() {
    const row = document.querySelector("#new_item");
    row.removeAttribute("hidden");
}
function close_new() {
    const row = document.querySelector("#new_item");
    row.setAttribute("hidden", "")
}
function update_item(){
    const update = document.querySelector("#update_item");
    const row = document.querySelector("#row");
    update.removeAttribute("hidden");
    row.setAttribute("hidden", "")
}
function close_update(){
    const update = document.querySelector("#update_item");
    const row = document.querySelector("#row");
    row.removeAttribute("hidden");
    update.setAttribute("hidden", "")
}