let btn = document.getElementsByClassName("submit-btn")[0];
let modal = document.getElementById("modal");

  btn.onclick = function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (username.trim() === "") {
    alert("Пожалуйста, заполните поле 'Имя пользователя'");
    return;
  }

  if (password == confirmPassword) {
    alert("Добро пожаловать  " + username + "!");
    modal.style.display = "none";
  } else {
    alert("Пароли не совпадают");
    modal.style.display = "block";
  }
};

// ! ================================ КОНЕЦ МОДУЛЯ ==========================

// ============================== Поисковик ========================
let click = document.getElementById("hamburger-click");
let burger = document.getElementById("burger-content");

click.onclick = function () {
  if (burger.style.display === "none") {
    burger.style.display = "block";
  } else burger.style.display = "none";
};

let jordan = [
  {
    name: "Jordan",
    num: "1",
    img: "Jordan/1.webp",
    cost: "200$",
    color: "red",
  },
  {
    name: "Jordan",
    num: "2",
    img: "Jordan/2.webp",
    cost: "200$",
    color: "black",
  },
  {
    name: "Jordan",
    num: "3",
    img: "Jordan/3.webp",
    cost: "200$",
    color: "blue",
  },
  {
    name: "Jordan",
    num: "4",
    img: "Jordan/4.webp",
    cost: "200$",
    color: "yellow",
  },
  {
    name: "Jordan",
    num: "5",
    img: "Jordan/5.webp",
    cost: "200$",
    color: "green",
  },
  {
    name: "Jordan",
    num: "6",
    img: "Jordan/6.webp",
    cost: "200$",
    color: "gray",
  },
];

const parent0 = document.getElementById("parent");

jordan.forEach((shoe) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = shoe.img;
  card.appendChild(img);

  const name = document.createElement("p");
  name.innerText = "id: " + shoe.name + " " + shoe.num;
  card.appendChild(name);

  const cost = document.createElement("p");
  cost.innerText = "Цена: " + shoe.cost;
  card.appendChild(cost);

  const color = document.createElement("p");
  color.innerText = "Color: " + shoe.color;
  card.appendChild(color);

  const btn = document.createElement("button");
  btn.id = "btn";
  btn.innerText = "Купить";
  card.appendChild(btn);
  btn.onclick = function () {
    alert("Вы успешно купили " + `${shoe.name + " " + shoe.color}` + "!");
  };
  parent0.appendChild(card);
});

let jordan1 = [
  {
    name: "Fourth Jordan",
    num: "1",
    img: "Jordan1/1.webp",
    cost: "100$",
    color: "Red",
  },
  {
    name: "Fourth Jordan",
    num: "2",
    img: "Jordan1/2.webp",
    cost: "160$",
    color: "Brown",
  },
  {
    name: "Fourth Jordan",
    num: "3",
    img: "Jordan1/3.webp",
    cost: "210$",
    color: "Olive",
  },
  {
    name: "Fourth Jordan",
    num: "4",
    img: "Jordan1/4.webp",
    cost: "106$",
    color: "Black",
  },
  {
    name: "Fourth Jordan",
    num: "5",
    img: "Jordan1/5.webp",
    cost: "100$",
    color: "White",
  },
  {
    name: "Fourth Jordan",
    num: "6",
    img: "Jordan1/6.webp",
    cost: "100$",
    color: "Green",
  },
];

const parent1 = document.getElementById("parent1");

jordan1.forEach((shoe) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = shoe.img;
  card.appendChild(img);

  const name = document.createElement("p");
  name.innerText = "id: " + shoe.name + " " + shoe.num;

  card.appendChild(name);

  const cost = document.createElement("p");
  cost.innerText = "Цена: " + shoe.cost;
  card.appendChild(cost);

  const color = document.createElement("p");
  color.innerText = "Color: " + shoe.color;
  card.appendChild(color);

  const btn = document.createElement("button");
  btn.id = "btn";
  btn.innerText = "Купить";
  card.appendChild(btn);
  btn.onclick = function () {
    alert("Вы успешно купили " + `${shoe.name + " " + shoe.color}` + "!");
  };

  parent1.appendChild(card);
});

