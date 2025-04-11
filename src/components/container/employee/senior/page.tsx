"use client";

import SeniorFeedbackFormUI from "@/components/stateless/employee/seniorForm/page";
import React from "react";

const SeniorFeedbackPage = () => {
  return <SeniorFeedbackFormUI action="/api/submitFeedback" />;
};

export default SeniorFeedbackPage;
