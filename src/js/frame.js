function resizeFrame(frame) {
    var target = frame.contentWindow.document.body;
    var config = { attributes: true, childList: true, characterData: true };
    var callback = function(mutationsList) {
        setFrameHeight(frame, target.scrollHeight);
    };
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
    setFrameHeight(frame, target.scrollHeight);
}

function setFrameHeight(frame, height) {
    frame.style.height = height + "px";
}
