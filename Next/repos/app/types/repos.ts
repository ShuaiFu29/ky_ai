export interface Repo {
  id: number;
  name: string;
  description: string | null;  // 联合类型
  html_url: string;
  stargazer_count: number;
  lannguage: string | null;
}