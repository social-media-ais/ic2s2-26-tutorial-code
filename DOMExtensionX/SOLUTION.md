# X DOM Tutorial: Solution

## Step 1: Add a Label

Complete `addLabel(textElement, message)`:

```js
const label = document.createElement("aside");
label.className = "feedlab-label";
label.textContent = message;
textElement.insertAdjacentElement("afterend", label);
```

## Step 2: Select Political Posts

Complete `isPolitical(text)`:

```js
return politicalScore(text) >= POLITICAL_THRESHOLD;
```

## Step 3: Apply the Session Limit

Complete the final TODO in `changePost(article, textElement, text)`:

```js
if (number > MAX_POLITICAL_POSTS) {
  console.info(`[IC2S2 Tutorial] Hiding political post ${number}:`, text);
  article.style.display = "none";
}
```

## Example Intervention: Filter Negative Posts

In `manifest.json`, replace the classifier:

```json
"js": ["sentiment.js", "content.js"]
```

Replace `changePost()`:

```js
function changePost(article, textElement, text) {
  if (!hasNegativeSentiment(text)) return;

  console.info("[IC2S2 Tutorial] Hiding negative post:", text);
  article.style.display = "none";
}
```

No model needs to load, so replace the final `loadPoliticalModel().then(...)`
block with:

```js
console.info("[IC2S2 Tutorial] Extension is running.");
start();
```
