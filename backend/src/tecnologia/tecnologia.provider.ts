import { Tecnologia } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class TecnologiaProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async findAll(): Promise<Tecnologia[]> {
		return await this.prisma.tecnologia.findMany({
			orderBy: {
				nome: "asc",
			},
		})
	}

	async findAllEmphasis(): Promise<Tecnologia[]> {
		return await this.prisma.tecnologia.findMany({
			where: {
				destaque: true,
			},
		})
	}
}
