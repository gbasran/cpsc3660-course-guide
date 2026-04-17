/* ============================================================
   Sidebar Navigation — injected into every page
   CPSC 3660 Database Systems: Final Exam Course Guide
   ============================================================ */
(function () {
  var pages = [
    { num: "01", file: "cg-01-db-concepts.html", title: "Database Concepts" },
    { num: "02", file: "cg-02-er-model.html", title: "E-R Model & Diagrams" },
    { num: "03", file: "cg-03-relational-model.html", title: "Relational Model" },
    { num: "04", file: "cg-04-relational-algebra.html", title: "Relational Algebra" },
    { num: "05", file: "cg-05-sql-ddl-basics.html", title: "SQL: DDL + Basics" },
    { num: "06", file: "cg-06-sql-advanced.html", title: "SQL: Advanced" },
    { num: "07", file: "cg-07-ra-to-sql.html", title: "RA to SQL Translation" },
    { num: "08", file: "cg-08-fd-theory.html", title: "Functional Dependencies" },
    { num: "09", file: "cg-09-normalization.html", title: "Normalization & BCNF" },
    { num: "10", file: "cg-10-oodb-nosql.html", title: "OO-DB & NoSQL Primer" },
    { num: "11", file: "cg-11-formula-sheet.html", title: "Formula & Syntax Sheet", synth: true },
    { num: "12", file: "cg-12-professors-signature.html", title: "Professor's Signature", synth: true },
    { num: "13", file: "cg-13-concept-questions.html", title: "Concept Walkthroughs", synth: true },
    { num: "14", file: "cg-14-sql-walkthrough.html", title: "SQL Walkthroughs", synth: true },
    { num: "15", file: "cg-15-ra-walkthrough.html", title: "RA Walkthroughs", synth: true },
    { num: "16", file: "cg-16-er-walkthrough.html", title: "ER Design Walkthroughs", synth: true },
    { num: "17", file: "cg-17-normalization-walkthrough.html", title: "Normalization Walkthroughs", synth: true },
    { num: "18", file: "cg-18-paper-exam-techniques.html", title: "Paper Exam Techniques", synth: true },
    { num: "19", file: "cg-19-practice-final.html", title: "Practice Final Exam", synth: true }
  ];

  var currentFile = window.location.pathname.split("/").pop();

  /* Build sidebar HTML */
  var html = '<div class="sidebar" id="sidebar">';
  html += '<div class="sidebar-header"><a href="index.html">CPSC 3660</a></div>';
  html += '<div class="sidebar-section">Foundations</div>';

  for (var i = 0; i < pages.length; i++) {
    var p = pages[i];

    /* Section dividers */
    if (p.num === "04") html += '<div class="sidebar-section">Query Languages</div>';
    if (p.num === "08") html += '<div class="sidebar-section">Design Theory</div>';
    if (p.num === "10") html += '<div class="sidebar-section">Safety Net</div>';
    if (p.num === "11") html += '<div class="sidebar-section">Exam Prep</div>';

    var active = (currentFile === p.file) ? " active" : "";
    var accent = p.core ? " core" : (p.synth ? " synth" : "");

    html += '<a class="sidebar-link' + active + accent + '" href="' + p.file + '">';
    html += '<span class="sidebar-num">' + p.num + '</span>';
    html += '<span class="sidebar-title">' + p.title + '</span>';
    html += '</a>';
  }

  html += '</div>';

  /* Toggle button for mobile */
  html += '<button class="sidebar-toggle" id="sidebar-toggle" aria-label="Toggle navigation">&#9776;</button>';

  document.body.insertAdjacentHTML("afterbegin", html);

  /* Toggle behavior */
  var toggle = document.getElementById("sidebar-toggle");
  var sidebar = document.getElementById("sidebar");
  toggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  /* Close sidebar when clicking a link on mobile */
  var links = sidebar.querySelectorAll(".sidebar-link");
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener("click", function () {
      if (window.innerWidth <= 1100) {
        sidebar.classList.remove("open");
      }
    });
  }

  /* Scroll active link into view */
  var activeLink = sidebar.querySelector(".sidebar-link.active");
  if (activeLink) {
    activeLink.scrollIntoView({ block: "center", behavior: "instant" });
  }
})();
