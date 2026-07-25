-- Run this in your Supabase SQL Editor to create the circle_waitlist table

CREATE TABLE circle_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE circle_waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON circle_waitlist
  FOR INSERT WITH CHECK (true);