let jordan2 = [
  {
    name: "Expensive",
    num: "1",
    img: "Expensive/1.jpg",
    p: "Nike Mag — ограниченная серия кроссовок компании Nike Inc. Кроссовки представляют собой копию футуристичной обуви Марти Макфлая из фантастического фильма «Назад в будущее 2». Первая лимитированная серия Nike Mag появилась в продаже в 2011 году в количестве 1510 пар, а в 2016 году состоялся второй ограниченный выпуск — 89 пар обуви В самой компании заявляли, что кроссовки Mag не предназначены для повседневной носки или занятий спортом, так как серия была произведена для коллекционеров.",
  },
  {
    name: "Expensive",
    num: "2",
    img: "Expensive/2.jpg",
    p: "Кроссовки Nike Moon появились на свет в 1972 году и были названы в честь своего фирменного протектора, напоминающего следы, оставленные космонавтами. Сделанные вручную Джеффом Холлистером под руководством соучредителя бренда кроссовок Nike Билла Бауэрмана, они стали элементом экипировки марафонца Брюса Мортенсона на Олимпийских играх 1972 года.",
  },
  {
    name: "Expensive",
    num: "3",
    img: "Expensive/3.jpg",
    p: "Nike Skateboarding готовится выпустить специальное издание своих кроссовок Nike SB Dunk Low. Эта модель отдает дань уважения Grateful Dead Bears – серии стилизованных танцующих медведей, нарисованной Бобом Томасом и использованной для обложки альбома “History of the Grateful Dead, Volume One (Bear’s Choice)” в 1973 году.",
  },
  {
    name: "Expensive",
    num: "4",
    img: "Expensive/4.jpg",
    p: "16 августа в США состоялась премьера мультипликационного фильма ПараНорман (ParaNorman), казалось бы, каким образом связан мультик и кроссовки, но на самом деле всё очень просто. В честь выхода ПараНорман, бренд Nike выпустил серию кроссовок Nike Air Foamposite One, выполненные в тематике мультика. Кроссовки Nike Air Foamposite One [ParaNorman] имеют множество уникальных деталей, начиная от ярких кислотных вставок и заканчивая эффектом дыма. Модель выйдет ограниченным тиражом, всего лишь 800 пар, поэтому если Вы всё-таки станете их счастливым обладателям - Вы счастливчик!",
  },
  {
    name: "Expensive",
    num: "5",
    img: "Expensive/5.jpg",
    p: "The Nike Air Yeezy is an official sneakers collaboration project between Nike and Kanye West, launched in 2009. Notable as the shoe brand's first non-athlete full collaboration, the project has released two editions: the Air Yeezy (2009) and the Air Yeezy II (2012 and 2014).",
  },
  {
    name: "Expensive",
    num: "6",
    img: "Expensive/8.jpg",
    p: "Магазин кроссовок и бренд одежды UNDEFEATED готовится выпустить очередную коллаборацию с Nike. В этом сезоне нас ждет коллекция UNDEFEATED x Nike Kobe 4 Protro, посвященная игрокам баскетбольных команд «Лос-Анджелес Лейкерс», «Милуоки Бакс», «Сан-Антонио Спёрс» и «Финикс Санз». Верх каждой версии покрыт лакированной кожей. Брендинг Undefeated присутствует как на заднике, так и на левом язычке и правой стельке. Логотип именной линейки Кобе Брайанта, Kobe, в свою очередь, украшает правый язычок и левую стельку. Также на пятке можно заметить номера, под которыми играл баскетболист — «8» и «24». Мидсоль дополнена амортизацией Zoom Air, а подошва с уникальным рисунком протектора украшена полупрозрачными вставками.",
  },
];
const parent2 = document.getElementById("parent2");

jordan2.forEach((shoe) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = shoe.img;
  card.appendChild(img);

  const p = document.createElement("p");
  p.innerText = shoe.p;
  card.appendChild(p);

  parent2.appendChild(card);
});
const jordan3 = [
  {
    name: "Rare",
    num: "1",
    img: "rare/1.jpg",
  },
  {
    name: "Rare",
    num: "2",
    img: "rare/2.jpg",
  },
  {
    name: "Rare",
    num: "3",
    img: "rare/3.jpg",
  },
  {
    name: "Rare",
    num: "4",
    img: "rare/4.jpg",
  },
  {
    name: "Rare",
    num: "5",
    img: "rare/5.jpg",
  },
  {
    name: "Rare",
    num: "6",
    img: "rare/6.jpg",
  },
  {
    name: "Rare",
    num: "7",
    img: "rare/7.jpg",
  },
  {
    name: "Rare",
    num: "6",
    img: "rare/8.jpg",
  },
];
let slider = document.getElementById("slider");

jordan3.forEach((shoe) => {
  const img = document.createElement("img");
  img.src = shoe.img;

  slider.appendChild(img);
});
let currentIndex = 0;
function showSlides() {
  slider.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    let index = (currentIndex + i) % jordan3.length;
    const img = document.createElement("img");
    img.src = jordan3[index].img;
    slider.appendChild(img);
  }
  currentIndex = (currentIndex + 3) % jordan3.length;
}

setInterval(showSlides, 2000);


let isBlack = true;

function toggleTextColors() {
  const cards = document.querySelectorAll('.card');
  const paragraphs = document.querySelectorAll('.card p');

  if (isBlack) {
    cards.forEach(card => {
      card.style.color = 'white';
      card.style.backgroundColor = 'black';
    });
    paragraphs.forEach(p => {
      p.style.color = 'white';
    });
  } else {
    cards.forEach(card => {
      card.style.color = 'black';
      card.style.backgroundColor = 'white';
    });
    paragraphs.forEach(p => {
      p.style.color = 'black';
    });
  }
  isBlack = !isBlack;
}


var originalColor = "white";

function changeColor() {
  var parent = document.getElementsByClassName('parent');
  for(var i = 0; i < parent.length; i++){
    if (parent[i].style.backgroundColor === "black") {
      parent[i].style.backgroundColor = originalColor;
    } else {
      originalColor = parent[i].style.backgroundColor;
      parent[i].style.backgroundColor = "black"; 
    }
  }
}
const cards = document.querySelectorAll(".card");

const searcher = document.querySelector("#searcher");
searcher.addEventListener("input", () => {
  cards.forEach((el) => {
    if (
      el.innerText.toLowerCase().includes(searcher.value.trim().toLowerCase())
    ) {
      el.classList.remove("none");
    } else {
      el.classList.add("none");
    }
  });
});
