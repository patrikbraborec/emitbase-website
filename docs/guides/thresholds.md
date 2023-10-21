---
sidebar_position: 1
title: Thresholds
---

In the thresholds, you define the logic of alerts using two available methods: SQL and CRON.

```yaml
<id-alert>:
  expression: '<SQL>'
  cron: '<CRON>'
```

:::info

Thresholds and [Notifications](./notifications.md) are linked with the 'id-alert' identifier. To set up a threshold with the identifier 'first_threshold,' you also need a notification YAML file with the same identifier, 'first_threshold'.

:::

## Example

```yaml
first_threshold:
  expression: 'select * from metrics where temp > 30'
  cron: '*/5 * * * *'
```