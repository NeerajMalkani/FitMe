export const ValidateEmail = (email) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email);
};

export const ValidateMobile = (mobile) => {
  const reg = /^[0]?[789]\d{9}$/;
  return reg.test(mobile);
};

export const ValidatePassword = (password) => {
    const reg = /((?=.*[a-z])(?=.*[0-9])(?=.{6,}))/;
    return reg.test(password);
};

export const MatchPasswords = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const ValidateFullName = (fullname) => {};
