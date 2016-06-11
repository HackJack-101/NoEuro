var whitespace = new RegExp('\S', 'ig');
var euro = new RegExp('euro', 'ig');
var football = new RegExp('football', 'ig');

function doSomething(e, p) {
    p.parentNode.removeChild(p);
}

function recurse(element) {
    var parent = element.parentNode;
    if (element.childNodes.length > 0) {
        for (var i = 0; i < element.childNodes.length; i++) {
            recurse(element.childNodes[i]);
        }
    }

    if (element.nodeType == Node.TEXT_NODE &&
        parent.tagName !== "SCRIPT" &&
        whitespace.test(element.nodeValue) &&
        (
            euro.test(element.nodeValue) ||
            football.test(element.nodeValue)
        )) {
        doSomething(element, parent);
    }
}

window.addEventListener("load", function() {
    recurse(document.body);
}, true);