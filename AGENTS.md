# AGENTS.md

## Project Overview

This project is a web landing page built primarily with:

* HTML
* CSS
* Vanilla JavaScript
* Three.js for selected 3D/interactive visual components

The project should remain lightweight and browser-focused.

## Core Principles

1. Inspect the existing code before making changes.
2. Prefer modifying existing code over creating duplicate implementations.
3. Do not introduce a framework unless explicitly requested.
4. Do not add npm packages or external dependencies unless explicitly requested.
5. Do not replace working systems with a different technology without approval.
6. Keep changes focused on the requested task.
7. Do not modify unrelated files.
8. Preserve the existing visual design unless the task explicitly requests a redesign.
9. Preserve existing functionality when modifying UI or 3D systems.
10. Never claim that a change was completed unless the corresponding files were actually modified.

## HTML

* Use semantic HTML where practical.
* Preserve the existing DOM structure unless changing it is necessary.
* Keep accessibility in mind.
* Avoid unnecessary inline styles.
* Avoid unnecessary inline JavaScript.
* Preserve existing IDs and classes unless there is a strong reason to change them.
* Check existing JavaScript selectors before renaming IDs or classes.

## CSS

* Inspect the existing stylesheet before adding new styles.
* Reuse existing classes and variables where possible.
* Avoid duplicating CSS rules.
* Prefer CSS variables for repeated values.
* Preserve responsive behavior.
* Test desktop and mobile layouts conceptually after significant changes.
* Do not introduce a CSS framework unless explicitly requested.
* Avoid using `!important` unless there is a specific reason.
* Keep animations performant.

## JavaScript

* Use modern vanilla JavaScript.
* Prefer `const` and `let` over `var`.
* Keep functions focused and reusable.
* Avoid polluting the global namespace.
* Reuse existing utilities before creating new ones.
* Check existing event listeners before adding new ones.
* Avoid unnecessary DOM queries inside animation loops.
* Avoid memory leaks from event listeners, timers, animation loops, and dynamically created objects.
* Do not silently swallow errors.

## Three.js

Three.js is used for selected 3D and interactive visual components.

Do not assume Three.js is used simply because a `models/` directory exists. Confirm actual usage by inspecting source files for:

- Three.js imports or script tags
- `THREE.*` usage
- Scene and camera creation
- Renderer creation
- Lights, materials, and geometries
- GLTF/GLB or other loaders
- Animation loops
- Controls
- Resize handling
- Asset loading
- Resource disposal

Before modifying Three.js code, inspect the existing implementation and preserve its architecture unless the task explicitly requires a change.

### Three.js Architecture Rules

1. Reuse the existing scene, camera, renderer, loaders, and utilities whenever possible.
2. Do not create multiple renderers for the same visual component unless required.
3. Do not create multiple `requestAnimationFrame` loops for the same scene.
4. Preserve existing camera behavior unless explicitly asked to change it.
5. Preserve the existing Three.js version and loading mechanism.
6. Do not replace Three.js with another 3D library unless explicitly requested.
7. Do not add another loader if an existing loader can handle the required asset.
8. Do not load the same model, texture, or other asset repeatedly.
9. Check existing resize handling before adding another resize listener.
10. Check existing controls before adding or replacing interaction systems.

### Three.js Performance

Prioritize:

- Low draw calls
- Reused geometries
- Reused materials
- Appropriate texture resolution
- Efficient animation
- Minimal per-frame allocations
- Efficient asset loading
- Proper GPU resource disposal
- Lazy loading when appropriate
- Appropriate `devicePixelRatio`

Avoid expensive operations inside `requestAnimationFrame`.

Avoid repeatedly allocating objects, geometries, materials, textures, or vectors inside the animation loop when they can be reused.

Bad:

```js
function animate() {
    const vector = new THREE.Vector3();

    // ...
}
```

Prefer:

```js
const vector = new THREE.Vector3();

function animate() {
    // Reuse vector
}
```

## Project Structure

This repository contains multiple web pages and supporting assets.

Known top-level areas include:

- `css/` - CSS stylesheets
- `js/` - JavaScript source
- `images/` - image assets
- `models/` - 3D model assets
- `simplvr/` - SIMPLVR-specific resources/source
- `doc/` - documentation
- `documents/` - supporting documents

Important HTML pages include:

- `index.html`
- `simplvr.html`
- `styles.html`
- `PrivacyPolicy_Acaraki.html`

Do not assume the exact contents or responsibilities of these files without inspecting them.

## Asset Inspection

Do not attempt to read binary assets as source code.

For images and 3D models, inspect:

- filename
- extension
- file size
- references from source code

Only inspect the actual contents of a binary asset when a task specifically requires it.

