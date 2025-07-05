document.getElementById("input").addEventListener("input", function() {
  const textarea = this;
  const filtered = textarea.value.split('').filter(c => c.charCodeAt(0) <= 127).join('');
  if (textarea.value !== filtered) {
    textarea.value = filtered;
  }
});

function translate() {
  const input = document.getElementById("input").value.trim();
  const words = input.split(/\s+/);
  const output = words.map(word => {
    return word.split('').map(char => {
      let code = char.charCodeAt(0);
      let binary = code.toString(2).padStart(8, '0');
      return binary + '/';
    }).join('');
  }).join(' ');
  document.getElementById("output").value = output;
}
