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

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();

    for (let x = 0; x <= width; x++) {
      const y =
        height / 2 +
        Math.sin(x * frequency + time) * amplitude;

      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "currentColor";
    ctx.stroke();

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