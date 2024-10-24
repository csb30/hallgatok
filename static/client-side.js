function new_item() {
    const row = document.querySelector("#new_item");
    row.removeAttribute("hidden");
}
function close_new() {
    const row = document.querySelector("#new_item");
    row.setAttribute("hidden", "")
}
function update_item(id){
    const update = document.querySelector("#update_item"+id);
    const row = document.querySelector("#row"+id);
    update.removeAttribute("hidden");
    row.setAttribute("hidden", "")
}
function close_update(id){
    const update = document.querySelector("#update_item"+id);
    const row = document.querySelector("#row"+id);
    row.removeAttribute("hidden");
    update.setAttribute("hidden", "")
}