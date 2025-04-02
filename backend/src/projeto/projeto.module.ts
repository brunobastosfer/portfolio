import { Module } from "@nestjs/common"
import { ProjectProvider } from "./projeto.provider"
import { ProjetoController } from "./projeto.controller"
import { DbModule } from "src/db/db.module"

@Module({
	providers: [ProjectProvider],
	controllers: [ProjetoController],
	imports: [DbModule],
})
export class ProjetoModule {}
