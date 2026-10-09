// pages/api/keep-alive.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_PLAN!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY_PLAN!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // 1. Secure the endpoint so only Vercel Crons or your secret can access it
  //   const authHeader = req.headers.authorization;
  //   if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //     return res.status(401).json({ error: "Unauthorized" });
  //   }

  try {
    // 2. Perform a real database query to trigger activity tracking in Supabase
    const { data, error } = await supabase
      .from("daily_logs")
      .select("id")
      .limit(1);

    if (error) throw error;

    console.log(data);
    return res
      .status(200)
      .json({ success: true, message: "Database pinged successfully", data });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
