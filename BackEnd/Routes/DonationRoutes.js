const express = require("express");
const router = express.Router();
const Donation = require("../Models/Donation_Model");

// Create Donation
router.post("/donate", async (req, res) => {
    try {
        const donation = new Donation(req.body);
        const savedDonation = await donation.save();
        res.status(201).json(savedDonation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Donations
router.get("/", async (req, res) => {
    try {
        const donations = await Donation.find().sort({ createdAt: -1 });
        res.json(donations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update Donation
router.put("/:id", async (req, res) => {
    try {
        const updatedDonation = await Donation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // return updated document
        );
        res.json(updatedDonation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Donation
router.delete("/:id", async (req, res) => {
    try {
        await Donation.findByIdAndDelete(req.params.id);
        res.json({ message: "Donation deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

