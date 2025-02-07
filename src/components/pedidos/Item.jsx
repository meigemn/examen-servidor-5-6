import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";
export default async function Pedidos({ id }) {
    const pedido = await obtenerPedido(id)
    if (!pedido) notFound()
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center flex-col">
            <p className="text-2xl font-bold text-center">Cliente: {pedido.nombreCliente}</p>
            <p className="text-gray-700 italic text-center">Fecha Realización: {pedido.fechaNacimiento.toLocaleDateString()}</p>
        </div>
    );
}