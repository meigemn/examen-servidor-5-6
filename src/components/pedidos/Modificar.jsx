import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido }) {
    
    // Formatear fecha correctamente para el input
    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };

    return (
        <form action={modificarPedido} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Modificar Pedido</h2>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            
            <div className="mb-4">
                <label htmlFor="id" className="block text-gray-700 font-medium mb-2">Id del pedido</label>
                <input
                    name="id"
                    id="id"
                    defaultValue={pedido.id}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="fechaHora" className="block text-gray-700 font-medium mb-2">
                    Fecha de Nacimiento
                </label>
                <input
                    type="date"
                    name="fechaHora"
                    id="fechaHora"
                    defaultValue={formatDate(pedido.fechaHora)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>


            <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
                Modificar Pedido
            </button>
        </form>
    );
}

export default PedidoModificar;