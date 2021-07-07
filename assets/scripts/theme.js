// Waiting for page to load.
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('main')){
            themeStylesheet.href = '/The-Thought-Archive/assets/css/dark.css';
            themeToggle.innerText = 'Toggle Theme';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = '/The-Thought-Archive/assets/css/main.css';
            themeToggle.innerText = 'Toggle Theme';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)  
    })
})
