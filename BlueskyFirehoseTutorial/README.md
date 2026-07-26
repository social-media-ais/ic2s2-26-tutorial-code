# Bluesky Firehose Reader & Feed Viewer

This project provides a lightweight pipeline to collect, store, and visualize posts from the [Bluesky](https://bsky.app) firehose in real time. It consists of:

- a **data collector** that connects to the firehose and writes new posts to a local SQLite database  
- a **viewer web app** that lets you explore the stored feed via a browser

---

## 🚀 Quickstart

Create one environment and install the dependencies:

```bash
python3 -m venv .venv
source .venv/bin/activate              # Windows: .venv\Scripts\activate
python -m pip install -r BlueskyFirehoseReader/requirements.txt -r FeedViewer/requirements.txt
```

In one terminal, run the data collector:

```bash
cd BlueskyFirehoseReader
python3 reader.py
```

Let it run for a few seconds to collect some data.

In a second terminal, activate the same environment and launch the web viewer:

```bash
source .venv/bin/activate              # Windows: .venv\Scripts\activate
cd FeedViewer
python3 main.py
```

Now visit: [http://127.0.0.1:8080](http://127.0.0.1:8080)

For the coding exercise, follow the three precise filtering steps in
[`BlueskyFirehoseReader/README.md`](BlueskyFirehoseReader/README.md).

---

## 🗃️ What Each File Does

### `BlueskyFirehoseReader/`

- `reader.py`: connects to the Bluesky firehose and streams events in real-time
- `database.py`: manages local SQLite DB and buffers inserts and deletes
- `workers.py`: defines how different event types (posts, likes, etc.) are handled
- `create_tables.sql`: schema for the `posts` table

### `FeedViewer/`

- `main.py`: Flask server to display posts collected in the local database
- `database.py`: paginates posts for the viewer interface
- `templates/main.html`: renders the frontend and fetches data via AJAX
- `static/style.css`: defines UI styling

### `Notebooks/`

- `FilterBlueskyPosts.ipynb`: optional Jupyter notebook to explore posts interactively

---

## 📘 Notes

- Posts are stored locally in `BlueskyFirehoseReader/posts.db` and displayed using Bluesky’s public API.
- Replies are ignored; only top-level posts are recorded.
- Posts self-labeled `porn`, `sexual`, `nudity`, or `graphic-media` are ignored. Jetstream post events do not include every label that moderation services may apply later, so unlabelled sensitive material can still appear in this live public stream.
- Data is fetched using `app.bsky.feed.getPosts`.

---

## 🧪 For Exploration

You can use the notebook in `Notebooks/` to try filtering and analyzing posts live without setting up the full interface.

---
