const container = document.querySelector('.container');
const p = document.createElement('p');
p.textContent = "This is my demo project";
p.style.textAlign = "center";
p.style.fontSize = "100px";
document.body.insertBefore(p, container);