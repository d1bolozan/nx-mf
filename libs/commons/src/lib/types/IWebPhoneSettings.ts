import IIceServer from "./IIceServer";

export default interface IWebPhoneSettings {
  fsext?: string;
  fsWSUri?: string;
  fsSIPUri?: string;
  wsServerUrl?: string;
  sipServer?: string;
  apiStunCredentialsUrl: string;
  iceServers: IIceServer[];
}
