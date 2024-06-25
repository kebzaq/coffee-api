const result = document.getElementById("result");
const title = document.getElementById("title");
const card = document.getElementById("card");
const aList = document.querySelector(".list");

let = totalData = [];
async function showHotCoffee() {
  const resp = await fetch(`https://api.sampleapis.com/coffee/hot`);
  const dataHot = await resp.json();
  //   console.log(dataHot);
  totalData = [];
  totalData = [...dataHot];
  let output = ``;
  result.innerHTML = "";
  title.innerText = "";
  // loop to show list of coffees
  dataHot.forEach((each, ind) => {
    output += `<a href="#" class='list' onclick='showCoffeeDetails("${each.title}")'><li>${each.title}</li></a>`;
  });
  // show details for selected coffee

  title.innerText = "HOT coffee selection:";
  result.innerHTML = output;
  // event listener
  // document.querySelectorAll(".list").forEach((link, index) => {
  //   link.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     showCoffeeDetails(dataHot[index].title);
  //   });
  // });
}
const showCoffeeDetails = (title) => {
  console.log("EVENT CLICKED", title);
  console.log("totalData", totalData);
  let details = "";
  for (let i = 0; i < totalData.length; i++) {
    if (title === totalData[i].title) {
      console.log(totalData[i].title);
      details = `
      <image src=${totalData[i].image} alt=${totalData[i].title} />
      <h4>${totalData[i].title} </>
      <p>${totalData[i].description} </p>
      <p>${totalData[i].ingridients} </p>
      `;
    }
    // else {
    //   details = "Item is not found!";
    // }
  }
  card.innerHTML = details;
  // totalData.forEach((item) => {
  //   if (item.title === title) {
  //     console.log(item.title);
  //     details = `
  //     <image src=${item.image} alt=${item.title} />
  //     <h4>${item.title} </>
  //     <p>${item.description} </p>
  //     <p>${item.ingridients.toString()} </p>
  //     `;
  //   } else {
  //     console.log(item.title);
  //     details = "Item is not found!";
  //   }
  // });
};

async function showIcedCoffee() {
  const resp = await fetch(`https://api.sampleapis.com/coffee/iced`);
  const dataIced = await resp.json();
  totalData = [];
  totalData = [...dataIced];
  let output = ``;
  result.innerHTML = "";
  title.innerText = "";
  dataIced.forEach((each) => {
    output += `<a href="#" class='list' onclick='showCoffeeDetails("${each.title}")'><li>${each.title}</li></a>`;
  });
  title.innerText = "ICED coffee selection:";
  result.innerHTML = output;
}
