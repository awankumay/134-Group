// ========================================
// PAGE ANIMATIONS & LOADER
// ========================================

"use strict";

class PageLoader {
  constructor() {
    this.initAnimations();
  }

  initAnimations() {
    // Fade in logo on load
    window.addEventListener("load", () => {
      const logo = document.querySelector(".logo");
      if (logo) {
        logo.style.opacity = "0";
        logo.style.transform = "translateY(-20px)";

        setTimeout(() => {
          logo.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          logo.style.opacity = "1";
          logo.style.transform = "translateY(0)";
        }, 300);
      }
    });
  }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ========================================
// INITIALIZE ON DOM LOADED
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // DEBUG: Log viewport and element dimensions
  console.log("=== DEBUG: Viewport & Layout Dimensions ===");
  console.log("Viewport Height:", window.innerHeight, "px");
  console.log("Viewport Width:", window.innerWidth, "px");

  const header = document.querySelector(".header");
  const clientsSection = document.querySelector(".clients-section");
  const footer = document.querySelector(".footer");

  if (header) {
    const headerHeight = header.offsetHeight;
    console.log("Header Height:", headerHeight, "px");
    console.log("Header Padding:", window.getComputedStyle(header).padding);
  }

  if (clientsSection) {
    const clientsHeight = clientsSection.offsetHeight;
    console.log("Clients Section Height:", clientsHeight, "px");
    console.log(
      "Clients Section Padding:",
      window.getComputedStyle(clientsSection).padding,
    );
  }

  if (footer) {
    const footerHeight = footer.offsetHeight;
    console.log("Footer Height:", footerHeight, "px");
    console.log("Footer Padding:", window.getComputedStyle(footer).padding);
  }

  // Calculate total layout height
  const totalHeight =
    (header?.offsetHeight || 0) +
    (clientsSection?.offsetHeight || 0) +
    (footer?.offsetHeight || 0);
  console.log("Total Layout Height:", totalHeight, "px");
  console.log(
    "Overflow:",
    totalHeight > window.innerHeight
      ? "YES - Scrolling required"
      : "NO - Fits in viewport",
  );
  console.log("==========================================");

  // Initialize page loader
  const pageLoader = new PageLoader();

  console.log("✅ Landing Page Loaded Successfully!");
  console.log("✨ Features: Infinite Logo Slider, Responsive Design");
});
