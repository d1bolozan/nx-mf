export default class AgentStatus {
  static UNKNOWN = { ID: 0, Label: "Unknown", Description: "Unknown" };
  static INITIALIZING = { ID: 1, Label: "Initializing", Description: "Initializing" };
  static NOT_LOGGED = { ID: 2, Label: "Logged out", Description: "Logged out" };

  static WAITING_CALL = { ID: 3, Label: "Ready", Description: "Ready" };
  static RING_FROM_CLIENT = { ID: 4, Label: "Ringing", Description: "Ringing" };

  static TALK_INCOMING = { ID: 5, Label: "Inbound call", Description: "Incoming call / talking" };
  static TALK_OUTGOING = { ID: 6, Label: "Outbound call", Description: "Outbound call / talking" };

  static IN_HOLD = { ID: 8, Label: "Inbound call", Description: "Inbound call on hold" };
  static IN_HOLD_DIAL = {
    ID: 9,
    Label: "Inbound call",
    Description: "Inbound call on hold / dialing"
  };
  static IN_HOLD_CONSULTATION = {
    ID: 10,
    Label: "Inbound call",
    Description: "Inbound call on hold / consultation"
  };

  static OUT_HOLD = { ID: 19, Label: "Outbound call", Description: "Outbound call on hold" };
  static OUT_HOLD_DIAL = {
    ID: 20,
    Label: "Outbound call",
    Description: "Outbound call on hold / dialing"
  };
  static OUT_HOLD_CONSULTATION = {
    ID: 21,
    Label: "Outbound call",
    Description: "Outbound call on hold / consultation"
  };

  static CLERICAL = { ID: 11, Label: "Clerical", Description: "Clerical" };
  static PAUSE = { ID: 12, Label: "Pause", Description: "Pause" };

  static DIAL_OUT = { ID: 13, Label: "Dialing", Description: "Dialing" };

  static EXTENSION_CALL = {
    ID: 14,
    Label: "Helper call",
    Description: "Consultation call incoming"
  };
  static RING_FROM_EXTENSION = {
    ID: 16,
    Label: "Helper call",
    Description: "Consultation call ringing"
  };
  static EXTENSION_CONSULTATION = {
    ID: 22,
    Label: "Helper call",
    Description: "Consultation call received"
  };

  static LISTEN_MESSAGES = {
    ID: 26,
    Label: "Night messages",
    Description: "Listening to night messages"
  };
  static SUPER_IN_CONF = { ID: 30, Label: "Conference", Description: "Supervisor conference" };

  static SUPER_LISTEN_REC = {
    ID: 31,
    Label: "Records review",
    Description: "Supervisor listening records"
  };

  static LAST_STATUS = { ID: 32, Label: "Last status", Description: "Last status" };
  static TALK_WITH_EXTENSION = {
    ID: 34,
    Label: "Helper call",
    Description: "Talking to extension"
  };
  static LAST_STATUS_FAKE = { ID: 36, Label: "Last status", Description: "Last status" };

  static get(statusId: number) {
    switch (statusId) {
      case 0:
        return this.UNKNOWN;
      case 1:
        return this.INITIALIZING;
      case 2:
        return this.NOT_LOGGED;
      case 3:
        return this.WAITING_CALL;
      case 4:
        return this.RING_FROM_CLIENT;
      case 5:
        return this.TALK_INCOMING;
      case 6:
        return this.TALK_OUTGOING;
      case 8:
        return this.IN_HOLD;
      case 9:
        return this.IN_HOLD_DIAL;
      case 10:
        return this.IN_HOLD_CONSULTATION;
      case 19:
        return this.OUT_HOLD;
      case 20:
        return this.OUT_HOLD_DIAL;
      case 21:
        return this.OUT_HOLD_CONSULTATION;
      case 11:
        return this.CLERICAL;
      case 12:
        return this.PAUSE;
      case 13:
        return this.DIAL_OUT;
      case 14:
        return this.EXTENSION_CALL;
      case 16:
        return this.RING_FROM_EXTENSION;
      case 22:
        return this.EXTENSION_CONSULTATION;
      case 26:
        return this.LISTEN_MESSAGES;
      case 30:
        return this.SUPER_IN_CONF;
      case 31:
        return this.SUPER_LISTEN_REC;
      case 32:
        return this.LAST_STATUS;
      case 34:
        return this.TALK_WITH_EXTENSION;
      case 36:
        return this.LAST_STATUS_FAKE;

      default:
        return null;
    }
  }
}
