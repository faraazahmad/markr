var markdown = document.getElementById('markdown');
var preview = document.getElementById('preview');

markdown.innerText = localStorage['markdown'] || 'Enter text here ...';

var previousContent = '';
setInterval(function() {
    var currrentContent = markdown.innerText;
    if (previousContent !== currrentContent) {
        preview.innerHTML = marked(currrentContent);
        localStorage['markdown'] = previousContent = currrentContent;
    }
}, 50);

var fabIcon = document.getElementsByClassName('mdc-fab__icon')[0];
var previewIsHidden = true;

function togglePreview() {
    if (previewIsHidden) {
        previewIsHidden = false;
        preview.style.display = 'block';
        markdown.style.display = 'none';
        fabIcon.innerHTML = 'edit';
    }
    else {
        previewIsHidden = true;
        preview.style.display = 'none';
        markdown.style.display = 'block';
        fabIcon.innerHTML = 'text_format';
    }
}
