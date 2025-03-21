const connection = require("../connection_db");

function createDoctor(fields, callback) {
    let { crm, id_role, full_name, email, telephone, medical_visits_hour_init, medical_visits_hour_finish, active } = fields;
    const sql = "INSERT INTO doctors (crm, id_role, full_name, email, telephone, medical_visits_hour_init, medical_visits_hour_finish, active) VALUES (?, ?, ?, ?, ?, ?, ?,?)";

  connection.query(sql, [crm, id_role, full_name, email, telephone, medical_visits_hour_init, medical_visits_hour_finish, active], (error, response) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      callback(null, response);
    }
  });
}

function readDoctor(callback) {
  const sql = "SELECT * FROM doctors";

  connection.query(sql, (error, response) => {
    if (error) {
      console.error(error);
      callback(error, null);
    } else {
      callback(null, response);
    }
  });
}

function updateDoctor(crm, updateFields, callback) {
    let fields = [];
    let values = [];

    for (let key in updateFields) {
        fields.push(`${key} = ?`);
        values.push(updateFields[key]);
    };

    if (fields.length === 0) {
        return callback(null, "No fields to update.");
    }

    values.push(crm);

    const sql = `UPDATE doctors SET ${fields.join(", ") } WHERE crm = ?`

    connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating doctor:", err);
      return callback(null, err);
    }
    callback(null, "Doctor updated successfully!");
  });
}

function deleteDoctor(crm, callback) {
  const sql = "DELETE FROM doctors WHERE crm = ?";

  connection.query(sql, [crm], (err, result) => {
    if (err) {
      console.error("Error deleting doctor:", err);
      return callback(null, err);
    }
    callback(null, {"response": result, "message": "Doctor deleted successfully!"});
  });
}

module.exports = { createDoctor, readDoctor, updateDoctor, deleteDoctor };