'use server'
import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
//  ------------------------ repartidores------------------------
export async function insertarRepartidor(formData) {
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')
    await prisma.repartidor.create({
        data: {
            nombre: nombre,
            telefono: telefono,
        }
    })
    revalidatePath('/repartidores')
}
export async function modificarRepartidor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    
    await prisma.repartidor.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            telefono: telefono,
        }
    })
    revalidatePath('/repartidores')
}
export async function eliminarRepartidor(formData) {
    const id = Number(formData.get('id'))
    await prisma.repartidor.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/repartidores')
}
//  ------------------------ PEDIDOS ------------------------
export async function insertarPedido(formData) {
    const nombreCliente = formData.get('nombreCliente')
    const fechaHora = new Date(formData.get('fechaHora'))
    const repartidorId = Number(formData.get('repartidorId'))
    await prisma.pedido.create({
        data: {
        
            fechaHora: fechaHora,
            nombreCliente: nombreCliente,
            repartidorId: repartidorId
        }
    })
    revalidatePath('/pedidos')
}
export async function modificarPedido(formData) {
    const id = Number(formData.get('id'))
    const nombreCliente = formData.get('nombreCliente')
    const fechaHora = new Date(formData.get('fechanNacimiento'))
    const repartidorId = Number(formData.get('repartidorId'))
    await prisma.pedido.update({
        where: {
            id: id
        },
        data: {
            nombreCliente: nombreCliente,
            fechaHora: fechaHora,
            repartidorId: repartidorId,
        }
    })
    revalidatePath('/pedidos')
}
export async function eliminarPedido(formData) {
    const id = Number(formData.get('id'))
    await prisma.pedido.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/pedidos')
}
// ------------------------------- PIZZAS -----------------------
export async function insertarPizza(formData) {
    const nombre = formData.get('nombre')
    const precio = formData.get('precio')
    await prisma.pizza.create({
        data: {
            nombre: nombre,
            precio: precio
        }
    })
    revalidatePath('/pizzas')
}
export async function modificarPizza(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const precio = formData.get('precio')
    await prisma.pizza.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            precio: precio
        }
    })
    revalidatePath('/pizzas')
}
export async function eliminarPizza(formData) {
    const id = Number(formData.get('id'))
    await prisma.pizza.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/pizzas')
}