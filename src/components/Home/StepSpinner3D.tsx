"use client";

import Image from "next/image";
import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  AmbientLight,
  BufferGeometry,
  DirectionalLight,
  ExtrudeGeometry,
  LineBasicMaterial,
  LineLoop,
  Mesh,
  MeshLambertMaterial,
  NoToneMapping,
  Object3D,
  PerspectiveCamera,
  Scene,
  Shape,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
} from "three";

type Rgb = [number, number, number];

export type StepSpinner3DHandle = {
  setTurn: (radians: number) => void;
  setColor: (color: Rgb) => void;
};

function createAsteriskShape() {
  const outline: Vector2[] = [];
  for (let spoke = 0; spoke < 8; spoke++) {
    const angle = Math.PI / 2 + (spoke * Math.PI) / 4;
    const point = (radius: number, offset: number) =>
      new Vector2(
        Math.cos(angle + offset) * radius,
        Math.sin(angle + offset) * radius,
      );
    outline.push(
      point(1, -0.19),
      point(1, 0.19),
      point(0.55, Math.PI / 8),
    );
  }

  const shape = new Shape();
  outline.forEach((corner, index) => {
    const previous = outline[(index - 1 + outline.length) % outline.length];
    const next = outline[(index + 1) % outline.length];
    const radius = Math.min(
      0.065,
      corner.distanceTo(previous) * 0.27,
      corner.distanceTo(next) * 0.27,
    );
    const before = corner.clone().lerp(previous, radius / corner.distanceTo(previous));
    const after = corner.clone().lerp(next, radius / corner.distanceTo(next));
    if (index === 0) shape.moveTo(before.x, before.y);
    else shape.lineTo(before.x, before.y);
    shape.quadraticCurveTo(corner.x, corner.y, after.x, after.y);
  });
  shape.closePath();
  return shape;
}

const StepSpinner3D = forwardRef<StepSpinner3DHandle>(function StepSpinner3D(
  _props,
  ref,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{ turn: number; color: Rgb }>({
    turn: 0,
    color: [254, 168, 241],
  });
  const redrawRef = useRef<() => void>(() => {});
  const [ready, setReady] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      setTurn(turn) {
        stateRef.current.turn = turn;
        redrawRef.current();
      },
      setColor(color) {
        stateRef.current.color = color;
        redrawRef.current();
      },
    }),
    [],
  );

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return; // Keep the reference image visible when WebGL is unavailable.
    }

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = NoToneMapping;

    const scene = new Scene();
    const camera = new PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);
    camera.lookAt(0, 0, 0);

    const shape = createAsteriskShape();
    const geometry = new ExtrudeGeometry(shape, {
      depth: 0.46,
      steps: 1,
      curveSegments: 8,
      bevelEnabled: true,
      bevelThickness: 0.09,
      bevelSize: 0.075,
      bevelSegments: 4,
    });
    geometry.translate(0, 0, -0.23);

    const faceMaterial = new MeshLambertMaterial({
      color: 0xfea8f1,
      emissive: 0xfea8f1,
      emissiveIntensity: 0.14,
    });
    const sideMaterial = new MeshLambertMaterial({
      color: 0xf1a0e5,
      emissive: 0xf1a0e5,
      emissiveIntensity: 0.14,
    });
    const outlineGeometry = new BufferGeometry().setFromPoints(shape.getPoints(8));
    const outlineMaterial = new LineBasicMaterial({
      color: 0x824a7a,
      transparent: true,
      opacity: 0.24,
    });
    const tilt = new Object3D();
    tilt.rotation.set(-0.22, 0.42, -0.16);
    const wheel = new Object3D();
    const asterisk = new Mesh(geometry, [faceMaterial, sideMaterial]);
    const outline = new LineLoop(outlineGeometry, outlineMaterial);
    outline.scale.set(0.88, 0.88, 1);
    outline.position.z = 0.325;
    wheel.add(asterisk, outline);
    tilt.add(wheel);
    scene.add(tilt);

    scene.add(new AmbientLight(0xffffff, 1.05));
    const keyLight = new DirectionalLight(0xffffff, 0.7);
    keyLight.position.set(2.8, 3.2, 4);
    scene.add(keyLight);
    const fillLight = new DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-3, -1, -2);
    scene.add(fillLight);

    const render = () => {
      const { turn, color } = stateRef.current;
      wheel.rotation.z = turn;
      faceMaterial.color.setRGB(
        color[0] / 255,
        color[1] / 255,
        color[2] / 255,
        SRGBColorSpace,
      );
      faceMaterial.emissive.copy(faceMaterial.color);
      sideMaterial.color.setRGB(
        (color[0] * 0.95) / 255,
        (color[1] * 0.95) / 255,
        (color[2] * 0.95) / 255,
        SRGBColorSpace,
      );
      sideMaterial.emissive.copy(sideMaterial.color);
      outlineMaterial.color.setRGB(
        (color[0] * 0.7) / 255,
        (color[1] * 0.7) / 255,
        (color[2] * 0.7) / 255,
        SRGBColorSpace,
      );
      renderer.render(scene, camera);
    };
    redrawRef.current = render;

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!width || !height) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      render();
      setReady(true);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    return () => {
      observer.disconnect();
      redrawRef.current = () => {};
      geometry.dispose();
      outlineGeometry.dispose();
      faceMaterial.dispose();
      sideMaterial.dispose();
      outlineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="steps-spinner-render">
      {!ready && (
        <Image
          src="/step-spinner-green.webp"
          alt=""
          fill
          sizes="(max-width: 767px) 104px, 172px"
          className="steps-spinner-fallback"
        />
      )}
      <canvas ref={canvasRef} className="steps-spinner-canvas" aria-hidden="true" />
    </div>
  );
});

export default StepSpinner3D;
