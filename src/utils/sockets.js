import io from "socket.io-client";
import { ENV } from "./contants";

export let socket = null;

export function initSockets() {
  socket = io(ENV.SOCKET_URL);
}
