function theme() {
    const changeThemeButtons = document.querySelectorAll(".changeTheme");

    changeThemeButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            let theme = this.dataset.theme;
            applyTheme(theme);
            localStorage.setItem("theme", theme);
        });
    });

    function applyTheme(themeName) {
        document
            .querySelector('[title="theme"]')
            .setAttribute("href", `css/theme-${themeName}.css`);
    }

    let activeTheme = localStorage.getItem("theme");

    if (activeTheme === null) {
        applyTheme("light");
    } else {
        applyTheme(activeTheme);
    }
}

export default theme;
