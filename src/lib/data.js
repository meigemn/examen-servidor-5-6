'use server'
import prisma from "@/lib/prisma";

/* ---------Repartidores--------- */ 


async function obtenerRepartidores() {
    const repartidores = await prisma.repartidor.findMany()
    return repartidores
}


async function obtenerRepartidor(id) {
    const repartidor = await prisma.repartidor.findUnique({
        where: { id: +id }
    })
    return repartidor
}
/* ---------Pedido--------- */ 


async function obtenerPedidos() {
    const pedidos = await prisma.pedido.findMany()
    return pedidos
}


async function obtenerPedido(id) {
    const pedido = await prisma.pedido.findUnique({
        where: { id: +id },
        include: {
            pizzas: true,/* Revisar en un futuro. puede que haya que quitarlo */
            repartidor: true/* relacion entre repartidores */
        }
    })
    return pedido
}
/* ---------Pizza--------- */ 


async function obtenerPizzas() {
    const pizzas = await prisma.pizza.findMany()
    return pizzas
}


async function obtenerPizza(id) {
    const pizza = await prisma.pizza.findUnique({
        where: { id: +id }
    })
    return pizza
}

export {
    obtenerRepartidores,
    obtenerRepartidor,

    obtenerPedidos,
    obtenerPedido,
    
    obtenerPizzas,    
    obtenerPizza
}