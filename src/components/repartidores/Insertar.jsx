import { insertarRepartidor } from "@/lib/actions";
function RepartidorInsertar() {
    return (

        <form action={insertarRepartidor} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Agregar Nueva Repartidor</h2>
        <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
            <input
                name="nombre"
                id="nombre"
                placeholder="Nombre de la repartidor"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
            />
        </div>
        <div className="mb-6">
            <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">Jefe de Repartidor</label>
            <input
                name="telefono"
                id="telefono"
                placeholder="Nombre del jefe de repartidor"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
            />
        </div>
        <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            Insertar Repartidor
        </button>
    </form>
);
}
export default RepartidorInsertar;