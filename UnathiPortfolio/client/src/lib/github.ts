import { useQuery } from "@tanstack/react-query";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
}

export function useGitHubRepos() {
  return useQuery<GitHubRepo[]>({
    queryKey: ["/api/github/repos"],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
