// Lista de IPs permitidas (simulación para demo)
const allowedIPs = ["67.166.186.16", "127.0.0.1", "::1", "localhost"]

// Simulación de verificación de IP (en producción esto se haría en el servidor)
function checkIPAccess() {
  // Para demo, permitimos acceso. En producción, esto se verificaría con el servidor
  const isAllowed = true // Cambiar a false para probar el bloqueo

  if (!isAllowed) {
    document.getElementById("mainContent").style.display = "none"
    document.getElementById("accessDeniedModal").style.display = "flex"
    return false
  }

  document.getElementById("mainContent").style.display = "block"
  document.getElementById("accessDeniedModal").style.display = "none"
  return true
}

// Datos expandidos de dispositivos
const generateExpandedDeviceData = () => {
  const brands = [
    "XIAOMI",
    "SAMSUNG",
    "APPLE",
    "MOTOROLA",
    "REALME",
    "OPPO",
    "VIVO",
    "GOOGLE",
    "ASUS",
    "ONEPLUS",
    "HUAWEI",
    "SONY",
    "ZTE",
    "TECNO",
    "INFINIX",
    "HONOR",
    "REDMI",
    "POCO",
    "NOTHING",
    "FAIRPHONE",
    "BLACKBERRY",
    "NOKIA",
  ]

  const deviceData = {}

  brands.forEach((brand) => {
    deviceData[brand] = {}

    // Generar múltiples modelos por marca
    for (let i = 1; i <= 350; i++) {
      const modelName = `${brand} Model ${i}`
      const refreshRate = [60, 90, 120, 144, 165][Math.floor(Math.random() * 5)]

      // Calcular sensibilidades basadas en la tasa de refresco
      const baseMultiplier = refreshRate / 60
      const brandMultiplier = getBrandMultiplier(brand)

      deviceData[brand][modelName] = {
        base: {
          general: Math.round((120 + Math.random() * 80) * baseMultiplier * brandMultiplier),
          redDot: Math.round((45 + Math.random() * 35) * baseMultiplier * brandMultiplier),
          scope2x: Math.round((75 + Math.random() * 40) * baseMultiplier * brandMultiplier),
          scope4x: Math.round((65 + Math.random() * 35) * baseMultiplier * brandMultiplier),
          buttonSize: Math.round((35 + Math.random() * 20) * brandMultiplier),
          dpi: Math.round((350 + Math.random() * 200) * brandMultiplier),
        },
        refreshRate,
        hackLevel: Math.floor(Math.random() * 5) + 1,
      }
    }
  })

  return deviceData
}

const getBrandMultiplier = (brand) => {
  const multipliers = {
    ASUS: 1.15,
    APPLE: 1.12,
    SAMSUNG: 1.08,
    ONEPLUS: 1.1,
    GOOGLE: 1.09,
    SONY: 1.07,
    XIAOMI: 1.05,
    REALME: 1.04,
    OPPO: 1.03,
    VIVO: 1.02,
    MOTOROLA: 1.01,
    HUAWEI: 1.06,
    ZTE: 1.03,
    TECNO: 0.98,
    INFINIX: 0.97,
    HONOR: 1.04,
    REDMI: 1.02,
    POCO: 1.08,
    NOTHING: 1.06,
    FAIRPHONE: 0.95,
    BLACKBERRY: 0.92,
    NOKIA: 0.94,
  }
  return multipliers[brand] || 1.0
}

const getHackLevelName = (level) => {
  const names = ["Novato", "Intermedio", "Avanzado", "Experto", "Elite"]
  return names[level - 1] || "Desconocido"
}

const getHackLevelClass = (level) => {
  return `hack-level-${level}`
}

// Variables globales
let deviceData = {}
let selectedBrand = ""
let selectedModel = ""

// Elementos del DOM
const brandSelect = document.getElementById("brandSelect")
const modelSelect = document.getElementById("modelSelect")
const generateBtn = document.getElementById("generateBtn")
const loadingAnimation = document.getElementById("loadingAnimation")
const resultsCard = document.getElementById("resultsCard")

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  // Verificar acceso IP
  if (!checkIPAccess()) {
    return
  }

  // Generar datos de dispositivos
  deviceData = generateExpandedDeviceData()

  // Poblar select de marcas
  populateBrandSelect()

  // Event listeners
  brandSelect.addEventListener("change", handleBrandChange)
  modelSelect.addEventListener("change", handleModelChange)
  generateBtn.addEventListener("click", generateSensitivity)
})

