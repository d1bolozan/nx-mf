export default class DialerCodes {
  static 1: {
    ID: 1;
    Cause: "Unallocated (unassigned) number";
    Explanation: "The ISDN number was sent to the switch in the correct format; however, the number is not assigned to any destination equipment.";
  };
  static 2: {
    ID: 2;
    Cause: "No route to specified transit network";
    Explanation: "The ISDN exchange is asked to route the call through an unrecognized intermediate network.";
  };
  static 3: {
    ID: 3;
    Cause: "No route to destination";
    Explanation: "The call was routed through an intermediate network that does not serve the destination address.";
  };
  static 6: {
    ID: 6;
    Cause: "Channel unacceptable";
    Explanation: "The service quality of the specified channel is insufficient to accept the connection.";
  };
  static 7: {
    ID: 7;
    Cause: "Call awarded and being delivered in an established channel";
    Explanation: "The user is assigned an incoming call that is being connected to an already-established call channel.";
  };
  static 16: {
    ID: 16;
    Cause: "Normal call clearing";
    Explanation: "Normal call clearing has occurred.";
  };
  static 17: {
    ID: 17;
    Cause: "User busy";
    Explanation: "The called system acknowledges the connection request but is unable to accept the call because all B channels are in use.";
  };
  static 18: {
    ID: 18;
    Cause: "No user responding";
    Explanation: "The connection cannot be completed because the destination does not respond to the call.";
  };
  static 19: {
    ID: 19;
    Cause: "No answer from user (user alerted)";
    Explanation: "The destination responds to the connection request but fails to complete the connection within the prescribed time. The problem is at the remote end of the connection.";
  };
  static 21: {
    ID: 21;
    Cause: "Call rejected";
    Explanation: "The destination is capable of accepting the call but rejected the call for an unknown reason.";
  };
  static 22: {
    ID: 22;
    Cause: "Number changed";
    Explanation: "The ISDN number used to set up the call is not assigned to any system.";
  };
  static 26: {
    ID: 26;
    Cause: "Non-selected user clearing";
    Explanation: "The destination is capable of accepting the call but rejected the call because it was not assigned to the user.";
  };
  static 27: {
    ID: 27;
    Cause: "Designation out of order";
    Explanation: "The destination cannot be reached because the interface is not functioning correctly, and a signaling message cannot be delivered. This might be a temporary condition, but it could last for an extended period of time. For example, the remote equipment mig";
  };
  static 28: {
    ID: 28;
    Cause: "Invalid number format";
    Explanation: "The connection could be established because the destination address was presented in an unrecognizable format or because the destination address was incomplete.";
  };
  static 29: {
    ID: 29;
    Cause: "Facility rejected";
    Explanation: "The facility requested by the user cannot be provided by the network.";
  };
  static 30: {
    ID: 30;
    Cause: "Response to STATUS ENQUIRY";
    Explanation: "The status message was generated in direct response to the prior receipt of a status enquiry message.";
  };
  static 31: {
    ID: 31;
    Cause: "Normal, unspecified";
    Explanation: "Reports the occurrence of a normal event when no standard cause applies. No action required.";
  };
  static 34: {
    ID: 34;
    Cause: "No circuit/channel available";
    Explanation: "The connection cannot be established because no appropriate channel is available to take the call.";
  };
  static 38: {
    ID: 38;
    Cause: "Network out of order";
    Explanation: "The destination cannot be reached because the network is not functioning correctly, and the condition might last for an extended period of time. An immediate reconnect attempt will probably be unsuccessful.";
  };
  static 41: {
    ID: 41;
    Cause: "Temporary failure";
    Explanation: "An error occurred because the network is not functioning correctly. The problem will be resolved shortly.";
  };
  static 42: {
    ID: 42;
    Cause: "Switching equipment congestion";
    Explanation: "The destination cannot be reached because the network switching equipment is temporarily overloaded.";
  };
  static 43: {
    ID: 43;
    Cause: "Access information discarded";
    Explanation: "The network cannot provide the requested access information.";
  };
  static 44: {
    ID: 44;
    Cause: "Requested circuit/channel not available";
    Explanation: "The remote equipment cannot provide the requested channel for an unknown reason. This might be a temporary problem.";
  };
  static 47: {
    ID: 47;
    Cause: "Resources unavailable, unspecified";
    Explanation: "The requested channel or service is unavailable for an unknown reason. This might be a temporary problem.";
  };
  static 49: {
    ID: 49;
    Cause: "Quality of service unavailable";
    Explanation: "The requested quality of service cannot be provided by the network. This might be a subscription problem.";
  };
  static 50: {
    ID: 50;
    Cause: "Requested facility not subscribed";
    Explanation: "The remote equipment supports the requested supplementary service by subscription only.";
  };
  static 57: {
    ID: 57;
    Cause: "Bearer capability not authorized";
    Explanation: "The user requested a bearer capability that the network provides, but the user is not authorized to use it. This might be a subscription problem.";
  };
  static 58: {
    ID: 58;
    Cause: "Bearer capability not presently available";
    Explanation: "The network normally provides the requested bearer capability, but it is unavailable at the present time. This might be due to a temporary network problem or to a subscription problem.";
  };
  static 63: {
    ID: 63;
    Cause: "Service or option not available, unspecified";
    Explanation: "The network or remote equipment was unable to provide the requested service option for an unspecified reason. This might be a subscription problem.";
  };
  static 65: {
    ID: 65;
    Cause: "Bearer capability not implemented";
    Explanation: "The network cannot provide the bearer capability requested by the user.";
  };
  static 66: {
    ID: 66;
    Cause: "Channel type not implemented";
    Explanation: "The network or the destination equipment does not support the requested channel type.";
  };
  static 69: {
    ID: 69;
    Cause: "Requested facility not implemented";
    Explanation: "The remote equipment does not support the requested supplementary service.";
  };
  static 70: {
    ID: 70;
    Cause: "Only restricted digital information bearer capability is available";
    Explanation: "The network is unable to provide unrestricted digital information bearer capability.";
  };
  static 79: {
    ID: 79;
    Cause: "Service or option not implemented, unspecified";
    Explanation: "The network or remote equipment is unable to provide the requested service option for an unspecified reason. This might be a subscription problem.";
  };
  static 81: {
    ID: 81;
    Cause: "Invalid call reference value";
    Explanation: "The remote equipment received a call with a call reference that is not currently in use on the user-network interface.";
  };
  static 82: {
    ID: 82;
    Cause: "Identified channel does not exist";
    Explanation: "The receiving equipment is requested to use a channel that is not activated on the interface for calls.";
  };
  static 83: {
    ID: 83;
    Cause: "A suspended call exists, but this call identity does not";
    Explanation: "The network received a call resume request. The call resume request contained a Call Identify information element that indicates that the call identity is being used for a suspended call.";
  };
  static 84: {
    ID: 84;
    Cause: "Call identity in use";
    Explanation: "The network received a call resume request. The call resume request contained a Call Identify information element that indicates that it is in use for a suspended call.";
  };
  static 85: {
    ID: 85;
    Cause: "No call suspended";
    Explanation: "The network received a call resume request when there was not a suspended call pending. This might be a transient error that will be resolved by successive call retries.";
  };
  static 86: {
    ID: 86;
    Cause: "Call having the requested call identity has been cleared";
    Explanation: "The network received a call resume request. The call resume request contained a Call Identity information element, which once indicated a suspended call. However, the suspended call was cleared either by timeout or by the remote user.";
  };
  static 88: {
    ID: 88;
    Cause: "Incompatible destination";
    Explanation: "Indicates that an attempt was made to connect to non-ISDN equipment. For example, to an analog line.";
  };
  static 91: {
    ID: 91;
    Cause: "Invalid transit network selection";
    Explanation: "The ISDN exchange was asked to route the call through an unrecognized intermediate network.";
  };
  static 95: {
    ID: 95;
    Cause: "Invalid message, unspecified";
    Explanation: "An invalid message was received, and no standard cause applies. This is usually due to a D-channel error. If this error occurs systematically, report it to your ISDN service provider.";
  };
  static 96: {
    ID: 96;
    Cause: "Mandatory information element is missing";
    Explanation: "The receiving equipment received a message that did not include one of the mandatory information elements. This is usually due to a D-channel error. If this error occurs systematically, report it to your ISDN service provider.";
  };
  static 97: {
    ID: 97;
    Cause: "Message type non-existent or not implemented";
    Explanation: "The receiving equipment received an unrecognized message, either because the message type was invalid or because the message type was valid but not supported. The cause is due to either a problem with the remote configuration or a problem with the local D";
  };
  static 98: {
    ID: 98;
    Cause: "Message not compatible with call state or message type non-existent or not implemented";
    Explanation: "The remote equipment received an invalid message, and no standard cause applies. This cause is due to a D-channel error. If this error occurs systematically, report it to your ISDN service provider.";
  };
  static 99: {
    ID: 99;
    Cause: "Information element non-existent or not implemented";
    Explanation: "The remote equipment received a message that includes information elements, which were not recognized. This is usually due to a D-channel error. If this error occurs systematically, report it to your ISDN service provider.";
  };
  static 100: {
    ID: 100;
    Cause: "Invalid information element contents";
    Explanation: "The remote equipment received a message that includes invalid information in the information element. This is usually due to a D-channel error.";
  };
  static 101: {
    ID: 101;
    Cause: "Message not compatible with call state";
    Explanation: "The remote equipment received an unexpected message that does not correspond to the current state of the connection. This is usually due to a D-channel error.";
  };
  static 102: {
    ID: 102;
    Cause: "Recovery on timer expires";
    Explanation: "An error-handling (recovery) procedure was initiated by a timer expiry. This is usually a temporary problem.";
  };
  static 111: {
    ID: 111;
    Cause: "Protocol error, unspecified";
    Explanation: "An unspecified D-channel error when no other standard cause applies.";
  };
  static 127: {
    ID: 127;
    Cause: "Internetworking, unspecified";
    Explanation: "An event occurred, but the network does not provide causes for the action that it takes. The precise problem is unknown.";
  };
  static 1024: {
    ID: 1024;
    Cause: "The lead was not dialed";
    Explanation: "The lead was not dialed";
  };
  static 1025: { ID: 1025; Cause: "Fax tone"; Explanation: "A fax tone was detected" };
  static 1026: {
    ID: 1026;
    Cause: "Talk to Agent";
    Explanation: "This call was passed to the agent";
  };
  static 1027: {
    ID: 1027;
    Cause: "Closed waiting";
    Explanation: "The client hangup the phone before beeing passed to an agent";
  };
  static 1028: {
    ID: 1028;
    Cause: "On do not call list";
    Explanation: "This call is on the do not call list";
  };
  static 1029: {
    ID: 1029;
    Cause: "AM cutted by dialer";
    Explanation: "The dialer detected an answering machine and hangup the line";
  };
  static 1030: {
    ID: 1030;
    Cause: "AM talk to an agent";
    Explanation: "The dialer detected an answering machine and passed that call to an agent";
  };
  static 1031: {
    ID: 1031;
    Cause: "AM closed waiting";
    Explanation: "The dialer detected an answering machine wich hangup the line before beeing transfered to an agent";
  };
  static 1032: { ID: 1032; Cause: "Operator intercept"; Explanation: "Operator intercept." };
  static 1033: { ID: 1033; Cause: "General error"; Explanation: "Unspecified error" };
  static 1034: {
    ID: 1034;
    Cause: "No ringback";
    Explanation: "The phone on the client side is dead";
  };
  static 1035: {
    ID: 1035;
    Cause: "Closed In Script";
    Explanation: "The call was ended in Script. It wasn't talking with agent nor waiting for one";
  };
  static 5288: {
    ID: 5288;
    Cause: "SIP No Information";
    Explanation: "An event occurred, but the network does not provide causes for the action that it takes. The precise problem is unknown.";
  };
  static 5400: {
    ID: 5400;
    Cause: "Temporary failure";
    Explanation: "An error occurred because the network is not functioning correctly. The problem will be resolved shortly.";
  };
  static 5403: {
    ID: 5403;
    Cause: "Call rejected";
    Explanation: "The destination is capable of accepting the call but rejected the call for an unknown reason.";
  };
  static 5404: {
    ID: 5404;
    Cause: "Unallocated (unassigned) number";
    Explanation: "The ISDN number was sent to the switch in the correct format; however, the number is not assigned to any destination equipment.";
  };
  static 5408: {
    ID: 5408;
    Cause: "Recovery on timer expires";
    Explanation: "An error-handling (recovery) procedure was initiated by a timer expiry. This is usually a temporary problem.";
  };
  static 5410: {
    ID: 5410;
    Cause: "Number changed";
    Explanation: "The ISDN number used to set up the call is not assigned to any system.";
  };
  static 5415: {
    ID: 5415;
    Cause: "Service or option not implemented, unspecified";
    Explanation: "The network or remote equipment is unable to provide the requested service option for an unspecified reason. This might be a subscription problem.";
  };
  static 5480: {
    ID: 5480;
    Cause: "No user responding";
    Explanation: "The connection cannot be completed because the destination does not respond to the call.";
  };
  static 5486: {
    ID: 5486;
    Cause: "User busy";
    Explanation: "The called system acknowledges the connection request but is unable to accept the call because all B channels are in use.";
  };
  static 5487: {
    ID: 5487;
    Cause: "SIP No Information";
    Explanation: "An event occurred, but the network does not provide causes for the action that it takes. The precise problem is unknown.";
  };
  static 5488: {
    ID: 5488;
    Cause: "Normal, unspecified";
    Explanation: "Reports the occurrence of a normal event when no standard cause applies. No action required.";
  };
  static 5500: {
    ID: 5500;
    Cause: "Temporary failure";
    Explanation: "An error occurred because the network is not functioning correctly. The problem will be resolved shortly.";
  };
  static 5503: {
    ID: 5503;
    Cause: "Service or option not available, unspecified";
    Explanation: "The network or remote equipment was unable to provide the requested service option for an unspecified reason. This might be a subscription problem.";
  };
  static 5800: {
    ID: 5800;
    Cause: "SIP No Information";
    Explanation: "An event occurred, but the network does not provide causes for the action that it takes. The precise problem is unknown.";
  };

  static get(dialerCode: number) {
    return this[dialerCode as keyof typeof DialerCodes];
  }
}
