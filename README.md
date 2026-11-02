# projen-colima

> [!WARNING]
> **This package is deprecated** and won't get new features or fixes. Use [`@nikovirtala/projen-constructs`](https://github.com/nikovirtala/projen-constructs) instead.
>
> Replace the dev dependency `@nikovirtala/projen-colima` with `@nikovirtala/projen-constructs`, then change the import:
>
> ```typescript
> import { Colima } from "@nikovirtala/projen-constructs";
> ```
>
> See the [migration guide](https://github.com/nikovirtala/projen-constructs#migrating-from-the-standalone-packages) for the steps and the differences to expect.

Colima component for projen projects.

## Installation

```bash
npm install @nikovirtala/projen-colima
```

## Usage

Add the Colima component to your projen project:

```typescript
import { Colima } from "@nikovirtala/projen-colima";
import { javascript } from "projen";

const project = new javascript.NodeProject({
    name: "my-project",
    defaultReleaseBranch: "main",
});

new Colima(project);

project.synth();
```

## Features

- Automatically installs Colima and Docker via Homebrew
- Creates task to manage Colima

## Tasks

The component creates the following task:

- `colima` - Starts Colima if not already running

## License

MIT
