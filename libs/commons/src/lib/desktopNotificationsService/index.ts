import Logger from "../logger";
import IDesktopNotificationOptions from "../types/IDesktopNotificationOptions";

const logger = new Logger("desktop-notifications", { color: "#0087e8", enable: "log" });

const show = (text: any, options: any = {}) => {
  const sysMessage = options.system?.message || text;

  // eslint-disable-next-line no-prototype-builtins
  const timeout = options.hasOwnProperty("timeout") ? options.timeout : 5000;

  // TODO: add type for sysoptions
  const sysOptions: IDesktopNotificationOptions = {
    tag: options.system?.tag || options.queue || "",
    body: options.system?.body,
    timeout: timeout
  };

  if (options.system?.icon || options.icon) {
    sysOptions.icon = options.system?.icon || options.icon;
  }

  showSystemNotification(sysMessage, sysOptions);
};

const fnNotify = function (message: string, options: IDesktopNotificationOptions) {
  options = options || {};

  // TODO: add type for sysoptions
  const sysOptions: IDesktopNotificationOptions = {
    silent: options.silent !== true,
    tag: options.tag || options.queue || options.system?.tag || "mcc:callcenter",
    renotify: options.renotify !== false,
    requireInteraction: options.requireInteraction !== false,
    body: options.body || options.system?.body || ""
  };

  // TODO: add vibrate property for sysoptions type
  if (!sysOptions.silent) {
    sysOptions.vibrate =
      options.vibrate && Array.isArray(options.vibrate) ? options.vibrate : [200, 100, 200];
  }

  // TODO: add icon property for sysoptions type
  if (options.icon) {
    sysOptions.icon = options.icon;
  }

  // TODO: add actions property for sysoptions type
  if (options.actions) {
    sysOptions.actions = options.actions;
  }

  // TODO: add badge property for sysoptions type
  if (options.badge) {
    sysOptions.badge = options.badge;
  }

  // TODO: add data property for sysoptions type
  if (options.data) {
    sysOptions.data = options.data;
  }

  // TODO: add dir property for sysoptions type
  if (options.dir) {
    sysOptions.dir = options.dir;
  }

  // TODO: add image property for sysoptions type
  if (options.image) {
    sysOptions.image = options.image;
  }

  // TODO: add lang property for sysoptions type
  if (options.lang) {
    sysOptions.lang = options.lang;
  }

  // TODO: add title property for sysoptions type
  if (options.title) {
    sysOptions.title = options.title;
  }

  const notification = new Notification(message, sysOptions as NotificationOptions);

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.visibilityState === "visible") {
        // The tab has become visible so clear the now-stale Notification.
        notification?.close();
      }
    },
    { once: true }
  );

  document.addEventListener(
    "click",
    () => {
      notification?.close();
    },
    { once: true }
  );

  notification.onclick = (event) => {
    if (document.visibilityState !== "visible") {
      window.focus();
    }
    if (options.events && typeof options.events?.click == "function") {
      options.events?.click.call(notification, event);
    }
  };

  if (options.closeOnEvents && Array.isArray(options.closeOnEvents)) {
    options.closeOnEvents.forEach((eventName) => {
      document.addEventListener(
        eventName,
        () => {
          notification?.close();
        },
        { once: true }
      );
    });
  }

  notification.onclose = (event) => {
    if (options.events && typeof options.events?.close == "function") {
      options.events?.click.call(notification, event);
    }
  };

  if (options.events && typeof options.events?.error == "function") {
    notification.onerror = options.events?.error;
  }

  if (options.events && typeof options.events?.show == "function") {
    notification.onshow = options.events?.show;
  }

  if (options.timeout && !isNaN(options.timeout)) {
    setTimeout(() => {
      notification?.close();
    }, options.timeout);
  }

  return notification;
};

const showSystemNotification = async (message: any, options: IDesktopNotificationOptions) => {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    console.warn("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    return fnNotify(message, options);
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    const permission = await Notification.requestPermission();
    // If the user accepts, let's create a notification
    if (permission === "granted") {
      return fnNotify(message, options);
    }
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
  return null;
};

const checkSystemNotificationPermissions = async (insist: any) => {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      logger.info("Notification permissions: granted");

      return Notification.permission;
    }
    if (Notification.permission !== "denied" || insist) {
      const permission = await Notification.requestPermission();

      logger.info("Notification permissions: " + permission);

      return permission;
    }
    return Notification.permission;
  }

  console.warn("This browser does not support desktop notification");

  return "denied";
};

export default {
  show,
  showSystemNotification,
  checkSystemNotificationPermissions
};
