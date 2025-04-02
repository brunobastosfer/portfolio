import { Controller, Get, Param } from "@nestjs/common"
import { ProjectProvider } from "./projeto.provider"

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly projectProvider: ProjectProvider) {}

	@Get()
	async findAll() {
		return await this.projectProvider.findAll()
	}

	@Get(":id")
	async findAllTechnologies(@Param("id") id: string) {
		return await this.projectProvider.getTecnologies(id)
	}
}
