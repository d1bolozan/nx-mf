import KeycloakService from "../security/KeycloakService";

export const getFile = (url: string) =>
  KeycloakService.UpdateToken().then((refreshed) => {
    if (refreshed) {
      console.info("New token refreshed");
    }
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${KeycloakService.GetToken()}`
      }
    }).then((res) => {
      if (res.redirected) {
        window.location.href = res.url;
      }
      return res;
    });
  });

export const postFile = (url: string, files: File[], entityType?: string, entityId?: number) =>
  KeycloakService.UpdateToken().then((refreshed) => {
    if (refreshed) {
      console.info("New token refreshed");
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("", file);
    });

    const dependencies = files.map((file) => ({
      fileName: file.name,
      entityId,
      entityType
    }));

    formData.append("dependencies", JSON.stringify(dependencies));

    return fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${KeycloakService.GetToken()}`
      }
    }).then((res) => {
      if (res.redirected) {
        window.location.href = res.url;
      }
      return res;
    });
  });

export const deleteFile = (url: string) =>
  KeycloakService.UpdateToken().then((refreshed) => {
    if (refreshed) {
      console.info("New token refreshed");
    }

    return fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${KeycloakService.GetToken()}`
      }
    }).then((res) => {
      if (res.redirected) {
        window.location.href = res.url;
      }
      return res;
    });
  });
