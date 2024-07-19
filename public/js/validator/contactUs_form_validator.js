(() => {
  const validation = new JustValidate("#contactForm", {
    errorFieldCssClass: "is-invalid",
    errorLabelStyle: {
      fontSize: "14px",
      color: "#dc3545",
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validation
    .addField("#inquirerName", [
      {
        rule: "required",
        errorMessage: "Name cannot be empty",
      },
      {
        rule: "minLength",
        value: 4,
        errorMessage: "Should be of min 4 characters long",
      },
      {
        rule: "customRegexp",
        value: /^[a-zA-Z ]+$/,
        errorMessage: "Name can not have special characters",
      },
    ])
    .addField("#inquirerEmail", [
      {
        rule: "required",
        errorMessage: "Email cannot be empty",
      },
      {
        rule: "customRegexp",
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        errorMessage: "Invalid email",
      },
    ])
    .addField("#inquirerPhone", [
      {
        rule: "required",
        errorMessage: "Contact number cannot be empty",
      },
      {
        rule: "number",
        value: 8,
        errorMessage: "Should be numbers only",
      },
      {
        rule: "minLength",
        value: 8,
        errorMessage: "Should be of min 8 characters long",
      },
      {
        rule: "maxLength",
        value: 12,
        errorMessage: "Should be of max 12 characters long",
      },
    ])
    .addField("#inquirySubject", [
      {
        rule: "required",
        errorMessage: "Subject can not be empty",
      },
      {
        rule: "minLength",
        value: 4,
        errorMessage: "Should be of min 4 characters long",
      },
      {
        rule: "customRegexp",
        value: /^[a-zA-Z0-9,.?"'()*&%$#:;-_+= ]+$/,
        errorMessage: "Invalid subject",
      },
    ])
    .addField("#inquiryMessage", [
      {
        rule: "required",
        errorMessage: "Message cannot be empty",
      },
      {
        rule: "minLength",
        value: 4,
        errorMessage: "Should be of min 4 characters long",
      },
      {
        rule: "customRegexp",
        value: /^[a-zA-Z0-9,.?"'()*&%$#:;-_+= ]+$/,
        errorMessage: "Invalid message",
      },
    ])
    .onSuccess((ev) => {
      ev.target.submit();
    });
})();
