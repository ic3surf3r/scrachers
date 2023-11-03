// TODO: Write your gambling application here.
const balance = document.getElementById("balance");
const scratchcards = document.getElementById("scratchcards");

const vals = [5, 15, 0, 500, 450, 100, 0, 1000, 0, 50, 0, 0, 0, 0, 0, 0, 10000, 0, 0, 100, 0, 1000, 0, 0, 0];
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const order = shuffle(vals);

const makeGrid = (array) => {
  array.forEach((num) => {
    const li = `<li class="scratchcard" data-amount="${num}" data-scratched="false"></li>`;
    scratchcards.insertAdjacentHTML("beforeend", li);
  });
};

makeGrid(order);

const cardScrached = (e) => {
  const target = e.target;
  const hold = +balance.innerText;
  if (target.dataset.scratched === "false" && hold >= 10) {
    const ammount = target.dataset.amount;
    balance.innerText = hold - 10 + +ammount;
    target.innerText = `€${ammount}`;
    target.dataset.scratched = "true";
  } else {
    alert("You don't have enoguh to play 😢");
  }
};

scratchcards.addEventListener("click", cardScrached);
