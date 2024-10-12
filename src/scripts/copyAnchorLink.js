import Toastify from "toastify-js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".anchor-link").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const url = new URL(window.location.href);
      url.hash = anchor.getAttribute("href");
      navigator.clipboard
        .writeText(url.toString())
        .then(() => {
          // console.log("Link copied to clipboard!");
          // Optionally, show a tooltip or notification here
          Toastify({
            text: "Link copied to clipboard!",
            duration: 1500,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #2DDBD4, #CAE7E5)",
              color: "#242625",
              position: "fixed",
              bottom: "10px",
              right: "10px",
              padding: "10px",
              zIndex: "50",
              borderRadius: "5px",
              boxShadow: "0px 1px 4px black",
              fontSize: "14px",
              fontWeight: "bold",
            },
            className: "custom-toast",
            onClick: function () {}, // Callback after click
          }).showToast();
        })
        .catch((err) => {
          console.error("Failed to copy link: ", err);
          Toastify({
            text: `Failed to copy URL. See console log for details.`,
            duration: 1500,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #2DDBD4, #CAE7E5)",
              color: "#242625",
              position: "fixed",
              bottom: "10px",
              right: "10px",
              padding: "10px",
              zIndex: "50",
              borderRadius: "5px",
              boxShadow: "0px 1px 4px black",
              fontSize: "12px",
              fontWeight: "bold",
            },
            className: "custom-toast",
            onClick: function () {}, // Callback after click
          }).showToast();
        });
    });
  });
});
