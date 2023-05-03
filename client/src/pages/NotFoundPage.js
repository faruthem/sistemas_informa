export function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg text-center">
        <svg className="h-24 w-24 text-gray-500 mx-auto mb-6" fill="none" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <h1 className="text-2xl font-bold mb-2">Error 404: Página no encontrada</h1>
        <p className="text-gray-600 mb-6">Lo siento, la página que buscas no existe.</p>
        <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">Volver a la página de inicio</a>
      </div>
    </div>
  );
}