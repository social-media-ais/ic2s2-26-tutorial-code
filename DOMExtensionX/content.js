"use strict";

const POLITICAL_THRESHOLD = 0.35;
const MAX_POLITICAL_POSTS = 3;
const politicalPostOrder = new Map();

function isPolitical(text) {
  // STEP 2 TODO: Replace `true` with the classifier rule.
  return true;
}

function addLabel(textElement, message) {
  // console.log(textElement, message);

  // STEP 1 TODO: Create an <aside> with class "feedlab-label",
  // set its text to `message`, and insert it after `textElement`.
}

function politicalPostNumber(article, text) {
  const id = article.querySelector('a[href*="/status/"]')?.href || text;
  if (!politicalPostOrder.has(id)) {
    politicalPostOrder.set(id, politicalPostOrder.size + 1);
  }
  return politicalPostOrder.get(id);
}

function changePost(article, textElement, text) {
  if (!isPolitical(text)) return;

  const number = politicalPostNumber(article, text);
  addLabel(textElement, `Political content · ${number}`);

  // STEP 3 TODO: When `number` is greater than MAX_POLITICAL_POSTS,
  // log the hidden post and set `article.style.display` to "none".
}

function annotate(article) {
  const textElement = article.querySelector('[data-testid="tweetText"], .post-text');
  if (!textElement) return;

  const text = textElement.textContent.trim();
  if (!text || article.dataset.feedlabText === text) return;
  article.dataset.feedlabText = text;

  changePost(article, textElement, text);
}

function scan(root = document) {
  if (root.matches?.("article")) annotate(root);
  root.querySelectorAll?.("article").forEach(annotate);
}

function start() {
  scan();
  new MutationObserver(records => records.forEach(record =>
    record.addedNodes.forEach(node => node.nodeType === 1 && scan(node))
  )).observe(document.body, { childList: true, subtree: true });
}

loadPoliticalModel().then(() => {
  console.info("[IC2S2 Tutorial] Extension and classifier are running.");
  start();
});
