interface State {
  photoUpload: FileList | null;
}

export const usePhotoStore = defineStore("photo", {
  state: (): State => {
    return {
      photoUpload: null,
    };
  },
  actions: {
    change(e: FileList) {
      this.photoUpload = e;
    },
  },
});
