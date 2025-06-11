import { getData } from "../fetch";
import Logger from "../logger";
import IUserData from "../types/IUserData";

const logger = new Logger("user-service", { color: "#19d1d1", enable: "log" });

const REFRESH_INTERVAL = 60000;

const _userData: IUserData = {
  id: "",
  username: "",
  firstName: "",
  lastName: ""
};

const _rights: { [key: string]: string[] } = {};

let _lastUpdate: Date | null = null;

// #region PUBLIC METHODS

const InitializeUserData = (newUserData: IUserData) => {
  _userData.id = newUserData.id;
  _userData.username = newUserData.username;
  _userData.firstName = newUserData.firstName;
  _userData.lastName = newUserData.lastName;

  for (const appId in newUserData.rights) {
    _rights[appId] = newUserData.rights[appId].roles;
  }

  _lastUpdate = new Date();
};

const ClearUserData = () => {
  _userData.id = "";
  _userData.username = "";
  _userData.firstName = "";
  _userData.lastName = "";
};

const GetUserData = (): IUserData => {
  refreshUserData();

  return _userData;
};

const HasRight = (app: string, right: string) => {
  refreshUserData();

  if (!Object.keys(_rights).includes(app)) {
    return false;
  }

  try {
    return _rights[app].includes(right);
  } catch (ex) {
    logger.error(ex);

    return false;
  }
};

const GetRights = (app: string) => {
  refreshUserData();

  if (!Object.keys(_rights).includes(app)) {
    return [];
  }

  return _rights[app];
};

const GetApps = () => {
  refreshUserData();

  return Object.keys(_rights);
};

const IsInitialized = () => _lastUpdate !== null;

// #endregion PUBLIC METHODS

// #region == INTERNAL METHODS ==

const refreshUserData = () => {
  if (_lastUpdate != null && new Date().getTime() - _lastUpdate.getTime() < REFRESH_INTERVAL) {
    return;
  }

  _lastUpdate = new Date();

  getData(`${process.env.PLATFORM_BACKEND_URL}/api/platform/init`)
    .then((res) => res.json())
    .then((res) => {
      InitializeUserData({
        id: res.id,
        username: res.username,
        firstName: res.firstName,
        lastName: res.lastName,
        rights: res.resourceAccess
      });
    })
    .catch((err) => {
      logger.error("Error updating rights - ", err);
    });
};

// #endregion == INTERNAL METHODS ==

const UserDataService = {
  InitializeUserData,
  ClearUserData,
  GetUserData,
  HasRight,
  GetRights,
  GetApps,
  IsInitialized
};

export default UserDataService;
