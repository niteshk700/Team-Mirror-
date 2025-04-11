// ✅ app/api/submit-feedback/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const data = {
      trustworthiness: formData.get("trustworthiness"),
      technicalCapability: formData.get("technicalCapability"),
      leadership: formData.get("leadership"),
      mentoring: formData.get("mentoring"),
      decisionMaking: formData.get("decisionMaking"),
      problemSolving: formData.get("problemSolving"),
      teamCollaboration: formData.get("teamCollaboration"),
      additionalComments: formData.get("additionalComments"),
    };

    console.log("📝 Feedback Submitted:", data);

    return NextResponse.json({
      message: "Feedback received successfully",
      data,
    });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
