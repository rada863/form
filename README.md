# 🚀 Formulario de Contacto — Proyecto React + Vite + WindiCSS

Este proyecto es un formulario de contacto moderno construido con **React**, **Formik**, **Yup**, **Vite** y **WindiCSS**. Está diseñado para integrarse fácilmente en portfolios o landing pages con estética sci-fi y terminal.

---

## 🧩 Tecnologías utilizadas

- [React](https://reactjs.org/) — Librería principal para construir interfaces
- [Vite](https://vitejs.dev/) — Bundler ultrarrápido para desarrollo moderno
- [WindiCSS](https://windicss.org/) — Motor de clases utilitarias compatible con Tailwind
- [Formik](https://formik.org/) — Manejo de formularios en React
- [Yup](https://github.com/jquense/yup) — Validación de esquemas

---

## 📁 Estructura del proyecto
form/ ├── src/ │   ├── components/ │   │   └── ContactForm.jsx │   ├── App.jsx │   └── main.jsx ├── windi.config.js ├── vite.config.js ├── package.json └── README.m

---

## 🧪 Validaciones del formulario

El formulario incluye validaciones con Yup para los siguientes campos:

- `nombre`: mínimo 2 caracteres
- `email`: formato válido
- `telefono`: entre 7 y 15 dígitos
- `servicio`: selección obligatoria
- `mensaje`: mínimo 10 caracteres

---

## 🎨 Estilos con WindiCSS

El proyecto usa clases utilitarias compatibles con Tailwind y shortcuts personalizados como:

```js
// windi.config.js
shortcuts: {
  'input-base': 'w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500',
  'btn-submit': 'w-full py-2 bg-cyan-600 hover:bg-cyan-700 rounded font-bold transition duration-200',
}
git clone https://github.com/rada863/form.git
cd form
npm install
npm run dev
