import { prisma } from "./lib/prisma"

async function main() {
    const createUser = await prisma.user.create({
        data: {
            email: 'mushfik@gmail.com',
            name: 'mushfik'
        }
    })

    console.log('User created:', createUser)
}
main()