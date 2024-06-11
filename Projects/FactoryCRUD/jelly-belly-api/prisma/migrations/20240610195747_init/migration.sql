-- CreateTable
CREATE TABLE "BeanFlavor" (
    "id" TEXT NOT NULL,
    "flavorName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,

    CONSTRAINT "BeanFlavor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BeanFlavor_flavorName_key" ON "BeanFlavor"("flavorName");
