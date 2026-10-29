# Collaborators section — QA report

## Done
- Workflow section removed from Home Page Design; Trusted by / Collaborators section added before the final CTA.
- 40 logos (Government 13, Industry 13, Academia 14) cropped from the supplied board and converted to white transparent PNGs in `assets/logos/<category>/`. Manifest: `assets/logos/logos.json`.
- Every logo on the board is shown in its category. No cards, captions or placeholders.
- Auto-rotation Government → Industry → Academia, 4 s each, with a progress line on the active button.
- Hover on the selector pauses; click activates immediately and holds for 6 s, then rotation resumes. Rotation pauses when the tab is hidden or the section is off screen.
- Keyboard: arrow keys, Home and End move between categories (tablist semantics, visible focus).
- Reduced motion: no auto-rotation, no fades; categories switch on click.
- Grid height is fixed to the largest category so the section does not jump.

## Limitations
- Logos were not downloaded from official sources. This environment can read web pages as text but cannot save image files from them, so the board was the only usable source.
- 4 marks are unidentified (see Missing and Unverified Logos).
- Relationship claims come from the supplied board and have not been independently checked.
