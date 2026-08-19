# Architecture Decisions

## ADR-001: Browser Manager Architecture

Decision:
Use a Browser Manager approach.

Reason:
We want browser lifecycle management separated from
contexts and pages.

---

## ADR-002: User Isolation

Decision:
Different users receive different BrowserContexts.

Reason:
Admin and normal users must not share:
- cookies
- local storage
- authentication state
- session data

Architecture:

Browser
 ├── Admin Context
 │      └── Admin Page
 │
 └── User Context
        └── User Page

---

## ADR-003: Dockerized Test Execution

Decision:
Execute Playwright tests inside a Docker container.

Reason:
The test environment becomes reproducible and independent
of the host machine.

---

## ADR-004: Jenkins Containerized

Decision:
Run Jenkins inside Docker.

Reason:
Easy setup and reproducible CI environment.

---

## ADR-005: Jenkins Docker Access

Decision:
Allow Jenkins to communicate with Docker Engine.

Reason:
Jenkins needs to build and execute the Playwright test container.

----

ADR: Externalize test credentials

Decision:
Application credentials are managed outside source control
and injected at runtime by Jenkins.

Reason:
Prevent credentials from being committed to GitHub and
provide a secure CI/CD secret-management mechanism.