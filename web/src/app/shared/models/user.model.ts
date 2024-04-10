
import { UserRole } from '../enums/user-role';

export interface CreditModel {
  card_number: string;
  cvc: string;
  year: string;
  month: string;
}
export interface UserModel {
  _id?: string;
  user_name?: string;
  store_name?: string;
  password?: string;
  old_password?: string;
  email?: string;
  role?: UserRole;
  first_name?: string;
  last_name?: string;
  first_name_kata?: string;
  last_name_kata?: string;
  activity_area?: string[];
  account_type?: number;
  company_name?: string;
  verify_code?: string;
  address?: string;
  prefectuures?: string;
  city?: string;
  pin?: number;
  bulding_name?: string;
  phone_number?: string;
  zip_code?: string;
  avatar?: string;
  intro?: string;
  status?: number;
  sex?: number;
  operation_status?: string;
  total_rating?: number;
  number_people_rating?: number;
  average_rating?: number;
  payment_method?: number;
  birthday?: number;
  age?: number;
  intro_title?: string;
  experience_years?: number;
  unit_price?: number;
  description_for_price?: string;
  working_day?: string;
  working_hours?: string[];
  project_type?: string;
  transportation?: string;
  phone_used?: string;
  operation_condition?: number;
  history?: number;
  memo?: string;
  ref?: string;
  card_id?: string;
  customer_id?: string;
  created_at?: number;
  updated_at?: number;
  logged_at?: number;
  credit_card?: CreditModel;
  bank_account?: BankAccount;
  document?:[string];
  remark?: string;
  task?:[],
  join_task_at?: string,
  rate_at?: string,
  document_type?: string,
  is_term?: number
}

export interface BankAccount {
  account_name: string;
  branch_code: string;
  deposit_type: number;
  account_number: string;
  account_holder: string;
}
