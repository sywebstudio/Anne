/* ==========================================================
   anne-monthversary — photo manifest + behavior
   Edit messages / captions in PHOTOS below. Each entry:
   id, file (relative path), cat (category key), msg, alt,
   w/h (image size), pos (card crop focus; modal always shows full photo)
   ========================================================== */
const PHOTOS = [
  {
    "id": "anne-001",
    "file": "anne-001.jpg",
    "cat": "sleeping",
    "msg": "u fell asleep on the call babyyy 🥹 so peaceful cuddling ur pillow... i wish i was that pillow 😭🫶🏻",
    "alt": "Anne asleep during a video call, cuddling a pillow",
    "w": 591,
    "h": 1280,
    "pos": "45% 35%"
  },
  {
    "id": "anne-002",
    "file": "anne-002.jpg",
    "cat": "mad",
    "msg": "talk to the hand babyyy 😭 u really covered ur face bc ur mad?? still the cutest elmo pajama girl ever, i can't even be mad back 🥺",
    "alt": "Anne in Elmo pajamas, covering half of her face with her hand",
    "w": 1200,
    "h": 1600,
    "pos": "50% 30%"
  },
  {
    "id": "anne-003",
    "file": "anne-003.jpg",
    "cat": "flirting",
    "msg": "ok but why are u looking at me like that babyyy 😏 finger on ur lip and everything... how am i supposed to behave when ur this far away 😭🫠",
    "alt": "Anne with a finger on her lip, giving a flirty look",
    "w": 720,
    "h": 960,
    "pos": "50% 30%"
  },
  {
    "id": "anne-004",
    "file": "anne-004.jpg",
    "cat": "dancing",
    "msg": "look at u dancing with that big smile babyyy 🥹 i could watch this on repeat, ur happiness is contagious even through a screen 💃🏻❤️",
    "alt": "Anne dancing and smiling in a living room",
    "w": 601,
    "h": 1147,
    "pos": "60% 12%"
  },
  {
    "id": "anne-005",
    "file": "anne-005.jpg",
    "cat": "smile",
    "msg": "this smile babyyy 🥹 eyes all scrunched up and teeth showing, so happy even in a blurry screenshot. i'd take this smile over any perfect photo 😭❤️",
    "alt": "Anne laughing with her eyes closed and a big smile",
    "w": 1170,
    "h": 1459,
    "pos": "50% 30%"
  },
  {
    "id": "anne-006",
    "file": "anne-006.jpg",
    "cat": "weirdo",
    "msg": "and THIS is my little weirdo 😭 tongue out, hair all over ur face, zero shame babyyy. i love u even more when ur being silly like this 🫠❤️",
    "alt": "Anne sticking her tongue out with hair across her face",
    "w": 1600,
    "h": 1200,
    "pos": "50% 30%"
  },
  {
    "id": "anne-007",
    "file": "anne-007.jpg",
    "cat": "shy",
    "msg": "that soft little smile babyyy 🥺 u get so shy when i stare but i can't help it, ur eyes are doing something to me 😭🫶🏻",
    "alt": "Anne smiling softly at the camera while lying down",
    "w": 1200,
    "h": 1600,
    "pos": "50% 30%"
  },
  {
    "id": "anne-008",
    "file": "anne-008.jpg",
    "cat": "heart",
    "msg": "glasses halfway down ur nose and that look babyyy 😍 how is it even fair. this is literally the girl who stole my heart and she doesn't even try 🫠❤️",
    "alt": "Anne wearing glasses and holding the frame with one hand",
    "w": 1600,
    "h": 1200,
    "pos": "50% 30%"
  },
  {
    "id": "anne-009",
    "file": "anne-009.jpg",
    "cat": "potato",
    "msg": "my sleepy little potato all snuggled up with her plushie babyyy 🥹 glasses crooked, cheeks all pink... i just wanna squish ur face 😭🫶🏻",
    "alt": "Anne in glasses, cuddled up with a plushie",
    "w": 739,
    "h": 1600,
    "pos": "50% 12%"
  },
  {
    "id": "anne-010",
    "file": "anne-010.jpg",
    "cat": "screen",
    "msg": "my favorite face on my screen babyyy 🥹 eyes closed, smiling like that... even through a call u make everything feel close. i'm so lucky it's u 🫶🏻❤️",
    "alt": "Anne smiling with her eyes closed on a video call",
    "w": 739,
    "h": 1600,
    "pos": "20% 22%"
  },
  {
    "id": "anne-011",
    "file": "anne-011.jpg",
    "cat": "cozy",
    "msg": "my cozy girl all wrapped up in her blue blanket babyyy 🧸 with that little pout, i wish i could squeeze u tight rn 🥺🫶🏻",
    "alt": "Anne pouting, wrapped in a blue blanket",
    "w": 740,
    "h": 1600,
    "pos": "50% 35%"
  },
  {
    "id": "anne-012",
    "file": "anne-012.jpg",
    "cat": "gestures",
    "msg": "u making a little heart with ur fingers babyyy 🥹 with the pouty lips and everything. it's the tiny cute things like this that i love the most 🫶🏻❤️",
    "alt": "Anne pouting with a little finger heart beside her face",
    "w": 1600,
    "h": 1200,
    "pos": "50% 30%"
  },
  {
    "id": "anne-013",
    "file": "anne-013.jpg",
    "cat": "fashion",
    "msg": "my pretty little fashion girl 😍 that pink dress and ur mirror pose babyyy, ur really out here looking like this like it's nothing 🫠❤️",
    "alt": "Anne taking a mirror selfie in a pink dress",
    "w": 640,
    "h": 853,
    "pos": "50% 30%"
  },
  {
    "id": "anne-014",
    "file": "anne-014.jpg",
    "cat": "laugh",
    "msg": "that laugh of urs babyyy 😭 even in the dark ur face lights up everything. i'm smiling like an idiot just looking at this 🥹❤️",
    "alt": "Anne smiling softly in a dark room",
    "w": 1600,
    "h": 1200,
    "pos": "50% 30%"
  },
  {
    "id": "anne-015",
    "file": "anne-015.jpg",
    "cat": "kitty",
    "msg": "my baby and her little kitty 🥹 u with ur pouty lips and the kitty giving me the most unimpressed look ever 😭 u two are too cute babyyy 🐈🫶🏻",
    "alt": "Anne pouting while holding her calico kitty",
    "w": 1200,
    "h": 1600,
    "pos": "35% 40%"
  },
  {
    "id": "anne-016",
    "file": "anne-016.jpg",
    "cat": "sea",
    "msg": "my sunshine by the sea 🥹 white dress, that little smile and the waves behind u babyyy... even with a cloudy sky u're the brightest thing here 🌊❤️",
    "alt": "Anne in a white dress by the sea, smiling at the waves",
    "w": 720,
    "h": 960,
    "pos": "50% 30%"
  },
  {
    "id": "anne-017",
    "file": "anne-017.jpg",
    "cat": "makeup",
    "msg": "getting pretty... as if u needed to 😭 u're so focused doing ur eyeliner babyyy and i'm just here staring. u're already my favorite, makeup or not 💗🫶🏻",
    "alt": "Anne doing her eyeliner",
    "w": 739,
    "h": 1600,
    "pos": "50% 38%"
  },
  {
    "id": "anne-018",
    "file": "anne-018.jpg",
    "cat": "moments",
    "msg": "us at 4 months babyyy 🥹 u leaning on me with that serious little face 😭 and me just smiling like i won the lottery. i keep coming back to this one 🎞️❤️",
    "alt": "Anne and Mohammed at dinner with a 4 months sign",
    "w": 864,
    "h": 1536,
    "pos": "50% 30%"
  },
  {
    "id": "anne-019",
    "file": "anne-019.jpg",
    "cat": "open-when",
    "msg": "miss me babyyy? 🥺 look at us, i kissed ur cheek and u still did the pouty face 😭 the distance is annoying but i'm right here, thinking about u every day 🫶🏻❤️",
    "alt": "Mohammed kissing Anne's cheek while she pouts",
    "w": 1086,
    "h": 1448,
    "pos": "50% 30%"
  }
];

