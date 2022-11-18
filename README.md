# Bug/Issue Tracker

## Resources:

- CoderFoundry
  - They have their own bug tracker
  - https://www.youtube.com/watch?v=vG824vBdYY8
- Sam Meech-Ward
  - Amazing explanations
  - Great tutorials for React and Next including implementing Prisma, Next Auth etc... - https://www.zoho.com/bugtracker/

## Project Details

Name:

- Bugees
  - Will probably use this one
- Bug-ees

Description:

- Your personal bug tracker that allows you to efficiently hunt down those pesky bugs.

Stack:

- Next
- Next Auth
- Prisma
- TailwindCSS
- Heroicons

## Models

User:

- Name
- Email
- Role
- User
- Manager
  - Archive their projects
  - Invite/kick users from their projects
- Projects
- Comments

Bug:

- Name
- Description
- Status
  - Open
  - Resolved
  - In Progress
- Priority
  - None
  - Low
  - Medium
  - High
- Assignee
- Reporter
- Comment
- Created date
- Updated date
- History
  - Bug
  - Edited by
  - Old value
  - New value
  - Date changed

Project:

- Name
- Description
- Created by
- Users
- Bugs
- Is archived
- Comments

Comment:

- Description
- Created by

## Extra Notes

Pages:

- Landing Page
- Login & Signup
- Demo user link
- Dashboard
  - Overview
  - Stats and charts
  - Bugs by priority
  - Bugs by type
  - View projects (all projects the user is in)
  - View reported bugs
  - View assigned bugs
  - View all bugs (all bugs from all projects that the user is in)
  - Users settings
  - [ADMIN]
    - Manage user roles
    - Manage all projects
    - Manage all bugs

Roles:

- User
- Project Manager
  - Invite/remove user to/from project
  - Archive project
- Admin
  - Add/remove users roles
  - CRUD on all projects and bugs
