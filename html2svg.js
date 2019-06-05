
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

dynamicallyLoadScript("https://kasbert.github.io/html2canvas.js");
dynamicallyLoadScript("https://kasbert.github.io/canvas2svg.js");

function html2svg(body, callback) {
    if (!body) {
        body = document.body;
    }
    var canvas = C2S(body.offsetWidth, body.offsetHeight);
    canvas.style = {};
    canvas.getContext = function () { return canvas; }
    var opts = {
        canvas: canvas,
    }
    html2canvas(body, opts).then(canvas => {
        callback(canvas.getSvg(), canvas.getSerializedSvg());
    });
}




