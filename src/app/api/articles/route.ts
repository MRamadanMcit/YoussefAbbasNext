import { NextResponse } from "next/server";

import { articles } from "@/utils/data";

/**
 * 
 * @method  GET
 * @route   ~/api/articles
 * @desc    Get All Articles
 * @access  Public
 */

export function GET() {
  return NextResponse.json(articles, { status: 200 });
}
