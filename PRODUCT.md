# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Visitors to the website of **SKJ Renovering**, a Danish carpentry and renovation company. The company is real (owned by a friend's father); the group is allowed to use its public details and pictures for this school project. They are private homeowners looking for a carpenter they can trust with work on their home. They come to the front page to find out who SKJ is, whether the company fits their values, and how to get in touch about a job.

A secondary audience, not served by the front page, is SKJ's employees. They will later use a logged-in area to read, answer and archive incoming customer requests.

## Product Purpose

The site presents SKJ Renovation and turns visitors into inquiries. Behind the scenes, customers send a request (name, email, optional phone, message), and employees reply by email and archive it. Success for the front page means a visitor understands what SKJ stands for and takes the step of contacting them.

This is a school group project (three students). The site is a school assignment, not the company's live website.

## Positioning

- **Ecological and sustainably sourced wood** is SKJ's top priority.
- **Locally owned and family-run for 30 years.**
- **Thoroughness:** SKJ makes sure every customer is left with a perfect result.

## Operating Context

- Customers contact SKJ through a request form on the site. Employees handle requests in a dashboard with these statuses (from the brand sheet): Ny forespørgsel, Påmindelse, Tilbud sendt, Accepteret, Arkiveret.
- Current scope is **only the front page** ("forsiden", branch `8-forsiden`). The request form, dashboard and other pages will be built later by the group.

## Capabilities and Constraints

- Language: all site copy is **Danish**.
- Stack: Spring Boot 4 (Java 25) backend with JPA and H2/MySQL. The frontend is plain HTML/CSS/JS in `src/main/resources/frontend/`, served under `/frontend/**`.
- The data model has Request, ArchivedRequest and Employee.
- Group workflow: work happens only on the current feature branch. Never touch `main` or teammates' branches.
- Company details (from the company's own website, skjrenovering.dk, checked 2026-11-27):
  - Phone `91 30 93 51`, email `nicholaiboggild@gmail.com`, address Julius Thomsens Plads 4, kl. tv, København (no postcode on their site), CVR `30201774`.
  - Open every day 08:00 – 17:00. Areas: Storkøbenhavn and Nordsjælland.
  - Services: total entreprise, vinduesmontering, terrasser & udeliv, træarbejde & nybygning, tilbygninger og ombygninger, tagarbejde og konstruktion.
  - Their site says "siden 1998" but also "30+ års erfaring". These don't match exactly; ask the family before using a founding year.
- Still undecided: the names of the family or founders, and any certifications, percentages or energy claims. Do not invent them.

## Branch Rules

- **Never add, edit, rename, delete or otherwise change anything while the `main` branch is checked out.** This covers files, folders, commits, merges, pushes and any git operation that writes to `main`.
- Before any change in this project, check the current branch (`.git/HEAD`). If it is `main`, make no changes and reply: "I can't do that in main. Please switch to another branch (for example your feature branch) and ask again."
- The same applies to teammates' branches: work only on the current feature branch (currently `8-forsiden`).
- These rules apply even if the user asks directly. The user must switch branch first. Reading and explaining files on `main` is fine.

## Brand Commitments

- Name: **SKJ Renovation**.
- Binding colour scheme from the group's brand sheet (`Downloads/farveTemaWebsite.png`). Hex values were read and verified from the sheet:
  - Skovgrøn `#2F7D5B`: primary (buttons, links, logo)
  - Mosgrøn `#1E3D2F`: text (headings, body text, footer)
  - Saltorange `#FF7A1F`: accent (highlights, icons, notifications)
  - Lysegrøn `#A8D5B5` (graphics, charts) · Mint `#E6F2E8` (sections, cards) · Fersken `#FBE3C4` (warnings, new requests) · Sand `#FAF7F0` (page background) · Sten `#DCD6C8` (borders, lines) · Skifer `#5B6660` (secondary text)
  - Rules: white text only on Skovgrøn and Mosgrøn. Saltorange always carries Mosgrøn text, to keep contrast.
- Binding typography from the same sheet: **Outfit** for headings, **Inter** for body text, forms and the dashboard.

## Evidence on Hand

- No real customers, testimonials, reviews, project photos, certifications or awards exist. Future work must not invent any of them as fact. Use clearly marked placeholders instead.
- "30 years", "family-run", "locally owned" and "sustainably sourced wood" are confirmed facts of the case.

## Product Principles

1. Sustainability is the lead message, not a footnote.
2. Earn trust through craft and continuity (30 years, family) rather than salesy claims.
3. Every page should lead naturally toward contacting SKJ for a quote.
4. Show the thoroughness in the site's own care: tidy, complete and nothing half-finished.
