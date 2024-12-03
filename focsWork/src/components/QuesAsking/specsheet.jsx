import React from "react";
import { useLocation } from "react-router-dom";
import "./Specsheet.css";

const Specsheet = () => {
  const location = useLocation();
  const { specSheet } = location.state || {};

  if (!specSheet) {
    return <p>No spec sheet data available. Please complete the form first.</p>;
  }

  return (
    <div className="specsheet-container">
      <h1 className="title">Specs Sheet</h1>
      <div className="specsheet-content">
        <div className="checklist-section">
          <h2 className="subtitle">Checklist</h2>
          <div className="checklist-content">
            <p>Trimming/Sequencing: 0%</p>
            <p>Green Screen: 0%</p>
            <p>VFX: 0%</p>
            <p>Color Grading: 0%</p>
            <p>Sound Editing: 0%</p>
            <p>Subtitles: 0%</p>
            <p className="total">Total: 0%</p>
          </div>
        </div>
        <div className="specsheet-details">
          <h2 className="subtitle">Scope of Work</h2>
          <p><strong>Prompt:</strong> {specSheet.Prompt || "N/A"}</p>
          <p><strong>Type of Video:</strong> {specSheet["Type of video"] || "N/A"}</p>
          <p><strong>Subtype of Video:</strong> {specSheet["Subtype of video"] || "N/A"}</p>
          <p><strong>Frequency:</strong> {specSheet["Frequency of video"] || "N/A"}</p>
          <p><strong>Length:</strong> {specSheet["Length of video"] || "N/A"}</p>

          <h2 className="subtitle">Descriptive</h2>
          <p>{specSheet.Description || "No description provided."}</p>

          <h2 className="subtitle">Tags</h2>
          <div className="tags-section">
            {specSheet.Tags && specSheet.Tags.length > 0 ? (
              specSheet.Tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))
            ) : (
              <p>No tags available.</p>
            )}
          </div>

          <h2 className="subtitle">Order Details</h2>
          <p><strong>Order Number:</strong> {specSheet.orderNumber || "N/A"}</p>
          <p><strong>Order Date:</strong> {specSheet.orderDate || "N/A"}</p>
          <p><strong>Invoice Details:</strong> {specSheet.invoiceDetails || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Specsheet;