For 3D assets such as `.glb`, `.gltf`, `.fbx`, or similar formats, inspect source references and loading code first.

## Project Discovery

When asked to inspect the project:

1. Inspect the directory structure.
2. Identify source files.
3. Read relevant source files.
4. Trace dependencies and asset references.
5. Only then produce architectural conclusions.

Do not infer architecture solely from filenames, AGENTS.md, or user-provided descriptions.

## Multi-Page Architecture

Treat each HTML page as a potentially independent entry point.

Before changing shared CSS or JavaScript, determine which HTML pages reference it.

Before renaming or removing a CSS class, JavaScript function, ID, or asset, search the entire project for references.

## External Dependencies

Identify all external dependencies actually used by the project.

Examples include:

- Three.js
- GLTFLoader
- OrbitControls
- Google Fonts
- external JavaScript libraries
- CDN-hosted libraries
- external APIs

Do not add or remove dependencies without explicit instruction.

## Assets

Before adding a new asset:

1. Search the existing project directories first.
2. Check `images/`, `models/`, `simplvr/`, and other relevant asset directories.
3. Check whether an equivalent asset already exists.
4. Reuse existing assets whenever practical.
5. Do not download external assets unless explicitly requested.
6. Do not replace existing assets without confirmation.

Respect existing asset paths and filenames.

## External Resources

Do not introduce external CDNs, APIs, fonts, libraries, images, or other resources unless explicitly requested.

If an external resource already exists in the project, preserve it unless there is a technical reason to change it.

## Editing Workflow

For every non-trivial task:

1. Inspect the relevant files.
2. Understand the existing implementation.
3. Identify dependencies between files.
4. Make the smallest reasonable change.
5. Inspect the resulting code.
6. Check for obvious syntax errors.
7. Check references to modified IDs, classes, functions, and assets.
8. Report exactly what changed.

## Verification

After modifying code:

* Check HTML structure.
* Check JavaScript syntax.
* Check CSS syntax.
* Check asset paths.
* Check DOM selectors.
* Check Three.js initialization.
* Check browser console risks.
* Check responsive behavior for UI changes.
* Check for duplicated event listeners or animation loops.

If a browser or build/test tool is available, use it.

If no browser automation or test environment is available, clearly state that the changes were statically inspected rather than browser-tested.

## Tool Usage

When a task requires information about the project, use filesystem tools to inspect the actual files.

Do not answer based solely on:
- AGENTS.md
- filenames
- previous conversation context
- assumptions
- generic programming knowledge

If the user asks to inspect, analyze, find, verify, or modify something in the repository, inspect the relevant files first.

When the user explicitly says "do not modify anything", do not use tools that modify files.

Never claim that a file contains something unless the file was actually inspected.

## Git

Before making a large change:

* Inspect the current Git status.
* Avoid overwriting unrelated uncommitted changes.
* Keep commits conceptually focused when commits are requested.

Never reset, revert, or delete user changes unless explicitly instructed.

## Communication

When completing a task, report:

1. Files changed.
2. What was changed.
3. Important implementation decisions.
4. Verification performed.
5. Any remaining limitations.

Do not provide fictional test results.

## Context Efficiency

Do not read the entire repository indiscriminately.

For large tasks:

1. Start with directory structure.
2. Identify relevant files.
3. Read only files relevant to the task.
4. Trace references when necessary.
5. Avoid reading large binary files as text.
6. Avoid dumping large files into the conversation when a targeted inspection is sufficient.

Prefer targeted inspection over exhaustive file reading.

## Large HTML Files

Some HTML files may contain substantial inline CSS or JavaScript.

Before modifying a large HTML file:

1. Identify its major sections.
2. Locate relevant IDs, classes, scripts, and styles.
3. Read only the relevant portions when possible.
4. Avoid rewriting the entire file for a localized change.

## Terminal and Filesystem

Use terminal/filesystem tools for repository inspection.

Prefer read-only commands for inspection:
- pwd
- ls
- find
- grep
- rg
- cat
- sed
- head
- tail
- git status
- git diff

Do not use commands that modify files during inspection.

Before modifying a file, identify the exact file and relevant section.

After modification, inspect the diff.

After modifying files:
1. Run git diff for modified files.
2. Verify that only intended changes were made.
3. Do not revert unrelated user changes.

## Safety Rules

Never:

* Delete project files without explicit instruction.
* Rewrite the entire project unnecessarily.
* Replace Three.js architecture without approval.
* Install dependencies without approval.
* Change deployment configuration without approval.
* Modify unrelated files.
* Expose API keys or secrets.
* Commit secrets to Git.

When uncertain about a potentially destructive change, ask before proceeding.
