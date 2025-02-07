import { obtenerPedidos } from "@/lib/data";
import Modal from "@/components/modal";
import Link from "next/link";
import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";
import PedidoInsertar from "./Insertar";
export async function Pedidos() {
    const pedidos = await obtenerPedidos();
    return (
        <div className="bg-gray-100 p-8 min-h-screen">
        {/* Botón Insertar */}
        <Modal openElement={<p className="inline-block text-white bg-blue-600 p-4 rounded-md cursor-pointer hover:bg-blue-700 transition mb-6">INSERTAR PEDIDO</p>}>
            <PedidoInsertar />
        </Modal>
        <ul className="flex flex-col items-center justify-center mt-10 space-y-4">
            {pedidos.map((pedido) => (
                <li key={pedido.id} className="bg-white rounded-lg p-6 shadow-lg mb-4 w-full md:w-1/2 lg:w-1/3 transition-all hover:scale-105 hover:shadow-xl">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                            <Link href={`/pedidos/${pedido.id}`} className="hover:text-blue-600 hover:underline">
                                {pedido.id}
                            </Link>
                        </h2>
                        <div className="flex space-x-2">
                            {/* Botón Modificar */}
                            <Modal openElement={<p className="inline-block text-white bg-yellow-500 p-2 rounded-md cursor-pointer hover:bg-yellow-600 transition">Modificar</p>}>
                                <PedidoModificar pedido={pedido} />
                            </Modal>
                            {/* Botón Eliminar */}
                            <Modal openElement={<p className="inline-block text-white bg-red-600 p-2 rounded-md cursor-pointer hover:bg-red-700 transition">Eliminar</p>}>
                                <PedidoEliminar pedido={pedido} />
                            </Modal>
                        </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">
                        <span className="font-bold">Fecha de pedido:</span>{" "}
                        {new Date(pedido.fechaHora).toLocaleDateString()}
                    </p>
                    
                </li>
            ))}
        </ul>
    </div>
    );
}