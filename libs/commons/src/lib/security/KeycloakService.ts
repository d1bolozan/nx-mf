import Keycloak from "keycloak-js";

// if (!(window as any).keycloakInstance) {
//   (window as any).keycloakInstance = new Keycloak(
//     `${process.env.PLATFORM_BACKEND_URL}/api/keycloakConfig`
//   );
// }

// const keycloakInstance = (window as any).keycloakInstance;

const keycloakInstance = new Keycloak(`${process.env.PLATFORM_BACKEND_URL}/api/keycloakConfig`);

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

const Login = (onAuthenticatedCallback: any) => {
  keycloakInstance
    .init({ onLoad: "login-required" })
    .then(function (authenticated: any) {
      authenticated ? onAuthenticatedCallback() : alert("non authenticated");
    })
    .catch((e: any) => {
      console.log(e);
      console.log(`keycloak init exception: ${e}`);
    });
};

const Logout = () => {
  keycloakInstance.logout();
};

const getToken = () => {
  return keycloakInstance.token;
};

const isTokenExpired = (): boolean => {
  return keycloakInstance.isTokenExpired();
};

const updateToken = (): Promise<boolean> => {
  return keycloakInstance.updateToken(30);
};

const KeycloakService = {
  CallLogin: Login,
  CallLogout: Logout,
  GetToken: getToken,
  IsTokenExpired: isTokenExpired,
  UpdateToken: updateToken
};

export default KeycloakService;
