# Framework Architecture Dictionary

## Browser
A browser is the actual Chromium/Firefox/WebKit process launched by Playwright.

Responsibilities:
- Owns browser-level resources.
- Can contain multiple isolated contexts.
- Should generally be created once per test execution/session strategy.

---

## Browser Context
A BrowserContext is an isolated browser profile.

Think of it as:
Browser
 ├── Context - Admin
 ├── Context - User A
 └── Context - User B

Each context has its own:
- Cookies
- Local storage
- Session storage
- Authentication state

Contexts should be used to isolate users.

---

## Page
A Page represents a browser tab.

Architecture:

Browser
   ↓
Context
   ↓
Page

A page should belong to a specific context.

---

## UserSession
Represents the authenticated state of a specific user.

Example:

AdminSession
   ↓
Admin Context
   ↓
Admin Page

NormalUserSession
   ↓
User Context
   ↓
User Page

This prevents privileged authentication data from being accidentally shared.

---

## Docker
Docker packages an application and its dependencies into a container.

In our framework:

Docker
   ↓
Playwright Test Container
   ├── Node.js
   ├── npm
   ├── TypeScript
   ├── Cucumber
   ├── Playwright
   └── Chromium

This makes test execution consistent across environments.

---

## Docker Image
A blueprint used to create a container.

Our image:

playwright-cucumber-tests

is created from:

Dockerfile
   ↓
Docker Image
   ↓
Docker Container
   ↓
Cucumber Tests

---

## Docker Container
A running instance of a Docker image.

Example:

playwright-cucumber-tests
        ↓
running container
        ↓
Cucumber execution

---

## Jenkins
Jenkins is our CI/CD orchestrator.

It retrieves the framework from GitHub and executes the pipeline.

GitHub
   ↓
Jenkins
   ↓
Docker
   ↓
Playwright
   ↓
Cucumber
   ↓
Test Result

---

## Jenkinsfile
Defines the CI/CD pipeline as code.

Our pipeline currently:

1. Checkout source
2. Build Docker image
3. Run Cucumber tests

---

## Docker Socket
/var/run/docker.sock

Allows the Jenkins container to communicate with the Docker engine.

Architecture:

Jenkins Container
       ↓
Docker CLI
       ↓
Docker Socket
       ↓
Docker Engine
       ↓
Playwright Test Container

---

## Jenkins Home

jenkins_home

Persistent Docker volume containing Jenkins data.

We deliberately preserve this volume when recreating Jenkins.

---

## Environment Variables

Configuration such as:

BASE_URL
BROWSER
HEADLESS
TIMEOUT

is supplied at runtime rather than hard-coded into application code.

Secrets such as usernames/passwords should eventually be managed through Jenkins Credentials.

---

## CI/CD

Continuous Integration / Continuous Delivery.

Our CI flow:

Developer
   ↓
Git commit
   ↓
GitHub
   ↓
Jenkins
   ↓
Docker build
   ↓
Automated tests
   ↓
Result
--------------------------
Docker Desktop Lifecycle

Docker CLI
    │
    ▼
Docker Daemon
    │
    ▼
Containers

--------------------
Jenkins Persistance 

Jenkins Container
       │
       ▼
jenkins_home
       │
       ├── Jobs
       ├── Credentials
       ├── Configuration
       └── Build History

---------------------
Layers initial

GitHub
  ↓
Jenkins
  ↓
Docker Build
  ↓
Playwright Container
  ↓
Cucumber
  ↓
1 scenario passed
5 steps passed
  ↓
Jenkins SUCCESS

----------------

## Secret Management

Secrets are never committed to source control.

Local execution:
.env
    ↓
Application

CI execution:
Jenkins Credentials
    ↓
Runtime environment variables
    ↓
Docker container
    ↓
Playwright tests




