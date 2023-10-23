---
sidebar_position: 1
title: Introduction
---

Welcome to the Emitbase documentation! 👋

## What is Emitbase?

Emitbase is an open-source alerts platform for developers. It allows you to connect to a database, define the logic of alerts in SQL, and specify channels for alerts (Email or [Slack](https://slack.com/)). 

## Who is it for?

Emitbase may be a good fit if you are:

- A developer wishing to create all alerts in one place.
- A developer wishing to create alerts without interfering with the business logic of your application.
- A developer wishing to create alerts in a declarative manner.

## How does it work?

1. You write SQL to define an alert, for example: `SELECT temp FROM metrics WHERE temp > 30`.
2. You specify how often the SQL should run using CRON notation, such as: `*/5 * * * *`.
3. You define channels and messages that should be sent (Email or Slack).
4. The SQL query runs every time you specify in CRON:
   1. If the SQL query returns any rows, the messages are sent.
   2. If the SQL query does not return rows, the messages are not sent.

## Limits

:::warning

Emitbase is still in **beta**. We do not recommend using it for critical production systems.

:::

- Emitbase currently work only with [PostgreSQL](https://www.postgresql.org/) database.
- Emitbase currently support only Email and Slack messages.

## Next steps

- Start with [Getting Started](/docs/getting-started.md).
- Give ⭐️ to the [Emitbase](https://github.com/emitbase/emitbase-core) project on GitHub ❤️.
- Connect with us in the [Community](/docs/community/slack).