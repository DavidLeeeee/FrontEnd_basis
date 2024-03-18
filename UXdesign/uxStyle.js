const blackcolors = [
  "#000000",
  "#0C0C0C",
  "#171717",
  "#0B1215",
  "#0D1717",
  "#101720",
  "#011222",
  "#071616",
];
const whitecolors = [
  "#FFFFFF",
  "#F9F6EE",
  "#FFFFF0",
  "#FCF5E5",
  "#E2DFD2",
  "#FFF5EE",
  "#F5FFFA",
  "#FAFFFF",
];
// Black colors
const blacksArticle = document.getElementById("Blacks");
blackcolors.forEach((color) => {
  const div = document.createElement("div");
  div.style.backgroundColor = color;

  const colorValue = document.createElement("span");
  colorValue.textContent = color;
  div.appendChild(colorValue);

  blacksArticle.appendChild(div);
});

// White colors
const whitesArticle = document.getElementById("Whites");
whitecolors.forEach((color) => {
  const div = document.createElement("div");
  div.style.backgroundColor = color;

  const colorValue = document.createElement("span");
  colorValue.textContent = color;
  div.appendChild(colorValue);

  whitesArticle.appendChild(div);
});

const colorSymbol = [
  ["Red", "Excitement,Strength,Love,Energy"],
  ["Orange", "Confidence,Success,Bravery,Sociability"],
  ["Yellow", "Creativity,Happiness,Warmth,Cheer"],
  ["Green", "Nature,Healing,Freashness,Quality"],
  ["Blue", "Trust,Peace,Loyalty,Competence"],
  ["Pink", "Compassion,Sincerity,Sophstication,Sweet"],
  ["Purple", "Royalty,Luxury,Spirituality,Ambition"],
  ["Brown", "Dependency,Rugged,Trustworthy,Simple"],
  ["Black", "Formality,Dramatic,Sophiscation,Security"],
  ["White", "Clean,Simplicity,Innocence,Honest"],
];

const colorSymbolContainer = document.getElementById("ColorSymbol");
colorSymbol.forEach((color) => {
  const [colorName, meanings] = color;
  const div = document.createElement("div");
  const p = document.createElement("p");
  const ul = document.createElement("ul");

  p.textContent = colorName;
  div.style.backgroundColor = colorName.toLowerCase();
  if (colorName.toLowerCase() === "white") {
    p.style.color = "black";
  }
  meanings.split(",").forEach((meaning) => {
    const li = document.createElement("li");
    li.textContent = meaning.trim();
    if (colorName.toLowerCase() === "white") {
      li.style.color = "black";
    }
    ul.appendChild(li);
  });
  div.appendChild(p);
  div.appendChild(ul);
  colorSymbolContainer.appendChild(div);
});

// Peak-End 그래프 그리기
document.addEventListener("DOMContentLoaded", function () {
  const svgNamespace = "http://www.w3.org/2000/svg";
  let svg = document.getElementById("graphBox"); // SVG 요소 선택

  // 데이터 포인트: x축은 0부터 시작, y값은 주어진 데이터를 사용
  const dataPoints = [2, 4, 3, 7, 4, 8];
  const maxDataValue = Math.max(...dataPoints);

  // SVG 크기 및 그래프에 대한 마진 설정
  const svgWidth = svg.getAttribute("width");
  const svgHeight = svg.getAttribute("height");
  const graphWidth = svgWidth - 40; // 좌우 여백
  const graphHeight = svgHeight - 40; // 상하 여백

  // 데이터 포인트 간의 간격 계산
  const xSpacing = graphWidth / (dataPoints.length - 1);

  // 선을 그리기 위한 d 속성 값 생성
  let dAttr =
    "M 20 " + (graphHeight - (dataPoints[0] / maxDataValue) * graphHeight + 20);
  for (let i = 1; i < dataPoints.length; i++) {
    dAttr +=
      " L " +
      (20 + i * xSpacing) +
      " " +
      (graphHeight - (dataPoints[i] / maxDataValue) * graphHeight + 20);
  }

  // path 요소 생성 및 속성 설정
  let path = document.createElementNS(svgNamespace, "path");
  path.setAttribute("d", dAttr);
  path.setAttribute("stroke", "blue"); // 선의 색상
  path.setAttribute("stroke-width", "3"); // 선의 두께
  path.setAttribute("stroke-linejoin", "round"); // 선의 교차 부분 모양
  path.setAttribute("stroke-linecap", "round"); // 선의 끝 모양
  path.setAttribute("fill", "none");

  svg.appendChild(path);
});

//막대그래프
let canvas = document.getElementById("myBarChart");
let ctx = canvas.getContext("2d");
let data = [15, 20, 80, 10, 25];

let barWidth = 50;
let barSpacing = 10;
let barColor = "blue";
let yOffset = 130; // 캔버스의 높이에 맞춰 조정

data.forEach((value, index) => {
  let x = index * (barWidth + barSpacing);
  let y = yOffset - value;
  let height = value;

  ctx.fillStyle = barColor;
  ctx.fillRect(x, y, barWidth, height);
});
ctx.fillStyle = "black"; // 텍스트 색상 설정
data.forEach((value, index) => {
  let x = index * (barWidth + barSpacing - 1.5);
  let y = yOffset - value - 5; // 텍스트 위치 조정
  ctx.fillText(value, x + barWidth / 2, y);
});
