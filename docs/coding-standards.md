# Project Genesis - Developer Coding Standards & Guidelines / Standar & Panduan Penulisan Kode Pengembang

This document defines the coding standards, directory structures, naming conventions, and workflows for Project Genesis. Adhering to these standards ensures code quality, maintainability, and consistency across all applications and shared packages in our monorepo.

Dokumen ini mendefinisikan standar penulisan kode, struktur direktori, konvensi penamaan, dan alur kerja untuk Project Genesis. Kepatuhan terhadap standar ini menjamin kualitas kode, keterpeliharaan, dan konsistensi di seluruh aplikasi dan paket bersama dalam monorepo kami.

---

## 1. Directory & Project Structure / Struktur Direktori & Proyek

Project Genesis is structured as a monorepo managed with `pnpm` and `turbo`.
Project Genesis disusun sebagai monorepo yang dikelola dengan `pnpm` dan `turbo`.

* **Application Directories (`apps/`)**:
  * **Rule**: Must use **kebab-case** for directory names.
  * **Aturan**: Wajib menggunakan **kebab-case** untuk nama direktori.
  * *Examples / Contoh*: `apps/landing`, `apps/lms`, `apps/monitor`, `apps/status`, `apps/api`.
* **Shared Package Directories (`packages/`)**:
  * **Rule**: Must use **kebab-case** for directory names.
  * **Aturan**: Wajib menggunakan **kebab-case** untuk nama direktori.
  * *Examples / Contoh*: `packages/api-client`, `packages/database`, `packages/ui`, `packages/utils`.
* **Infrastructure Configurations (`infra/`)**:
  * **Rule**: Must use **lowercase** or **kebab-case** for configuration folders and files.
  * **Aturan**: Wajib menggunakan huruf kecil (**lowercase**) atau **kebab-case** untuk folder dan berkas konfigurasi.
  * *Examples / Contoh*: `infra/docker`, `infra/nginx`, `infra/ci`.

---

## 2. TypeScript & React Conventions / Konvensi TypeScript & React

### 2.1 File Naming / Penamaan Berkas

* **React Components in Apps (`apps/*/src/components/`, `apps/*/src/pages/`)**:
  * **Rule**: Use **PascalCase** for both filename and export.
  * **Aturan**: Gunakan **PascalCase** untuk nama berkas dan ekspor.
  * *Examples / Contoh*: `WorkspaceBadge.tsx`, `HomePage.tsx`, `LabPage.tsx`.
* **React Components in Shared Packages (`packages/ui/src/components/`)**:
  * **Rule**: Use **kebab-case** for filenames, but the declared/exported component must remain **PascalCase**.
  * **Aturan**: Gunakan **kebab-case** untuk nama berkas, namun komponen yang dideklarasikan/diekspor tetap menggunakan **PascalCase**.
  * *Examples / Contoh*: `rank-badge.tsx` (exports `RankBadge`), `progress-bar.tsx` (exports `ProgressBar`), `data-table.tsx` (exports `DataTable`).
* **React Hooks in Apps (`apps/*/src/hooks/`)**:
  * **Rule**: Use **camelCase** starting with `use`.
  * **Aturan**: Gunakan **camelCase** yang diawali dengan kata `use`.
  * *Examples / Contoh*: `useLabForm.ts`, `useMetricForm.ts`, `useIncidentForm.ts`.
* **React Hooks in Shared Packages (`packages/ui/src/hooks/`)**:
  * **Rule**: Use **kebab-case** starting with `use-`.
  * **Aturan**: Gunakan **kebab-case** yang diawali dengan `use-`.
  * *Examples / Contoh*: `use-gsap-animation.ts` (exports `useFadeInScale`, `useNeonPulse`).
* **Stores, Utils, Libs, & Helpers**:
  * **Rule**: Use **camelCase** or simple lowercase names.
  * **Aturan**: Gunakan **camelCase** atau nama huruf kecil sederhana.
  * *Examples / Contoh*: `workspaceStore.ts`, `formatRouteLabel.ts`, `cn.ts`, `date.ts`, `string.ts`.

