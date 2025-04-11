import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import ScoreChart, {
  ScoreChartDataItem,
} from "@/components/common/ScoreChart/page";
import ScoreCardList, {
  ScoreCardItem,
} from "@/components/common/ScoreCardList/page";

function Dashboard() {
  const [date, setDate] = useState<any>(new Date());
  const dummyChartData: ScoreChartDataItem[] = [
    {
      metric: "Team Leadership",
      score: 80,
      change: "+3%",
      description: "Exemplary leadership qualities",
    },
    {
      metric: "Technical Capability",
      score: 90,
      change: "+5%",
      description: "Strong technical proficiency",
    },
    {
      metric: "Approachability",
      score: 85,
      change: "-2%",
      description: "High availability with a minor drop",
    },
    {
      metric: "Decision Making",
      score: 75,
      change: "-1%",
      description: "Opportunities to refine decision process",
    },
    {
      metric: "Problem Solving",
      score: 88,
      change: "+4%",
      description: "Effective in addressing challenges",
    },
    {
      metric: "Team Collaboration",
      score: 82,
      change: "+0%",
      description: "Consistent collaboration performance",
    },
  ];

  const scoreChartConfig = {
    score: {
      label: "Score",
      color: "hsl(var(--chart-1))",
    },
  };
  const sampleScores: ScoreCardItem[] = [
    {
      title: "Team Leadership",
      score: 80,
      change: "+3%",
      trend: "up",
      description: "Exemplary leadership qualities",
    },
    {
      title: "Technical Capability",
      score: 90,
      change: "+5%",
      trend: "up",
      description: "Strong technical proficiency",
    },
    {
      title: "Approachability",
      score: 85,
      change: "-2%",
      trend: "down",
      description: "High availability with a minor drop",
    },
    {
      title: "Decision Making",
      score: 75,
      change: "-1%",
      trend: "down",
      description: "Opportunities to refine decision process",
    },
    {
      title: "Problem Solving",
      score: 88,
      change: "+4%",
      trend: "up",
      description: "Effective in addressing challenges",
    },
    {
      title: "Team Collaboration",
      score: 82,
      change: "+0%",
      trend: "up",
      description: "Consistent collaboration performance",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full px-4 md:px-0">
      <div className="w-full md:w-[56%]">
        <ScoreChart
          title="Score Trend"
          description="Your performance score trend across key metrics"
          data={dummyChartData}
          config={scoreChartConfig}
          footerNote="Trending up by 5.2% this period"
        />
      </div>

      <div className="w-full md:w-[22%]">
        <ScrollArea className="h-[34.2rem] w-full rounded-md">
          <ScoreCardList scores={sampleScores} />{" "}
        </ScrollArea>
      </div>

      <div className="w-full md:w-[22%] item-right">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-md "
        />
      </div>
    </div>
  );
}

export default Dashboard;
