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
    <div class="bg-gray-100 shadow-lg rounded-lg  p-6 ">
      <img 
        src="${item.image}" 
        alt="${item.header}" 
        class="w-full object-contain mb-4"
      />
      <h2 class="text-lg font-bold text-gray-800 mb-2">${item.header}</h2>
      <p class="text-sm text-gray-700 mb-2">${item.textOne}</p>
      <p class="text-sm text-gray-700 mb-4">${item.textTwo}</p>
      <a 
        href="${item.link}" 
        class="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-600"
        aria-label="${item.header} solution"
      >
        ${item.cta}
      </a>
    </div>
  `;
});

solutionContainer.innerHTML = solutionRender.join("");

// CLIENT DATA

const clientContainer = document.getElementById("client-container");

const clientRender = clientData.map((client) => {
  return `
    <div class="flex p-2">
      <img 
        src="${client.image}" 
        alt="${client.imageAlt}" 
        aria-label="${client.ariaLabel}" 
        class="w-24 h-auto object-contain"
      />
    </div>
  `;
});

clientContainer.innerHTML = clientRender.join("");

// RESOURCE DATA

const resourceContainer = document.getElementById("resource-container");

const resourceRender = resourceData.map((resource) => {
  return `
    <div class="bg-gray-100 shadow-lg rounded-lg p-4">
      <img 
        src="${resource.image}" 
        alt="${resource.imageAlt}" 
        aria-label="${resource.ariaLabel}" 
        class="w-full object-cover mb-4 rounded-md"
      />
      <h3 class="text-lg font-semibold text-gray-800 mb-2">${resource.header}</h3>
      <p class="text-sm text-white bg-gray-800 px-2 py-1 rounded mb-2">${resource.category}</p>
      <p class="text-xs text-gray-600 mb-4">${resource.date}</p>
      <p class="text-sm text-gray-700 mb-4">${resource.textOne}</p>
      <button class="bg-red-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-red-600">
        ${resource.cta}
      </button>
    </div>
  `;
});

resourceContainer.innerHTML = resourceRender.join("");
