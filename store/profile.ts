interface State {
  profile: ProfileType | null;
}

export const useProfileStore = defineStore("profile", {
  state: (): State => {
    return {
      profile: null,
    };
  },
  actions: {
    change(e: ProfileType) {
      this.profile = e;
    },
  },
});

export type ProfileType = {
  id: number;
  email: string;
  profile: {
    fullName: string;
    dateOfBirth: string;
    attachmentId: number;
  };
};
