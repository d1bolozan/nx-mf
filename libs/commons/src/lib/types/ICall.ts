export default interface ICall {
  OtherPartyID: string;

  ThisPartyID: string;

  ID: number;
  OnHold: number;

  Queue: {
    ID: number;
    Name: string;
  };

  StartDate: string;
  Status: number;

  Timers: {
    IVR: number;
    Queue: number;
    Ring: number;
    Talk: number;
    Call: number;
    Hold: number;
    Clerical: number;
  };

  Type: number;
  DisconnectReason: number;

  CallCodes: any[];
  CallCodesList: any[];
  CrmParams: any;
  isPrimary: boolean;

  Tones: any;
}
