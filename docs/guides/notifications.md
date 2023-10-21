---
sidebar_position: 2
title: Notifications
---

In the notifications, you define alert messages using two available platforms:  Email and [Slack](https://slack.com/).

```yaml
<id-alert>:
  email:
    from: '<email-from>'
    reciever: '<email-to>'
    message: '<message>'
  slack:
    message: '<message>'
```

:::info

Notifications and [Thresholds](./thresholds.md) are linked with the 'id-alert' identifier. To set up a threshold with the identifier 'first_threshold,' you also need a notification YAML file with the same identifier, 'first_threshold'.

:::

## Example

```bash
first_threshold:
  email:
    from: 'from@company.io'
    reciever: 'to@company.io'
    message: 'Hello mate! 👋 The temperature is too high! Please help! 🔥'
  slack:
    message: 'Hello mate! 👋 The temperature is too high! Please help! 🔥'
```
