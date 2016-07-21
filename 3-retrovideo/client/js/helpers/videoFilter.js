export function grayscale(image) {
    let data = image.data;
    let dataLength = data.length;
    for (let i = 0; i < dataLength; i += 4) {

        let R = data[i];
        let G = data[i + 1];
        let B = data[i + 2];

        let newColor = 0.21*R + 0.72*G + 0.07*B - Math.random()*15

        data[i] = newColor;
        data[i + 1] = newColor;
        data[i + 2] = newColor;
    }
    return image
}
