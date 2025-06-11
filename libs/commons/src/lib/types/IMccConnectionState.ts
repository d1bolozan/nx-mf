export default interface IMccConnectionState {
  farmAgent: "offline" | "connecting" | "connected" | "connected" | "disconnected" | "reconnecting";
  webPhone: "offline" | "connecting" | "connected" | "connected" | "disconnected" | "reconnecting";
}
