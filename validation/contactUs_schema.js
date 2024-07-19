const contactUsSchema = {
  inquirerName: {
    notEmpty: true,
    errorMessage: "Name cannot be empty",
    matches: {
      options: [/^[a-zA-Z ]+$/],
      errorMessage: "Invalid name",
    },
  },

  inquirerEmail: {
    notEmpty: true,
    errorMessage: "Email cannot be empty",
    isEmail: {
      bail: true,
      errorMessage: "Invalid email",
    },
  },

  inquirerPhone: {
    notEmpty: true,
    errorMessage: "Number cannot be empty",
    isInt: {
      errorMessage: "Invalid contact number",
    },
    isLength: {
      min: 8,
      max: 12,
      errorMessage: "Conact number should be of 8 to 12 character",
    },
  },

  inquirySubject: {
    notEmpty: true,
    errorMessage: "Subject cannot be empty",
  },

  inquiryMessage: {
    notEmpty: true,
    errorMessage: "Message cannot be empty",
  },
};

module.exports = contactUsSchema;
