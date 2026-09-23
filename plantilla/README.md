# Plantilla base

Punto de partida de **todas** las prácticas de DWEC.

| Archivo | Para qué sirve |
|---|---|
| [`plantilla-base.html`](plantilla-base.html) | El esqueleto: etiqueta viewport, CSS de Bootstrap, iconos y JS de Bootstrap |
| [`landing.html`](landing.html) | Un ejemplo completo: la landing de la «Cafetería Aroma» del tema extra B |
| [`chuleta-bootstrap.pdf`](chuleta-bootstrap.pdf) | Una hoja con las clases que más vas a usar y los cinco errores típicos |

## Cómo usarla

1. Copia `plantilla-base.html` en tu carpeta del tema y cámbiale el nombre (por ejemplo, `index.html`).
2. Cambia el `<title>` y escribe tu contenido donde pone `<!-- Aquí va tu contenido -->`.
3. **CSS propio:** si no lo vas a usar, borra la línea que enlaza `css/estilos.css`; si la dejas y el archivo no existe, la consola dará un error 404. Si lo usas, crea `css/estilos.css`: siempre va después del CSS de Bootstrap.
4. **Tu JavaScript** va en `js/app.js`, enlazado al final del `body`, después del JS de Bootstrap.

## Lo que se revisa en cada práctica

1. Parte de `plantilla-base.html`.
2. Está maquetada con `.container`, `.row` y `.col-*`, y se ve bien en el móvil.
3. Usa al menos tres componentes de Bootstrap.
4. No lleva CSS propio salvo que haya un motivo, y siempre después del CSS de Bootstrap.
