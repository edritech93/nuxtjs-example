export type ShowAlertType = {
  title: string;
  description: string | object | undefined | null;
  color: "green" | "red";
  status?: number | undefined | null;
  data?: object | undefined | null;
};
