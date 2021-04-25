import { config, ValidationBody, validationBodyType } from "../types";

const getTypeOfField = (key): validationBodyType => {
  const defaultField: Array<validationBodyType> = ["email", "password"];
  if (defaultField.includes(key)) {
    return key;
  }
  return "text";
};

export const createUserSchema = (body: { key: string; value: string }): Array<ValidationBody> => {
  const validationBody: Array<ValidationBody> = [];

  if (Object.keys(body).length) {
    Object.keys(body).map((key) => {
      const type = getTypeOfField(key);
      const customConfig: config = {
        required: true,
      };
      /**
			 *  For password we're going to have a min and max config
			 */

      if (key === "password") {
        customConfig.min = 7;
        customConfig.max = 12;
      }

      validationBody.push({
        type,
        key,
        value: body[key],
        config: customConfig,
      });
    });
  }

  return validationBody;
};
