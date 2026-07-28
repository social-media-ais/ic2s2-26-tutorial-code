# IC2S2 2026 Tutorial: Field Experiments on Social Media

This repository contains two independent coding exercises for designing
interventions on social-media feeds. Choose one track. Each takes about one
hour and leaves you with a working intervention that you can adapt to your own
research question.

| Exercise | Platform mechanism | Language | What you build |
| --- | --- | --- | --- |
| [Bluesky Firehose](BlueskyFirehoseTutorial/README.md) | Collect and filter a live public stream | Python | A feed containing posts selected by your own rules |
| [X DOM Extension](DOMExtensionX/README.md) | Modify the feed displayed in your browser | JavaScript | A browser extension that labels and hides selected posts |

## Exercise 1: Filter the Bluesky Firehose

The [Bluesky exercise](BlueskyFirehoseTutorial/README.md) connects to
Bluesky's Jetstream, stores public posts in SQLite, and displays the collected
feed in a local web app.

You will build a selection pipeline in three steps:

1. retain English-language posts;
2. identify political posts with keywords;
3. retain posts with positive sentiment using VADER.

The result is a live feed shaped by code you can inspect and replace. Change
the keywords, sentiment rule, language, or ordering to draft a different
intervention.

[Start the Bluesky exercise →](BlueskyFirehoseTutorial/README.md)

## Exercise 2: Modify the X Feed

The [X exercise](DOMExtensionX/README.md) uses a browser extension to intercept
posts already rendered on `x.com` and change their DOM elements locally.

The supplied intervention limits political content to three posts per
scrolling session. You will:

1. add a visible label to posts;
2. use the supplied political classifier to select posts;
3. hide political posts after the session limit.

You can then replace the trigger and treatment to create your own experiment:
for example, add community-note-style context, filter negative posts, introduce
friction, or limit repeated exposure to a topic.

[Start the X exercise →](DOMExtensionX/README.md)

## Scope

The code focuses on two intervention mechanisms: changing which public posts
enter a collected feed and changing how posts appear in a participant's
browser. Experimental assignment, recruitment, consent, outcome measurement,
and production deployment are outside these exercises.

Work independently and follow the README inside your chosen folder. Instructors
will be available for questions.
