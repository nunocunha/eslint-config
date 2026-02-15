# Versioning Strategy

## Overview

This package uses a **semantic versioning scheme that tracks Angular versions**, making it easy to know which version of this config works with your Angular project.

## Version Format: `MAJOR.MINOR.PATCH`

### MAJOR.MINOR → Tracks Angular Version

The major and minor version numbers **match the Angular version** this configuration is designed for:

| Config Version | Angular Version | Description             |
|----------------|-----------------|-------------------------|
| `21.0.x`       | Angular 21.0+   | Config for Angular 21.0 |
| `21.1.x`       | Angular 21.1+   | Config for Angular 21.1 |
| `22.0.x`       | Angular 22.0+   | Config for Angular 22.0 |

### PATCH → Internal Updates

The patch version is used for updates that don't change the target Angular version:

- Bug fixes in rule configurations
- Documentation improvements
- Non-breaking rule adjustments
- Dependency patch updates
- Performance improvements

## Installation Examples

### Install for Angular 21

```bash
# Install specific version
npm install --save-dev @nunocunha/eslint-config@21.0.0

# Install with automatic patch updates (recommended)
npm install --save-dev @nunocunha/eslint-config@^21.0.0

# Install latest Angular 21.x version
npm install --save-dev @nunocunha/eslint-config@~21.0.0
```

### Install for Angular 22 (future)

```bash
npm install --save-dev @nunocunha/eslint-config@^22.0.0
```

## Version Ranges Explained

- `^21.0.0` - Allows: `21.0.x` and `21.1.x`, etc. (all Angular 21 updates)
- `~21.0.0` - Allows: `21.0.x` only (patch updates only)
- `21.0.0` - Exact version (no automatic updates)

**Recommendation**: Use `^21.0.0` to automatically get updates for the entire Angular 21 lifecycle.

## Migration Between Angular Versions

When Angular releases a new major version (e.g., Angular 21 → Angular 22):

1. A new release with a new major version (`22.0.0`) will be created
2. Update your dependencies:
   ```bash
   npm install --save-dev @nunocunha/eslint-config@^22.0.0
   ```
3. Review the changelog for any breaking changes or new rules

## Benefits of This Approach

1. **Clear Compatibility** - Version number tells you exactly which Angular version it supports
2. **Easy Upgrades** - Use `^` to get automatic updates within your Angular version
3. **Predictable** - Major Angular upgrades → Major config upgrades
4. **Safe** - Patch updates only fix bugs, never break compatibility

## Questions?

If you have questions about versioning, please open an issue at:
https://github.com/nunocunha/eslint-config/issues
