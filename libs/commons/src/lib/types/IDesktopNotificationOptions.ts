export default interface IDesktopNotificationOptions {
  /**
   * Notification settings based on MDN
   * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#lang
   * */
  actions?: {
    action: string;
    title: string;
    icon?: string;
  };
  badge?: string;
  body?: string;
  data?: any;
  dir?: "auto" | "ltr" | "rtl";
  icon?: string;
  image?: string;
  lang?: string;
  renotify?: boolean;
  requireInteraction?: boolean;
  silent?: boolean;
  tag?: string | number;
  timestamp?: number;
  vibrate?: number[];

  /**
   * Custom notification settings
   */
  timeout?: number;
  title?: string;
  queue?: string;

  system?: {
    body?: string;
    icon?: string;
    tag?: string;
  };

  events?: {
    click?: any;
    close?: any;
    error?: any;
    show?: any;
  };

  closeOnEvents?: any[];
}
