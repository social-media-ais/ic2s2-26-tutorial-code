"use strict";

let politicalModel;

async function loadPoliticalModel() {
  const url = chrome.runtime.getURL("political_model.json");
  politicalModel = await fetch(url).then(response => response.json());
}

function politicalScore(text) {
  const tokens = text.toLowerCase().match(/[a-z0-9_]{2,}/g) || [];
  const features = new Set(tokens);
  for (let index = 0; index < tokens.length - 1; index++) {
    features.add(`${tokens[index]} ${tokens[index + 1]}`);
  }

  let logit = politicalModel.intercept;
  for (const feature of features) {
    logit += politicalModel.weights[feature] || 0;
  }
  return 1 / (1 + Math.exp(-logit));
}
