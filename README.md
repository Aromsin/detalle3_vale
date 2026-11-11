# Para Valeria — Día 2 💗

Un scrapbook digital romántico, coqueto y adaptable a celulares, creado con HTML, CSS y JavaScript.

## 1. Abrir el proyecto

1. Descarga y descomprime `Para-Valeria-Dia-2.zip`.
2. Abre la carpeta `Para-Valeria-Dia-2` en Visual Studio Code.
3. Abre `index.html` con Live Server (clic derecho → Open with Live Server).

## 2. Personalizar los recuerdos

Abre `index.html` y busca los comentarios `TARJETA 1`, `TARJETA 2`, etc.

En cada tarjeta puedes cambiar:

- `data-title`: título que aparece en la ventana emergente.
- `data-date`: pequeña etiqueta o fecha.
- `data-message`: el texto que se mostrará al abrir el recuerdo.
- El título `<h3>` y el párrafo `<p>` visibles en la tarjeta.

Usa recuerdos reales y respetuosos. No agregues fotos privadas sin permiso.

## 3. Agregar tus propias fotos

1. Copia tus imágenes dentro de la carpeta `imagenes`.
2. Usa nombres sencillos, por ejemplo: `recuerdo-1.jpg`, `recuerdo-2.jpg`.
3. En `index.html`, dentro de la tarjeta correspondiente, busca el comentario de la etiqueta `<img>`.
4. Quita `<!--` y `-->` y ajusta la ruta y el texto alternativo.

Ejemplo:

```html
<img src="imagenes/recuerdo-1.jpg" alt="Un paseo en un día soleado">
```

La imagen ocupará el espacio de la ilustración de color. Si quieres mantener el diseño original, deja la etiqueta `<img>` comentada.

Formatos recomendados: JPG, PNG o WebP. Procura que las imágenes no sean demasiado pesadas.

## 4. Cambiar las notitas

Abre `js/script.js` y busca el arreglo `notitas`. Cambia las frases de ejemplo por tus propios mensajes. Mantén las comillas y la coma entre cada frase.

## 5. Cambiar colores

Abre `css/styles.css`. Al inicio encontrarás variables como:

```css
:root {
    --ink: #493746;
    --muted: #867584;
    --pink: #d77d9e;
    --pink-dark: #b85e82;
}
```

Puedes cambiar esos códigos hexadecimales para ajustar la paleta.

## 6. Publicar en GitHub Pages

Crea un repositorio público en GitHub, por ejemplo `Para-Valeria-Dia-2`.

Desde la terminal de VS Code, dentro de esta carpeta, ejecuta (reemplaza `TU-USUARIO`):

```bash
git init
git add .
git commit -m "Crear scrapbook digital para Valeria"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/Para-Valeria-Dia-2.git
git push -u origin main
```

Luego:

1. En GitHub, abre el repositorio.
2. Entra en **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Pulsa **Save** y espera a que GitHub Pages publique el sitio.

El enlace tendrá esta forma:

`https://TU-USUARIO.github.io/Para-Valeria-Dia-2/`

## 7. Antes de compartir

- Prueba el enlace en tu celular.
- Revisa que las fotos carguen y que no haya errores en la consola.
- No incluyas datos personales, ubicaciones privadas ni fotos que Valeria no quiera compartir.
- Recuerda que un repositorio público y GitHub Pages hacen que la página sea accesible para cualquiera que tenga el enlace (y potencialmente descubrible públicamente).

¡Que disfrutes creando este detalle! 🌷
