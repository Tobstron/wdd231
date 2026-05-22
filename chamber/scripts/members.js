const url = "data/members.json";

const container = document.querySelector("#members");

async function getMembers() {

  const response = await fetch(url);

  const data = await response.json();

  displayMembers(data.members);
}

function displayMembers(members) {

  members.forEach(member => {

    const card = document.createElement("section");

    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p>
        <a href="${member.website}" target="_blank">
          Visit Website
        </a>
      </p>
      <p>Membership Level: ${member.level}</p>
    `;

    container.appendChild(card);
  });
}

getMembers();

document.querySelector("#grid").addEventListener("click", () => {
  container.classList.add("grid-view");
  container.classList.remove("list-view");
});

document.querySelector("#list").addEventListener("click", () => {
  container.classList.add("list-view");
  container.classList.remove("grid-view");
});