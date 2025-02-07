import { obtenerRepartidor } from "@/lib/data";
import { notFound } from "next/navigation";
export default async function Repartidors({ id }) {
    const repartidor = await obtenerRepartidor(id)
    // console.log(repartidor);
    if (!repartidor) notFound()
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center flex-col">
            <p className="text-2xl font-bold text-center">Nombre: {repartidor.nombre}</p>
            <p className="text-gray-700 italic text-center">Telefono: {repartidor.telefono}</p>
        </div>
    );
}