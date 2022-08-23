document.forms.rsvp.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = document.querySelector(".result");
    try {
        const resp = await fetch("/", {
            body: new FormData(event.target),
            method: "POST",
        })
    } catch (error) {
        console.log(error)
    }
});
