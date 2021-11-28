import jwt from "jsonwebtoken";
import { promisify } from "es6-promisify";
import streamToBuffer from "stream-to-buffer";

export const printObject = (data: object) => JSON.stringify(data, null, 2);

export const firstUC = (text: string) => {
  text = text.trim();
  return `${text.substring(0, 1).toUpperCase()}${text.substring(1, text.length)}`;
};

export const IsJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const getUserId = ({ request, connection }, requireAuth = true) => {
  let token = request ? request.cookies.accessToken : connection.context.accessToken;
  // If token not available check in authorization
  if (!token && request?.headers?.authorization) {
    token = request.headers.authorization.replace("Bearer ", "");
  }

  if (token) {
    const decoded: any = jwt.verify(token, process.env.SECRET);
    return decoded;
  }

  if (requireAuth) {
    throw new Error("Authentication required");
  }

  return null;
};

export const S2B = promisify(streamToBuffer);
