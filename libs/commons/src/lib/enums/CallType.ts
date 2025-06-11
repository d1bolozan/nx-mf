export default class CallType {
  static Unknown = { ID: -1, Label: "Unknown", Class: "unknown", Type: 0, CallCode: 0 };

  /* primary+secondary; no callcode */
  static AgentToAgent = {
    ID: -2,
    Label: "Agent-to-Agent",
    Class: "agent-agent",
    Type: 4,
    CallCode: 1
  };

  /* primary; callcode */
  static Inbound = { ID: 1, Label: "Inbound call", Class: "inbound", Type: 1, CallCode: 1 };

  /* primary; callcode */
  static NightMessage = { ID: 2, Label: "Night message", Class: "inbound", Type: 1, CallCode: 1 };

  /* primary; callcode */
  static OutboundPredictive = {
    ID: 3,
    Label: "Predictive call",
    Class: "outbound",
    Type: 1,
    CallCode: 1
  };

  /* primary; callcode */
  static OutboundManual = {
    ID: 4,
    Label: "Outbound call",
    Class: "outbound",
    Type: 1,
    CallCode: 1
  };

  /* primary; callcode */
  static OutboundCallback = { ID: 5, Label: "Callback", Class: "outbound", Type: 1, CallCode: 1 };

  /* primary; no callcode */
  static OutboundHelper = { ID: 6, Label: "Helper call", Class: "outbound", Type: 1, CallCode: 0 };

  static OutboundDirectLine = {
    ID: 7,
    Label: "Direct line",
    Class: "outbound",
    Type: 1,
    CallCode: 0
  };
  static OutboundViaScript = {
    ID: 8,
    Label: "Outbound via script",
    Class: "outbound",
    Type: 1,
    CallCode: 0
  };
  static OutboundVirtualExtension = {
    ID: 9,
    Label: "Outbound via script",
    Class: "outbound",
    Type: 2,
    CallCode: 0
  };

  /* outbound / primary; callcode */
  static FromViewLines = { ID: 10, Label: "View Lines", Class: "outbound", Type: 1, CallCode: 1 };

  /* inbound / primary; callcode */
  static InboundVirtualExtension = {
    ID: 11,
    Label: "Virtual ext.",
    Class: "inbound",
    Type: 1,
    CallCode: 1
  };

  static get(statusId: number) {
    switch (statusId) {
      case -1:
        return this.Unknown;
      case -2:
        return this.AgentToAgent;
      case 1:
        return this.Inbound;
      case 2:
        return this.NightMessage;
      case 3:
        return this.OutboundPredictive;
      case 4:
        return this.OutboundManual;
      case 5:
        return this.OutboundCallback;
      case 6:
        return this.OutboundHelper;
      case 7:
        return this.OutboundDirectLine;
      case 8:
        return this.OutboundViaScript;
      case 9:
        return this.OutboundVirtualExtension;
      case 10:
        return this.FromViewLines;
      case 11:
        return this.InboundVirtualExtension;

      default:
        return null;
    }
  }

  static isInbound(statusId) {
    return this.get(statusId)?.Class === "inbound";
  }
}
