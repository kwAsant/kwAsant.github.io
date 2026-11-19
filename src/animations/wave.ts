type WaveOptions = {
  amplitude?: number;
  frequency?: number;
  speed?: number;
  lineWidth?: number;
};

export function initWave(
  canvas: HTMLCanvasElement,
  options: WaveOptions = {}
) {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const drawingContext = ctx;

  const {
    amplitude = 35,
    frequency = 0.012,
    speed = 0.02,
    lineWidth = 1.5,
  } = options;

  let animationFrame = 0;
  let time = 0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    drawingContext.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    drawingContext.clearRect(0, 0, width, height);

    drawingContext.beginPath();

    for (let x = 0; x <= width; x++) {
      const y =
        height / 2 +
        Math.sin(x * frequency + time) * amplitude;

      if (x === 0) {
        drawingContext.moveTo(x, y);
      } else {
        drawingContext.lineTo(x, y);
      }
    }

    drawingContext.lineWidth = lineWidth;
    drawingContext.strokeStyle = "currentColor";
    drawingContext.stroke();

    time += speed;

    animationFrame = requestAnimationFrame(draw);
  }

  resize();

  window.addEventListener("resize", resize);

  draw();

  return () => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resize);
  };
}
