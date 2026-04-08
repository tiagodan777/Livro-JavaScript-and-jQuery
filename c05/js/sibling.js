var originalItem = window.document.getElementById('two');
var prevItem = originalItem.previousSibling;
var nextItem = originalItem.nextSibling;

prevItem.className = 'complete';
nextItem.className = 'cool';