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

export interface ScoreCardItem {
  title: string;
  score: number;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
}

interface ScoreCardListProps {
  scores: ScoreCardItem[];
}

const ScoreCardList: React.FC<ScoreCardListProps> = ({ scores }) => {
  const getTrendIcon = (trend: ScoreCardItem["trend"]) => {
    switch (trend) {
      case "up":
        return <TrendingUpIcon className="w-4 h-4" />;
      case "down":
        return <TrendingDownIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

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
                {getTrendIcon(item.trend)}
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
};

export default ScoreCardList;
