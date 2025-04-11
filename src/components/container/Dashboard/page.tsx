import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IndividualScoreTracker } from "../scorecards";
import { Calendar } from "@/components/ui/calendar";
import { ScoreChartDataItem } from "@/components/common/ScoreChart/page";

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
          <IndividualScoreTracker />
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
