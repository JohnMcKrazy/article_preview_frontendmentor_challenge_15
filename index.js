const $d = document;
const selector = (tag) => $d.querySelector(`${tag}`);
const selectorAll = (tag) => $d.querySelectorAll(`${tag}`);

selectorAll(".share_btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn);
        selector(".user_links").classList.toggle("show");
    });
});
