const butInstall = document.querySelector("#buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";

  butInstall.addEventListener("click", async (event) => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "App Installed!!";
  });
});

window.addEventListener("appinstalled", () => {
  butInstall.textContent = "App Installed!!";
});
