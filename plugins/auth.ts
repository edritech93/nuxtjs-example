export default defineNuxtPlugin(() => {
  const images = ref();
  const router = useRouter();
  const toast = useToast();

  async function login(image: any) {
    console.log("BASE_URL => ", process.env.BASE_URL);
    await $fetch(`/posts`, {
      method: "POST",
      body: image,
    }).catch((err) =>
      toast.add({
        color: "red",
        title: "Failed to upload image",
        description: err.data?.message || err.message,
      })
    );
    router.push("/");
  }

  async function logout(pathname: string) {
    await $fetch(`/api/images/${pathname}`, { method: "DELETE" });
  }

  return {
    provide: {
      auth: {
        login,
        logout,
      },
    },
  };
});
