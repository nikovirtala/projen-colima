# Product Overview

This is a projen component that adds Colima (container runtime) support to projen projects.

## Purpose

Provides a reusable component that:
- Automatically installs Colima and Docker via Homebrew
- Creates a task to manage Colima startup
- Integrates seamlessly with projen project configurations

## Target Users

Developers using projen to manage their project configurations who need Colima for container runtime on macOS.

## Key Features

- Single-line integration: `new Colima(project)`
- Automatic dependency management through Homebrew
- Task creation for starting Colima when needed
