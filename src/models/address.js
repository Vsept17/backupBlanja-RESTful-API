const db = require("../config/mySQL");

module.exports = {
    addAddress: (req, user_id) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO shipping_address SET ?"
            db.query(qs, [req, user_id], (err, data) => {
                if (!err) {
                    resolve(data);
                } else{
                    reject(err);
                }
            })
        })
    },

    getAddressByUser: (user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT a.id_address, a.fullname, a.address, a.city, a.region, a.zip_code, a.country, u.id FROM shipping_address AS a JOIN users AS u on u.id = a.id_user WHERE id_user = " + user_id;
            db.query(queryString, user_id, (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },

    // getAddressById: (user_id) => {
    //     return new Promise((resolve, reject) => {
    //         const queryString = "SELECT a.id_address, a.fullname, a.address, a.city, a.region, a.zip_code, a.country, u.id FROM shipping_address AS a JOIN users AS u on u.id = a.id_user WHERE a.id_address = ?"
    //         db.query(queryString, user_id, (err, data) => {
    //             if(!err) {
    //                 resolve(data)
    //             } else {
    //                 reject(err)
    //             }
    //         })
    //     })
    // },

    updateAddress: (req, id, user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE shipping_address SET ? WHERE id_address = " + id
            db.query(queryString, [req, user_id], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
}
