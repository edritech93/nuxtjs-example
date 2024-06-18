export type ShowAlertType = {
  title: string;
  description: string | object | undefined | null;
  type?: "normal" | "success" | "danger" | "warning";
  status?: number | undefined | null;
  data?: object | undefined | null;
};
