# Memoria del Proyecto Kmara

## Decisiones Técnicas Recientes

### 1. Enrutamiento en Vercel (SPA)
**Fecha:** 03 de abril de 2026
**Problema:** Al recargar páginas o ir directamente a rutas específicas (ej. `/india`), Vercel devolvía un error 404.
**Solución:** Al ser una Single Page Application (SPA), Vercel necesita redirigir las peticiones de todas las rutas al archivo principal. Para solucionar esto, se agregó el archivo `vercel.json` con las configuraciones de `rewrites`.

### 2. Gestión de Imágenes y Traducciones
**Problema:** Se solicitó cambiar el nombre del directivo "Dr. Raja Gopal" por "Mr. Raja Gopal Pabbathi" y actualizar su imagen.
**Solución:** Se localizaron las referencias en los archivos de traducción (`es.json` y `en.json`) en `src/locales`, así como la referencia de la imagen en el componente `src/components/aboutus/TeamGrid.tsx`. El archivo físico de la imagen se renombró para mantener consistencia y las partes de UI fueron enlazadas a la nueva ruta.

### 3. Inclusión de Nuevo Miembro Dr. Teja Simha Reddy Nallapareddi
**Fecha:** 13 de abril de 2026
**Problema:** Se requirió agregar un nuevo miembro del equipo directivo ("Dr. Teja Simha Reddy Nallapareddi") en las secciones de "Sobre Nosotros" e "India", con sus perfiles localizados al inglés y español y adaptados respectivamente según las dos vistas sin duplicar contenido idéntico.
**Solución:** Se incluyeron nuevas claves en `es.json` y `en.json`. Se actualizó la estructura del arreglo `TeamGrid.tsx` y `IndiaTeamTable.tsx`. Además, se apuntó a la nueva foto alojada en `public/images/Dr. Teja Simha Reddy Nallapareddi.jpeg`.
