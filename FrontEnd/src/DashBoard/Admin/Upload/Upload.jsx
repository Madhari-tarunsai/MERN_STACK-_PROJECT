import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Upload.css";

const Upload = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    image: "",
    editId: null
  });

  const [events, setEvents] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  // Fetch events
  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.editId) {
        await axios.put(
          `http://localhost:5000/api/events/${form.editId}`,
          {
            title: form.title,
            description: form.description,
            date: form.date,
            location: form.location,
            image: form.image,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setSuccess("Event updated successfully!");
      } else {
        await axios.post(
          "http://localhost:5000/api/events/post",
          {
            title: form.title,
            description: form.description,
            date: form.date,
            location: form.location,
            image: form.image,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setSuccess("Event uploaded successfully!");
      }

      setError("");
      setForm({ title: "", description: "", date: "", location: "", image: "", editId: null });
      fetchEvents();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save event");
      setSuccess("");
    }
  };

  const handleEdit = (event) => {
    setForm({
      title: event.title,
      description: event.description,
      date: event.date.slice(0, 10),
      location: event.location,
      image: event.image || "",
      editId: event._id,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="upload-container">
      <h1 className="upload-title">{form.editId ? "Edit Event" : "Upload New Event"}</h1>

      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit">{form.editId ? "Update Event" : "Upload Event"}</button>

        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>

      <div className="events-list">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            {event.image && <img src={event.image} alt={event.title} />}
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <div className="event-actions">
              <button className="edit-btn" onClick={() => handleEdit(event)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(event._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
