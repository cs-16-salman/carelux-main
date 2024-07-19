const connection = require("../config/database");

const getBusinessDetails = async () => {
  const [results] = await connection.execute(
    "SELECT * FROM business_details LIMIT 1"
  );

  return results.length > 0 ? results.pop() : undefined;
};

const getDoctors = async () => {
  const [results] = await connection.execute(
    "SELECT * FROM doctor_detail ORDER BY created_at DESC"
  );
  return results;
};

const getTopNDoctors = async (count) => {
  const [results] = await connection.query(
    "SELECT * FROM doctor_detail ORDER BY created_at DESC LIMIT ?",
    [count]
  );
  return results;
};

const getHospitals = async () => {
  const [results] = await connection.execute(
    "SELECT * FROM hospitals ORDER BY created_at DESC"
  );
  return results;
};

const getTestimonials = async () => {
  const [results] = await connection.execute(
    "SELECT * FROM testimonial ORDER BY created_at DESC"
  );
  return results;
};

const getTopNTestimonials = async (count) => {
  const [results] = await connection.query(
    "SELECT * FROM testimonial ORDER BY created_at DESC LIMIT ?",
    [count]
  );
  return results;
};

const saveInquiry = async (data) => {
  await connection.execute(
    "INSERT INTO inquiry (inquirer_name, inquirer_email, inquirer_phone, inquiry_subject, inquiry_message) values (?,?,?,?,?)",
    [
      data.inquirerName,
      data.inquirerEmail,
      data.inquirerPhone,
      data.inquirySubject,
      data.inquiryMessage,
    ]
  );
};

module.exports = {
  getBusinessDetails,
  getDoctors,
  getTopNDoctors,
  getHospitals,
  saveInquiry,
  getTestimonials,
  getTopNTestimonials,
};
