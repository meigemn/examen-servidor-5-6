import { obtenerRepartidores } from "@/lib/data";
import Modal from "@/components/modal";
import RepartidorInsertar from "./Insertar";
import RepartidorModificar from "./Modificar";
import RepartidorEliminar from "./Eliminar";
import Link from "next/link";
export async function Repartidores() {
    const repartidores = await obtenerRepartidores();
    return (
        <div className="bg-gray-100 p-8 min-h-screen">
            {/* Botón Insertar */}
            <Modal openElement={<p className="inline-block text-white bg-blue-600 p-4 rounded-md cursor-pointer hover:bg-blue-700 transition mb-6">INSERTAR REPARTIDOR</p>}>
                <RepartidorInsertar />
            </Modal>
            <ul className="flex flex-col items-center justify-center mt-10 space-y-4">
                {repartidores.map((repartidor) => (
                    <li key={repartidor.id} className="bg-white rounded-lg p-6 shadow-lg mb-4 w-full md:w-1/2 lg:w-1/3 transition-all hover:scale-105 hover:shadow-xl">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                                <Link href={`/repartidores/${repartidor.id}`} className="hover:text-blue-600 hover:underline">
                                    {repartidor.nombre}
                                </Link>
                            </h2>


                            <div className="flex space-x-2">
                                {/* Botón Modificar */}
                                <Modal openElement={<p className="inline-block text-white bg-yellow-500 p-2 rounded-md cursor-pointer hover:bg-yellow-600 transition">Modificar</p>}>
                                    <RepartidorModificar repartidor={repartidor} />
                                </Modal>
                                {/* Botón Eliminar */}
                                <Modal openElement={<p className="inline-block text-white bg-red-600 p-2 rounded-md cursor-pointer hover:bg-red-700 transition">Eliminar</p>}>
                                    <RepartidorEliminar repartidor={repartidor} />
                                </Modal>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}