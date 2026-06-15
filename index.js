document.querySelector(".go").addEventListener('click', () => {
    const firstname = document.querySelector(".firstname").value;
    const surname   = document.querySelector(".surname").value;
    const image     = document.querySelector(".image").value;
    const borndate  = document.querySelector(".borndate").value;
    const pesel     = document.querySelector(".pesel").value;

    const params = new URLSearchParams();
    params.set("firstname", firstname);
    params.set("surname", surname);
    params.set("image", image);
    params.set("borndate", borndate);
    params.set("pesel", pesel);

    window.location.href = "id.html?" + params.toString();
});
