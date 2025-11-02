import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface PaymentSubmission {
  id?: string;
  name: string;
  building_block_phase: string;
  flat_number: string;
  email: string;
  contact_number?: string;
  payment_amount?: number;
  payment_date?: string;
  screenshot_url: string;
  screenshot_filename: string;
  submission_timestamp?: string;
  status?: string;
  created_at?: string;
}
