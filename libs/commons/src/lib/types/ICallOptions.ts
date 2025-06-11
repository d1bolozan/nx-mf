import IIceServer from "./IIceServer";

export default interface ICallOptions {
  eventHandlers: { [key: string]: (...args: any[]) => any };
  mediaConstraints: {
    audio:
      | boolean
      | {
          deviceId: string;
        };
    video: boolean;
  };
  pcConfig: {
    iceServers: IIceServer[];
  };
}
