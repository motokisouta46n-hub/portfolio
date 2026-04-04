export function setupTabs() {
  const profilebar = document.querySelector(".profile-button");
  const homebar = document.querySelector(".home-button");
  const profilePage = document.querySelector(".profile-page");
  const welcomePage = document.querySelector(".welcome-container");

  profilebar.addEventListener("click", () => {
    welcomePage.classList.add("hidden");
    profilePage.classList.remove("hidden");
  });

  homebar.addEventListener("click", () => {
    welcomePage.classList.remove("hidden");
    profilePage.classList.add("hidden");
  });

  // todolistTab.addEventListener("click", () => {
  //   homeSection.classList.add("hidden");
  //   converterSection.classList.add("hidden");
  //   todolistSection.classList.remove("hidden");
  // });
}
