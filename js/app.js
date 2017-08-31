window.mdc.autoInit();  // initialise Material web components

/* 
    Reactive Markdown Rendering using Vue.js
*/
window.addEventListener('load', function() {
    new Vue({
        el: '#editor',
        data: {
          input: '# hello'
        },
        computed: {
          compiledMarkdown: function () {
            return marked(this.input, { sanitize: true })
          }
        },
        methods: {
          update: function (e) {
            this.input = e.target.value
          }
        }
    })
});

/*
    Nav Drawer
*/
let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);


/*
    FAB
*/
var fab = document.querySelector('#toggle-fab');

var fabIcon = document.querySelector('.mdc-fab__icon');
var previewIsHidden = true;

// handle FAB click
fab.addEventListener('click', function() {
    var markdown = document.querySelector('#markdown');
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
