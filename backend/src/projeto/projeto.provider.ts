import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class ProjectProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async findAll() {
		return await this.prisma.projeto.findMany({})
	}

	async getTecnologies(id: string) {
		return await this.prisma.projeto.findUnique({
			where: { id },
			select: {
				tecnologias: true,
				repositorio: true,
				descricao: true,
				imagens: true,
				destaque: true,
				id: true,
				nivel: true,
				nome: true,
				tipo: true,
			},
		})
	}
}
