window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
  },
  startup: {
    ready: function () {
      console.log('MathJax is loaded and ready!');
      
      // Hook into MathJax rendering events
      MathJax.startup.document.clear();
      MathJax.startup.document.observe('end', function (math) {
        console.log(`Formula detected: ${math.math}`);
        console.log('Rendering started...');
      });

      // Call original startup process
      MathJax.startup.defaultReady();
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  if (typeof MathJax.typesetPromise === 'function') {
    MathJax.typesetPromise().then(() => {
      console.log('All formulas have been rendered!');
    }).catch(err => console.error('Error during rendering:', err));
  } else {
    console.error('MathJax 3.x is not loaded or typesetPromise is unavailable!');
  }
});