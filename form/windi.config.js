export default {
  theme: {
    extend: {
      colors: {
        mechanicus: '#1f1f1f',
        nova: '#67e8f9',
        offwhite: '#f1f3f0',
        nightshade: '#180034',
      },
    },
  },
  shortcuts: {
    'input-base': 'w-full px-4 py-2 rounded bg-mechanicus border border-gray-700 focus:outline-none focus:ring-2 focus:ring-nova',
    'label-base': 'block mb-1 font-semibold text-offwhite',
    'error-msg': 'text-red-400 text-sm mt-1',
    'btn-submit': 'w-full py-2 bg-nova hover:bg-cyan-400 rounded font-bold transition duration-200 text-mechanicus',
    'form-section': 'px-6 py-12 bg-gradient-to-br from-nightshade to-mechanicus text-offwhite',
  },
}