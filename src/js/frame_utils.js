function dinamicResizeFrameByContent(frame) {
    var target = frame.contentWindow.document.body;
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
    resizeFrameByContent(frame);
}

function resizeFrameByContent(frame) {
    setFrameHeight(
        frame,
        frame.contentWindow.document.body.scrollHeight
    );
}

function setFrameHeight(frame, height) {
    frame.style.height = height + "px";
}
