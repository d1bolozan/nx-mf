import { ModuleFederationConfig } from "@nx/module-federation";
const config: ModuleFederationConfig = {
  name: "mdt_commons",
  exposes: {
    "./Module": "./src/remote-entry.ts",
    "./fetch": "../../libs/commons/src/lib/fetch/index.ts",
    "./debounce": "../../libs/commons/src/lib/debounce/index.ts",
    "./notifications": "../../libs/commons/src/lib/desktopNotificationsService/index.ts",
    "./enums": "../../libs/commons/src/lib/enums/index.ts",
    "./fileManager": "../../libs/commons/src/lib/fileManager/index.ts",
    "./logger": "../../libs/commons/src/lib/logger/index.ts",
    "./security": "../../libs/commons/src/lib/security/index.ts",
    "./storageManager": "../../libs/commons/src/lib/storageManager/index.ts",
    "./toastService": "../../libs/commons/src/lib/toastService/index.ts",
    "./types": "../../libs/commons/src/lib/types/index.ts",
    "./userService": "../../libs/commons/src/lib/userService/index.ts",
    "./utils": "../../libs/commons/src/lib/Utils.ts",
  }
};
/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
