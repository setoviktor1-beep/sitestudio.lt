# SiteStudio project policy

- Treat this project as the only writable scope unless the user explicitly adds another path.
- Apply default deny to repositories, infrastructure, credentials, and deployment targets.
- Never copy another project's secrets, personal data, database, logs, or media.
- Run production tests and builds in GitHub Actions, never on a production VPS.
- Use immutable GHCR commit-SHA tags and keep the prior production SHA for rollback.
- Require explicit human confirmation before push, deployment, migration, or proxy reload.
- Keep project, service, network, database, user, volume, port, and upstream names unique.
- Validate statically before any dependency, build, publish, or deployment step.
