# PDFs de Materiales Técnicos

Cada material de la página `/materials` descarga su propio PDF. Para activar
la descarga de un material, deja aquí su archivo con el nombre exacto:

| # | Material                              | Nombre del archivo                 |
|---|---------------------------------------|------------------------------------|
| 1 | Programa de Educación Inicial         | `1-acompaname-a-crecer.pdf`        |
| 2 | Hoja Informativa CECODII              | `2-cecodii.pdf`                    |
| 3 | Política Pública de Primera Infancia  | `3-politica-primera-infancia.pdf`  |
| 4 | Quinto Censo Nacional de Talla        | `4-censo-nacional-talla.pdf`       |

No hace falta tocar el código: el botón "DESCARGAR PDF" de cada material
aparece solo cuando su archivo existe. Si falta, ese material se muestra sin
botón en vez de ofrecer una descarga rota.

Los nombres deben coincidir con el campo `slug` de `src/pages/Materials.jsx`.
