async function getSpotlights() {

    const response = await fetch("data/members.json");

    const data = await response.json();

    const members = data.filter(member =>
        member.membership >= 2
    );

    const shuffled = members.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, 3);

    const container =
    document.getElementById("spotlight-container");

    selected.forEach(member => {

        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="images/${member.image}"
            alt="${member.name}">

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
            Visit Website
            </a>
        `;

        container.appendChild(card);
    });
}

getSpotlights();