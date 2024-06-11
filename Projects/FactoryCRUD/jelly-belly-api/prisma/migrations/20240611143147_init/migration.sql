-- CreateTable
CREATE TABLE "BeanFlavor" (
    "BeanId" TEXT NOT NULL,
    "FlavorName" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Ingredients" TEXT NOT NULL,

    CONSTRAINT "BeanFlavor_pkey" PRIMARY KEY ("BeanId")
);
