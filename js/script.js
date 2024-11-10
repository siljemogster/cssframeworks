function applyInitialTheme() {
    const userPreference = localStorage.getItem("theme");

    const.systemPreferenceisDark = window.matchMedia(
        "(prefers-color-scheme: dakr)"
    ).matches; 

    const isDarkMode = 
    userPreference === "dark" || (!userPreference && systemPreferenceisDark); 

    document.documentElement.classList.toggle("dark", isDarkMode); 

    document.querySelector("sun").classList.toggle("hidden", isDarkMode);
    document.querySelector("moon").classList.toggle("hidden", !isDarkMode);

}

appplyInitialTheme()

function toggleTheme() {
    const isDarkMode = document.documentElement.classList.toggle("dark"); 

    localStorage.setItem("theme", isDarkMode ? "dark" : "light"); 

    document.querySelector("sun").classList.toggle("hidden", isDarkMode);
    document.querySelector("moon").classList.toggle("hidden", !isDarkMode); 
}

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", toggleTheme); 