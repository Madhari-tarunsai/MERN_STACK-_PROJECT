const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require("../Controllers/eventController");

// Public Routes
router.get("/", getEvents);
router.get("/:id", getEventById);

// Admin Routes
router.post("/post", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
