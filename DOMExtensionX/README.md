# X DOM Tutorial: Limiting Political Content

This tutorial walks you through building a browser extension that limits
political content to three posts during one scrolling session. We will:

1. Add a label to posts
2. Use a classifier to select political posts
3. Hide political posts after the session limit

## What Each File Does

- `manifest.json`: tells Chrome to run the extension on `x.com` and load its
  JavaScript and CSS files
- `content.js`: finds posts, assigns political posts a session number, and
  contains the three TODOs
- `classifier.js`: loads the trained model and provides
  `politicalScore(text)`
- `sentiment.js`: an optional alternative to the political classifier; it
  provides a negative-keyword dictionary and `hasNegativeSentiment(text)`
- `styles.css`: defines the appearance of the political-content label
- `political_model.json`: stores the classifier's intercept, 10,000 feature
  weights, threshold, and validation metadata
- `SOLUTION.md`: contains the completed TODOs for reference after attempting
  the assignment

Open these files and trace how they connect before installing the extension.
You will edit only `content.js`, unless you choose to customize the sentiment
keywords or label style.

If web extensions are new to you, Google's
[Hello World extension tutorial](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world)
introduces manifests, unpacked extensions, reloading, and console output.

---

## Quickstart

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this `DOMExtensionX` folder.
4. Open [https://x.com/home](https://x.com/home).

Open X's developer console:

- macOS: **Option + Command + J**
- Windows/Linux: **Control + Shift + J**

The following message confirms that the extension and classifier loaded:

```text
[IC2S2 Tutorial] Extension and classifier are running.
```

After editing the code, reload the extension at `chrome://extensions`, then
reload X. Reloading X starts a new scrolling session.

---

## Step 1: Add a Label

`addLabel(textElement, message)` receives the DOM element containing the post
text and the label text. Create an `<aside>` with class `feedlab-label`, set its
text to `message`, and insert it after `textElement`.

Reload the extension and X. Every visible post should have a purple label.

---

## Step 2: Select Political Posts

`isPolitical(text)` receives the post text. `politicalScore(text)` returns a
value from 0 to 1. Compare it with `POLITICAL_THRESHOLD` and return whether the
post reaches the threshold.

Reload the extension and X. Only posts classified as political should have a
label.

---

## Step 3: Apply the Session Limit

`changePost(article, textElement, text)` receives the post's `<article>`, its
text element, and its text. The provided `number` is that political post's
stable session number. When it exceeds `MAX_POLITICAL_POSTS`, log the number
and text, then hide `article` using its inline `display` style.

Reload the extension and X. The first three political posts should remain;
later ones should disappear and be reported in the console.

---

## Build Your Intervention

Use the same structure to prototype an intervention for your own research
question. Decide:

1. **Trigger:** Which posts should receive the intervention?
2. **Treatment:** What should change in the feed?
3. **Outcome:** What behavior or perception might the change affect?

For example, you could add community-note-style context to claims, introduce
friction before engaging with inflammatory posts, limit repeated exposure to a
topic or account, or make source information more visible.

As a concrete example, filter out posts with negative sentiment. Replace
`classifier.js` with `sentiment.js` in `manifest.json`.
`hasNegativeSentiment(text)` returns `true` when the text contains a word from
`NEGATIVE_KEYWORDS`:

```text
abuse, abusive, angry, annoyed, annoying, attack, attacked, awful, bad,
broken, bullshit, clown, corrupt, corruption, crap, crisis, damn, dangerous,
dead, death, disaster, disgusting, dumb, evil, fail, failed, failing, failure,
fake, fraud, fucking, furious, garbage, hate, hated, hateful, hates, horrible,
idiot, insane, kill, killed, killing, liar, liars, lied, lies, loser, mad,
moron, pathetic, ridiculous, sad, scam, scammed, scams, shame, shit, shitty,
stupid, suck, sucks, terrible, threat, toxic, trash, ugly, useless, violence,
violent, war, worse, worst, wtf
```

Use it instead of the political classifier, hide matching posts, and start the
extension directly because there is no model to load. Change the dictionary to
explore how the intervention changes.

Implement the smallest version that lets you see your intervention working in
the feed.
