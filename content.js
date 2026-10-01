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
    "This portfolio is a comprehensive record of coursework and academic progression to prove how basic theorems follow from formal definitions. All together, it shows the final proved equations and the iterative process of working with complex definitions and learning to communicate mathematical ideas clearly.",

  units: [
    {
      id: "order-absolute-value",
      title: "1.3 Order and absolute value",
      tint: "lilac",
      cover: "assets/unit-1/whiteboards/2026-09-17-abs-nonnegative.jpg",
      summary: "Building order on R from the positive numbers, then using it to prove the basic facts about inequalities and absolute value.",
      topics: ["Order relations","Axiom 1.4 (Order)", "Definition 1.5", "Absolute value", "Equivalence"],
      pdfs: [
        {
          title: "Order axioms and the real number system",
          file: "assets/unit-1/order-axioms.pdf",
          date: "Sep 6",
          description:
            "Formal proofs exploring the concept of order within the real numbers by applying Axiom 1.4. Verifying fundamental arithmetic facts using axioms, proving the relationship between positive and negative numbers, establishing that 1 is positive, and confirming the existence of a negative number.",
          reflection:
            "Working through these proofs required me to step back from intuitive mathematical assumptions that feel natural from years of math courses focused on solving equations. Structuring these arguments and constructing proofs allowed me to practice communicating technical concepts with clarity and in a professional mathematical format (a good refresher for LaTeX and formal proofs)."
        },
        {
          title: "Order relations on the real numbers",
          file: "assets/unit-1/order-relations.pdf",
          date: "Sep 8",
          description:
            "This artifact contains formal proofs establishing the fundamental properties of order relations within the real number system based on Definition 1.5. Demonstrates how to verify that the \"less than or equal to\" relation is reflexive, antisymmetric, and transitive by defined properties of positive numbers and zero.",
          reflection:
            "These problems highlighted addressing different conditions, such as splitting arguments into distinct cases and utilizing contradiction to rule out invalid scenarios. Breaking a problem down into all possible cases closely mirrors the algorithmic branching and edge-case analysis utilized in computer science."
        },
        {
          title: "Equivalence and absolute value",
          file: "assets/unit-1/equivalence-absolute-value.pdf",
          date: "Sep 22",
          description:
            "Problems 16, 19, 20, and 21: comparing squares of nonnegative numbers, |ab| = |a||b|, and |x − a| < ε if and only if a − ε < x < a + ε.",
          reflection: ""
        }
      ],
      notes: [
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-03-antisymmetry.jpg", caption: "Definition 1.5: a ≤ a, and if a ≤ b and b ≤ a then a = b", date: "Sep 3" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-15-adding-inequalities.jpg", caption: "If a < b and c ≤ d, then a + c < b + d", date: "Sep 15" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-15-multiply-by-negative.jpg", caption: "If a < b and c < 0, then ac > bc", date: "Sep 15" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-15-squares-nonnegative.jpg", caption: "a² ≥ 0 for every real a, and a < a + 1", date: "Sep 15" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-17-abs-nonnegative.jpg", caption: "Problem 17(a): |a| ≥ 0 using Definition 1.7", date: "Sep 17" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-17-abs-negation.jpg", caption: "|−a| = |a| by cases", date: "Sep 17" },
        { type: "pdf", src: "assets/unit-1/scratch-problems-11-13.pdf", caption: "Scratch notes: Problems 11–13 and plan for 19–21" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-22-problem-19.jpg", caption: "Problem 19: |ab| = |a||b| and |a + b| ≤ |a| + |b| by four sign cases", date: "Sep 22" },
        { type: "photo", src: "assets/unit-1/whiteboards/2026-09-24-problem-21a.jpg", caption: "Problem 21(a): |x| < p if and only if −p < x < p, by cases on the sign of x", date: "Sep 24" }
      ]
    },
    {
      id: "supremum-infimum",
      title: "1.4 Supremum, infimum, and completeness",
      tint: "sage",
      cover: "assets/unit-2/whiteboards/2026-09-29-problem-23abc.jpg",
      summary: "Upper and lower bounds, the least upper bound, and the Completeness Axiom that separates R from Q.",
      topics: ["Definitions 1.8–1.10", "Supremum and infimum", "Completeness Axiom"],
      pdfs: [
        {
          title: "Supremum and infimum",
          file: "assets/unit-2/supremum-infimum.pdf",
          date: "Oct 1",
          description:
            "Problem 23: the min, max, infimum, and supremum of six subsets of R, including a set of rationals whose supremum is not rational.",
          reflection: ""
        }
      ],
      notes: [
        { type: "photo", src: "assets/unit-2/whiteboards/2026-09-29-problem-23abc.jpg", caption: "Problem 23(a)–(c): sketching each set on the number line", date: "Sep 29" },
        { type: "photo", src: "assets/unit-2/whiteboards/2026-09-29-problem-23d.jpg", caption: "Problem 23(d): comparing n/(n + m) to 1/2 by cases n = m, n < m, n > m", date: "Sep 29" }
      ]
    }
  ]
};