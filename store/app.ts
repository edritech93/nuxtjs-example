interface State {
  sideBar: SideBarEnum;
}

export const useAppStore = defineStore("app", {
  state: (): State => {
    return {
      sideBar: SideBarEnum.Upload,
    };
  },
  actions: {
    change(e: SideBarEnum) {
      this.sideBar = e;
    },
  },
});

export enum SideBarEnum {
  Upload = "upload",
  Profile = "profile",
}
