import IAgentState from "./IAgentState";
import ICall from "./ICall";

export default interface IMccState {
  Agent: IAgentState;
  Call: {
    Primary: ICall | null;
    Secondary: ICall | null;
  };

  Time: number | string | null;
  Timestamp: number | string | null;
  MessageID: number | null;

  Calls?: any;
}
