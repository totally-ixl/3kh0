loadGame()

let isAspectRatioMaximized = false

function toggleAspectRatio() {
  const gameFrame = document.getElementById("gameFrame")
  const fullscreenBtn = document.getElementById("fullscreenBtn")

  if (!isAspectRatioMaximized) {
    maximizeIframe(gameFrame, fullscreenBtn)
    document
      .getElementById("fullscreenIcon")
      .setAttribute("data-feather", "minimize")
  } else {
    minimizeIframe(gameFrame)
    document
      .getElementById("fullscreenIcon")
      .setAttribute("data-feather", "maximize")
  }

  feather.replace()
  isAspectRatioMaximized = !isAspectRatioMaximized
}

function maximizeIframe(gameFrame, fullscreenBtn) {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const buttonHeight = fullscreenBtn.offsetHeight
  const gapFromBottom = 100
  const maxIframeHeight = windowHeight - buttonHeight - gapFromBottom
  const aspectRatio = 45 / 26
  const maxIframeWidth = maxIframeHeight * aspectRatio
  const newWidth = Math.min(maxIframeWidth, windowWidth)
  const newHeight = newWidth / aspectRatio
  gameFrame.style.width = newWidth + "px"
  gameFrame.style.height = newHeight + "px"
}

function minimizeIframe(gameFrame) {
  gameFrame.style.width = "75%"
  gameFrame.style.height = ""
}

window.addEventListener("resize", () => {
  if (isAspectRatioMaximized) {
    const gameFrame = document.getElementById("gameFrame")
    const fullscreenBtn = document.getElementById("fullscreenBtn")
    maximizeIframe(gameFrame, fullscreenBtn)
  }
})

function loadGame() {
  const urlParams = new URLSearchParams(window.location.search)
  const game = urlParams.get("game")
  var iframe = "projects/" + game + "/index.html"
  document.getElementById("gameFrame").src = iframe
}



function cloakTab(link) {
    const linkElement = document.querySelector('link[rel=icon]');
    if (!linkElement) {
        console.error("No <link rel='icon'> element found in the document.");
        return;
    }

    switch (link) {
        case "ixl":
            linkElement.href = 'https://www.google.com/s2/favicons?domain=ixl.com&sz=256';
            document.title = "IXL | Math, Language Arts, Science, Social Studies, and Spanish";
            break;
        case "google":
            linkElement.href = 'https://www.google.com/s2/favicons?domain=google.com&sz=256';
            document.title = "Google";
            break;
        case "classlink":
            linkElement.href = 'https://www.google.com/s2/favicons?domain=classlink.com&sz=256';
            document.title = "ClassLink | Identity & Access Management for Education";
            break;
        case "powerschool":
            linkElement.href = 'https://www.google.com/s2/favicons?domain=powerschool.com&sz=256';
            document.title = "PowerSchool K-12 Software & Cloud-Based Solutions";
            break;
        default:
            console.warn("Unknown link type provided:", link);
            return; // Exit if the link type is unknown
    }
}

function setCloakTab(link) {
    localStorage.setItem('cloakTabLink', link);
    cloakTab(link);
}

window.onload = function() {
    const storedLink = localStorage.getItem('cloakTabLink');
    if (storedLink) {
        cloakTab(storedLink);
    } else {
        console.info("No stored link found in localStorage.");
    }
};
