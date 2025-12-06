# Technology Stack

## ⚠️ Projen-Managed Project

This project is **entirely managed by projen**. Key implications:

- **DO NOT** manually edit generated files (package.json, tsconfig.json, etc.)
- **ALL** configuration changes must be made in `.projenrc.ts`
- After modifying `.projenrc.ts`, run `npx projen` to regenerate files
- Dependencies, scripts, and tooling are defined in `.projenrc.ts`, not package.json

## Build System

- **projen**: Project configuration and build orchestration
- **JSII**: Multi-language library compilation (TypeScript to other languages)
- **TypeScript**: 5.9.3

## Package Management

- **pnpm**: Package manager (version 10)
- **Node.js**: >= 22.21.1 (managed via mise)

## Code Quality

- **Biome**: Formatter and linter (replaces ESLint/Prettier)
  - 4-space indentation
  - 120 character line width
  - Organize imports on save

## Testing

- **Vitest**: Test framework (version 4)
- **@vitest/coverage-v8**: Coverage reporting

## Dependencies

- **projen**: Core dependency for component integration
- **constructs**: Peer dependency for component tree
- **@nikovirtala/projen-homebrew**: Homebrew package management

## Common Commands

```bash
# Build the project
npm run build

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Update test snapshots
npm run test:update

# Format and lint code
npm run biome

# Compile TypeScript
npm run compile

# Generate API documentation
npm run docgen

# Run all projen tasks
npm run default

# Upgrade dependencies
npm run upgrade

# Create a release
npm run release
```

## Development Workflow

1. Modify `.projenrc.ts` for project configuration changes
2. Run `npx projen` to regenerate project files
3. Write code in `src/` directory
4. Write tests in `test/` directory
5. Run `npm run build` to compile and test
