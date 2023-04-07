---
sidebar_label: Drone
title: Drone
description: How to install Drone on Easypanel? 1-Click installation template for Drone on Easypanel
---

<!-- generated -->

1-Click installation template for Drone on Easypanel

## Description

Drone is a Container-Native, Continuous Delivery Platform

## Links

- [Website](https://drone.io/)
- [Documentation](https://github.com/harness/drone#setup-documentation)
- [Github](https://github.com/harness/drone)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | drone
App Service Image | - | yes | drone/drone:2.16.0
Runner Service Name | - | yes | drone-runner
Runner Service Image | - | yes | drone/drone-runner-docker:1.8.3
GitHub OAuth Client ID | - | yes | 
GitHub OAuth Client Secret | - | yes | secret
RPC Host | - | yes | 
RPC Protocol | - | yes | https
Install Runner Service | - | no | false
Capacity for runner if enabled | - | no | 2

## Screenshots

![Drone Screenshot](./assets/screenshot.png)

## Change Log

- 2022-08-04 – first release

## Contributors

- [Ivan Ryan](https://github.com/ivanonpc-22)
