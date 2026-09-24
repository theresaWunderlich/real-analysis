// Everything on the site comes from this file. Edit it, commit, and the site updates.
//
// Tints: "lilac", "sage", "blush", "butter", "sky", "clay"
// PDF entries: { title, file, date, description, reflection }  (description/reflection optional)
// Note types:
//   { type: "photo", src: "assets/unit-1/board.jpg", caption: "...", date: "Sep 12" }
//   { type: "text",  title: "...", body: "Math works: $\\varepsilon > 0$", date: "..." }
//   { type: "pdf",   src: "assets/unit-1/scratch.pdf", caption: "...", date: "..." }
// In "body", use \\ for every backslash (JavaScript string rule).

window.SITE = {
  title: "MTH 490 Real Analysis",
  subtitle: "Directed study portfolio",
  student: "Theresa Wunderlich",
  professor: "", // e.g. "Dr. Lastname" — leave empty to hide
  term: "Fall 2026",
  about:
    "A record of proving basic theorems from formal definitions: the finished proofs, the scratch work behind them, and reflections on learning to communicate mathematical ideas clearly.",

  units: [
    {
      id: "order-absolute-value",
      title: "1.3 Order and absolute value",
      tint: "lilac",
      cover: "assets/unit-1/whiteboards/2026-09-17-abs-nonnegative.jpg",
      summary: "Building order on R from the positive numbers, then using it to prove the basic facts about inequalities and absolute value.",
      topics: ["Axiom 1.4 (Order)", "Definition 1.5", "Absolute value", "Triangle inequality"],
      pdfs: [
        {
          title: "Order axioms and the real number system",
          file: "assets/unit-1/order-axioms.pdf",
          date: "Sep 6",
          description:
            "Proofs from Axiom 1.4: if a is positive then −a is negative and conversely, 1 is positive, and a negative number exists.",
          reflection:
            "Working through these proofs required me to step back from intuitive assumptions that feel natural after years of courses focused on solving equations. Structuring the arguments gave me practice communicating technical ideas clearly in a formal mathematical style, and was a good refresher on LaTeX and formal proofs."
        },
        {
          title: "Order relations on the real numbers",
          file: "assets/unit-1/order-relations.pdf",
          date: "Sep 8",
          description:
            "Using Definition 1.5 to show that ≤ is reflexive, antisymmetric, and transitive, working only from the properties of the positive numbers and zero.",
          reflection:
            "These problems meant handling every condition: splitting arguments into distinct cases and using contradiction to rule out the ones that can't happen. Breaking a problem into all possible cases closely mirrors the branching and edge-case analysis I use in computer science."
        },
        {
          title: "Equivalence and absolute value",
          file: "assets/unit-1/equivalence-absolute-value.pdf",
          date: "Sep 22",
          description:
            "Problems 16, 19(b), 20(a), and 21: a² ≤ b² if and only if a ≤ b for nonnegative a and b, the triangle inequality, the reverse triangle inequality, and the ε-neighborhood form of |x − a| < ε.",
          reflection: ""
        }
      ],
      notes: [
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-03-antisymmetry.jpg", caption: "If a ≤ b and b ≤ a, then a = b, split into cases", date: "Sep 3" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-15-adding-inequalities.jpg", caption: "If a ≤ b and c ≤ d, then a + c ≤ b + d", date: "Sep 15" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-15-multiply-by-negative.jpg", caption: "If a < b and c < 0, then ac > bc", date: "Sep 15" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-15-squares-nonnegative.jpg", caption: "a² ≥ 0 for every real a, and a < a + 1", date: "Sep 15" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-17-abs-nonnegative.jpg", caption: "Problem 17(a): |a| ≥ 0 using Definition 1.7", date: "Sep 17" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-17-abs-negation.jpg", caption: "Problem 17(d): |−a| = |a| by cases", date: "Sep 17" }
      ]
    }
  ]
};
