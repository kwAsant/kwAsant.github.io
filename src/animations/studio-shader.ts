let cleanup: (() => void) | undefined;

export function initStudioShader(): void {
  cleanup?.();
  cleanup = undefined;
  const host = document.querySelector<HTMLElement>('[data-studio-shader]');
  if (!host) return;
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl', { antialias: false });
  if (!gl) return;
  const compile = (type: number, source: string): WebGLShader | null => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) { gl.deleteShader(shader); return null; }
    return shader;
  };
  const vertex = compile(gl.VERTEX_SHADER, 'attribute vec2 position; void main(){gl_Position=vec4(position,0.0,1.0);}');
  const fragment = compile(gl.FRAGMENT_SHADER, `precision highp float;
    uniform vec2 resolution; uniform float time;
    void main(void) {
      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
      float t = time * 0.05; float lineWidth = 0.002; vec3 color = vec3(0.0);
      for(int j=0; j<3; j++){ for(int i=0; i<5; i++){
        color[j] += lineWidth*float(i*i) / max(abs(fract(t-0.01*float(j)+float(i)*0.01)*5.0-length(uv)+mod(uv.x+uv.y,0.2)),0.0001);
      }}
      vec3 waves = clamp(color, 0.0, 1.0);
      vec3 base = vec3(0.025, 0.06, 0.18);
      vec3 palette = vec3(waves.r * 0.24 + waves.b * 0.10, waves.g * 0.38 + waves.r * 0.08, waves.b * 0.65 + waves.g * 0.14);
      gl_FragColor=vec4(base + palette,1.0);
    }`);
  if (!vertex || !fragment) { if (vertex) gl.deleteShader(vertex); if (fragment) gl.deleteShader(fragment); return; }
  const program = gl.createProgram();
  if (!program) { gl.deleteShader(vertex); gl.deleteShader(fragment); return; }
  gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment); return; }
  const buffer = gl.createBuffer();
  if (!buffer) { gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment); return; }
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
  gl.useProgram(program);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const resolution = gl.getUniformLocation(program, 'resolution');
  const time = gl.getUniformLocation(program, 'time');
  host.appendChild(canvas);
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(host.clientWidth * ratio));
    canvas.height = Math.max(1, Math.round(host.clientHeight * ratio));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(resolution, canvas.width, canvas.height);
  };
  const observer = new ResizeObserver(resize); observer.observe(host); resize();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  const draw = (timestamp: number) => {
    gl.uniform1f(time, timestamp / 333.333 + 1);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(draw);
  };
  const refresh = () => { cancelAnimationFrame(frame); draw(performance.now()); };
  reducedMotion.addEventListener('change', refresh); document.addEventListener('visibilitychange', refresh);
  draw(performance.now());
  cleanup = () => { cancelAnimationFrame(frame); observer.disconnect(); reducedMotion.removeEventListener('change', refresh); document.removeEventListener('visibilitychange', refresh); gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment); canvas.remove(); };
}
