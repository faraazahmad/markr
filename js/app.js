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
let drawerToggle = document.querySelector('.menu');

drawerToggle.addEventListener('click', () => drawer.open = true);

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

//handle save as PDF request

$(".mdc-list-item:nth-child(1)").click(function() {
  //print div#preview
  Popup($('#preview')[0].outerHTML);
});

function Popup(data) {
      var mywindow = window.open('', 'new div', 'height=400,width=600');
      mywindow.document.write('<html><head><title></title>');
      mywindow.document.write('<link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">');
      mywindow.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.8.0/github-markdown.min.css">');
      mywindow.document.write('<link rel="stylesheet" href="css/base.css" type="text/css" />');
      mywindow.document.write('</head><body >');
      mywindow.document.write(data);
      mywindow.document.write('</body></html>');
      mywindow.document.close();
      mywindow.focus();
      setTimeout(function(){mywindow.print();},1000);
      return true;
}

// change theme

// user pick up color


$(".mdc-list-item-list").click(function(e) {
  pickUp(e);
});
function pickUp(e){
  var target = $(e.target);

    if(target.is('.mdc-list-item-list:nth-child(1)')) {
      document.documentElement.style.setProperty('--mdc-theme-primary', '#3f51b5');
    } else if (target.is('.mdc-list-item-list:nth-child(2)')) {
      document.documentElement.style.setProperty('--mdc-theme-primary', 'blueviolet');
    } else if (target.is('.mdc-list-item-list:nth-child(3)')) {
      document.documentElement.style.setProperty('--mdc-theme-primary', 'indianred');
    } else if (target.is('.mdc-list-item-list:nth-child(4)')){
      document.documentElement.style.setProperty('--mdc-theme-primary', 'grey');
    }
}