### 2.2 Code Casing / Konvensi Penulisan di Dalam Kode

* **Variables & Functions / Variabel & Fungsi**:
  * **Rule**: Use **camelCase**.
  * **Aturan**: Gunakan **camelCase**.
  * *Examples / Contoh*: `formatDate`, `slugify`, `badgeRef`, `style`, `rankStyles`.
* **Interfaces & Types / Interface & Tipe**:
  * **Rule**: Use **PascalCase**.
  * **Aturan**: Gunakan **PascalCase**.
  * *Examples / Contoh*: `RankBadgeProps`, `RankLevel`, `WorkspaceState`.
* **Constants / Konstanta**:
  * **Rule**: Use **UPPER_SNAKE_CASE** for global constants, or **camelCase** for local styling configuration objects.
  * **Aturan**: Gunakan **UPPER_SNAKE_CASE** untuk konstanta global, atau **camelCase** untuk objek konfigurasi gaya lokal.
  * *Examples / Contoh*: `API_URL`, `MAX_RETRIES`, `sizeClasses` (local style object).

---

## 3. Go Backend Conventions / Konvensi Backend Go

Go code resides in `apps/api/`. We follow idiomatic Go naming and coding conventions.
Kode Go berada di `apps/api/`. Kami mengikuti konvensi penamaan dan penulisan kode Go yang idiomatik.

* **Package Names / Nama Package**:
  * **Rule**: Must be a single, lowercase word. Do not use underscores or camelCase.
  * **Aturan**: Wajib berupa satu kata huruf kecil. Jangan gunakan underscore atau camelCase.
  * *Examples / Contoh*: `package user`, `package auth`, `package audit`, `package repository`.
* **File Names / Nama Berkas**:
  * **Rule**: Lowercase simple words, or snake_case if multiple words are necessary.
  * **Aturan**: Huruf kecil sederhana, atau snake_case jika memerlukan lebih dari satu kata.
  * *Examples / Contoh*: `handler.go`, `model.go`, `repository.go`, `db_conn.go`.
* **Structs & Interfaces / Struct & Interface**:
  * **Rule**: Use **PascalCase**.
  * **Aturan**: Gunakan **PascalCase**.
  * *Examples / Contoh*: `type Handler struct`, `type Service struct`, `type UserRepository interface`.
* **Private Struct Fields / Field Struct Privat**:
  * **Rule**: Use **camelCase**.
  * **Aturan**: Gunakan **camelCase**.
  * *Examples / Contoh*: `service *Service` (private field in a struct).
* **Functions & Methods / Fungsi & Method**:
  * **Exported / Diekspor** (accessible outside package): **PascalCase**.
  * **Unexported / Tidak Diekspor** (internal package): **camelCase**.
  * *Examples / Contoh*: `NewHandler` (exported), `RegisterRoutes` (exported), `notImplemented` (unexported).
* **Variables / Variabel**:
  * **Rule**: Use **camelCase**. Keep acronyms consistent in casing (e.g., `userID` instead of `userId`).
  * **Aturan**: Gunakan **camelCase**. Jaga konsistensi huruf kapital pada akronim (contoh: `userID`, bukan `userId`).

---

## 4. Database & Prisma Conventions / Konvensi Database & Prisma

Database configuration and schemas reside in `packages/database/prisma/schema.prisma`.
Konfigurasi dan skema database berada di `packages/database/prisma/schema.prisma`.

* **Prisma Models / Model Prisma**:
  * **Rule**: Use **PascalCase** singular.
  * **Aturan**: Gunakan **PascalCase** tunggal (singular).
  * *Examples / Contoh*: `model User`, `model Role`, `model AuditLog`, `model Incident`.
* **Model Fields / Field Model**:
  * **Rule**: Use **camelCase**.
  * **Aturan**: Gunakan **camelCase**.
  * *Examples / Contoh*: `fullName`, `createdAt`, `updatedAt`, `guestExpertExpiresAt`.