const CATS = [
  { key: "sleeping",  label: "My baby sleeping 💤",                    short: "💤 sleeping" },
  { key: "mad",       label: "My baby being mad 😭",                   short: "😭 mad" },
  { key: "flirting",  label: "My baby flirting 😏",                    short: "😏 flirting" },
  { key: "dancing",   label: "My dancing baby 💃🏻",                    short: "💃🏻 dancing" },
  { key: "smile",     label: "Her beautiful smile 🥹",                 short: "🥹 smile" },
  { key: "weirdo",    label: "My little weirdo 🤨",                    short: "🤨 weirdo" },
  { key: "shy",       label: "My shy baby 🥺",                         short: "🥺 shy" },
  { key: "heart",     label: "The girl who stole my heart ❤️",         short: "❤️ my heart" },
  { key: "potato",    label: "My sleepy little potato 🥔",             short: "🥔 potato" },
  { key: "screen",    label: "My favorite face on my screen 📱",       short: "📱 my screen" },
  { key: "cozy",      label: "Cozy Anne 🧸",                           short: "🧸 cozy" },
  { key: "gestures",  label: "The little ways u love me 🫶🏻",          short: "🫶🏻 little ways" },
  { key: "fashion",   label: "My pretty little fashion girl 👗",       short: "👗 fashion" },
  { key: "laugh",     label: "That laugh of urs 😭❤️",                 short: "😭 laugh" },
  { key: "kitty",     label: "My baby and her little kitty 🐈",        short: "🐈 kitty" },
  { key: "sea",       label: "My sunshine by the sea 🌊",              short: "🌊 sea" },
  { key: "makeup",    label: "Getting pretty… as if u needed to 😭💗", short: "💄 getting pretty" },
  { key: "moments",   label: "Little moments i keep coming back to 🎞️", short: "🎞️ moments" }
];

