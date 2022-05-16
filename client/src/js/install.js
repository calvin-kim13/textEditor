const butInstall = document.querySelector("#buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";

  // TODO: Implement a click event handler on the `butInstall` element
  butInstall.addEventListener("click", async () => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed!";
  });
});

window.addEventListener("appinstalled", (event) => {
  butInstall.textContent = "Installation A Success!";
});
