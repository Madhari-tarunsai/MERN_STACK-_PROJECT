const router = require("express").Router();
const Event = require("../Models/Event");
const verifyAdmin = require("../middleware/verifyAdmin");

// ✅ Public GET — anyone can view
router.get("/", async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
});

// 🛡 Admin only — create
router.post("/", verifyAdmin, async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
});

// 🛡 Admin only — update
router.put("/:id", verifyAdmin, async (req, res) => {
  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEvent);
});

// 🛡 Admin only — delete
router.delete("/:id", verifyAdmin, async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted" });
});

module.exports = router;
