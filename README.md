# Project Genesis

Welcome to **Project Genesis**, an official repository under the **Tirtayasa InfoSec Society (TISS)** organization.
Selamat datang di **Project Genesis**, repositori resmi di bawah organisasi **Tirtayasa InfoSec Society (TISS)**.

> [!WARNING]
> **PROPRIETARY & CONFIDENTIAL / PROPRIETARI & RAHASIA**  
> This repository contains proprietary code. Unauthorized distribution, copying, modification, or sharing of any part of this project is strictly prohibited under the terms of the [LICENSE](LICENSE) agreement.
> 
> Repositori ini berisi kode proprietari. Distribusi, penyalinan, modifikasi, atau pembagian bagian apa pun dari proyek ini tanpa izin sangat dilarang berdasarkan ketentuan perjanjian [LICENSE](LICENSE).

---

## Getting Started / Memulai

This repository houses the core components of Project Genesis. Please read the contribution guidelines below before interacting with the codebase.
Repositori ini menampung komponen utama dari Project Genesis. Harap baca panduan kontribusi di bawah ini sebelum berinteraksi dengan basis kode.

---

## Contribution Guidelines / Panduan Kontribusi

To maintain code quality, security, and a clean Git history, we enforce a strict workflow.
Untuk menjaga kualitas kode, keamanan, dan riwayat Git yang bersih, kami memberlakukan alur kerja yang ketat.

### CRITICAL RULE: No Direct Push to main / ATURAN UTAMA: Dilarang Melakukan Push Langsung ke main
* **Direct pushes to the `main` branch are strictly prohibited.**
  **Push langsung ke branch `main` sangat dilarang.**
* **All changes must undergo peer review via a Pull Request (PR).**
  **Semua perubahan harus melalui tinjauan rekan (peer review) melalui Pull Request (PR).**
* **Any direct push attempts will be blocked by repository branch protection rules.**
  **Setiap upaya push langsung akan diblokir oleh aturan proteksi branch repositori.**

### Workflow Checklist / Alur Kerja

Follow these steps to contribute code or documentation:
Ikuti langkah-langkah berikut untuk berkontribusi pada kode atau dokumentasi:

#### 1. Fork or Clone the Repository / Fork atau Clone Repositori
* If you have write access directly, clone the repository:
  Jika Anda memiliki akses tulis secara langsung, clone repositori:
  ```bash
  git clone https://github.com/tirtayasa-infosec-society/project-genesis.git
  cd project-genesis
  ```
* Otherwise, fork the repository to your personal account first, and clone your fork.
  Jika tidak, fork repositori ke akun pribadi Anda terlebih dahulu, lalu clone fork Anda.

#### 2. Create a Feature/Bugfix Branch / Buat Branch Feature/Bugfix
* Never work directly on `main`. Create a new branch with a descriptive name:
  Jangan pernah bekerja langsung di `main`. Buat branch baru dengan nama yang deskriptif:
  ```bash
  # For features / Untuk fitur baru
  git checkout -b feature/your-feature-name

  # For bug fixes / Untuk perbaikan bug
  git checkout -b bugfix/your-fix-name
  ```

#### 3. Commit Your Changes / Commit Perubahan Anda
* Ensure your code is clean and adheres to the project's coding standards.
  Pastikan kode Anda bersih dan mematuhi standar penulisan kode proyek.
* Commit your changes with clear, descriptive messages:
  Commit perubahan Anda dengan pesan yang jelas dan deskriptif:
  ```bash
  git commit -m "feat: implement user authentication flow"
  ```

#### 4. Push and Open a Pull Request (PR) / Push dan Buka Pull Request (PR)
* Push your branch to the remote:
  Push branch Anda ke remote:
  ```bash
  git push origin feature/your-feature-name
  ```
* Go to the GitHub repository page and click **Compare & pull request**.
  Buka halaman repositori GitHub dan klik **Compare & pull request**.
* Fill in the PR template describing:
  Isi templat PR yang menjelaskan:
  * **What** changes are introduced. / **Apa** perubahan yang dimasukkan.
  * **Why** these changes are necessary. / **Mengapa** perubahan ini diperlukan.
  * **How** you tested the changes. / **Bagaimana** Anda menguji perubahan tersebut.

#### 5. Review & Approval / Tinjauan & Persetujuan
* At least **one peer review and approval** from a TISS team member/admin is required before merging.
  Setidaknya diperlukan **satu peer review dan persetujuan** dari anggota tim/admin TISS sebelum melakukan merge.
* Address any requested changes or feedback promptly.
  Tanggapi setiap perubahan atau masukan yang diminta dengan segera.
* Once approved, the branch will be merged into `main`.
  Setelah disetujui, branch akan di-merge ke `main`.

---

## License / Lisensi

This project is licensed under the TISS Proprietary License. See the [LICENSE](LICENSE) file for the full license text.
Proyek ini dilisensikan di bawah Lisensi Proprietari TISS. Lihat file [LICENSE](LICENSE) untuk teks lisensi lengkap.
