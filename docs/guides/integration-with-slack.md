---
sidebar_position: 4
title: Integration with slack
---

If you have defined [Thresholds](./thresholds.md) and want to send slack messages in [Notificatioms](./notifications.md), here is a simple guide.

## Create Slack App

For sending messages to Slack, you must create a Slack App:

1. Open Slack Apps.
2. Click 'Create an App' and select the 'From scratch' option.
3. Enter your App Name (e.g., `my-first-emitbase-project`).
4. Select your workspace.
5. Click 'Create App'.

## Configure permissions

You need to configure the proper permissions to send Slack messages from Emitbase:

1. Open OAuth & Permissions (you can find it in the left menu).
2. Scroll down to Bot Token Scopes.
3. Add the `chat:write` scope.

## Install Slack App to your workspace

1. Open Basic Information in the left menu.
2. Click on Install to Workspace in the Building Apps for Slack section.

## Add credentials to profiles

Open your `profiles.yml`, and add correct credentials:

```yaml
  notifications:
    dev:
      slack:
        port: 3000
        channel: <your-slack-channel>
        signingSecret: <your-signing-secret>
        token: <your-token>
```

- `channel`: To find the Channel ID, click on your channel, e.g., `#general`, and a modal window will open. You can locate the Channel ID at the bottom.
- `signingSecret`: You can find the signingSecret in the Basic Information menu under the App Credentials section.
- `token`: You can find the token in the OAuth & Permissions menu under the OAuth Tokens for Your Workspace section.

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
      slack:
        port: 3000
        channel: <your-slack-channel>
        signingSecret: <your-signing-secret>
        token: <your-token>

  target: dev

```

## Add Slack App to your channel

1. Click on your channel, for example, `#general``, to open the modal window.
2. Open the Integrations tab.
3. Click Add an App.
4. Add the Slack App you just created.

## Run Emitbase 🚀

If you have everything configured, including [Thresholds](./thresholds.md) and [Notifications](./notifications.md), you can run Emitbase:

```bash
$ docker build -t emitbase .
$ docker run -it emitbase
```
