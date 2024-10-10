document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".anchor-link").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const url = new URL(window.location.href);
      url.hash = anchor.getAttribute("href");
      navigator.clipboard
        .writeText(url.toString())
        .then(() => {
          console.log("Link copied to clipboard!");
          // Optionally, show a tooltip or notification here
        })
        .catch((err) => {
          console.error("Failed to copy link: ", err);
        });
    });
  });
});
