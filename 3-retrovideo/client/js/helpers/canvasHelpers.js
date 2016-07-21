export function centerWrapText(context, text, x, y, maxWidth, lineHeight) {
    let words = text.split(' ');
    let line = '';
    let lines = []
    let lineCount = 0;

    words.map((word, n) => {
        let testLine = `${line}${word} `;
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push({ text: line, y: y });
            lineCount++;
            line = word + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    })

    lineCount++;
    lines.push({ text: line, y: y });

    lines.map(item => {
        let centerY = item.y - lineCount * lineHeight / 4;
        context.fillText(item.text, x, centerY);
    });
}
