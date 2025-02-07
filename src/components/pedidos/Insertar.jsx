import { insertarpedido } from "@/lib/actions";
function pedidoInsertar() {
    return (
        <form action={insertarpedido}>
        
            <input name="fechaHora" placeholder="Fecha de pedido" />
            <input name="nombreCliente" placeholder="Nombre del cliente" />
            <input name="direccionCliente" placeholder="Fecha de pedido" /> 
        
            <button className="border-2 border-black">Insertar pedido</button>
        </form>
    );
}
export default pedidoInsertar;