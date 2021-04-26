import { firstUC } from ".";
import { ValidationBody } from "../types";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default (body: Array<ValidationBody>): { errors: object; values?: object } => {
  const errors = {};
  let values = {};

  if (!body.length) return { errors };

  if (body.length) {
    values = body.map(({ config, key, value, type }) => {
      const fieldName = config.title || firstUC(key);
      value = value?.trim();
      switch (type) {
        case "email":
          if (config.required) {
            if (value.length === 0) {
              errors[key] = `${fieldName} is required.`;
            }
          }

          if (!errors[key]) {
            const isValid = validateEmail(value);
            if (!isValid) {
              errors[key] = "Please provide valid email address";
            }
          }
          break;
        case "password":
        case "text":
          if (config.required) {
            if (value.length === 0) {
              errors[key] = `${fieldName} is required.`;
            }
          }

          if (!errors[key]) {
            if (config.min || config.max) {
              const { length } = value;
              if (config.min && config.max) {
                if (length < config.min || length > config.max) {
                  errors[key] = `${fieldName} should have length between ${config.min}-${config.max} chars.`;
                }
              } else if (config.min && length < config.min) {
                errors[key] = `${fieldName} should have minimum ${config.min} chars. `;
              } else if (config.max && length > config.max) {
                errors[key] = `${fieldName} should have maxmimum ${config.max} chars.`;
              }
            }
          }
          break;
      }
      return {
        [key]: value,
      };
    });
  }

  return Object.keys(errors).length ? { errors } : { errors, values };
};
