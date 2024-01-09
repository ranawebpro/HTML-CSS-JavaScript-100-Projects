const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://v2.jokeapi.dev/joke/Any"; // JokeAPI endpoint
  ajax.open("GET", url, true);

  ajax.onreadystatechange = () => {
    if (ajax.status === 200 && ajax.readyState === 4) {
      let data = JSON.parse(ajax.responseText);

      if (data.type === "single") {
        displayJoke.innerHTML = `${data.joke}`;
      } else if (data.type === "twopart") {
        displayJoke.innerHTML = `${data.setup}<br>${data.delivery}`;
      }
    } else {
      onerror();
    }
  };

  ajax.send();
}

function onerror() {
  displayJoke.textContent = `Something Went Wrong :(`;
}
