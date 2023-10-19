-- CreateTable
CREATE TABLE "Funcion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "returnType" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Funcion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parametros" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "defaultValue" TEXT NOT NULL,
    "functionId" INTEGER NOT NULL,

    CONSTRAINT "Parametros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Parametros" ADD CONSTRAINT "Parametros_functionId_fkey" FOREIGN KEY ("functionId") REFERENCES "Funcion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
