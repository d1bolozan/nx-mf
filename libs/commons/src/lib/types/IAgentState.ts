export default interface IAgentState {
  Extension: {
    ID: string | null;
    Muted: boolean | number | null;
    Type: string | null;
    sipID: string | null;
  };
  ID: number | null;
  LoginDuration: number | null;
  Name: string | null;
  FullName: string | null;
  Predictive: number | boolean | null;
  Status: {
    Color: string | null;
    Duration: number | null;
    ID: number | null;
    Pause: {
      ID: number | null;
      Name: string | null;
    };
  };
}
