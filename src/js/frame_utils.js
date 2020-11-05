function resizeFrameByContent(frame) {
    var window = frame.contentWindow;
    var target = window.document.body;
    var config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    var callback = function(mutationList) {
        setFrameHeight(frame, target.scrollHeight);
    };
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
    window.addEventListener('resize', function() {
        setFrameHeight(frame, target.scrollHeight);
    });
    setFrameHeight(frame, target.scrollHeight);
}

function setFrameHeight(frame, height) {
    frame.style.height = height + "px";
}
