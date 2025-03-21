const express = require("express");
const router = express.Router();

const {
  readRole,
  createRole,
  updateRole,
  deleteRole,
} = require("../../database/cruds/crud_role");

router.get("/role", (req, res) => {
  readRole((error, response) => {
    if (error) {
      res.status(500).json({ data: error });
    } else {
      res.status(200).json({ data: response });
    }
  });
});

router.post("/role", (req, res) => {
  const role = req.body.role;

  createRole(role, (error, response) => {
    if (error) {
      res.status(500).json({ data: error });
    } else {
      res.status(200).json({ data: "Create role with success" });
    }
  });
});

router.put("/role", (req, res) => {
  const id = req.body.id;
  const role = req.body.role;

  updateRole(id, role, (error, response) => {
    if (error) {
      res.status(500).json({ data: error });
    } else {
      res.status(200).json({ data: "Update role with success" });
    }
  });
});

router.delete("/role/:id", (req, res) => {
  const id = parseInt(req.params.id);

  deleteRole(id, (error, response) => {
    if (error) {
      res.status(500).json({ data: error });
    } else {
      res.status(200).json({ data: "Delete role with success" });
    }
  });
});

module.exports = router;