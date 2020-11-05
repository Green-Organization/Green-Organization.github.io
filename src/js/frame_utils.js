function resizeFrameByContent(frame) {
    var window = frame.contentWindow;
    var target = window.document.body;
    var config = { attributes: true, subtree: true };
    var observer = new MutationObserver(function(mutationList) {
        setFrameHeight(frame, target.scrollHeight);
    });
    observer.observe(target, config);
    window.addEventListener('resize', function() {
        setFrameHeight(frame, target.scrollHeight);
    });
    setFrameHeight(frame, target.scrollHeight);
}

function setFrameHeight(frame, height) {
    frame.style.height = height + "px";
}
