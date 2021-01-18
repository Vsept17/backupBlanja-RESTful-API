const db = require("../config/mySQL");

module.exports = {
  categoryAll: () => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM categories";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getCategoryById: (params, res, keyword) => {
    return new Promise((resolve, reject) => {
      const queryString = [
        "SELECT * FROM categories WHERE id_categories =" + params,
        `SELECT p.id, p.product_name, c.category_name, s.size, cl.color_hexa, cd.conditions, p.product_price, p.product_qty, p.product_desc, p.product_photo,  AVG(rating) as rating FROM products as p
      INNER JOIN categories as c ON p.category_id = c.id_categories
      INNER JOIN size as s ON p.size_id = s.id
      INNER JOIN colors as cl ON p.color_id = cl.id
      INNER JOIN conditions as cd ON p.condition_id = cd.id
      INNER JOIN ratings ON p.id = ratings.product_id
      WHERE c.id_categories = ${params} GROUP BY p.id ORDER BY ${keyword}`
      ];
      db.query(queryString.join(";"), (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  editCategory: (req, params) => {
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE categories SET ? WHERE id = " + params;
      db.query(queryString, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  postCategory: (req) => {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO categories SET ?";
      db.query(queryString, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  deleteCategory: (params) => {
    return new Promise((resolve, reject) => {
      const queryString = "DELETE FROM categories WHERE id = " + params;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};
