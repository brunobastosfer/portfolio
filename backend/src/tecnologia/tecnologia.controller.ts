import { Tecnologia } from "@core"
import { Controller, Get } from "@nestjs/common"
import { TecnologiaProvider } from "./tecnologia.provider"

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly tecnologiaProvider: TecnologiaProvider) {}

	@Get()
	async findAll(): Promise<Tecnologia[]> {
		return await this.tecnologiaProvider.findAll()
	}

	@Get("destaques")
	async findAllEmphasis(): Promise<Tecnologia[]> {
		return await this.tecnologiaProvider.findAllEmphasis()
	}
}
