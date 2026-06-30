export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

export const isValidEmail = (value) => {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
};

export const isStrongPassword = (value) => {
  if (!value) return false;
  return PASSWORD_REGEX.test(String(value));
};

export const getAge = (dob, now = new Date()) => {
  const birth = new Date(dob);

  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

export const isAgeBetween = (dob, min = 18, max = 60) => {
  if (!dob) return false;

  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return false;

  const age = getAge(birth);
  return age >= min && age <= max;
};

export const ageValidation = (value, helpers) => {
  if (!isAgeBetween(value, 18, 60)) {
    const age = getAge(value);
    if (age < 18) return helpers.error('date.minAge');
    return helpers.error('date.maxAge');
  }

  return value;
};
