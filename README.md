# DevSecOps Pipeline

**Secure CI/CD Pipeline Using GitHub Actions**

## 1. Project Overview

This project demonstrates the implementation of a secure DevSecOps pipeline using Node.js, Express.js, Jest, ESLint, and GitHub Actions.

The pipeline automates testing, code quality checks, and application build verification whenever code is pushed to GitHub.

## 2. Technologies Used

- Node.js 24
- Express.js
- Jest and Supertest
- ESLint
- Git and GitHub
- GitHub Actions
- npm security audit

## 3. Project Structure

```text
devsecops-pipeline/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   └── app.js
├── tests/
│   └── app.test.js
├── .eslintrc.json
├── .gitignore
├── package.json
├── package-lock.json
├── audit-report.json
└── README.md
```

## 4. Automated Testing

The project uses Jest and Supertest to test the Express API.

Test coverage includes:

- GET /health endpoint.
- GET /api/books endpoint.
- Book information validation.

**Result:** 3 tests passed.

## 5. Code Quality

ESLint is used to identify potential coding errors and maintain consistent code quality.

Command:

```bash
npm run lint
```

**Result:** Passed.

## 6. Build Verification

The project uses Node.js syntax checking to verify the application.

Command:

```bash
npm run build
```

**Result:** Passed.

## 7. GitHub Actions CI Pipeline

The workflow is configured in:

`.github/workflows/ci.yml`

The pipeline performs the following steps:

1. Set up the job.
2. Check out repository code.
3. Set up Node.js.
4. Install dependencies.
5. Run automated tests.
6. Run ESLint.
7. Build the application.

**GitHub Actions Result:** Successful.

Three workflow runs were successfully completed during project verification.

## 8. Dependency Security Audit

The project uses npm audit to identify vulnerable dependencies.

Production dependency audit:

```bash
npm audit --omit=dev
```

**Result: 0 vulnerabilities found.**

The development dependency audit previously reported six low-severity vulnerabilities. These should be monitored and addressed separately.

## 9. GitHub Repository

Repository:

https://github.com/mohammedgemal-boop/devsecops-pipeline

The project is maintained on the main branch.

## 10. Conclusion

This project demonstrates the implementation of an automated DevSecOps CI pipeline.

Automated testing, linting, build verification, GitHub Actions integration, and production dependency security auditing help improve software quality and security.