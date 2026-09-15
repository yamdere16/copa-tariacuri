# Copa Tariácuri 2026 - Landing Page

Landing page interactiva y profesional para el concurso de destilados mexicanos **Copa Tariácuri**, desarrollada con **Python Flask**, **HTML5**, **CSS3** y **JavaScript vanilla**.

---

## Características Principales

- **Hero interactivo con animación de maguey**: Efecto scroll donde las pencas se "despencan" hacia los lados mientras el corazón del maguey hace zoom y emerge el logo.
- **Diseño responsive**: Adaptable a móviles, tablets y escritorio con menú hamburguesa.
- **Animaciones al scroll**: Intersection Observer con efecto fade-in-up en todas las secciones.
- **Cursor personalizado**: Cursor estilizado con efecto hover en elementos interactivos.
- **Grid de 10 jueces**: Tarjetas completas con foto, nombre, título y biografía.
- **Botones 3D de registro**: Efecto de sombra pronunciada que desaparece al hacer clic (press effect).
- **Variables CSS editables**: Personaliza colores, fuentes y espaciado desde un solo lugar.
- **Footer completo**: Tres columnas con logo, enlaces rápidos, redes sociales y barra legal.

---

## Estructura del Proyecto

```
copa-tariacuri/
│
├── app.py                          # Servidor Flask (lee puerto desde variable de entorno PORT)
├── requirements.txt                # Dependencias: Flask, gunicorn
├── README.md                       # Este archivo
├── templates/
│   └── index.html                  # Plantilla HTML5 completa con todas las secciones
└── static/
    ├── css/
    │   └── styles.css              # Estilos con variables CSS, responsive design y animaciones
    ├── js/
    │   └── main.js                 # Lógica del cursor, scroll, maguey, menú móvil y más
    └── images/                     # Carpeta para todas las imágenes del sitio
        ├── logo-copa-tariacuri.png # Logo principal del evento
        ├── cursor-default.png      # Cursor personalizado (estado normal)
        ├── cursor-pointer.png      # Cursor personalizado (estado hover)
        ├── maguey-corazon.png      # Corazón/piña del maguey (centro)
        ├── penca-1.png             # Penca izquierda superior
        ├── penca-2.png             # Penca izquierda media
        ├── penca-3.png             # Penca izquierda inferior
        ├── penca-4.png             # Penca derecha superior
        ├── penca-5.png             # Penca derecha media
        ├── penca-6.png             # Penca derecha inferior
        ├── penca-7.png             # Penca superior izquierda
        ├── penca-8.png             # Penca superior derecha
        ├── presentacion-maguey.jpg # Imagen de la sección Presentación
        ├── juez-1.jpg              # Foto del Juez 1
        ├── juez-2.jpg              # Foto del Juez 2
        ├── juez-3.jpg              # Foto del Juez 3
        ├── juez-4.jpg              # Foto del Juez 4
        ├── juez-5.jpg              # Foto del Juez 5
        ├── juez-6.jpg              # Foto del Juez 6
        ├── juez-7.jpg              # Foto del Juez 7
        ├── juez-8.jpg              # Foto del Juez 8
        ├── juez-9.jpg              # Foto del Juez 9
        ├── juez-10.jpg             # Foto del Juez 10
        ├── patrocinador1.png       # Logo Patrocinador 1
        ├── patrocinador2.png       # Logo Patrocinador 2
        ├── patrocinador3.png       # Logo Patrocinador 3
        ├── patrocinador4.png       # Logo Patrocinador 4
        ├── patrocinador5.png       # Logo Patrocinador 5
        ├── patrocinador6.png       # Logo Patrocinador 6
        ├── patrocinador7.png       # Logo Patrocinador 7
        └── patrocinador8.png       # Logo Patrocinador 8
```

---

## Guía de Imágenes - Estilo Paper Cutout / Recortes de Revista

Para lograr el efecto visual de **recortes de revista / collage de papel** en las pencas del maguey, sigue estos pasos:

### 1. Recorte de las Pencas

1. **Obtén una imagen de alta calidad** de un maguey visto desde arriba (vista cenital).
2. **Usa Photoshop, GIMP o Photopea** (gratuito en línea) para recortar cada penca individualmente.
3. **Herramienta recomendada**: Lasso Polygonal o Pluma para trazados precisos.
4. **Borde irregular**: Aplica un ligero efecto de borde irregular usando filtros de distorsión o dibuja manualmente un contorno ligeramente ondulado para simular papel recortado con tijeras.

### 2. Exportar como PNG Transparente

- Exporta cada penca como **PNG con canal alpha (transparencia)**.
- Nombra los archivos exactamente como se indica en la estructura: `penca-1.png` a `penca-8.png`.
- El corazón/piña del maguey debe ser `maguey-corazon.png` (también con fondo transparente).

### 3. Efecto de Sombra en CSS

El archivo `styles.css` ya incluye el efecto de sombra tipo papel recortado:

```css
.maguey-penca {
    filter: drop-shadow(3px 5px 8px rgba(77, 38, 37, 0.25));
}
```

Puedes ajustar la intensidad de la sombra modificando estos valores en `:root` o directamente en la clase.

### 4. Carpeta de Destino

Coloca **todas las imágenes** en la carpeta:

```
copa-tariacuri/static/images/
```

