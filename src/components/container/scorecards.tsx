"use client";

import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample data for individual performance metrics.
// In a real application, this data might be calculated based on form submissions.
const scores = [
  {
    title: "Team Leadership",
    score: 80,
    change: "+3%",
    trendIcon: <TrendingUpIcon className="w-4 h-4" />,
    description: "Exemplary leadership qualities",
  },
  {
    title: "Technical Capability",
    score: 90,
    change: "+5%",
    trendIcon: <TrendingUpIcon className="w-4 h-4" />,
    description: "Strong technical proficiency",
  },
  {
    title: "Approachability",
    score: 85,
    change: "-2%",
    trendIcon: <TrendingDownIcon className="w-4 h-4" />,
    description: "High availability with a minor drop",
  },
  {
    title: "Decision Making",
    score: 75,
    change: "-1%",
    trendIcon: <TrendingDownIcon className="w-4 h-4" />,
    description: "Opportunities to refine decision process",
  },
  {
    title: "Problem Solving",
    score: 88,
    change: "+4%",
    trendIcon: <TrendingUpIcon className="w-4 h-4" />,
    description: "Effective in addressing challenges",
  },
  {
    title: "Team Collaboration",
    score: 82,
    change: "+0%",
    trendIcon: <TrendingUpIcon className="w-4 h-4" />,
    description: "Consistent collaboration performance",
  },
];

export function IndividualScoreTracker() {
  return (
    <div className="flex flex-col gap-4">
      {scores.map((item, index) => (
        <Card key={index} className="p-4 relative">
          <CardHeader>
            <CardDescription>{item.title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              {item.score}%
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge
                variant="outline"
                className="flex items-center gap-1 rounded-lg text-xs"
              >
                {item.trendIcon}
                {item.change}
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="flex items-center gap-2 font-medium">
              {item.description}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
