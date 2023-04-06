import { Pet } from "./model.js";

export const resolvers = {
    Query: {
        pet: async (_, { id }) => Pet.findByPk(id),
        pets: async () => await Pet.findAll(),
    },
    Mutation: {
        addPet: async (_, { input }) => {
            await Pet.create({
                ...input,
                complete: false,
            });
            return {
                success: true,
                Errors:null
            };
        }
    }
};