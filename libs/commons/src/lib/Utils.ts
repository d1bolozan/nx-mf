const isNill = (obj: any) => {
  if (typeof obj === "undefined") {
    return true;
  }

  return obj === undefined || obj === null;
};

const isObject = (obj: any) => {
  if (
    isNill(obj) ||
    typeof obj !== "object" ||
    obj.nodeType ||
    (obj !== null && obj !== undefined && obj === obj.window)
  ) {
    return false;
  }

  if (
    obj.constructor &&
    !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")
  ) {
    return false;
  }

  return true;
};

const isArray = (obj: any) => {
  try {
    return obj && Array.isArray(obj);
  } catch {
    /* empty */
  }

  return false;
};

const isNumber = (obj: any) => {
  return !isNill(obj) && !isNaN(parseFloat(obj)) && isFinite(obj);
};

const trim = (obj: any) => {
  if (!obj || typeof obj != "string") return "";

  return obj.replace(/^\s+|\s+$/g, "");
};

const trimLeft = (obj: any, character: any) => {
  if (!obj || typeof obj != "string") {
    return "";
  }

  character = character || "s";

  const rx = new RegExp("^" + character + "+");

  return obj.replace(rx, "");
};

const trimRight = (obj: any, character: string) => {
  character = character || "s";

  if (!obj || typeof obj != "string") {
    return "";
  }

  const rx = new RegExp(character + "+$");

  return obj.replace(rx, "");
};

const objectsAreEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;

    return obj1.every((elem, index) => {
      return objectsAreEqual(elem, obj2[index]);
    });
  }

  if (typeof obj1 === "object" && typeof obj2 === "object" && obj1 !== null && obj2 !== null) {
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length || !keys1.every((key) => keys2.includes(key))) return false;

    for (const key in obj1) {
      const isEqual = objectsAreEqual(obj1[key], obj2[key]);

      if (!isEqual) {
        return false;
      }
    }

    return true;
  }

  return false;
};

const parseQueryString = (str: string) => {
  if (!str) return {};

  const oMap: any = {};
  const arr = str.replace(/(^\?)/, "").split("&");

  arr.forEach(function (n) {
    if (n) {
      const pair = n.split("=");

      if (trim(pair[0])) {
        oMap[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
      }
    }
  });

  return oMap;
};

export default {
  is: {
    nill: isNill,
    number: isNumber,
    array: isArray,
    object: isObject
  },
  string: {
    trimLeft,
    trimRight
  },
  web: {
    parseQueryString
  },
  objectsAreEqual
};
