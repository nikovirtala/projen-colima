# projen-colima

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
