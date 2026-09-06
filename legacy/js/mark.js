// The hero mark: the Flintgrab diamond, extruded and lit. The only WebGL on the page.
//
// Matte machined metal rather than chrome or glass — DESIGN.md §1.1 calls the atmosphere "warm
// industrial", and §13.1 bans glows and glassmorphism outright.

const host = document.querySelector('.hero-mark')

function token(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

function webglAvailable() {
  try {
    return Boolean(document.createElement('canvas').getContext('webgl2') ?? document.createElement('canvas').getContext('webgl'))
  } catch {
    return false
  }
}

async function boot() {
  if (!host) return
  if (!webglAvailable()) return void host.classList.add('no-webgl')

  try {
    const THREE = await import('three')
    render(THREE)
  } catch {
    // A blocked CDN is not a broken page — the static mark says the same thing.
    host.classList.add('no-webgl')
  }
}

function render(THREE) {
  const canvas = host.querySelector('canvas')
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
  camera.position.set(0, 0, 6.4)

  // The mark's own outline, taken straight from the brand kit's 64-unit grid: (x - 33.5) / 20 and
  // (34 - y) / 20 recentres it on the origin and flips y, since SVG counts down and three counts up.
  const OUTLINE = [
    [-1.075, 1.4], [1.075, 1.4], [0.675, 0.7], [-0.275, 0.7], [-0.275, 0.3], [0.725, 0.3],
    [0.375, -0.35], [-0.275, -0.35], [-0.275, -0.85], [-0.675, -1.4], [-1.075, -0.85]
  ]

  const shape = new THREE.Shape()
  shape.moveTo(...OUTLINE[0])
  for (const point of OUTLINE.slice(1)) shape.lineTo(...point)
  shape.closePath()

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.34,
    bevelEnabled: true,
    bevelThickness: 0.055,
    bevelSize: 0.045,
    bevelSegments: 4,
    curveSegments: 4
  })
  geometry.center()

  // Colours are read from the stylesheet rather than repeated here, so tokens.css stays the one
  // place the palette is defined.
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: new THREE.Color(token('--accent')), roughness: 0.42, metalness: 0.5 })
  )
  scene.add(mesh)

  scene.add(new THREE.AmbientLight(new THREE.Color(token('--surface-active')), 2.2))

  const key = new THREE.DirectionalLight(new THREE.Color(token('--text-primary')), 2.6)
  key.position.set(2.4, 3, 4)
  scene.add(key)

  const rim = new THREE.DirectionalLight(new THREE.Color(token('--accent-hover')), 1.5)
  rim.position.set(-3, -1.6, -2)
  scene.add(rim)

  const pointer = { x: 0, y: 0 }
  window.addEventListener('pointermove', (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1
  })

  function resize() {
    const { width, height } = host.getBoundingClientRect()
    if (!width || !height) return
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  new ResizeObserver(resize).observe(host)
  resize()

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let frame = 0 // Non-zero means a loop is already scheduled; guards against starting a second one.
  let t = 0

  function tick() {
    frame = requestAnimationFrame(tick)
    t += 1 / 60

    // A letterform must never turn past its own edge — spun a full revolution an F reads mirrored,
    // then backwards. It sways within a range that keeps it legible from every frame.
    const sway = still ? 0 : Math.sin(t * 0.55) * 0.38
    mesh.rotation.y += (sway + pointer.x * 0.3 - mesh.rotation.y) * 0.06
    mesh.rotation.x += (pointer.y * 0.24 - mesh.rotation.x) * 0.05
    mesh.rotation.z += ((still ? 0 : Math.sin(t * 0.4) * 0.05) - mesh.rotation.z) * 0.05

    renderer.render(scene, camera)
  }

  function stop() {
    cancelAnimationFrame(frame)
    frame = 0
  }

  // A marketing page has no business spinning a GPU while someone reads the footer.
  new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!frame) tick()
      } else {
        stop()
      }
    },
    { threshold: 0 }
  ).observe(host)

  window.addEventListener('pagehide', stop)
}

void boot()
