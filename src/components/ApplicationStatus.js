import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Badge
} from "react-bootstrap";
import {
  CheckCircleFill,
  Circle
} from "react-bootstrap-icons";
import "../ApplicationStatus.css";
import logo from "../assets/logo.png";

export default function ApplicationStatus() {
  const timelineItems = [
    {
      title: "Application Submitted",
      subtitle: "Your credit card application has been successfully received",
      date: "Dec 15, 2024",
      status: "done",
      note: "Instant",
    },
    {
      title: "Application Processing",
      subtitle: "We are reviewing your application and verifying your information",
      date: "Dec 16, 2024",
      status: "done",
      note: "1-2 business days",
    },
    {
      title: "Credit Card Offered",
      subtitle: "Congratulations! Your application has been approved",
      date: "Dec 18, 2024",
      status: "done",
      note: "2-3 business days",
    },
    {
      title: "Application Accepted",
      subtitle: "Accept your offer to receive your new credit card",
      date: "",
      status: "inprogress",
      note: "Action Required",
    },
    {
      title: "Printed",
      subtitle: "Card is being printed",
      date: "",
      status: "upcoming",
    },
    {
      title: "Shipped",
      subtitle: "Card has been dispatched for delivery",
      date: "",
      status: "upcoming",
    },
  ];

  const completedCount = timelineItems.filter(t => t.status === "done").length;
  const inProgressIndex = timelineItems.findIndex(t => t.status === "inprogress");
  const totalSteps = timelineItems.length;
  const progressPercent = Math.round(
    ((completedCount + (inProgressIndex >= 0 ? 0.5 : 0)) / totalSteps) * 100
  );

  return (
    <Container className="py-4">
      {/* Header */}
      <div className="text-center mb-4">
      <div className="text-center">
  <img
    src={logo}
    alt="Standard Chartered"
    style={{
      width: "200px",
      margin: "10px 0",
    }}
  />
</div>
        <h4 className="mt-3">Credit Card Application Status</h4>
        <p className="text-muted">
          Track your application progress. We'll keep you updated at every step.
        </p>
      </div>

      {/* Progress Card */}
      <Card className="mb-3">
        <Card.Body>
          <Row className="align-items-center">
            <Col>
              <h6 className="mb-1">Overall Progress</h6>
              <small className="text-muted">
                Step {completedCount + (inProgressIndex >= 0 ? 1 : 0)} of{" "}
                {totalSteps} completed
              </small>
            </Col>
            <Col xs="auto">
              <span className="text-primary fw-bold">In Progress</span>
            </Col>
          </Row>
          <ProgressBar
            now={progressPercent}
            variant="primary"
            className="mt-3"
            style={{ height: "8px", borderRadius: "4px" }}
          />
        </Card.Body>
      </Card>

      {/* Timeline */}
      <Card className="mb-3">
        <Card.Body>
          <h6 className="mb-3">Application Timeline</h6>
          <div className="timeline">
            {timelineItems.map((item, idx) => (
              <div className="timeline-item d-flex" key={idx}>
                {/* Icon + line */}
                <div className="timeline-icon-col">
                  <div className="timeline-icon">
                    {item.status === "done" ? (
                      <CheckCircleFill size={24} color="#3BB54A" />
                    ) : item.status === "inprogress" ? (
                      <Circle size={24} color="#1f6fe0" />
                    ) : (
                      <Circle size={20} color="#cbd5e1" />
                    )}
                  </div>
                  {idx !== timelineItems.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow-1 pb-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div
                        className={`fw-bold ${item.status === "inprogress" ? "text-primary" : ""}`}

                      >
                        {item.title}
                      </div>
                      <div className="text-muted small">{item.subtitle}</div>
                      {item.note && (
                        <Badge
                          bg={
                            item.status === "inprogress"
                              ? "warning"
                              : "light"
                          }
                          text="dark"
                          className="mt-1"
                        >
                          {item.note}
                        </Badge>
                      )}
                    </div>
                    <div className="text-muted small">{item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

     
    </Container>
  );
}