function populateBrandSelect() {
  const brands = Object.keys(deviceData).sort()

  brands.forEach((brand) => {
    const option = document.createElement("option")
    option.value = brand
    option.textContent = brand
    brandSelect.appendChild(option)
  })

  // Actualizar contador de marcas
  document.getElementById("brandCount").textContent = `${brands.length} Marcas`
}

function handleBrandChange(e) {
  selectedBrand = e.target.value
  selectedModel = ""

  // Limpiar y poblar select de modelos
  modelSelect.innerHTML = '<option value="">Seleccionar modelo...</option>'
  modelSelect.disabled = !selectedBrand

  if (selectedBrand) {
    const models = Object.keys(deviceData[selectedBrand]).sort()

    models.forEach((model) => {
      const option = document.createElement("option")
      option.value = model
      option.textContent = model
      modelSelect.appendChild(option)
    })
  }

  updateGenerateButton()
  hideResults()
}

function handleModelChange(e) {
  selectedModel = e.target.value
  updateGenerateButton()
  hideResults()
}

function updateGenerateButton() {
  generateBtn.disabled = !selectedBrand || !selectedModel
}

function hideResults() {
  resultsCard.style.display = "none"
}

function generateSensitivity() {
  if (!selectedBrand || !selectedModel) return

  // Mostrar animación de carga
  loadingAnimation.style.display = "block"
  hideResults()

  // Simular procesamiento
  setTimeout(() => {
    const device = deviceData[selectedBrand][selectedModel]
    const hackMultiplier = 1 + device.hackLevel * 0.05

    // Calcular sensibilidades optimizadas
    const sensitivity = {
      general: Math.round(device.base.general * hackMultiplier),
      redDot: Math.round(device.base.redDot * hackMultiplier),
      scope2x: Math.round(device.base.scope2x * hackMultiplier),
      scope4x: Math.round(device.base.scope4x * hackMultiplier),
      buttonSize: device.base.buttonSize,
      dpi: device.base.dpi,
      refreshRate: device.refreshRate,
      hackLevel: device.hackLevel,
    }

    displayResults(sensitivity)

    // Ocultar animación de carga
    loadingAnimation.style.display = "none"
  }, 1500)
}

function displayResults(sensitivity) {
  // Actualizar nombre del dispositivo
  document.getElementById("deviceName").textContent = selectedModel

  // Actualizar badges
  const hackBadge = document.getElementById("hackBadge")
  hackBadge.textContent = getHackLevelName(sensitivity.hackLevel)
  hackBadge.className = `hack-badge ${getHackLevelClass(sensitivity.hackLevel)}`

  document.getElementById("refreshBadge").textContent = `${sensitivity.refreshRate}Hz`

  // Actualizar valores de sensibilidad
  document.getElementById("generalValue").textContent = sensitivity.general
  document.getElementById("redDotValue").textContent = sensitivity.redDot
  document.getElementById("scope2xValue").textContent = sensitivity.scope2x
  document.getElementById("scope4xValue").textContent = sensitivity.scope4x
  document.getElementById("buttonSizeValue").textContent = sensitivity.buttonSize
  document.getElementById("dpiValue").textContent = sensitivity.dpi

  // Actualizar información de tasa de refresco
  document.getElementById("refreshRateInfo").textContent = sensitivity.refreshRate

  // Mostrar resultados
  resultsCard.style.display = "block"

  // Scroll suave hacia los resultados
  resultsCard.scrollIntoView({ behavior: "smooth", block: "start" })
}

// Efectos visuales adicionales
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor")
  if (cursor) {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  }
})

// Optimización para pantallas 4K
function optimizeFor4K() {
  const is4K = window.screen.width >= 3840 || window.screen.height >= 2160
  const isHighDPI = window.devicePixelRatio >= 2

  if (is4K || isHighDPI) {
    document.body.classList.add("high-resolution")

    // Ajustar tamaños de fuente para 4K
    if (is4K) {
      document.documentElement.style.fontSize = "24px"
    }
  }
}

// Ejecutar optimización al cargar
window.addEventListener("load", optimizeFor4K)
window.addEventListener("resize", optimizeFor4K)
