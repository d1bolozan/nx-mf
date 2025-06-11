const GetLocalData = (key: string): any => {
  const data = localStorage.getItem(key);

  if (data === null) {
    return data;
  }

  return JSON.parse(data);
};

const SetLocalData = (key: string, data: any): void => {
  if (typeof data === "object" && data !== null) {
    localStorage.setItem(key, JSON.stringify(data));

    return;
  }

  localStorage.setItem(key, data);
};

const RemoveLocalData = (key: string): void => {
  localStorage.removeItem(key);
};

const GetSessionData = (key: string): any => {
  const data = sessionStorage.getItem(key);

  if (data === null) {
    return data;
  }

  return JSON.parse(data);
};

const SetSessionData = (key: string, data: any): void => {
  if (typeof data === "object" && data !== null) {
    sessionStorage.setItem(key, JSON.stringify(data));

    return;
  }

  sessionStorage.setItem(key, data);
};

const RemoveSessionData = (key: string): void => {
  sessionStorage.removeItem(key);
};

const StorageManager = {
  GetLocalData,
  SetLocalData,
  RemoveLocalData,
  GetSessionData,
  SetSessionData,
  RemoveSessionData
};

export default StorageManager;
