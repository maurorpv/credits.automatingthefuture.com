let PROGRAMS = [];
const CHECKED = "2026-09-04";
const labels = {
  "free-tier": "Free tier",
  "signup-credit": "Signup credit",
  "paid-with-caveats": "Paid, with caveats",
  "skip": "Skip for now"
};
const cards = document.getElementById("cards");
function tagClass(kind) {
  if (kind === "signup-credit") return "credit";
  if (kind === "paid-with-caveats") return "caveat";
  if (kind === "skip") return "skip";
  return "";
}
function render(filter) {
  cards.innerHTML = "";
  PROGRAMS.forEach((p) => {
    const nocard = filter === "nocard" && !p.card && p.kind !== "skip";
    const match = filter === "all" || p.kind === filter || nocard;
    if (!match) return;
    const el = document.createElement("article");
    el.className = "card" + (p.kind === "skip" ? " skip" : "");
    const name = p.name.replace(/</g, "");
    el.innerHTML =
      '<div class="row"><h3>' + name + '</h3><div class="tags">' +
      '<span class="tag ' + tagClass(p.kind) + '">' + labels[p.kind] + '</span>' +
      '<span class="tag ' + (p.card ? "cardyes" : "") + '">' + (p.card ? "Card usually needed" : "No card to start") + '</span>' +
      '</div></div>' +
      '<p class="meta">' + p.what + '</p>' +
      '<p class="meta"><strong>Typical:</strong> ' + p.typical + '</p>' +
      '<p class="meta"><strong>Catch:</strong> ' + p.catch + '</p>' +
      '<p class="meta"><strong>Best for:</strong> ' + p.best_for + '</p>' +
      '<div class="actions">' +
      (p.official ? '<a class="btn" href="' + p.official + '" rel="noopener noreferrer">Official page</a>' : '') +
      (p.docs ? '<a class="btn ghost" href="' + p.docs + '" rel="noopener noreferrer">Docs</a>' : '') +
      '<span class="meta">Checked ' + CHECKED + '</span></div>';
    cards.appendChild(el);
  });
}
document.querySelectorAll(".filters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((b) => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");
    render(btn.dataset.filter);
  });
});
fetch("data/programs.json")
  .then((r) => r.json())
  .then((data) => {
    PROGRAMS = data.programs || [];
    render("all");
  })
  .catch(() => {
    cards.innerHTML = "<p class='meta'>Could not load data/programs.json.</p>";
  });
