import jwt from "jsonwebtoken";

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

export const getUserId = (request, requireAuth = true) => {
  const header = request.request ? request.request.headers.authorization : request.connection.context.Authorization;

  if (header) {
    const token = header.replace("Bearer ", "");
    const decoded: any = jwt.verify(token, process.env.SECRET);
    return decoded;
  }

  if (requireAuth) {
    throw new Error("Authentication required");
  }

  return null;
};
