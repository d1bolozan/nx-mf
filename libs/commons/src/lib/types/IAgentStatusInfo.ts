export default interface IAgentStatusInfo {
  Agent: {
    ID: number;
    Name: string;
    LoginDuration: number;
    Predictive: number;
    Status: {
      ID: number;
      Duration: number;
      Color: string;
      Pause?: {
        ID: number;
        Name: string;
      };
    };
    Extension: {
      ID: string;
      Muted: number;
    };
  };
  Calls: {
    ID: number;
    Type: number;
    OtherPartyID: string;
    ThisPartyID: string;
    Queue: {
      ID: number;
      Name: string;
    };
    Timers: {
      Call: number;
      Ring: number;
      IVR: number;
      Queue: number;
      Talk: number;
      Hold: number;
    };
    OnHold: number;
    Status: number;
    DisconnectReason: number;
    StartDate: string;
  }[];
  MessageID: number;
  Time: string;
}
