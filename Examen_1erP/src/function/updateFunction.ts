import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const updateFunction =async () => {
    const funcion = await prisma.funcion.update({
        where:{
            id: 6
    },
    data:{
        status: 'Eliminado',
    }
    })
}