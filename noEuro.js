var euro = new RegExp('euro', 'ig');
var match = new RegExp('football', 'ig');
var football = new RegExp('match', 'ig');

function testEuro(str) {
    return euro.test(str) || football.test(str);
}

function doSomething(e, p) {
    console.log(e);
    p.parentNode.removeChild(p);
}

function recurse(element) {
    var parent = element.parentNode;
    if (element.childNodes.length > 0) {
        for (var i = 0; i < element.childNodes.length; i++) {
            recurse(element.childNodes[i]);
        }
    }

    if (element.nodeType == Node.TEXT_NODE && parent.tagName !== "SCRIPT" && testEuro(element.nodeValue)) {
        doSomething(element, parent);
    }
}

recurse(document.body);