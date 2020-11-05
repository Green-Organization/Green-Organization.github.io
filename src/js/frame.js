function resizeFrame(frame) {
    var target = frame.contentWindow.document.body;
    var config = { attributes: true, childList: true, characterData: true };
    var callback = function(mutationsList) {
        frame.style.height = target.scrollHeight + "px";
    };
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
}
