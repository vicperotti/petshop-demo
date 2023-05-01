import crypto from "crypto";
import { getHash } from "./utils.js";
import { User,Pet } from "./model.js";

export const resolvers = {
    Query: {
        pet: async (_, { id }) => Pet.findByPk(id),
        pets: async () => await Pet.findAll(),
        users: async (_, args, { user }) => {
            if (!user) throw new Error("User not authenticated.");
      
            return await User.findAll();
          },
          user: async (_, { id }, { user }) => {
            if (!user) throw new Error("User not authenticated.");
      
            return await User.findByPk(id);
          },
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
        },
        createUser: async (_, { input }) => {
            try {
              const { email, firstName, lastName, password } = input;
      
              const passwordHash = await getHash(password);
      
              const user = {
                email,
                firstName,
                lastName,
                passwordHash,
              };
              await User.create(user);
              return { ok: true };
            } catch (error) {
              throw error;
            }
          },
          authenticate: async (_, { username, password }, contextValue ) => {
            const user = await User.findOne({ where: { email: username } });
      
            if (!user) throw new Error("Incorrect username or password.");
      
            const passwordHash = await getHash(password);
            if (
              !crypto.timingSafeEqual(
                Buffer.from(user.passwordHash),
                Buffer.from(passwordHash)
              )
            ) {
              throw new Error("Incorrect username or password.");
            }
      
            // start session
            //session.user = user.get();
            contextValue.user = user.get(); //user.get is a database function
            console.log(user.firstName);
            console.log('is logged in')
            return {
              ok: true,
              user: {
                ...user.get(),
              },
            };
          },
          logout: async (_, args, context) => {
            if (context && context.session) {
              context.session.destroy(() => ({
                ok: true,
              }));
            }
          }
    }
};