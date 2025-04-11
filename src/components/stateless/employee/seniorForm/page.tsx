"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  action: string;
}

const SeniorFeedbackFormUI: React.FC<Props> = ({ action }) => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleRating = (field: string, value: number) => {
    setRatings((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    console.log("value", value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const requiredFields = [
      "trustworthiness",
      "technicalCapability",
      "leadership",
      "mentoring",
      "decisionMaking",
      "problemSolving",
      "teamCollaboration",
    ];

    let hasError = false;
    const newErrors: { [key: string]: string } = {};

    requiredFields.forEach((field) => {
      if (!ratings[field]) {
        newErrors[field] = "This field is required.";
        hasError = true;
      }
    });

    setErrors(newErrors);
    if (hasError) e.preventDefault();
  };

  return (
    <Card className="max-w-5xl mx-auto my-10 px-4 md:px-8 content-center item-center">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-semibold">
          Senior Feedback Form
        </CardTitle>
        <CardDescription>
          Rate the employee across various competencies (1 to 10).
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          action={action}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FieldWithStars
              title="Trustworthiness"
              name="trustworthiness"
              rating={ratings["trustworthiness"]}
              onRate={handleRating}
              error={errors["trustworthiness"]}
            />

            <FieldWithStars
              title="Technical Capability"
              name="technicalCapability"
              rating={ratings["technicalCapability"]}
              onRate={handleRating}
              error={errors["technicalCapability"]}
            />

            <FieldWithStars
              title="Leadership"
              name="leadership"
              rating={ratings["leadership"]}
              onRate={handleRating}
              error={errors["leadership"]}
            />

            <FieldWithStars
              title="Mentoring"
              name="mentoring"
              rating={ratings["mentoring"]}
              onRate={handleRating}
              error={errors["mentoring"]}
            />

            <FieldWithStars
              title="Decision Making"
              name="decisionMaking"
              rating={ratings["decisionMaking"]}
              onRate={handleRating}
              error={errors["decisionMaking"]}
            />

            <FieldWithStars
              title="Problem Solving"
              name="problemSolving"
              rating={ratings["problemSolving"]}
              onRate={handleRating}
              error={errors["problemSolving"]}
            />

            <FieldWithStars
              title="Team Collaboration"
              name="teamCollaboration"
              rating={ratings["teamCollaboration"]}
              onRate={handleRating}
              error={errors["teamCollaboration"]}
            />
          </div>

          <div>
            <label
              htmlFor="additionalComments"
              className="block text-sm font-medium mb-1"
            >
              Additional Comments
            </label>
            <textarea
              id="additionalComments"
              name="additionalComments"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any observations or suggestions..."
            ></textarea>
          </div>

          {Object.keys(ratings).map((key) => (
            <input key={key} type="hidden" name={key} value={ratings[key]} />
          ))}

          <Button type="submit" className="w-full sm:w-fit">
            Submit Feedback
          </Button>
        </form>
      </CardContent>

      <CardFooter className="text-sm text-muted-foreground">
        Your feedback will remain confidential and reviewed by HR.
      </CardFooter>
    </Card>
  );
};

export default SeniorFeedbackFormUI;

// ⭐ Star Field Component
const FieldWithStars = ({
  title,
  name,
  rating,
  onRate,
  error,
}: {
  title: string;
  name: string;
  rating?: number;
  onRate: (name: string, value: number) => void;
  error?: string;
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="text-sm font-medium block mb-2">
        {title} <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-wrap gap-1 mb-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => onRate(name, i + 1)}
            className={cn(
              "w-8 h-8 rounded-full border text-sm font-bold transition",
              rating && rating >= i + 1
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-100 text-gray-600"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
