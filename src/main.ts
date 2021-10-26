import { chunk, shuffle } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// SELECTORS
const form = document.getElementById("form") as HTMLFormElement;
const groupSize = document.getElementById("groupSize") as HTMLInputElement;
const items = document.getElementById("items") as HTMLInputElement;
const submitBtn = document.getElementById("submitBtn") as HTMLFormElement;
const groupWrapper = document.getElementById("groupWrapper") as HTMLDivElement;
const alert = document.querySelector(".alert") as HTMLElement;

// FUNCTIONS
const generateGroups = (): string[][] => {
  const arr: string[] = items.value.replace(/^\s+|\s+$/gm, "").split("\n");
  const sizeArr: number = Math.ceil(
    parseFloat(String(arr.length / Number(groupSize.value)))
  );
  const result: string[][] = chunk(shuffle(arr), sizeArr);

  return result;
};

const render = (arr: string[][]): void => {
  form.reset();
  groupWrapper.innerHTML = "";

  arr.forEach((item, index) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    groupWrapper.className = "mt-3 row row-cols-2 row-cols-lg-5 g-2 g-lg-3";
    div.className = "col bg-light border mx-auto p-3";
    p.className = "text-break";

    groupWrapper.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);

    h2.innerText = `Team ${index + 1}`;
    p.innerText = String(item);
  });
};

// EVENT LISTENER
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (groupSize.value == "" || items.value == "") {
    form.reset();
    groupWrapper.innerHTML = "";

    alert.classList.remove("d-none");
    groupSize.classList.add("is-invalid");
    items.classList.add("is-invalid");
  }

  alert.classList.add("d-none");
  groupSize.classList.remove("is-invalid");
  items.classList.remove("is-invalid");

  render(generateGroups());
});
