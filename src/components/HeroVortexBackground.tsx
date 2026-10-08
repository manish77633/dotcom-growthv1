import { useEffect, useRef } from "react";

interface Particle {
  angle: number;
  radius: number;
  speed: number;
  angleDrift: number;
  sizeScale: number;
  isOrange: boolean;
  baseAlpha: number;
  pushX: number;
  pushY: number;
}

export default function HeroVortexBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animId = 0;
    let isVisible = true;

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isInside: false,
    };

    // Vortex center with smooth parallax
    let vortexCurrentX = 0;
    let vortexCurrentY = 0;

    const TOTAL_PARTICLES = 440;
    const particles: Particle[] = [];

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      vortexCurrentX = width * 0.52;
      vortexCurrentY = height * 0.36;

      const maxR = Math.hypot(width, height) * 0.65;

      // Initialize particles if empty
      if (particles.length === 0) {
        for (let i = 0; i < TOTAL_PARTICLES; i++) {
          particles.push({
            angle: Math.random() * Math.PI * 2,
            radius: 20 + Math.random() * maxR,
            speed: 0.3 + Math.random() * 0.85,
            angleDrift: (Math.random() - 0.5) * 0.0018,
            sizeScale: 0.75 + Math.random() * 0.65,
            isOrange: Math.random() < 0.74, // 74% brand orange #ff5e1a
            baseAlpha: 0.22 + Math.random() * 0.58,
            pushX: 0,
            pushY: 0,
          });
        }
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(container);

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isInside = true;
    };

    const onPointerLeave = () => {
      mouse.isInside = false;
      mouse.targetX = width * 0.52;
      mouse.targetY = height * 0.36;
    };

    const parentSection = container.closest("section") || container;
    parentSection.addEventListener("pointermove", onPointerMove as EventListener, { passive: true });
    parentSection.addEventListener("pointerleave", onPointerLeave as EventListener, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 },
    );
    observer.observe(container);

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const maxR = Math.hypot(width, height) * 0.68;

      // Smooth mouse follow
      if (mouse.isInside) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x = width * 0.52;
        mouse.y = height * 0.36;
      }

      // Parallax vortex focal center (tilts organically with mouse)
      const targetVortexX = width * 0.5 + (mouse.x - width * 0.5) * 0.25;
      const targetVortexY = height * 0.35 + (mouse.y - height * 0.35) * 0.25;
      vortexCurrentX += (targetVortexX - vortexCurrentX) * 0.08;
      vortexCurrentY += (targetVortexY - vortexCurrentY) * 0.08;

      // Soft ambient illumination halo centered at vortex
      const haloGrad = ctx.createRadialGradient(
        vortexCurrentX,
        vortexCurrentY,
        0,
        vortexCurrentX,
        vortexCurrentY,
        360,
      );
      haloGrad.addColorStop(0, "rgba(255, 94, 26, 0.10)");
      haloGrad.addColorStop(0.45, "rgba(255, 94, 26, 0.03)");
      haloGrad.addColorStop(1, "rgba(255, 94, 26, 0)");
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(vortexCurrentX, vortexCurrentY, 360, 0, Math.PI * 2);
      ctx.fill();

      // Render radial particles (Google Antigravity Hyperspace style)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Outward radial flow
        p.radius += p.speed;
        p.angle += p.angleDrift;

        // Wrap around when reaching edge
        if (p.radius > maxR) {
          p.radius = 20 + Math.random() * 45;
          p.angle = Math.random() * Math.PI * 2;
        }

        // Base coordinates radiating from focal center
        let px = vortexCurrentX + Math.cos(p.angle) * p.radius;
        let py = vortexCurrentY + Math.sin(p.angle) * p.radius;

        // Interactive mouse repulsion
        if (mouse.isInside && mouse.x > 0) {
          const mdx = px - mouse.x;
          const mdy = py - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 140 && mdist > 0) {
            const force = (1 - mdist / 140) * 10;
            p.pushX += (mdx / mdist) * force;
            p.pushY += (mdy / mdist) * force;
          }
        }

        // Apply and decay push
        p.pushX *= 0.88;
        p.pushY *= 0.88;
        px += p.pushX;
        py += p.pushY;

        // Skip if outside viewport
        if (px < -20 || px > width + 20 || py < -20 || py > height + 20) {
          continue;
        }

        // Hyperspace dash geometry:
        // Dashes stretch along their radial direction (angle from vortex center)
        const currentAngle = Math.atan2(py - vortexCurrentY, px - vortexCurrentX);
        const normDist = Math.min(p.radius / maxR, 1);

        // Near center: smaller dots (~3px). Outer: elongated streaks (~8-10px)
        const length = (2.8 + normDist * 7.5) * p.sizeScale;
        const thickness = (1.3 + normDist * 1.3) * p.sizeScale;

        // Alpha increases slightly as it travels outward then softens at extreme edge
        let alpha = p.baseAlpha;
        if (normDist > 0.85) {
          alpha *= (1 - normDist) / 0.15;
        }

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(currentAngle);

        ctx.beginPath();
        ctx.ellipse(0, 0, length * 0.5, thickness * 0.5, 0, 0, Math.PI * 2);

        if (p.isOrange) {
          ctx.fillStyle = `rgba(255, 94, 26, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(12, 23, 84, ${alpha * 0.65})`;
        }
        ctx.fill();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      observer.disconnect();
      parentSection.removeEventListener("pointermove", onPointerMove as EventListener);
      parentSection.removeEventListener("pointerleave", onPointerLeave as EventListener);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg bg-canvas pointer-events-none absolute inset-0 z-0 size-full overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  );
}
