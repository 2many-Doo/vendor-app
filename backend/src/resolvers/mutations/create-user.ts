import { User } from "@/models/user";
import { MutationResolvers } from "../../types/generated";

export const createUser: MutationResolvers["createUser"] = async (
  _,
  { input }
) => {
  try {
    const { name } = input;
    
    // Create a new user
    const user = await User.create({ name });
    // Return the user in the format expected by GraphQL schema
    return {
      id: (user as { _id: { toString(): string } })._id.toString(),
      name: user.name,
    };
  } catch (error) {
    console.error("❌ Error creating user:", error);
    throw new Error("Failed to create user");
  }
};
