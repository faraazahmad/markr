window.addEventListener('load', function() {
  new Vue({
    el: '.content',
    data: {
      input: '# Hello World',
      output: ''
    },
    watch: {
      input: function(newInput) {
        this.output = marked(newInput);
      }
    }
  });
});

function changeTheme(themeNumber) {
  // get css theme tag
  let themeTag = document.querySelectorAll('link')[3];
  if (themeNumber == 0) {
    // change to dark
    themeTag.setAttribute('href', 'css/dark.css');
  }
  else if (themeNumber == 1) {
    // change to light
    themeTag.setAttribute('href', 'css/light.css');
  }
}

function slideToggle() {
  var el = document.querySelector('.sidebar');
  
  if(el.classList.contains("open")) {
    let domNode = anime({
      targets: el,
      translateX: -250
    });
  }
  else {
    let domNode = anime({
      targets: el,
      translateX: 250
    });
  }
  el.classList.toggle("open");
}