export interface Question {
  answer_count: number;
  content_license: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  last_edit_date?: number;
  link: string;
  owner: {
    display_name: string;
    link: string;
    profile_image: string;
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate?: number;
  };
  protected_date?: number;
  accepted_answer_id?: number;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}
