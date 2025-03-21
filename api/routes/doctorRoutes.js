const express = require("express");
const router = express.Router();

const {
  readDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../../database/cruds/crud_doctor");

router.get("/doctor", (req, res) => {
  readDoctor((error, response) => {
    if (error) {
      res.status(500).json({ data: error });
    } else {
      res.status(200).json({ data: response });
    }
  });
});

router.post("/doctor", (req, res) => {
  const fields = req.body;

  createDoctor(fields, (error, response) => {
    if (error) {
      res.status(500).json({ data: error });
    } else {
      res.status(200).json({ data: "Create doctor with success" });
    }
  });
});

router.put("/doctor/:crm", (req, res) => {
  const crm = parseInt(req.params.crm);
  const fields = req.body;

  updateDoctor(crm, fields, (error, response) => {
    if (error) {
      res.status(500).json({ data: error });
    } else {
      res.status(200).json({ data: response });
    }
  });
});

router.delete("/doctor/:crm", (req, res) => {
  const crm = parseInt(req.params.crm);

  deleteDoctor(crm, (error, response) => {
    if (error) {
      res.status(500).json({ data: error });
    } else if (response["response"].affectedRows === 0) {
      res.status(404).json({ data: "Doctor not found" });
    } else {
      res.status(200).json({ data: response });
    }
  });
});

module.exports = router;