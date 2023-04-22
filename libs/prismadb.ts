import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client

// correção onde no próximo carregamento impede que o Nexus carregue várias outras instâncias de cliente prisma, impedindo que haja interrupção da aplicação.