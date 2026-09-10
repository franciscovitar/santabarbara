# Engineering Upgrade Plan — santabarbara

> **Meta:** llevar el repo a **BUENO+** sin rediseño.
> **Foco:** correctness del buscador, catálogos de contenido, client boundaries, dependencia MapKit muerta y tooling.

## Contrato para la IA ejecutora

Antes de modificar:
- baseline desktop/mobile de `/`, `/indicaciones`, `/obras-sociales`, `/preguntas-frecuentes`;
- tests manuales/automatizados de búsqueda: vacío, match, sin resultados;
- preservar logo, colores, imágenes, coberturas, FAQs, horarios, teléfonos, WhatsApp, mapa, Motion, responsive y URLs;
- no corregir contenido médico/comercial durante un refactor técnico sin aprobación.

---

# FASE 1 — P0: corregir modelo FAQ/buscador

## `components/home/PreguntasFrecuentes.jsx`

Problema confirmado:
- `respuesta` mezcla strings con React nodes;
- `normalizeString(item.respuesta)` asume string y puede fallar;
- primera respuesta usa `dangerouslySetInnerHTML` innecesariamente;
- render puede generar `<p>` anidado inválido.

## Target

```ts
interface Faq {
  id: string;
  question: string;
  searchText: string;
  answer: ReactNode | structured data;
}
```

## Pasos
1. Mover FAQs a `data/faqs.ts`.
2. Hacer `searchText` siempre string normalizable.
3. Reemplazar HTML crudo por JSX/data segura (`<br>`, `<a>`).
4. Crear normalizador puro accent-insensitive.
5. IDs estables, no index keys.
6. Renderizar answer sin wrappers HTML inválidos.

## Tests
búsqueda vacía, por pregunta, por respuesta, acentos, FAQ con link/mapa, sin resultados y jamás throw.

---

# FASE 2 — pages server + search client islands

## Archivos
- `app/preguntas-frecuentes/page.js`
- `app/obras-sociales/page.js`

Hoy toda la page es client por `searchTerm`.

## Target

```text
components/search/FaqSearch.client.tsx
components/search/CoverageSearch.client.tsx
```

- page server por default;
- input + filtro/lista como client island;
- Header/Nav/Contacto/Footer fuera del boundary;
- eliminar import muerto de ObrasSociales en FAQ page.

No agregar state global ni query params sin requisito de producto.

---

# FASE 3 — coberturas/indicaciones como datos

## `Coberturas.jsx`
- ~100 items inline;
- filtro/render mezclados;
- index keys;
- existen títulos repetidos legítimos (`OSPIM`) con significados distintos.

## Target

```text
data/coverages.ts
lib/normalize-search.ts
```

Cada cobertura con ID explícito. Preservar orden/texto exactos. **No deduplicar por título.**

## `Indicaciones.jsx`
Mover catálogo a `data/indications.ts` si el contenido repetitivo lo justifica, manteniendo texto médico exacto.

---

# FASE 4 — Home FAQ vs catálogo completo

## `components/home/Preguntas.jsx`

1. Comparar cada FAQ destacada con catálogo completo.
2. Si copy es el mismo, Home referencia IDs del catálogo.
3. Si hay variante deliberada, modelar `homeAnswer/shortAnswer` explícitamente.
4. No mantener dos strings sin relación que puedan divergir silenciosamente.

---

# FASE 5 — MapKit/dependencies

## `components/home/Maps.jsx`
La UI usa imagen estática + Google Maps; `react-mapkit` no aparece usado.

1. Confirmar cero imports globales.
2. Si está huérfano, eliminar `react-mapkit`.
3. **No implementar MapKit** solo porque está instalado.
4. Mantener mapa estático/link actual.
5. Agregar `alt`, `_blank` y `rel` correctos.
6. Medir/optimizar `mapa.png` (~1.9 MB) sin perder legibilidad.

---

# FASE 6 — assets

Inventariar consumidores de:
- `fachada.png` (~3.5 MB) / `fachada.jpg` (~0.35 MB);
- `mapa.png`;
- variantes Servicio Penitenciario.

Usar import graph + SHA. Eliminar duplicados muertos antes de recomprimir. No cambiar PNG→JPG si transparencia/calidad aporta.

---

# FASE 7 — Navbar

Fortaleza: scroll listener/cleanup ya correcto.

Deuda:
- state + refs/classList duplican autoridad;
- nav desktop/mobile duplicada;
- `<i type="button">`;
- internal/external links mezclados.

## Target
`NAV_ITEMS` único con `type: internal | external`, `isMenuOpen` único, `<button aria-expanded>`, mismo threshold 80px y visual exacto. Preservar Resultados Online externo.

---

# FASE 8 — package/TypeScript/gates

Estado: `my-app`, Next14.2.3/React18/ESLint8, sin TS/tests/check/CI.

1. Corregir package metadata y fijar Node/package manager.
2. Matriz de dependencies; verificar Tailwind/PostCSS.
3. TypeScript primero en FAQ/Coverage/Indication models y search helpers.
4. `eslint .`, `tsc --noEmit`, unit search tests, E2E rutas/nav, build.
5. Crear `npm run check` + CI.
6. Upgrade Next/React separado y al final.

---

# FASE 9 — SEO/a11y/performance

- `lang="es"/"es-AR"`;
- canonical/metadata con dominio real;
- search state accesible (`label`, focus, `aria-live` si aporta);
- alt/links/focus;
- medir assets/CWV antes/después.

---

# Arquitectura target

```text
app/
  page.tsx
  preguntas-frecuentes/page.tsx
  obras-sociales/page.tsx
  indicaciones/page.tsx
components/search/
  FaqSearch.client.tsx
  CoverageSearch.client.tsx
data/
  faqs.ts
  coverages.ts
  indications.ts
lib/
  normalize-search.ts
```

Sin backend/DB/CMS/state manager.

---

# Orden de PRs

1. baseline + search characterization + import graph;
2. FAQ data/model/search bug;
3. coverages/indications + client islands;
4. Home FAQ source unificada;
5. MapKit/deps/assets;
6. Navbar/a11y/boundaries;
7. TS/check/CI;
8. framework/SEO/performance.

---

# Definition of Done — BUENO+

- FAQ search no depende de tipos heterogéneos ni HTML crudo;
- FAQ/coberturas/indicaciones tienen contratos explícitos;
- Home no duplica FAQs sin razón;
- `react-mapkit` fuera si no tiene consumidor;
- search state no vuelve client a páginas completas;
- Navbar funciona en todas las rutas;
- lint + typecheck + tests + E2E + build PASS;
- visual desktop/mobile y contenido médico/comercial preservados.

---

# Prompt para la IA ejecutora

```text
Implementá docs/ENGINEERING_UPGRADE_PLAN.md completo y por fases. No rediseñes santabarbara: producción es el contrato visual/funcional.

Empezá corrigiendo el modelo FAQ y sus tests. No edites contenido médico/comercial salvo decisión explícita. Separá búsqueda en client islands, eliminá MapKit solo si el import graph confirma que está muerto y conservá el mapa estático. No agregues backend/CMS/state manager.

TypeScript/gates antes del framework upgrade. Corré E2E/screenshots tras cada fase y no declares terminado hasta cumplir la Definition of Done.
```