* **Database Table Mapping (`@@map`) / Pemetaan Tabel Database**:
  * **Rule**: Must map models to **snake_case** plural table names in PostgreSQL.
  * **Aturan**: Wajib memetakan model ke nama tabel **snake_case** jamak (plural) di PostgreSQL.
  * *Examples / Contoh*: `@@map("users")`, `@@map("audit_logs")`, `@@map("incidents")`.
* **Enums / Enum**:
  * **Enum Name**: **PascalCase** (e.g., `enum Rank`, `enum RbacRole`).
  * **Enum Values**: **SCREAMING_SNAKE_CASE** (e.g., `VOID`, `WHITE_TEAMING`, `RED_TEAMING`).

---

## 5. Code Quality & Formatting / Kualitas & Pemformatan Kode

We enforce strict formatting and linting rules to maintain a clean codebase.
Kami memberlakukan aturan pemformatan dan linting yang ketat untuk menjaga basis kode tetap bersih.

* **Semicolons / Titik Koma (JavaScript/TypeScript)**:
  * **Rule**: **No semicolons** at the end of statements (`semi: false` in Prettier).
  * **Aturan**: **Tanpa titik koma** di akhir pernyataan (`semi: false` pada Prettier).
* **Quotes / Tanda Kutip (JavaScript/TypeScript)**:
  * **Rule**: Standardize on **double quotes** (`"`) or **single quotes** (`'`) as configured by ESLint/Prettier.
  * **Aturan**: Standardisasikan penggunaan **kutip ganda** (`"`) atau **kutip tunggal** (`'`) sesuai konfigurasi ESLint/Prettier.
* **Console & Debugger / Log Konsol & Debugger**:
  * **Rule**: Production code must not contain any `console.log`, `console.error`, or `debugger` statements.
  * **Aturan**: Kode produksi tidak boleh berisi pernyataan `console.log`, `console.error`, atau `debugger`.
  * *Tooling / Alat*: ESLint will trigger a build error if these are present (`"no-console": "error"`, `"no-debugger": "error"`).
* **Unused Variables / Variabel Tidak Terpakai**:
  * **Rule**: Unused variables are treated as errors. If a variable is intentionally unused (e.g., in parameters), prefix it with an underscore `_`.
  * **Aturan**: Variabel yang tidak terpakai dianggap sebagai error. Jika variabel sengaja tidak digunakan (misalnya pada parameter), awali dengan underscore `_`.
  * *Example / Contoh*: `const _unusedVar = ...` or `(_event) => { ... }`.

---

## 6. Git & Pull Request Workflow / Alur Kerja Git & Pull Request

To ensure code stability, we follow a strict branching and contribution workflow.
Untuk memastikan stabilitas kode, kami mengikuti alur kerja pembuatan branch dan kontribusi yang ketat.

* **Branch Naming / Penamaan Branch**:
  * Always create a new branch from `main`. Never commit directly to `main`.
  * Selalu buat branch baru dari `main`. Jangan pernah melakukan commit langsung ke `main`.
  * **Format**:
    * Features / Fitur baru: `feature/your-feature-name`
    * Bug fixes / Perbaikan: `bugfix/your-fix-name`
    * Chore / Tugas umum: `chore/your-chore-name`
    * Documentation / Dokumentasi: `docs/your-doc-name`
* **Commit Messages / Pesan Commit**:
  * Use **Semantic Commits** format.
  * Gunakan format **Semantic Commits**.
  * *Examples / Contoh*:
    * `feat: implement user authorization`
    * `fix: resolve memory leak in monitor service`
    * `docs: add coding standards guidelines`
    * `chore: update tailwind dependencies`
* **Pull Request (PR) & Review**:
  * All branches must be pushed to remote, and a Pull Request must be opened.
  * Semua branch harus di-push ke remote, dan sebuah Pull Request harus dibuka.
  * A PR requires at least **one approved review** from a TISS team member/admin before it can be merged.
  * PR membutuhkan setidaknya **satu persetujuan (approval)** dari anggota tim/admin TISS sebelum dapat di-merge.
