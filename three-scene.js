/**
 * Three.js High-End WebGL Creative Engineering Engine
 * Pobbathi Shalem Raju — Ultra-Luxury 3D Portfolio
 * 
 * Features:
 * 1. Procedural 3D Liquid Chrome / Iridescent Glass Sphere (Custom GLSL Simplex Noise Shader)
 * 2. Real-time Surface Perturbation & Mouse Velocity Ripple Physics
 * 3. Interactive Mouse & Touch Drag Rotation with Inertial Damping
 * 4. Ambient Deep-Space Star Dust Background with Parallax
 * 5. Dynamic Device Pixel Ratio & 60 FPS Performance Optimization
 */

(function () {
  'use strict';

  if (typeof THREE === 'undefined') {
    console.warn('Three.js library is not available. 3D canvas disabled.');
    return;
  }

  const isMobile = window.innerWidth <= 768 || /Mobi|Android|iPhone/i.test(navigator.userAgent);
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  /* ==========================================================================
     1. BACKGROUND DEEP-SPACE PARTICLES
     ========================================================================== */
  function initBackgroundParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(DPR);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2500);
    camera.position.z = 900;

    const particleCount = isMobile ? 450 : 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorSapphire = new THREE.Color(0x38bdf8);
    const colorViolet = new THREE.Color(0x818cf8);
    const colorMercury = new THREE.Color(0xcbd5e1);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 2200;
      positions[idx + 1] = (Math.random() - 0.5) * 2200;
      positions[idx + 2] = (Math.random() - 0.5) * 1400;

      const rand = Math.random();
      const col = rand > 0.6 ? colorSapphire : (rand > 0.3 ? colorViolet : colorMercury);
      colors[idx] = col.r;
      colors[idx + 1] = col.g;
      colors[idx + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 2.5 : 3.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Parallax mouse variables
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    window.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);

    let clock = new THREE.Clock();
    function animateBg() {
      requestAnimationFrame(animateBg);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      particles.rotation.y = elapsed * 0.015;
      particles.rotation.x = elapsed * 0.008;

      camera.position.x = mouseX * 45;
      camera.position.y = mouseY * 45 - (window.scrollY * 0.25);
      camera.lookAt(0, -window.scrollY * 0.25, 0);

      renderer.render(scene, camera);
    }
    animateBg();
  }

  /* ==========================================================================
     2. PROCEDURAL 3D LIQUID CHROME SPHERE (CUSTOM GLSL SHADERS)
     ========================================================================== */
  function initLiquidChromeSphere() {
    const canvas = document.getElementById('hero-3d-canvas');
    const wrapper = document.getElementById('sphere-wrapper');
    if (!canvas || !wrapper) return;

    const width = wrapper.clientWidth || 400;
    const height = wrapper.clientHeight || 400;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.3;

    // --- GLSL Vertex Shader with Simplex Noise 3D ---
    const vertexShader = `
      uniform float uTime;
      uniform float uDisplacement;
      uniform float uFrequency;
      
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying float vNoise;
      varying vec3 vWorldPosition;

      // Simplex 3D noise generator
      vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
      vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v){
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

        i = mod(i, 289.0 );
        vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
      }

      void main() {
        vNormal = normalize(normalMatrix * normal);
        
        // Compute multi-frequency simplex noise
        float noise = snoise(position * uFrequency + vec3(uTime * 0.45));
        noise += 0.45 * snoise(position * (uFrequency * 2.0) - vec3(uTime * 0.6));
        vNoise = noise;

        // Displace position along vertex normal
        vec3 displacedPosition = position + normal * (noise * uDisplacement);

        vec4 mvPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(displacedPosition, 1.0)).xyz;

        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    // --- GLSL Fragment Shader with Fresnel, Dispersion & Liquid Titanium ---
    const fragmentShader = `
      uniform float uTime;
      uniform vec3 uColorBase;
      uniform vec3 uColorGlow;
      uniform vec3 uColorIridescent;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying float vNoise;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Dynamic Fresnel Reflection
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.8);

        // Specular highlight
        vec3 lightDir = normalize(vec3(1.2, 1.8, 1.5));
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 32.0);

        // Iridescent color shift along surface contours
        vec3 chrome = mix(uColorBase, uColorIridescent, vNoise * 0.5 + 0.5);
        chrome = mix(chrome, uColorGlow, fresnel * 0.85);

        // Add specular liquid reflection flare
        vec3 finalColor = chrome + vec3(spec * 0.7);

        // Edge radiance
        finalColor += uColorGlow * pow(fresnel, 3.5) * 1.4;

        gl_FragColor = vec4(finalColor, 0.94);
      }
    `;

    // Shader Uniforms
    const uniforms = {
      uTime: { value: 0 },
      uDisplacement: { value: 0.18 },
      uFrequency: { value: 1.15 },
      uColorBase: { value: new THREE.Color(0x0a0f1d) },       // Deep Obsidian Void
      uColorIridescent: { value: new THREE.Color(0x818cf8) }, // Liquid Mercury / Violet
      uColorGlow: { value: new THREE.Color(0x38bdf8) }        // Electric Sapphire Glow
    };

    // Sphere Geometry (High density for smooth vertex displacement)
    const segments = isMobile ? 48 : 80;
    const geometry = new THREE.SphereGeometry(1.48, segments, segments);

    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: uniforms,
      transparent: true
    });

    const sphereMesh = new THREE.Mesh(geometry, material);
    scene.add(sphereMesh);

    // Subtle Outer Orbital Halo Ring
    const haloGeo = new THREE.TorusGeometry(1.88, 0.008, 16, isMobile ? 48 : 96);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.rotation.x = Math.PI / 2.8;
    scene.add(haloMesh);

    // Second Thin Violet Gimbal Ring
    const haloGeo2 = new THREE.TorusGeometry(2.1, 0.006, 16, isMobile ? 48 : 96);
    const haloMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.28
    });
    const haloMesh2 = new THREE.Mesh(haloGeo2, haloMat2);
    haloMesh2.rotation.y = Math.PI / 3.5;
    scene.add(haloMesh2);

    // --- Interactive Drag Rotation with Inertia & Velocity Perturbation ---
    let isDragging = false;
    let prevPos = { x: 0, y: 0 };
    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetDisplacement = 0.18;
    let currentDisplacement = 0.18;

    function getCoords(e) {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    }

    function onPointerDown(e) {
      isDragging = true;
      const c = getCoords(e);
      prevPos = { x: c.x, y: c.y };
      wrapper.style.cursor = 'grabbing';
      targetDisplacement = 0.32; // Liquid ripple expands on touch/click
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const c = getCoords(e);
      const deltaX = c.x - prevPos.x;
      const deltaY = c.y - prevPos.y;

      targetRotY += deltaX * 0.008;
      targetRotX += deltaY * 0.008;

      // Mouse velocity amplifies noise displacement dynamically
      const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      targetDisplacement = Math.min(0.42, 0.18 + velocity * 0.012);

      prevPos = { x: c.x, y: c.y };
    }

    function onPointerUp() {
      isDragging = false;
      wrapper.style.cursor = 'grab';
      targetDisplacement = 0.18; // Settles back to silky liquid mercury
    }

    wrapper.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    wrapper.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Responsive Canvas Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(wrapper);

    // Animation Render Loop
    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Update shader uniforms
      uniforms.uTime.value = elapsed;

      // Smooth displacement lerp
      currentDisplacement += (targetDisplacement - currentDisplacement) * 0.06;
      uniforms.uDisplacement.value = currentDisplacement;

      if (!isDragging) {
        // Natural idle rotation drift
        targetRotY += 0.005;
        targetRotX += Math.sin(elapsed * 0.6) * 0.0015;
      }

      // Smooth damping lerp for rotation
      rotX += (targetRotX - rotX) * 0.08;
      rotY += (targetRotY - rotY) * 0.08;

      sphereMesh.rotation.x = rotX;
      sphereMesh.rotation.y = rotY;

      haloMesh.rotation.z = elapsed * 0.018;
      haloMesh2.rotation.x = elapsed * 0.012;

      renderer.render(scene, camera);
    }
    animate();
  }

  // Lifecycle initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initBackgroundParticles();
      initLiquidChromeSphere();
    });
  } else {
    initBackgroundParticles();
    initLiquidChromeSphere();
  }

})();
