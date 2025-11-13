# Abasa Frontend

Este es un proyecto de demostración construido con Astro, React y Tailwind CSS que muestra diferentes formas de consumo de datos en una aplicación web moderna.

## Características

- **Autenticación** con página de inicio de sesión (dummy para demostración)
- **Listado de productos** con búsqueda y filtrado
- **Páginas de detalle** para cada producto
- **Página de contacto** que consume datos de una API externa
- **Diseño responsive** que funciona en móviles y escritorio
- **Renderizado del lado del servidor (SSR)** para mejor rendimiento y SEO

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/orlandocc/abasa_front.git
   cd abasa_front
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en http://localhost:4321

## Consumo de Datos

Este proyecto utiliza dos formas principales de consumo de datos:

### 1. Archivos JSON locales
Los datos de productos se cargan desde archivos JSON locales en `src/data/`.
- `items.json`: Contiene la lista de productos con sus detalles
- `users.json`: Almacena las credenciales de usuario para la autenticación

### 2. API Externa
La página de contacto consume datos de un endpoint externo:
- URL: `https://gist.githubusercontent.com/orlandocc/.../orlandocardona`
- Método: GET
- Formato de respuesta: JSON

## Estructura del Proyecto

```
/
├── public/             # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/     # Componentes reutilizables (React)
│   ├── data/          # Archivos JSON locales
│   ├── layouts/       # Plantillas de diseño
│   └── pages/         # Rutas de la aplicación
│       ├── index.astro # Página de inicio de sesión
│       ├── home.astro  # Listado de productos
│       ├── item/      # Páginas de detalle de productos
│       └── contacto.astro # Página de contacto
└── package.json
```

## Comandos Útiles

| Comando               | Acción                                           |
|----------------------|-------------------------------------------------|
| `npm install`        | Instala las dependencias                        |
| `npm run dev`        | Inicia el servidor de desarrollo                |
| `npm run build`      | Construye la versión de producción              |
| `npm run preview`    | Previsualiza la versión de producción localmente|
| `npm run astro ...`  | Ejecuta comandos de la CLI de Astro             |

## Credenciales de Acceso

- **Usuario de prueba** (login dummy):
  - Correo: admin@example.com
  - Contraseña: admin123
  
> **Nota:** El sistema de autenticación es solo una simulación con fines demostrativos. No se validan credenciales de forma segura en un entorno de producción.


