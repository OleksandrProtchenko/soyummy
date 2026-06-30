import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { isAgeBetween, isValidEmail } from '../utils/rules/userRules.js';

const SALT_ROUNDS = 10;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: isValidEmail,
        message: 'Invalid email format',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return isAgeBetween(value, 18, 60);
        },
        message: 'Age must be between 18 and 60 years',
      },
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function () {
  if (!this.username) {
    this.username = this.email;
  }

  if (!this.isModified('password')) {
    return;
  }

  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

userSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt.compare(plainPassword, this.password);
};

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default model('User', userSchema);
