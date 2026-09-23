// Everything on the site comes from this file. Edit it, commit, and the site updates.
//
// Tints: "lilac", "sage", "blush", "butter", "sky", "clay"
// Note types:
//   { type: "photo", src: "assets/unit-1/board.jpg", caption: "...", date: "Sep 12" }
//   { type: "text",  title: "...", body: "Math works: $\\varepsilon > 0$ or $$\\sum a_n$$", date: "..." }
//   { type: "pdf",   src: "assets/unit-1/scratch.pdf", caption: "...", date: "..." }
// In "body", use \\ for every backslash (JavaScript string rule).

window.SITE = {
  title: "Real Analysis",
  subtitle: "A directed study",
  student: "Theresa Wunderlich",
  professor: "Prof. Name",
  term: "Fall 2026",
  about:
    "Proofs, problem sets, and the scratch work behind them, organized by unit. Every PDF opens right on the page.",

  units: [
    {
      id: "real-numbers",
      title: "The real numbers",
      tint: "lilac",
      summary: "Completeness, the Archimedean property, and why the rationals have holes.",
      topics: ["Axiom of completeness", "Supremum and infimum", "Density of Q", "Cardinality"],
      cover: "assets/unit-1/whiteboard-1.jpg",
      pdfs: [
        { title: "Problem set 1", file: "assets/unit-1/problem-set-1.pdf", note: "Sections 1.3 and 1.4" }
      ],
      notes: [
        { type: "photo", src: "assets/unit-1/whiteboard-1.jpg", caption: "Proving sup exists for a bounded set", date: "Sep 3" },
        {
          type: "text",
          title: "Archimedean property",
          body: "For every $x \\in \\mathbb{R}$ there is $n \\in \\mathbb{N}$ with $n > x$. Proof idea: if $\\mathbb{N}$ were bounded above, $\\alpha = \\sup \\mathbb{N}$ exists, but then $\\alpha - 1$ is not an upper bound, so some $n > \\alpha - 1$ and $n + 1 > \\alpha$.",
          date: "Sep 5"
        },
        { type: "photo", src: "assets/unit-1/whiteboard-2.jpg", caption: "Nested interval property sketch", date: "Sep 8" },
        {
          type: "text",
          title: "Lemma to remember",
          body: "$s = \\sup A$ if and only if for every $\\varepsilon > 0$ there is $a \\in A$ with $s - \\varepsilon < a$.",
          date: "Sep 9"
        }
      ]
    },
    {
      id: "sequences-series",
      title: "Sequences and series",
      tint: "sage",
      summary: "Convergence, monotone sequences, Bolzano–Weierstrass, and Cauchy sequences.",
      topics: ["Limit of a sequence", "Monotone convergence", "Bolzano–Weierstrass", "Cauchy criterion"],
      pdfs: [],
      notes: []
    },
    {
      id: "topology",
      title: "Basic topology of R",
      tint: "blush",
      summary: "Open and closed sets, compactness, and the Cantor set.",
      topics: ["Open and closed sets", "Compact sets", "Heine–Borel", "Connectedness"],
      pdfs: [],
      notes: []
    },
    {
      id: "continuity",
      title: "Functional limits and continuity",
      tint: "butter",
      summary: "The ε–δ definition, continuity on compact sets, and the intermediate value theorem.",
      topics: ["Functional limits", "Continuity", "Uniform continuity", "IVT"],
      pdfs: [],
      notes: []
    },
    {
      id: "derivative",
      title: "The derivative",
      tint: "sky",
      summary: "Differentiability, the mean value theorem, and Darboux's theorem.",
      topics: ["Differentiability", "Mean value theorem", "Darboux's theorem"],
      pdfs: [],
      notes: []
    },
    {
      id: "function-sequences",
      title: "Sequences and series of functions",
      tint: "clay",
      summary: "Pointwise versus uniform convergence and power series.",
      topics: ["Uniform convergence", "Weierstrass M-test", "Power series"],
      pdfs: [],
      notes: []
    },
    {
      id: "riemann-integral",
      title: "The Riemann integral",
      tint: "lilac",
      summary: "Upper and lower sums, integrability, and the fundamental theorem of calculus.",
      topics: ["Partitions", "Integrability criterion", "Fundamental theorem"],
      pdfs: [],
      notes: []
    }
  ]
};
