# Project Genesis 🛡️

Welcome to **Project Genesis**, an official repository under the **Tirtayasa InfoSec Society (TISS)** organization.

> [!WARNING]
> **PROPRIETARY & CONFIDENTIAL**  
> This repository contains proprietary code. Unauthorized distribution, copying, modification, or sharing of any part of this project is strictly prohibited under the terms of the [LICENSE](LICENSE) agreement.

---

## 🚀 Getting Started

This repository houses the core components of Project Genesis. Please read the contribution guidelines below before interacting with the codebase.

---

## 🤝 Contribution Guidelines

To maintain code quality, security, and a clean Git history, we enforce a strict workflow. 

### 🚫 CRITICAL RULE: No Direct Push to `main`
* **Direct pushes to the `main` branch are strictly prohibited.**
* All changes must undergo peer review via a Pull Request (PR).
* Any direct push attempts will be blocked by repository branch protection rules.

### 🔄 Workflow Checklist

Follow these steps to contribute code or documentation:

#### 1. Fork or Clone the Repository
* If you have write access directly, clone the repository:
  ```bash
  git clone https://github.com/tirtayasa-infosec-society/project-genesis.git
  cd project-genesis
  ```
* Otherwise, fork the repository to your personal account first, and clone your fork.

#### 2. Create a Feature/Bugfix Branch
* Never work directly on `main`. Create a new branch with a descriptive name:
  ```bash
  # For features
  git checkout -b feature/your-feature-name

  # For bug fixes
  git checkout -b bugfix/your-fix-name
  ```

#### 3. Commit Your Changes
* Ensure your code is clean and adheres to the project's coding standards.
* Commit your changes with clear, descriptive messages:
  ```bash
  git commit -m "feat: implement user authentication flow"
  ```

#### 4. Push and Open a Pull Request (PR)
* Push your branch to the remote:
  ```bash
  git push origin feature/your-feature-name
  ```
* Go to the GitHub repository page and click **Compare & pull request**.
* Fill in the PR template describing:
  * **What** changes are introduced.
  * **Why** these changes are necessary.
  * **How** you tested the changes.

#### 5. Review & Approval
* At least **one peer review and approval** from a TISS team member/admin is required before merging.
* Address any requested changes or feedback promptly.
* Once approved, the branch will be merged into `main`.

---

## 📄 License

This project is licensed under the TISS Proprietary License. See the [LICENSE](LICENSE) file for the full license text.
