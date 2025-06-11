export default class CallStatus {
  static Unknown = { ID: 0, Label: "Unknown" };
  static Dialing = { ID: -1, Label: "Dialing" };
  static Ringing = { ID: 1, Label: "Ringing" };
  static Connected = { ID: 2, Label: "Connected" };
  static Disconnected = { ID: 3, Label: "Disconnected" };

  static get(statusId: number) {
    switch (statusId) {
      case 0:
        return this.Unknown;
      case -1:
        return this.Dialing;
      case 1:
        return this.Ringing;
      case 2:
        return this.Connected;
      case 3:
        return this.Disconnected;

      default:
        return null;
    }
  }
}
