let toastRef: any;

const init = (toastReference: any) => {
  toastRef = toastReference;
};

const show = (severity: string, summary: string, detail = "", life = 3000) => {
  toastRef?.show({
    severity: severity,
    summary: summary,
    detail: detail,
    life: life,
    id: Math.floor(Math.random() * 2000)
  });
};

const showError = (summary = "Error", detail = "", life = 3000) => {
  show("error", summary, detail, life);
};

const showSuccess = (summary = "Success", detail = "", life = 3000) => {
  show("success", summary, detail, life);
};

const ToastService = {
  init,
  show,
  showError,
  showSuccess
};

export default ToastService;
