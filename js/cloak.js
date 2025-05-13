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
