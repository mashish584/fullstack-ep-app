import { authMutations, eventMutations } from "./mutations";

const Mutation = {
  ...authMutations,
  ...eventMutations,
};

export { Mutation as default };
