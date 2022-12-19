let ul = document.querySelector("ul");
ul.parentNode.style.backgroundColor = "red";
ul.parentNode.parentNode.style.backgroundColor = "grey";

let secondChild = document.querySelector("li:nth-child(2)");
secondChild.previousElementSibling.style.color = "orange";
secondChild.nextElementSibling.style.color = "blue";

let p = document.createElement("p");
// ajouter un paragraphe (inner = a linterieur)
p.innerText = "mon paragraphe";
p.innerHTML = "<img src='assets/img/324.jpg' width='50'>";
// pour ajouter une class classlist
p.classList.add("para");
// ajouter un attribut avec setAttribute
p.setAttribute("title", "survole du paragraphe");
// console.log(p);
secondChild.nextElementSibling.insertAdjacentElement("afterend", p);
// document.body.appendChild(p);
// ul.appendChild(p);

let a = document.querySelector("a");
secondChild.addEventListener('click', (e) => {
    a.remove();
    secondChild.remove();
    // e.currentTarget.removeEventListener
});

ul.addEventListener('click', e => {
    // console.log(e.currentTarget);
    // e.target.remove();
    e.target.insertAdjacentHTML('afterend', '<img src="assets/img/324.jpg" width="50">')
});
