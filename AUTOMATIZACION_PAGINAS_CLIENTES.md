# Automatización de Páginas de Clientes - GUEPP

**Fecha:** 28 de noviembre de 2025  
**Proyecto:** GUEPP (Linktree-style portfolio cards)  
**Autor:** Análisis de estructura existente

---

## 📋 Índice

1. [Análisis Actual](#análisis-actual)
2. [Pasos Manuales Identificados](#pasos-manuales-identificados)
3. [Opciones de Automatización](#opciones-de-automatización)
4. [Recomendación](#recomendación)
5. [Roadmap de Implementación](#roadmap-de-implementación)
6. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## Análisis Actual

### Estructura Existente

Tu proyecto está bien **componentizado**:
- **Componentes reutilizables:** `Carrusel`, `CardAlias`, `BtnRedes`, `Descripcion`, `Footer`
- **Subcomponentes:** `Carrusel`, `BtnInfo`
- **Patrón:** Cada página cliente es un contenedor que importa componentes y pasa datos como objetos JavaScript

### Patrón de Página (Ej: MuyLibriana.jsx)

```jsx
// 1. Importar componentes
import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
// ... etc

// 2. Definir datos (objeto estático)
const datos = { negocio: "...", descripcion: "...", ... }
const redes = { instagram: "...", whatsapp: "...", ... }
const colors = { fondo: "#...", botones: "#...", ... }

// 3. Renderizar con componentes
const MuyLibriana = () => (
  <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
    <Carrusel images={[Img1, Img2, Img3]} />
    <Descripcion datos={datos} colors={colors} />
    <CardAlias datos={datos} colors={colors} />
    <BtnRedes redes={redes} color={colors.botones} />
    <Footer />
  </div>
)
```

### Puntos Críticos

✅ **Lo que ya automatizaste bien:**
- Componentes reutilizables y flexibles
- Props genéricas (datos, colors, redes)
- Sistema de rutas centralizado

❌ **Lo que aún es manual:**
1. Crear archivo `.jsx` para cada cliente (copiar + modificar datos)
2. Cargar imágenes en `src/assets/{nombreCliente}/` y importarlas
3. Agregar ruta en `router.jsx`
4. Generar variantes de datos (datos, redes, colors)

---

## Pasos Manuales Identificados

| Paso | Tiempo Est. | Automatizable |
|------|------------|---------------|
| 1. Crear archivo página `.jsx` | 2 min | ✅ Sí |
| 2. Importar imágenes | 3 min | ✅ Sí (con API) |
| 3. Copiar/modificar datos | 5 min | ✅ Sí |
| 4. Agregar ruta en router.jsx | 1 min | ✅ Sí |
| 5. Subir al host | 2 min | ⚠️ Parcial |
| **Total por cliente** | **~13 min** | |

---

## Opciones de Automatización

### Opción 1️⃣: CMS Estático + Generador (RECOMENDADO PARA EMPEZAR)

**Nivel de complejidad:** Bajo-Medio  
**Tiempo de implementación:** 3-5 horas  
**Costo:** 0 (host actual sirve)

#### Concepto
- Archivo JSON o YAML con datos de clientes
- Script que genera componentes `.jsx` + router dinámico
- Ejecutar `npm run generate` antes de build

#### Estructura

```
src/
├── data/
│   └── clientes.json (central de datos)
├── pages/
│   └── [generadas dinámicamente]
├── scripts/
│   └── generatePages.js (genera archivos)
└── router/
    └── router.jsx (generado)
```

#### Ventajas
- ✅ Rápido de implementar
- ✅ Sin backend necesario
- ✅ Todo sigue siendo estático (óptimo para hosting simple)
- ✅ Host actual (webHost2) funciona perfecto
- ✅ Control total sobre datos

#### Desventajas
- ❌ Requiere rebuild para agregar cliente
- ❌ No edición en tiempo real
- ❌ Requiere acceso SSH/CLI

#### Ejemplo de `clientes.json`

```json
{
  "clientes": [
    {
      "id": "muylibriana",
      "slug": "/muylibriana",
      "nombre": "Muy Libriana",
      "negocio": "Muy Libriana",
      "descripcion": "Aromas y producciones manuales...",
      "datos": {
        "nombre": "Daniela Aramburu",
        "alias": "muy.libriana",
        "cvu": "0000003100091071440598"
      },
      "redes": {
        "instagram": "https://www.instagram.com/muylibriana/",
        "whatsapp": "https://wa.me/5493571684626",
        "correo": "mailto:aramburu1998@gmail.com",
        "ubicación": "https://maps.app.goo.gl/q6xsvSnWHKkbHFTE9"
      },
      "colors": {
        "fondo": "#b5ffff",
        "botones": "#734f96",
        "cardbody": "#e0d4f7",
        "texto": "#000"
      },
      "images": ["logo.png", "foto1.png", "foto2.png"]
    }
  ]
}
```

---

### Opción 2️⃣: Panel Admin + Backend (ESCALABLE)

**Nivel de complejidad:** Alto  
**Tiempo de implementación:** 15-30 horas  
**Costo:** Backend necesario (Node.js, Python, etc.)

#### Concepto
- Panel admin para crear/editar clientes
- Backend que guarda datos en BD (MongoDB, Firebase, etc.)
- Frontend consume API y renderiza dinámicamente
- Edición en tiempo real

#### Requisitos
- Backend propio o Firebase/Supabase
- Base de datos
- Autenticación

#### Ventajas
- ✅ Interfaz gráfica intuitiva
- ✅ Sin código manual
- ✅ Escalable (miles de clientes)
- ✅ Edición en tiempo real

#### Desventajas
- ❌ Complejidad alta
- ❌ Requiere backend
- ❌ Host debe soportar backend (webHost2 solo es estático)
- ❌ Mayor costo de infraestructura
- ❌ Requiere mantenimiento

---

### Opción 3️⃣: Panel Admin + Firebase (INTERMEDIO)

**Nivel de complejidad:** Medio  
**Tiempo de implementación:** 8-12 horas  
**Costo:** Gratuito hasta cierto uso (Firebase free tier)

#### Concepto
- Usa Firebase Realtime DB o Firestore (backend "serverless")
- Panel admin React en la misma app
- Datos se syncronizan en tiempo real
- Hosting en Vercel o similar (soporta dinámico)

#### Ventajas
- ✅ Sin servidor propio
- ✅ Escalable
- ✅ Edición en tiempo real
- ✅ Menos configuración que backend tradicional

#### Desventajas
- ❌ No funciona en webHost2 (requiere hosting dinámico)
- ❌ Dependencia de Firebase
- ❌ Complejidad media

---

### Opción 4️⃣: Script Automatizado + Git (MINIMALISTA)

**Nivel de complejidad:** Bajo  
**Tiempo de implementación:** 1-2 horas  
**Costo:** 0

#### Concepto
- Crear un script CLI interactivo
- Hacer preguntas (nombre, colores, redes, etc.)
- Generar todo automáticamente

#### Ejemplo de uso

```bash
npm run new-client
> Nombre del cliente: Muy Libriana
> Slug (URL): muylibriana
> Color fondo: #b5ffff
> Color botones: #734f96
> ✅ Cliente creado en src/pages/MuyLibriana.jsx
> ✅ Ruta añadida en router.jsx
> ✅ Folder assets creado en src/assets/muyLibriana/
```

#### Ventajas
- ✅ Muy rápido de implementar
- ✅ Reduce pasos manuales a 1 comando
- ✅ No requiere backend
- ✅ Interactivo

#### Desventajas
- ❌ Aún requiere CLI
- ❌ No edición posterior sin CLI

---

## Recomendación

### Para tu caso actual → **Opción 1 + Opción 4**

**Por qué:**
1. **Ya tienes:** Componentes reutilizables, host estático (webHost2)
2. **Necesitas:** Automatizar, pero manteniendo simplicidad
3. **Mejor relación tiempo/valor:** Implementar en 4-6 horas

### Estrategia Recomendada

#### Fase 1 (2-3 horas): Script CLI + Generador de Archivos

```bash
npm run create-client -- --name "Mi Negocio" --slug "mi-negocio" --colors "#fff,#000"
```

Genera:
- `src/pages/MiNegocio.jsx` (con template)
- Agrupa ruta en `router.jsx`
- Crea carpeta en `src/assets/mi-negocio/`

#### Fase 2 (1-2 horas): JSON Central

Archivo `src/data/clientes.json` que centraliza todos los datos.  
Script que lee JSON y valida antes de generar.

#### Fase 3 (futuro): Panel Admin Opcional

Si necesitás edición en tiempo real, migrar a Firebase + panel.

---

## Roadmap de Implementación

### 📌 Semana 1: MVP (Mínimo Viable)

**Objetivo:** Reducir tiempo de nuevo cliente a ~2 minutos

#### Tarea 1: Crear script `create-client.js`

**Archivo:** `scripts/create-client.js`

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function createClient() {
  console.log('\n🚀 CREAR NUEVO CLIENTE GUEPP\n');

  const slug = await question('Slug (URL, ej: mi-negocio): ');
  const nombre = await question('Nombre del negocio: ');
  const descripcion = await question('Descripción breve: ');
  const colorFondo = await question('Color fondo (hex, ej: #b5ffff): ');
  const colorBotones = await question('Color botones (hex, ej: #734f96): ');

  // Generar nombre de componente (capitalizado)
  const componentName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

  // 1. Crear carpeta de assets
  const assetDir = path.join(__dirname, `../src/assets/${slug}`);
  if (!fs.existsSync(assetDir)) {
    fs.mkdirSync(assetDir, { recursive: true });
    console.log(`✅ Carpeta creada: src/assets/${slug}/`);
  }

  // 2. Crear archivo página
  const pageTemplate = `import React from 'react'
import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"${nombre}",
  descripcion:"${descripcion}",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  // instagram:"https://www.instagram.com/usuario/",
  // whatsapp:"https://wa.me/5491234567890",
  // correo:"mailto:email@example.com"
}

const colors={
  fondo:"${colorFondo}",
  botones:"${colorBotones}",
  cardbody:"#f0f0f0"
}

const ${componentName} = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        {/* Importar imágenes: import Img1 from '../assets/${slug}/logo.png' */}
        {/* <Carrusel images={[Img1, Img2, Img3]} /> */}
      </div>
      <Descripcion datos={datos} colors={colors} />
      {/* <CardAlias datos={datos} colors={colors} /> */}
      <BtnRedes redes={redes} color={colors.botones} />
      <Footer />
    </div>
  )
}

export default ${componentName}
`;

  const pagePath = path.join(__dirname, `../src/pages/${componentName}.jsx`);
  fs.writeFileSync(pagePath, pageTemplate);
  console.log(`✅ Página creada: src/pages/${componentName}.jsx`);

  // 3. Actualizar router.jsx
  const routerPath = path.join(__dirname, '../src/router/router.jsx');
  let routerContent = fs.readFileSync(routerPath, 'utf-8');

  const importLine = `import ${componentName} from "../pages/${componentName}";`;
  const routeLine = `    {
        path: "/${slug}",
        element: <${componentName} />,
    },`;

  // Agregar import (antes de createBrowserRouter)
  if (!routerContent.includes(importLine)) {
    routerContent = routerContent.replace(
      'export const router',
      `${importLine}\n\nexport const router`
    );
  }

  // Agregar ruta (antes del cierre del array)
  if (!routerContent.includes(`"/${slug}"`)) {
    routerContent = routerContent.replace(
      '    }\n]);',
      `    },\n    {\n        path: "/${slug}",\n        element: <${componentName} />,\n    }\n]);`
    );
  }

  fs.writeFileSync(routerPath, routerContent);
  console.log(`✅ Ruta agregada: /${slug}`);

  console.log(`\n✨ Cliente creado exitosamente!\n`);
  console.log(`📋 Pasos siguientes:`);
  console.log(`  1. Copiar imágenes a: src/assets/${slug}/`);
  console.log(`  2. Editar: src/pages/${componentName}.jsx`);
  console.log(`  3. Descomenta líneas Carrusel, CardAlias, etc.`);
  console.log(`  4. Agregar datos en redes = {...}`);
  console.log(`\n`);

  rl.close();
}

createClient().catch(console.error);
```

#### Agregar a `package.json`

```json
{
  "scripts": {
    "create-client": "node scripts/create-client.js",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

#### Uso

```bash
npm run create-client
# Responder preguntas interactivamente
# ✅ Todo generado automáticamente
```

---

### 📌 Semana 2: JSON Central (Opcional pero Recomendado)

**Archivo:** `src/data/clientes.json`

Centraliza todos los datos en un solo lugar.

```json
{
  "clientes": [
    {
      "id": "muylibriana",
      "slug": "/muylibriana",
      "nombre": "Muy Libriana",
      "descripcion": "Aromas...",
      "datos": { "nombre": "Daniela", "alias": "muy.libriana", "cvu": "..." },
      "redes": { "instagram": "...", "whatsapp": "..." },
      "colors": { "fondo": "#b5ffff", "botones": "#734f96" },
      "images": ["logo.png", "foto1.png", "foto2.png"]
    }
  ]
}
```

**Ventaja:** Generar páginas directamente desde JSON (sin CLI después).

---

### 📌 Semana 3+: Panel Admin (Si lo necesitas)

Migrar a Firebase + componente React que permita edición en tiempo real.  
Requiere cambiar hosting a Vercel/Netlify.

---

## Preguntas Frecuentes

### ¿Necesito cambiar de host?

**Respuesta:** Para Opción 1 (generador estático) → **NO**, webHost2 funciona perfecto.

Para Opción 2/3 (backend/Firebase) → **SÍ**, necesitarás hosting dinámico (Vercel, Netlify, heroku).

**Recomendación:** Mantente en webHost2 por ahora (es simple y funciona). Migra si creces.

### ¿Qué es webHost2? ¿Sirve?

webHost2 (asumiendo es hosting estático de DomWeb) funciona para:
- ✅ Sitios estáticos (HTML, CSS, JS, React compilado)
- ✅ Vite build (tu setup actual)
- ❌ Backend Node.js, Python, etc.
- ❌ Bases de datos dinámicas
- ❌ APIs

**Para tu caso:** Perfecto por ahora.

### ¿Puedo tener panel admin sin backend?

**Parcialmente.** Opciones:
1. **Componente React + localStorage:** Edita en navegador, guarda en JSON (exportar JSON manualmente)
2. **Firebase:** Backend serverless (pero requiere hosting dinámico)
3. **Google Sheets API:** Usa una hoja de cálculo como "base de datos"

**Más fácil:** Mantener JSON + CLI script por ahora.

### ¿Cuánto tiempo ahorro?

**Antes:** ~13 min por cliente (crear archivo, copiar datos, agregar ruta, subir)

**Con Script CLI:** ~2-3 min (preguntas + previsualización)

**Con Panel Admin:** ~30 seg (form web) pero requiere backend

### ¿Puedo implementar esto sin afectar lo existente?

**SÍ 100%.**
- El script solo genera nuevos archivos
- No toca componentes existentes
- Las páginas actuales siguen igual

---

## Implementación Rápida (HOY)

### Paso 1: Copiar script generador

```bash
# En tu terminal, dentro del proyecto
mkdir -p scripts
# Crear archivo scripts/create-client.js con el código arriba
```

### Paso 2: Agregar comando a package.json

```bash
npm run create-client
```

### Paso 3: Probar

```bash
npm run create-client
# Responder: "mi-negocio", "Mi Negocio", "Descripción", "#fff", "#000"
# ✅ src/pages/MiNegocio.jsx creado
# ✅ Ruta agregada
```

---

## Siguientes Pasos

1. **¿Quieres que implemente el script generador ahora?**  
   Responde y lo crearé en el proyecto.

2. **¿Prefieres JSON central primero?**  
   Migro datos actuales a JSON.

3. **¿Quieres explorar Firebase después?**  
   Diseñamos panel admin para edición en tiempo real.

---

## Referencias / Recursos

- **Generadores estáticos:** Vite, Next.js, Hugo
- **Firebase:** https://firebase.google.com/
- **Vercel (hosting dinámico):** https://vercel.com/
- **Node.js script ejecutable:** `#!/usr/bin/env node` en header de JS

---

**Última actualización:** 28 de noviembre de 2025