/* "open when" love notes. A letter with `photo` uses that photo + its message. */
const LETTERS = [
  { label: "open when u miss me", photo: "anne-019" },
  { label: "open when u need a reminder that ur loved",
    text: "u are loved babyyy 🥹 so so soooo much. on the loud days, the quiet days, the tired days and the days u don't believe it. i'm proud of u and so lucky it's u 🫶🏻❤️" },
  { label: "open when u need a little smile",
    text: "hi babyyy 🥺 this is ur reminder to smile for me 😚 there it is, my favorite thing. now drink some water and go be cute 😭❤️" }
];

(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const indexOfId = (id) => PHOTOS.findIndex((p) => p.id === id);

  /* ---------- polaroid card ---------- */
  function makeCard(p, i, opts) {
    opts = opts || {};
    const b = el("button", "polaroid" + (opts.mini ? " mini" : ""));
    b.type = "button";
    b.dataset.id = p.id;
    const tilt = opts.tilt != null ? opts.tilt : (((i * 37) % 9) - 4) * 0.55;
    b.style.setProperty("--tilt", tilt + "deg");
    b.style.setProperty("--ar", Math.min(1.3, Math.max(0.75, p.w / p.h)).toFixed(3));
    b.style.setProperty("--pos", p.pos || "50% 30%");
    const img = new Image();
    img.src = p.file;
    img.alt = p.alt;
    img.width = p.w;
    img.height = p.h;
    img.loading = opts.eager ? "eager" : "lazy";
    img.decoding = "async";
    b.appendChild(img);
    if (!opts.mini && !opts.noCap) b.appendChild(el("span", "cap", "open me ♡"));
    b.addEventListener("click", () => openModal(indexOfId(p.id), b));
    // tap feedback on touch screens (same glow as desktop hover)
    b.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse") return;
      b.classList.add("tap");
      setTimeout(() => b.classList.remove("tap"), 450);
    });
    return b;
  }

  /* ---------- gallery ---------- */
  function buildGallery() {
    const main = $("#gallery");
    const chips = $("#chips");
    CATS.forEach((c) => {
      const items = PHOTOS.filter((p) => p.cat === c.key);
      if (!items.length) return; // hide empty categories gracefully
      const sec = el("section", "page");
      sec.id = "cat-" + c.key;
      sec.setAttribute("aria-labelledby", "h-" + c.key);
      const h = el("h2", "page-title", c.label);
      h.id = "h-" + c.key;
      const cards = el("div", "page-cards");
      items.forEach((p) => cards.appendChild(makeCard(p, indexOfId(p.id))));
      sec.append(h, cards);
      main.appendChild(sec);

      const li = el("li");
      const a = el("a", null, c.short);
      a.href = "#cat-" + c.key;
      li.appendChild(a);
      chips.appendChild(li);
    });
    const hasNotes = LETTERS.length > 0;
    if (hasNotes) {
      const li = el("li");
      const a = el("a", null, "💌 love notes");
      a.href = "#notes";
      li.appendChild(a);
      chips.appendChild(li);
    }
  }

  function buildFan() {
    const fan = $("#fan");
    [["anne-008", -9], ["anne-016", 1], ["anne-012", 8]].forEach(([id, tilt]) => {
      const i = indexOfId(id);
      if (i < 0) return;
      fan.appendChild(makeCard(PHOTOS[i], i, { mini: true, tilt, eager: true }));
    });
  }

  /* ---------- envelopes ---------- */
  function buildEnvelopes() {
    const wrap = $("#envelopes");
    LETTERS.forEach((L, n) => {
      const art = el("article", "env");
      const btn = el("button", "env-btn");
      btn.type = "button";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", "letter-" + n);
      btn.appendChild(el("span", "env-label", L.label));

      const letter = el("div", "letter");
      letter.id = "letter-" + n;
      letter.setAttribute("inert", "");
      const inner = el("div", "letter-inner");
      let text = L.text;
      if (L.photo) {
        const i = indexOfId(L.photo);
        if (i >= 0) {
          inner.appendChild(makeCard(PHOTOS[i], i + 3, { mini: true, tilt: -2 }));
          text = PHOTOS[i].msg;
        }
      }
      inner.appendChild(el("p", "letter-text", text));
      letter.appendChild(inner);

      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", String(open));
        letter.toggleAttribute("data-open", open);
        letter.toggleAttribute("inert", !open);
      });
      art.append(btn, letter);
      wrap.appendChild(art);
    });
  }

  /* ---------- modal ---------- */
  const modal = $("#modal");
  const mImg = $("#mImg");
  const mCat = $("#mCat");
  const mMsg = $("#mMsg");
  const mCount = $("#mCount");
  const mClose = $("#mClose");
  const mPrev = $("#mPrev");
  const mNext = $("#mNext");
  let idx = -1, lastFocus = null, closeTimer = null, lastRandom = -1;

  const catLabel = (p) => {
    const c = CATS.find((c) => c.key === p.cat);
    return c ? c.label : "Open when u miss me 💌";
  };

  function show(i) {
    idx = (i + PHOTOS.length) % PHOTOS.length;
    const p = PHOTOS[idx];
    mImg.classList.remove("ready");
    mImg.onload = () => mImg.classList.add("ready");
    mImg.src = p.file;
    mImg.alt = p.alt;
    if (mImg.complete) mImg.classList.add("ready");
    mCat.textContent = catLabel(p);
    mMsg.textContent = p.msg;
    mCount.textContent = idx + 1 + " / " + PHOTOS.length;
    [idx - 1, idx + 1].forEach((j) => {
      const n = PHOTOS[(j + PHOTOS.length) % PHOTOS.length];
      new Image().src = n.file; // preload neighbors
    });
  }

  function openModal(i, from) {
    if (i < 0) return;
    clearTimeout(closeTimer);
    lastFocus = from || document.activeElement;
    show(i);
    modal.hidden = false;
    document.documentElement.classList.add("lock");
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("open")));
    mClose.focus({ preventScroll: true });
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.classList.remove("open");
    document.documentElement.classList.remove("lock");
    const done = () => { modal.hidden = true; };
    if (reduce) done(); else closeTimer = setTimeout(done, 300);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  const step = (d) => show(idx + d);

  mClose.addEventListener("click", closeModal);
  $(".modal-backdrop").addEventListener("click", closeModal);
  mPrev.addEventListener("click", () => step(-1));
  mNext.addEventListener("click", () => step(1));

  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); closeModal(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    else if (e.key === "Tab") {
      const f = [mClose, mPrev, mNext];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!f.includes(document.activeElement)) { e.preventDefault(); first.focus(); }
    }
  });

  // swipe left/right on the photo (touch)
  let sx = null;
  const wrapImg = $("#mImgWrap");
  wrapImg.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  wrapImg.addEventListener("touchend", (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    sx = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  /* ---------- random memory ---------- */
  $("#randomBtn").addEventListener("click", (e) => {
    let r;
    do { r = Math.floor(Math.random() * PHOTOS.length); } while (PHOTOS.length > 1 && r === lastRandom);
    lastRandom = r;
    openModal(r, e.currentTarget);
  });

  /* ---------- floating hearts & sparkles ---------- */
  function buildFloaters() {
    if (reduce) return;
    const box = $("#floaters");
    const rnd = (a, b) => a + Math.random() * (b - a);
    for (let i = 0; i < 14; i++) {
      const h = el("span", "fl-heart", i % 3 === 0 ? "♡" : "♥");
      h.style.cssText = "--x:" + rnd(2, 96).toFixed(1) + "%;--s:" + rnd(10, 22).toFixed(0) + "px;--d:" + rnd(16, 30).toFixed(1) + "s;--delay:-" + rnd(0, 28).toFixed(1) + "s";
      box.appendChild(h);
    }
    const colors = ["#e7b2c1", "#cdbbe6", "#f3cfa8"];
    for (let i = 0; i < 12; i++) {
      const s = el("span", "fl-spark", "✦");
      s.style.cssText = "--x:" + rnd(3, 96).toFixed(1) + "%;--y:" + rnd(4, 92).toFixed(1) + "%;--s:" + rnd(8, 15).toFixed(0) + "px;--d:" + rnd(4, 8).toFixed(1) + "s;--delay:-" + rnd(0, 8).toFixed(1) + "s;--c:" + colors[i % 3];
      box.appendChild(s);
    }
  }

  // makes :active hover-like feedback work on iOS Safari
  document.addEventListener("touchstart", function () {}, { passive: true });

  buildFan();
  buildGallery();
  buildEnvelopes();
  buildFloaters();
})();
