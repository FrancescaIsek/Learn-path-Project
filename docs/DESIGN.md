# LearnPath design notes

## Fonts (Notion's)
- **Inter** (variable): everything. Headlines 700 with tight tracking (-0.045em to -0.05em), UI 500-600, body 400.
- **iA Writer Mono**: small uppercase labels only (`.label` in `globals.css`), letter-spacing 0.08em.
- Fallback stack is Notion's own system stack (see `tailwind.config.js`).

## Colour
| Token | Hex | Use |
|---|---|---|
| paper | #F6F0E4 | page background |
| surface | #FBF7EF | cards, composer |
| sand | #EFE6D6 | wells, panels |
| line | #E2D7C3 | borders |
| ink / ink-2 / ink-3 | #1C1815 / #5F564B / #978D7E | text, primary button |
| ember | #E8452C (tint #FBE1D9) | "you are here", the one highlighted phrase, progress |
| cobalt, pine, marigold, blush, tangerine, ink | | topic colours: **one per path** (cover + card art) |

The rainbow gradient edge (`.edge`) is reserved for the composer and the header dock only.
Rough balance: 72% paper/surface, 14% ink, 10% topic colour, 4% ember.

## Shape and spacing
Radii: 22 tile art, 26 cards, 34 composer/wells, 42 cover, pills for buttons and chips.
Content width 1136 max; path column ~750; outline rail 270. 16px between cards, generous section gaps.

## Interaction rules
1. The composer is a sentence; the button stays disabled until 3+ characters.
2. On submit the hero disappears and the composer becomes a capsule (`Dock`) in the header.
3. Build steps advance on the left; topic cards land one by one on the right (skeletons for the rest).
4. Then route to the path: the first unfinished topic is expanded, everything else is a quiet card.
5. Too-broad words (see `BROAD_TOPICS`) show suggestions first, with "try anyway".
6. `prefers-reduced-motion` is respected globally.
