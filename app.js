let pagenr = 1;

const got = async (pagenr) => {
    const response = await fetch(`https://thronesapi.com/api/v2/Characters/${pagenr}`);
    const json = await response.json();
    console.log(json);

    const container = document.createElement("div");
        container.innerHTML=`
        <img src=${json.imageUrl}>
        <p>${json.fullName}</p>
        <p>Title: ${json.title}</p>
        <p>Family: ${json.family}</p>
        `;
    document.querySelector(".container").appendChild(container);
}

for (i=1 ; i<53 ; i++){
    got(pagenr);
    pagenr++
}