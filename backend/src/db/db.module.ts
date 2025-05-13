import { Module } from "@nestjs/common"
import { PrismaProvider } from "./prisma.provider"
import { TecnologiaProvider } from "src/tecnologia/tecnologia.provider"

@Module({
  providers: [PrismaProvider, TecnologiaProvider],
  exports: [PrismaProvider],
})
export class DbModule {}
