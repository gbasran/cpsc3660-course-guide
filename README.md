# CPSC 3660 Database Systems; Final Exam Course Guide

Interactive study guide for the **3-hour paper-based cumulative final** in CPSC 3660 (Database Systems) at the University of Lethbridge.

**Live site:** https://gbasran.github.io/cpsc3660-course-guide/

Built by reverse-engineering every question across Assignments 1-4 and the midterm, then generating content + a predicted practice final that mirrors the professor's exact construction signature.

## What's Inside

### 19 Interactive HTML Pages
| # | Page | What It Covers |
|---|---|---|
| 01 | Database Concepts | Schema vs instance, DBMS components, key types, integrity |
| 02 | E-R Model & Diagrams | Entities, relationships, cardinality, weak entities, ISA, ER to relational mapping |
| 03 | Relational Model | Tuples, keys, foreign keys, referential integrity, NULL handling |
| 04 | Relational Algebra | Every operator, division deep-dive (the hard recurring pattern) |
| 05 | SQL: DDL + Basics | CREATE TABLE, SELECT/WHERE/JOIN, don't-over-join discipline |
| 06 | SQL: Advanced | GROUP BY + HAVING (95% guaranteed), views, correlated subqueries, NOT EXISTS |
| 07 | RA to SQL Translation | Side-by-side patterns; division → NOT EXISTS + EXCEPT |
| 08 | Functional Dependencies | Armstrong's axioms, pseudo-transitivity proof, closure algorithm |
| 09 | Normalization & BCNF | Full A4 Q6 walkthrough, lossless + dependency-preserving tests, Week 14 examples |
| 10 | OO-DB & NoSQL Primer | Safety-net coverage; ≤5% exam probability |
| 11 | Formula & Syntax Sheet | One-page cheat sheet with cross-references |
| 12 | The Professor's Signature | Forensic pattern analysis; schema recycling matrix; final exam blueprint |
| 13 | Concept Walkthroughs | 15 concept questions with 2-mark model answers |
| 14 | SQL Walkthroughs | 10 SQL problems on recycled schemas (Library, Bank, Employee-Works) |
| 15 | RA Walkthroughs | 8 RA problems side-by-side with equivalent SQL |
| 16 | ER Design Walkthroughs | Car insurance, bookstore with ISA, hospital (3 full exercises) |
| 17 | Normalization Walkthroughs | A4 Q6 gold standard, Week 14 lossless + lossy examples |
| 18 | Paper Exam Techniques | Hand-drawing RA/SQL/ER/FD, time budget, 10-commandment cheat card |
| 19 | Predicted Practice Final | 120 marks, 16 questions, 180 min; novel schemas mirroring prof's patterns |

### 3 Downloadable PDFs (in `pdfs/`)
- **[Complete Study Guide](pdfs/3660-final-study-guide.pdf)** (41 pages); ground-up build covering every topic with worked examples
- **[Practice Final Exam](pdfs/3660-practice-final.pdf)** (15 pages); 120m / 16Qs / 180min; print and simulate
- **[Practice Final Solutions](pdfs/3660-practice-final-solutions.pdf)** (20 pages); every question solved with "Your Answer" + "Understanding" + "Mirrors" references

## The Forensic Pattern Analysis

The practice final is not generic; it's calibrated to the professor's signature:

- **Opening 5-6 concept questions** (2 marks each, always): DML/DDL, key types, RA set-op transformations, BCNF/FD definitions, weak entities
- **SQL graduation pattern**: simple SELECT → GROUP BY + HAVING (95% guaranteed) → correlated subquery → NOT EXISTS
- **One dedicated RA multi-part question** (9-12m): includes division ("borrowed ALL books from publisher X") 85% of the time
- **Schema recycling**: Library (85% probability), Employee-Works-Company (80%), Bank (70%)
- **Post-midterm territory** (~40-45% of final): ER diagrams with generalization, FD closure, BCNF decomposition with lossless + dependency-preserving checks

See [Page 12: The Professor's Signature](cg-12-professors-signature.html) for the full forensic breakdown.

## Design

- Dark warm academic palette (burnt sienna, sage, gold, lilac)
- Source Serif 4 headings, Inter body, JetBrains Mono code
- KaTeX for all math rendering
- Every page opens with a physical-world analogy, then formal content, then worked examples
- Mobile-responsive with collapsible sidebar navigation

## Course

- **Institution:** University of Lethbridge
- **Term:** Winter 2026
- **Textbook:** Silberschatz, Korth, Sudarshan; *Database System Concepts*, 7th Edition
- **Final Scope** (confirmed by Week 14 slide): DB concepts, Relational Algebra, SQL, E-R Model, Normalization
- **Difficulty Target:** 50-60% basic, 25-30% medium, 10-15% hard

## License

Personal study material. Feel free to fork if you're also taking this course.
