import { joi, Segments } from 'celebrate';
import { ageValidation, isStrongPassword } from '../utils/rules/userRules.js';

export const createUserSchema = {
  [Segments.BODY]: joi.object().keys({
    username: joi.string().min(3).max(30).optional(),
    email: joi.string().email().required().messages({
      'string.email': 'Invalid email format',
      'any.required': 'Email is required',
    }),
    password: joi
      .string()
      .min(6)
      .required()
      .custom((v, h) => {
        if (!isStrongPassword(v)) return h.error('string.pattern.base');
        return v;
      })
      .messages({
        'string.pattern.base':
          'Password must contain at least 1 uppercase letter and 1 digit and minimum 6 characters long',
      }),
    dateOfBirth: joi.date().required().custom(ageValidation).messages({
      'date.base': 'Invalid date format',
      'any.required': 'Date of birth is required',
      'date.minAge': 'You must be at least 18 years old',
      'date.maxAge': 'Age must be no more than 60 years',
    }),
  }),
};