> **Nota**: Si no tienes las imágenes aún, el sitio cargará con espacios vacíos. Recomendamos usar placeholders del mismo tamaño mientras preparas los recursos finales.

### 5. Dimensiones Recomendadas

| Imagen | Dimensiones Recomendadas | Formato |
|--------|-------------------------|---------|
| Logo | 400x400 px | PNG transparente |
| Pencas | 300-500 px de ancho | PNG transparente |
| Corazón Maguey | 400x400 px | PNG transparente |
| Fotos Jueces | 400x500 px (retrato) | JPG |
| Patrocinadores | 300x150 px | PNG transparente |
| Presentación | 800x600 px | JPG |
| Cursores | 32x32 px | PNG transparente |

---

## Instrucciones para Ejecutar en Visual Studio Code

### Paso 1: Abrir el Proyecto

1. Abre **Visual Studio Code**.
2. Ve a `Archivo > Abrir Carpeta...` y selecciona la carpeta `copa-tariacuri`.

### Paso 2: Crear Entorno Virtual

Abre una terminal en VS Code (`Ctrl + ñ` o `Terminal > Nueva Terminal`) y ejecuta:

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

### Paso 3: Instalar Dependencias

```bash
pip install -r requirements.txt
```

Esto instalará **Flask** y **gunicorn**.

### Paso 4: Ejecutar el Servidor

```bash
python app.py
```

El servidor se iniciará en `http://127.0.0.1:5000`. Abre tu navegador y visita esa dirección.

### Paso 5: Detener el Servidor

Presiona `Ctrl + C` en la terminal para detener el servidor.

---

## Instrucciones para Subir a GitHub

### Paso 1: Inicializar Repositorio Git

En la terminal de VS Code (dentro de la carpeta del proyecto):

```bash
git init
```

### Paso 2: Crear Archivo .gitignore

Crea un archivo `.gitignore` en la raíz con el siguiente contenido:

```
venv/
__pycache__/
*.pyc
.env
.DS_Store
```

### Paso 3: Agregar Archivos y Commit

```bash
git add .
git commit -m "Landing page Copa Tariácuri 2026 - versión inicial"
```

### Paso 4: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión.
2. Haz clic en el botón verde **"New"** o **"+" > "New repository"**.
3. Escribe el nombre del repositorio: `copa-tariacuri`.
4. Deja las opciones por defecto (público) y haz clic en **"Create repository"**.
5. Copia la URL del repositorio (ej: `https://github.com/tuusuario/copa-tariacuri.git`).

### Paso 5: Conectar y Subir

```bash
git branch -M main
git remote add origin https://github.com/tuusuario/copa-tariacuri.git
git push -u origin main
```

> Reemplaza `https://github.com/tuusuario/copa-tariacuri.git` con tu URL real.

---

## Instrucciones para Desplegar en Render.com

### Paso 1: Crear Cuenta en Render

1. Ve a [render.com](https://render.com) y regístrate (puedes usar tu cuenta de GitHub).

### Paso 2: Crear Nuevo Web Service

1. En el Dashboard de Render, haz clic en **"New +"** y selecciona **"Web Service"**.
2. Conecta tu cuenta de GitHub y selecciona el repositorio `copa-tariacuri`.
3. Haz clic en **"Connect"**.

### Paso 3: Configurar el Servicio

Completa el formulario con la siguiente información:

| Campo | Valor |
|-------|-------|
| **Name** | copa-tariacuri (o el nombre que prefieras) |
| **Region** | Oregon (US West) o la más cercana a tu audiencia |
| **Branch** | main |
| **Runtime** | Python 3 |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `gunicorn app:app` |
| **Plan** | Free |

### Paso 4: Variables de Entorno (Opcional)

Si necesitas configurar el puerto, Render lo hace automáticamente. El archivo `app.py` ya lee la variable `PORT` del entorno:

```python
port = int(os.environ.get("PORT", 5000))
```

No necesitas agregar variables de entorno adicionales para el funcionamiento básico.

### Paso 5: Deploy

1. Haz clic en **"Create Web Service"**.
2. Render comenzará a construir y desplegar tu aplicación automáticamente.
3. Espera a que el estado cambie a **"Live"** (generalmente toma 2-3 minutos).
4. Tu sitio estará disponible en una URL como: `https://copa-tariacuri.onrender.com`

### Paso 6: Actualizaciones Futuras

Cada vez que hagas `git push` a la rama `main`, Render detectará los cambios y redeployará automáticamente.

---

## Personalización Rápida

Edita las variables CSS en `static/css/styles.css` al inicio del archivo:

```css
:root {
    --bg-color: #FEFEFA;              /* Fondo general */
    --title-color: #6D312E;           /* Color de títulos */
    --secondary-text-color: #D5A760;  /* Color secundario */
    --btn-forms-bg: #2F6A4F;          /* Color de botones */
    --body-text-color: #4F2625;       /* Color de párrafos */
}
```

---

## Tecnologías Utilizadas

- **Backend**: Python 3, Flask, Gunicorn
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Tipografías**: Google Fonts (Playfair Display, Lato)
- **Animaciones**: CSS Transitions, Intersection Observer API, requestAnimationFrame
- **Despliegue**: Render.com (Free Tier)

---

## Licencia

© 2026 Copa Tariácuri. Todos los derechos reservados.

---

## Contacto

Para dudas o soporte técnico: info@copatariacuri.mx
