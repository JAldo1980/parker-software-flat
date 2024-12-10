import { problemData } from "./problemData.js";

const problemContainer = document.getElementById("problem-container");

const problemRender = problemData.map((item) => {
  return `
    <div>
        <h4>${item.text}</h4>
    
    </div>
  `;
});

problemContainer.innerHTML = problemRender.join("");
