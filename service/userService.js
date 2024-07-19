const userRepo = require("../repository/userRepo");
const sendMail = require("../config/emailConfig");
const properties = require("../config/properties");

const getBusinessDetails = async () => {
  return await userRepo.getBusinessDetails();
};

const getDoctorDetails = async () => {
  return await userRepo.getDoctors();
};

const getTopNDoctors = async (count) => {
  return await userRepo.getTopNDoctors(count);
};

const getHospitalDetails = async () => {
  return await userRepo.getHospitals();
};

const getTestimonials = async () => {
  return await userRepo.getTestimonials();
};

const getTopNTestimonials = async (count) => {
  return await userRepo.getTopNTestimonials(count);
};

const saveUserInquiry = async (data) => {
  await userRepo.saveInquiry(data);

  const mailOptions = {
    from: data.inquirerEmail,
    to: properties.get("emailUser"),
    subject: `Message from ${data.inquirerEmail}: ${data.inquirySubject}`,
    text: data.inquiryMessage,
  };

  sendMail(mailOptions);
  return "Thank you for contacting us.";
};

module.exports = {
  getBusinessDetails,
  getDoctorDetails,
  getTopNDoctors,
  getHospitalDetails,
  saveUserInquiry,
  getTestimonials,
  getTopNTestimonials,
};
