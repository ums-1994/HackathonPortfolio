import { useGitHubRepos } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Projects() {
  const { data: repos, isLoading, error } = useGitHubRepos();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[300px]" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center text-destructive">
        <p>Failed to load projects. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos?.map((repo, index) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description || "No description available"}
            url={repo.html_url}
            tech={[repo.language, ...(repo.topics || [])]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
