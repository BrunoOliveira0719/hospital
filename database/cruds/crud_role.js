const connection = require("../connection_db");

function createRole(role, callback) {
  const sql = "INSERT INTO roles (role) VALUES (?)";

  connection.query(sql, [role], (error, response) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      callback(null, response);
    }
  });
}

function readRole(callback) {
  const sql = "SELECT * FROM roles";

  connection.query(sql, (error, response) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      callback(null, response);
    }
  });
}

function updateRole(id, role, callback) {
  const sql = "UPDATE roles SET role = ? WHERE id = ?";

  connection.query(sql, [role, id], (err, result) => {
    if (err) {
      console.error("Error updating role:", err);
      return callback(null, err);
    }
    callback(null, "Role updated successfully!");
  });
}

function deleteRole(id, callback) {
  const sql = "DELETE FROM roles WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting Role:", err);
      return callback(null, err);
    }
    callback(null, "Role deleted successfully!");
  });
}

module.exports = { createRole, readRole, updateRole, deleteRole };
