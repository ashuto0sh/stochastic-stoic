export const SITE = {
  title: "Stochastic Stoic",
  description: "Essays on philosophy, mathematics, and software engineering.",
  author: "Ashutosh Tripathi",
};

/**
 * Giscus (GitHub Discussions comments).
 *
 * repoId and categoryId come from https://giscus.app once:
 *   1. the public repo exists,
 *   2. Discussions are enabled on it,
 *   3. the giscus app (github.com/apps/giscus) is installed on it.
 * The comments section renders nothing until both IDs are filled in.
 */
export const GISCUS = {
  repo: "ashuto0sh/stochastic-stoic",
  repoId: "R_kgDOTdVn4g",
  category: "General",
  categoryId: "DIC_kwDOTdVn4s4DBhwz",
};

export const giscusConfigured = Boolean(GISCUS.repoId && GISCUS.categoryId);
