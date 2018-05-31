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
