import { problemData } from "./problemData.js";
import { solutionData } from "./solutionData.js";

const problemContainer = document.getElementById("problem-container");
const problemRender = problemData.map((item) => {
  return `
    <div>
        <h4>${item.text}</h4>
    
    </div>
  `;
});
problemContainer.innerHTML = problemRender.join("");

const solutionContainer = document.getElementById("solution-container");

const solutionRender = solutionData.map((item) => {
  return `
    <div class="solution-card">
      <img src="${item.image}" alt="${item.header}" class="solution-image" />
      <h2 class="solution-header">${item.header}</h2>
      <p class="solution-text">${item.textOne}</p>
      <p class="solution-text">${item.textTwo}</p>
      <a href="${item.link}" class="solution-cta">${item.cta}</a>
    </div>
  `;
});

solutionContainer.innerHTML = solutionRender.join("");
