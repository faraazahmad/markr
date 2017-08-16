window.mdc.autoInit();  // initialise Material web components


/*
    Markdown preview
*/
var markdown = document.getElementById('markdown');
var preview = document.getElementById('preview');

markdown.innerText = localStorage['markdown'] || 'Enter text here ...';

var previousContent = '';
// update preview if Markdown has changed
setInterval(function() {
    var currrentContent = markdown.innerText;
    if (previousContent !== currrentContent) {
        preview.innerHTML = marked(currrentContent);
        localStorage['markdown'] = previousContent = currrentContent;
    }
}, 50); // check every 50ms


/*
    Menu
*/
var menuEl = document.querySelector('#menu');
var menu = new mdc.menu.MDCSimpleMenu(menuEl);

// toggle menu
var toggle = document.querySelector('.toggle');
toggle.addEventListener('click', function() {
    menu.open = !menu.open;
});

// handle menu item clicks
menuEl.addEventListener('MDCSimpleMenu:selected', function(evt) {
    const menuItem = evt.detail.item;
    switch (menuItem.textContent.trim()) {
        case "GitHub":
            location.href = "https://github.com/faheel/Live-Markdown-Editor";
            break;
    }
});


/*
    FAB
*/
var fab = document.querySelector('#toggle-fab');

var fabIcon = document.querySelector('.mdc-fab__icon');
var previewIsHidden = true;

// handle FAB click
fab.addEventListener('click', function() {
    if (previewIsHidden) {
        preview.style.display = 'block';
        markdown.style.display = 'none';
        fabIcon.innerHTML = 'edit';
    }
    else {
        preview.style.display = 'none';
        markdown.style.display = 'block';
        fabIcon.innerHTML = 'text_format';
    }
    previewIsHidden = !previewIsHidden;
});

// handle screen rotation
window.addEventListener("resize", function() {
    if (window.innerWidth >= 480) {
        preview.style.display = 'block';
        markdown.style.display = 'block';
    }
    else if (previewIsHidden) {
        preview.style.display = 'none';
        markdown.style.display = 'block';
    }
    else {
        preview.style.display = 'block';
        markdown.style.display = 'none';
    }
});
