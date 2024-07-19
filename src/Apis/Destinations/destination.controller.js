const {
  createDestination,
  getDestinationById,
  getDestinations,
  updateDestination,
  deleteDestination,
} = require("./destination.service");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// Middleware untuk mengolah gambar yang diunggah
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../../../public/images");
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

module.exports = {
  createDestination: [
    upload.single("image"),
    async (req, res) => {
      const body = req.body;
      try {
        if (req.file) {
          const imagePath = `/images/${req.file.filename}`; // Path relatif untuk akses publik
          body.image_blob = imagePath;
        }
        body.user_id = parseInt(body.user_id, 10);

        createDestination(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error",
            });
          }
          return res.status(200).json({
            success: 1,
            data: results,
          });
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          success: 0,
          message: "Error processing image",
        });
      }
    },
  ],

  getDestinationById: (req, res) => {
    const id = req.params.id;
    getDestinationById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getDestinations: (req, res) => {
    getDestinations((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  updateDestination: [
    upload.single("image"),
    async (req, res) => {
      const body = req.body;
      const id = req.params.id;
      try {
        if (req.file) {
          const imagePath = req.file.path;
          body.image_blob = imagePath;
        }
        body.user_id = parseInt(body.user_id, 10);

        updateDestination(id, body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error",
            });
          }
          return res.status(200).json({
            success: 1,
            message: "Updated successfully",
            data: results,
          });
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          success: 0,
          message: "Error processing image",
        });
      }
    },
  ],

  deleteDestinationController: (req, res) => {
    const id = req.params.id;
    deleteDestination(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "Destination deleted successfully",
      });
    });
  },
};
