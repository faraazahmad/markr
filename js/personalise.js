var themes = {
    default: {
        primaryColor: "#3F51B5",
        secondaryColor: "#FF4081"
    },
    user: {
        primaryColor: "#0fafff",
        secondaryColor: "#000"
    }
}

function setTheme(themeObject) {
    let themeTag = document.head.querySelector('[name = theme-color]');
    let toolbar = document.querySelector('.mdc-toolbar');
    let fab = document.querySelector('.mdc-fab');

    themeTag.content = themeObject.primaryColor;
    toolbar.style.backgroundColor = themeObject.primaryColor;
    fab.style.backgroundColor = themeObject.secondaryColor;
}