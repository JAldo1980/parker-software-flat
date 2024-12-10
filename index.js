import { problemData } from "./problemData.js";
import { solutionData } from "./solutionData.js";
import { clientData } from "./clientData.js";
import { resourceData } from "./resourceData.js";

// PROBLEM DATA

const problemContainer = document.getElementById("problem-container");
const problemRender = problemData.map((item) => {
  return `
    <div>
        <h4 class="text-sm sm:text-base lg:text-lg text-[#3a3a3a]">${item.text}</h4>
    
    </div>
  `;
});
problemContainer.innerHTML = problemRender.join("");

// SOLUTION DATA

const solutionContainer = document.getElementById("solution-container");

const solutionRender = solutionData.map((item) => {
  return `
      <div class="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
        <div>
          <img 
            src="${item.image}" 
            alt="${item.header}" 
            class="w-full object-contain mb-4 rounded-md"
          />
          <h2 class="text-lg font-bold text-[#3a3a3a] mb-2">${item.header}</h2>
          <p class="text-sm sm:text-base lg:text-lg text-[#3a3a3a] mb-2">${item.textOne}</p>
          <p class="text-sm sm:text-base lg:text-lg  text-[#3a3a3a] mb-4">${item.textTwo}</p>
        </div>
        <a 
          href="${item.link}" 
          class="bg-[#e06a61] text-white text-sm sm:text-base lg:text-lg text-[#3a3a3a] font-medium px-4 py-2 rounded hover:bg-[#b04943] mt-auto text-center"
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
      <div class="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col justify-between h-full">
        <div>
          <img 
            src="${resource.image}" 
            alt="${resource.imageAlt}" 
            aria-label="${resource.ariaLabel}" 
            class="w-full object-cover mb-4 rounded-md"
          />
          <h2 class="text-lg font-semibold text-[#3a3a3a] mb-2">${resource.header}</h2>
          <p class="text-sm text-white bg-gray-800 px-2 py-1 rounded mb-2">${resource.category}</p>
          <p class="text-xs text-gray-600 mb-4">${resource.date}</p>
          <p class="text-sm sm:text-base lg:text-lg text-[#3a3a3a] mb-4">${resource.textOne}</p>
        </div>
        <button class="bg-[#e06a61] text-white text-sm sm:text-base lg:text-lg text-[#3a3a3a] font-medium px-4 py-2 rounded hover:bg-[#b04943] mt-auto">
          ${resource.cta}
        </button>
      </div>
    `;
});

resourceContainer.innerHTML = resourceRender.join("");
