import { authMutations, eventMutations, uploadMutations, stripeMutations } from "./mutations";

const Mutation = {
  ...authMutations,
  ...eventMutations,
  ...uploadMutations,
  ...stripeMutations,
};

export { Mutation as default };
