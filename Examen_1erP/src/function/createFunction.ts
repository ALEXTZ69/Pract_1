import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const createFunction=async()=>{
    const funcion = await prisma.funcion.create({
        data:{
            name: 'division',
            returnType: 'number',
            detail: "division de numeros",
            status: "Activo",
            /*parameters:{
                create:{
                    descripcion:'variable A',
                    type: 'number',
                    defaultValue: '0',
                },
                create:{
                    descripcion:'variable A',
                    type: 'number',
                    defaultValue: '0',
                },
            },*/
        }
    })
    console.log(funcion);

}