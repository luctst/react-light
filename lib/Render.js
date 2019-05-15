function Render(DOMTree, root) {
    DOMTree.map(el => {
        root.appendChild(el);
    })
}

module.exports = Render;