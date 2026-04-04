export function setupBars() {
  const toggleButton = document.querySelector(".sidebar-toggle-btn");
  const sidebar = document.querySelector(".sidebar");

  toggleButton.addEventListener("click", () => {
    // サイドバーに 'collapsed' クラスを付け外しする
    sidebar.classList.toggle("collapsed");
  });
}
