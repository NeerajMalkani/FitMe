import { MatchPasswords, ValidateEmail, ValidateFullName, ValidateMobile, ValidatePassword } from "./validations";

export const CommonValidator = (fieldsToValidate) => {
  let arrInvalidFields = [];
  fieldsToValidate.map((k) => {
    if (k) {
      switch (k.type) {
        case "email":
          if (!ValidateEmail(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
        case "mobile":
          if (!ValidateMobile(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
        case "password":
          if (!ValidatePassword(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
        case "matchpassword":
          if (!MatchPasswords(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
        case "fullname":
          if (!ValidateFullName(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
      }
    }
  });
  return arrInvalidFields;
};
