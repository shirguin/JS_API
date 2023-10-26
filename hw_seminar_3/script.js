const container = document.querySelector(".container");

const showRandomImage = async () => {
  const url =
    "https://api.unsplash.com/photos/random?client_id=xUN3fRO_GMYTk5aJcNFVgjva_N9LAkTN-NJuPnuiN6k";
  const response = await fetch(url);
  const receivedObject = await response.json();

  const content = `
        <img class="photo" src="${receivedObject.urls.regular}" alt="photo">
        <div class="info">
            <p>Автор фото: ${receivedObject.user.name}</p>
            <p>Количество просмотров: ${receivedObject.views}</p>
            <p><span>Количество лайков: </span><span class="counter">${receivedObject.likes}</span></p>
        </div>
        <button class="btn">Лайк</button>
    `;
  container.insertAdjacentHTML("afterbegin", content);

  const button = document.querySelector(".btn");
  const counter = document.querySelector(".counter");
  button.addEventListener("click", () => {
    counter.textContent = Number(counter.textContent) + 1;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  container.innerHTML = "";
  showRandomImage();
});
