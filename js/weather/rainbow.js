function rainbow(k) {

    var w = screen.width*1.5; // Width of rainbow
    var nBands = 7 // Number of color bands
    var thickness = 150 // Thickness of Rainbow

    angleMode(DEGREES);

    let sky_colour = color(200,200,255)

    colorMode(HSB);
    //Draw rainbow
    var bandSize = thickness / nBands;
    strokeWeight(bandSize / 2);
    noFill();

    var i = 0
    while (i < nBands) {
        let rainbow_color = color(i * 360 /nBands,80,100)
        let middle_color = lerpColor(rainbow_color,sky_colour,k)
        stroke(middle_color);
        arc(950, 790, w, w, 200, 250);
        w += bandSize;
        i++;
    }
    angleMode(RADIANS);
    colorMode(RGB);
}