window.addEventListener('load', function() {
  new Vue({
    el: '.content',
    data: {
      input: '# hello',
      output: ''
    },
    watch: {
      input: function(newInput) {
        this.output = marked(newInput);
      }
    }
  });
});
