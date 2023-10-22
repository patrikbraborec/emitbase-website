---
sidebar_position: 3
title: Integration with email
---

If you have defined [Thresholds](./thresholds.md) and want to send email [Notificatioms](./notifications.md), here is a simple guide. The guide uses [Gmail](https://www.google.com/intl/en/gmail/about/) as a service for sending emails via Simple Mail Transfer Protocol (SMTP). The principles described in this guide also apply to other email services.

:::info

You need to turn on [2-Step Verification](https://support.google.com/accounts/answer/185839) to make it work with Gmail.

:::

## Get an App Password

If you have enabled 2-Step Verification, you must create an app-specific password for your Emitbae project.

1. Open [Google App Passwords](https://myaccount.google.com/apppasswords) (sign in to your account, if necessary).
2. Enter your app name (i.e. `my-first-emitbase-project`), then click Generate.
3. Copy the app password.

## Add credentials to profiles

Open your `profiles.yml`, and add correct credentials:

```yaml
  notifications:
    dev:
      email:
        host: smtp.gmail.com
        port: 587
        user: <your-email-user>
        password: <your-app-password-from-previous-step>
```

The entire `profiles.yml` file will look like this (with your credentials):

```yaml
emitbase:
  databases:
    dev:
      host: <database-host>
      database: <database-name>
      port: <database-port>
      user: <database-username>
      password: <database-password>

  notifications:
    dev:
      email:
        host: smtp.gmail.com
        port: 587
        user: <your-email-user>
        password: <your-app-password-from-previous-step>

  target: dev

```

## Run Emitbase 🚀

If you have everything configured, including [Thresholds](./thresholds.md) and [Notifications](./notifications.md), you can run Emitbase:

```bash
$ docker build -t emitbase .
$ docker run -it emitbase
```
