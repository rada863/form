// src/components/ContactForm.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EsquemaValidacion = Yup.object().shape({
  nombre: Yup.string()
    .min(3, 'El nombre es muy corto')
    .required('El nombre es obligatorio'),
  email: Yup.string()
    .email('Email no válido')
    .required('El email es obligatorio'),
  telefono: Yup.string()
    .matches(/^\d{7,15}$/, 'Teléfono inválido')
    .required('El teléfono es obligatorio'),
  servicio: Yup.string()
    .required('Selecciona un servicio'),
  mensaje: Yup.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .required('El mensaje es obligatorio')
});

function ContactForm() {
  return (
    <section id="contacto" className="px-6 py-12 bg-gradient-to-br from-gray-950 to-gray-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400 tracking-wide">Contacto</h2>

        <Formik
          initialValues={{
            nombre: '',
            email: '',
            telefono: '',
            servicio: '',
            mensaje: ''
          }}
          validationSchema={EsquemaValidacion}
          onSubmit={(values, { resetForm }) => {
            console.log('Datos enviados:', values);
            resetForm();
          }}
        >
          {() => (
            <Form className="space-y-6">
              <div>
                <label className="block mb-1 font-semibold">Nombre</label>
                <Field
                  type="text"
                  name="nombre"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <ErrorMessage name="nombre" component="p" className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <ErrorMessage name="email" component="p" className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Teléfono</label>
                <Field
                  type="tel"
                  name="telefono"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <ErrorMessage name="telefono" component="p" className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Servicio</label>
                <Field
                  as="select"
                  name="servicio"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="diseño web">Diseño Web</option>
                  <option value="desarrollo backend">Desarrollo Backend</option>
                  <option value="consultoría técnica">Consultoría Técnica</option>
                </Field>
                <ErrorMessage name="servicio" component="p" className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Mensaje</label>
                <Field
                  as="textarea"
                  name="mensaje"
                  rows="4"
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <ErrorMessage name="mensaje" component="p" className="text-red-400 text-sm mt-1" />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 rounded font-bold transition duration-200"
              >
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default ContactForm;