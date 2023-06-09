import { defineStore } from "pinia";
import { User } from "~/types/user";

export interface authState {
  user: User | null;
  token: string | null;
  permissions: string[];
}

export const useAuthStore = defineStore("auth", {
  state: (): authState => ({
    user: null,
    token: null,
    permissions: [],
  }),
  actions: {
    signIn(obj: authState) {
      this.user = obj.user || null;
      this.token = obj.token || null;
      this.permissions = obj.permissions || [];

      //router.replace('/account')
    },
    signOut() {
      this.$reset();
      //router.replace('/signout')
    },
  },
  persist: true,
});
