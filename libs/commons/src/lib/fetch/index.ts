import KeycloakService from "../security/KeycloakService";

export const getData = (url: string, headers: { [key: string]: string } | null = null) =>
  KeycloakService.UpdateToken().then((refreshed) => {
    if (refreshed) {
      console.info("New token refreshed");
    }

    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${KeycloakService.GetToken()}`,
        ...(headers !== null && headers)
      }
    }).then((res) => {
      if (res.redirected) {
        window.location.href = res.url;
      }

      return res;
    });
  });

export const deleteData = (
  url: string,
  payload: any = null,
  headers: { [key: string]: string } | null = null
) =>
  KeycloakService.UpdateToken().then((refreshed) => {
    if (refreshed) {
      console.info("New token refreshed");
    }

    return fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${KeycloakService.GetToken()}`,
        ...(headers !== null && headers)
      },
      ...(payload !== null && { body: JSON.stringify(payload) })
    }).then((res) => {
      if (res.redirected) {
        window.location.href = res.url;
      }
      return res;
    });
  });

export const postData = (
  url: string,
  payload: any,
  headers: { [key: string]: string } | null = null
) =>
  KeycloakService.UpdateToken().then((refreshed) => {
    if (refreshed) {
      console.info("New token refreshed");
    }

    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${KeycloakService.GetToken()}`,
        ...(headers !== null && headers)
      },
      body: JSON.stringify(payload)
    }).then((res) => {
      if (res.redirected) {
        window.location.href = res.url;
      }
      return res;
    });
  });

export const putData = (
  url: string,
  payload: any,
  headers: { [key: string]: string } | null = null
) =>
  KeycloakService.UpdateToken().then((refreshed) => {
    if (refreshed) {
      console.info("New token refreshed");
    }

    return fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${KeycloakService.GetToken()}`,
        ...(headers !== null && headers)
      },
      body: JSON.stringify(payload)
    }).then((res) => {
      if (res.redirected) {
        window.location.href = res.url;
      }

      return res;
    });
  });
