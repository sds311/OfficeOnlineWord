const remote = require('electron').remote;
const window = remote.getCurrentWindow();

function init() {
  document.getElementById("max").addEventListener("click", function (e) {
    if (!window.isMaximized()) {
      window.maximize();
    }
    else {
      window.minimize();
    }
  });
  document.getElementById("close").addEventListener("click", function (e) {
    window.close();
  });
};

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    init();
  }
};
