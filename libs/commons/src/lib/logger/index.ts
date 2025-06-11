import debug from "debug";

const APP_NAME = "mdt";
localStorage.debug = `${APP_NAME}:*`;

debug.formatters.J = (v) => {
  if (!v) return "";

  try {
    return `\n${JSON.stringify(v, null, "\t")}\n`;
  } catch {
    /* empty */
  }

  return v;
};

export default class Logger {
  private _key: string;

  private _debug: debug.Debugger;
  private _warn: debug.Debugger;
  private _error: debug.Debugger;

  constructor(prefix: any, options: any) {
    options = options || {};
    const key = prefix ? `${APP_NAME}:${prefix}` : `${APP_NAME}`;

    this._key = key;
    this._debug = debug.default(key);
    this._warn = debug.default(key);
    this._error = debug.default(key);

    this._debug.log = console.info.bind(console);
    this._warn.log = console.warn.bind(console);
    this._error.log = console.error.bind(console);

    if (options.color) {
      this._debug.color = options.color;
      this._warn.color = options.color;
      this._error.color = options.color;
    }

    this.enable(options.enable || "");
  }

  get key() {
    return this._key;
  }

  get info() {
    return this._debug;
  }

  get log() {
    return this._debug;
  }

  get debug() {
    return this._debug;
  }

  get warn() {
    return this._warn;
  }

  get error() {
    return this._error;
  }

  enable(level: boolean | "debug" | "log" | "info") {
    //if(!what) return;
    if (!level || level === true || level === "debug" || level === "log" || level === "info") {
      debug.enable(this._key);
      this._debug.enabled = true;
      this._warn.enabled = true;
      this._error.enabled = true;
    } else if (level === "warn") {
      this._debug.enabled = false;
      this._warn.enabled = true;
      this._error.enabled = true;
    } else if (level === "error") {
      this._debug.enabled = false;
      this._warn.enabled = false;
      this._error.enabled = true;
    } else if (level && typeof level === "string") {
      debug.enable(level);
    }

    this._debug(`logging min. level: ${level || "info"}`);
  }

  disable(what: string | null | boolean = null) {
    if (!what) {
      this._debug("logging disabled");
      this._debug.enabled = false;
      this._warn.enabled = false;
      this._error.enabled = false;
    }
    if (what === "log" || what === "info") {
      this._debug("logging disabled (level: info)");
      this._debug.enabled = false;
    } else if (what === "warn") {
      this._debug("logging disabled (level: warn)");
      this._warn.enabled = false;
    } else if (what === "error") {
      this._debug("logging disabled (level: error)");
      this._error.enabled = false;
    }
  }

  test() {
    const logObject = {
      log: this._key,
      level: this._debug.enabled
        ? "debug"
        : this._warn.enabled
        ? "warn"
        : this._error.enabled
        ? "error"
        : "none"
    };

    const f = 1 / 4;

    this.log(
      "test: log => color:%s, %O, %cfloat=%f",
      this._debug.color,
      logObject,
      "color:green",
      f
    );
    this.info(
      "test: info => color:%s, %O, %cfloat=%f",
      this._debug.color,
      logObject,
      "color:blue",
      f
    );
    this.debug("test: log => color:%s, object: %J", this._debug.color, logObject);
    this.warn("test: warn => color:%s, %o, %f", this._warn.color, logObject, f);
    this.error("test: error => color:%s, %j", this._error.color, logObject);
  }
}
