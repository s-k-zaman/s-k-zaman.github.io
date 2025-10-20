export const ghRepoName = (githubLink: string) => {
  if (!githubLink) return "";
  // Remove trailing slashes, fragments (#), and .git suffix
  const cleaned = githubLink
    .trim()
    .replace(/\/+$/, "") // remove trailing slashes
    .replace(/#.*$/, "") // remove fragments
    .replace(/\.git$/, ""); // remove .git at end
  const parts = cleaned.split("/");
  return parts[parts.length - 1] || "";
};
