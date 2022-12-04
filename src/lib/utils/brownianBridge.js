
function randNorm() {
    const u = 1 - Math.random();
    const v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

export function computeBrownianBridge(steps) {
    let Z = [0];
    for (let i = 0; i < steps; i++) {
        Z.push(Z[i] + randNorm());
    }
    Z = Z.map((z, i) => {
        return z - (i / (Z.length - 1)) * Z[Z.length - 1];
    });

    return Z;
}

export function setRandomBorder(element, content, css_var, steps, paddingBottom, frayingBottom) {
    const contentBB = content.getBoundingClientRect();
    const bottomBridge = computeBrownianBridge(steps);

    const frayingWidth = element.clientWidth;
    const frayingHeight =
        contentBB.bottom - Math.min(...bottomBridge) * frayingBottom + paddingBottom;

    // random shape
    let path = "path('";
    path += "M0,0";
    path += " L0," + frayingHeight;

    // bottom fraying
    for (let i = 0; i < steps; i++) {
        path +=
            " L" +
            (frayingWidth * i) / (steps - 1) +
            "," +
            (frayingHeight + bottomBridge[i] * frayingBottom);
    }

    path += " L" + frayingWidth + "," + frayingHeight;
    path += " L" + frayingWidth + ",0";
    path += " Z')";
    element.style.setProperty(css_var, path);
}