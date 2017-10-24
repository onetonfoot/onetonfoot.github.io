function sun(w, h) {
  // Set colors
  fill(220, 220, 50);
  stroke(0, 0, 0);
  strokeWeight(5);

  ellipse(w / 2, h / 2.5, h / 5, h / 5);
  translate(w / 2, h / 2.5);
  let n = 40

  for (var i = 0; i < n; i++) {
    if (i % 2 == 1)
      line(h / 8, h / 8, h / 12, h / 12);
    else
      line(h / 10, h / 10, h / 12, h / 12);
    rotate(PI / (n / 2));
  }
  translate(-w / 2, -h / 3);
}
