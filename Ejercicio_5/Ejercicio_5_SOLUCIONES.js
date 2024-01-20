const ul = document.createElement("ul");

for (const album of albums) {
    const li = document.createElement("li");
    li.textContent = album;
    ul.appendChild(li);
}

document.body.appendChild(ul);