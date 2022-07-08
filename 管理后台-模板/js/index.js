const toggle = document.querySelector(".toggle");
const theme = document.querySelector("body");

const toggleLocalStorage = localStorage.getItem("toggle");
const themeLocalStorage = localStorage.getItem("theme");

toggleLocalStorage ? (toggle.innerHTML = toggleLocalStorage) : "";
themeLocalStorage ? (theme.className = themeLocalStorage) : "";

toggle.addEventListener("click", () => {
  if (theme.className.includes("light-theme")) {
    theme.classList.toggle("dark-theme");
    theme.classList.remove("light-theme");
    toggle.innerHTML = "🌞";
  } else {
    theme.classList.toggle("light-theme");
    theme.classList.remove("dark-theme");
    toggle.innerHTML = "🌙";
  }
  // 保存用户选择的主题
  localStorage.setItem("theme", theme.className);
  localStorage.setItem("toggle", toggle.innerText);
});

