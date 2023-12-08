export const handleThemeChange = () => {
  const theme = localStorage.getItem("@theme") || "dark";

  if (theme == "dark") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
  if (theme == "light") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }
};
