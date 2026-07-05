import { User } from "./user.type";
import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";

const users = [
  {
    id: "123456",
    name: "john doe",
    username: "johndoe",
    email: "johndoe@example.com",
  },
  {
    id: "54321",
    name: "patrick jane",
    username: "patrickjane",
    email: "patrickjane@example.com",
  },
];

@Service()
@Resolver()
export class UserResolver {
  @Query(() => [User], { description: "get users " })
  getUser() {
    return users;
  }
}
