import { insertarPedido } from "@/lib/actions";
function PedidoInsertar() {
    return (
        <form action={insertarPedido}>
        
            <input name="fechaHora" placeholder="Fecha de pedido" />
            <input name="nombreCliente" placeholder="Nombre del cliente" />
            <input name="direccionCliente" placeholder="Direccion del cliente" /> 
        
            <button className="border-2 border-black">Insertar pedido</button>
        </form>
    );
}
export default PedidoInsertar;