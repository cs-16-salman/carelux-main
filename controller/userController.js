const express = require("express");
const bodyParser = require("body-parser");
const { checkSchema, validationResult } = require("express-validator");

const contactUsSchema = require("../validation/contactUs_schema");
const userService = require("../service/userService");
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use(async (req, res, next) => {
  const businessDetails = await userService.getBusinessDetails();
  res.locals.businessDetails = businessDetails;

  next();
});

// index page
router.get("/", async (req, res) => {
  const topDoctors = await userService.getTopNDoctors(5);
  const topTestimonials = await userService.getTopNTestimonials(5);
  res.render("index", { topDoctors, topTestimonials });
});

// about page
router.get("/about_us", (req, res) => {
  res.render("about_us");
});

// testimonials
router.get("/testimonials", async (req, res) => {
  const testimonials = await userService.getTestimonials();
  res.render("testimonials", { testimonials });
});

// hotpitals
router.get("/hospitals", async (req, res) => {
  const hospitals = await userService.getHospitalDetails();
  res.render("hospitals", { hospitals });
});

// doctors
router.get("/doctors", async (req, res) => {
  const doctors = await userService.getDoctorDetails();
  res.render("doctors", { doctors });
});

// all treatments
router.get("/all_treatments", (req, res) => {
  res.render("treatments");
});

// contact-us
router.get("/contact-us", (req, res) => {
  res.render("contact-us");
});

router.post(
  "/do-inquiry",
  urlencodedParser,
  checkSchema(contactUsSchema),
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      req.flash("error", errors.array()[0].msg);
    } else {
      await userService.saveUserInquiry(req.body);
    }

    res.redirect("contact-us");
  }
);

module.exports = router;
