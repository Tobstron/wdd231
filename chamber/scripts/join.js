document.getElementById("timestamp").value =
new Date().toISOString();

const links = document.querySelectorAll("[data-modal]");

links.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const modal =
        document.getElementById(
        link.dataset.modal);

        modal.showModal();

    });

});

document.querySelectorAll(".close")
.forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});