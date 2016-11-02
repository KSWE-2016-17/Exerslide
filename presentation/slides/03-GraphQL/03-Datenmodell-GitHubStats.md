---
title: GitHubStats Datenmodell
---

Lokal wird keine Datenbank oder ähnliches eingesetzt, es wird nur die Schnittstelle von GitHub genutzt. Im folgenden sind die tatsächlich genutzten Ausschnitte zu sehen.

# Suche

## Organization

Name   | Typ
------ | ------
id     | String
login  | String
name   | String
avatar | String

# Statistiken

## User

Name  | Typ
----- | ------
login | String
id    | String

## CommitAuthor

Name | Typ
---- | ----
user | User

## Commit

Name   | Typ
------ | ------------
author | CommitAuthor

## Branch

Name    | Typ
------- | -------------
commits | List (Commit)

## Repository

Name   | Typ
------ | ------
id     | String
name   | String
branch | Branch

## Organization

Name         | Typ
------------ | -----------------
repositories | List (Repository)
