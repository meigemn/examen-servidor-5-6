
import { obtenerPizza } from "@/lib/data";
import { notFound } from "next/navigation";
export default async function Pizzas({ id }) {
    const pizza = await obtenerPizza(id)
    if (!pizza) notFound()
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center flex-col">
            <p className="text-2xl font-bold text-center">Nombre: {pizza.nombre}</p>
            <p className="text-gray-700 italic text-center">Precio: {pizza.via}</p>
        </div>
    );
}