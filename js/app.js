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
$(".mdc-list-item:nth-child(2)").click(function() {
  changeColor();
});


function changeColor() {
  //get random color 
  var colors = ['#845EC2','#FF6F91','#F9F871','#C34A36','#00C9A7','#2586A3','#E7BAFF'];
  var color = colors[Math.floor(Math.random()*(8-1))];

  document.documentElement.style.setProperty('--mdc-theme-primary', color);
}