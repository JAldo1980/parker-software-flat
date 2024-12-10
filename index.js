import { problemData } from "./problemData.js";
import { solutionData } from "./solutionData.js";
import { clientData } from "./clientData.js";
import { resourceData } from "./resourceData.js";

// PROBLEM DATA

const problemContainer = document.getElementById("problem-container");
const problemRender = problemData.map((item) => {
  return `
    <div>
        <h4>${item.text}</h4>
    
    </div>
  `;
});
problemContainer.innerHTML = problemRender.join("");

// SOLUTION DATA

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

// CLIENT DATA

const clientContainer = document.getElementById("client-container");

const clientRender = clientData.map((client) => {
  return `
    <div>
      <img 
        src="${client.image}" 
        alt="${client.imageAlt}" 
        aria-label="${client.ariaLabel}" 
      />
    </div>
  `;
});

clientContainer.innerHTML = clientRender.join("");

// RESOURCE DATA

const resourceContainer = document.getElementById("resource-container");

const resourceRender = resourceData.map((resource) => {
  return `
    <div>
      <img 
        src="${resource.image}" 
        alt="${resource.imageAlt}" 
        aria-label="${resource.ariaLabel}" 
      />
      <h3>${resource.header}</h3>
      <p>${resource.category} - ${resource.date}</p>
      <p>${resource.textOne}</p>
      <button>${resource.cta}</button>
    </div>
  `;
});

resourceContainer.innerHTML = resourceRender.join("");
