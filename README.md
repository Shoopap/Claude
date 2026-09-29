# Neuro Lockdown

A **hybrid** escape room for **Project #1: Choice Board for the Brain**. Players are shrunk to the size of a cell and trapped inside the brain of Maya, a 7th grader, the night before her science test. They move around the classroom solving hands-on puzzles at paper stations, open six real locks on the **Brain Box**, and use one laptop, the **Brain Terminal**, for the two puzzles that need sound and timing.

It is mostly physical on purpose: players wire yarn through a thalamus, carry a code across the room in their memory, match neurotransmitter tokens to situations, and hunt for a key hidden in a "vesicle." The laptop only does what paper can't.

## What's here

| File | What it is |
|---|---|
| `Neuro-Lockdown-Print-Kit.pdf` | **Start here.** 16-page printable kit: game master overview, supply list, setup checklist, answer key, station pages, cut-out cards, poster, labels, lock tags and a student worksheet. |
| `index.html` | The Brain Terminal. Open it in Chrome/Edge/Safari on a laptop or Chromebook and choose **Classroom: Brain Terminal + printed kit**. It also has an all-digital mode for practice or as a backup. |
| `print-kit/` | Source for the PDF (`kit.html`). Edit it, then run `node render.js` with Playwright to rebuild the PDF. |

## How the room works

| Where | Region | Puzzle | Opens |
|---|---|---|---|
| Station 1 (paper) | Brainstem | Pick the right fuel card, then read the supply report | 4-digit lock |
| Station 2 (paper) | Thalamus | Run yarn from each sense through the thalamus to the right lobe; the directions spell the code | Directional lock |
| Station 3 (paper) | Hypothalamus | Match body alerts to homeostasis responses; the letters spell a word | 5-letter word lock |
| Station 4 (paper) | Hippocampus | Memory relay: carry numbers from a poster across the room, no writing | 4-digit lock |
| Station 5 (paper) | Limbic system | Pick the 4 real limbic structures and add their numbers | 3-digit lock |
| Brain Terminal | Amygdala + Temporal lobes | Calm a live stress alarm with slow breathing, then tune a radio by ear | Synapse pouch (3-digit lock) |
| Station 6 (in pouch) | Neurotransmitters | Match dopamine/serotonin/GABA to situations; the decoder names where the key is hidden | Keyed padlock |
| Brain Box | Frontal lobe | Unscramble the letter tiles, resist the red "INSTANT ESCAPE" envelope, type the override at the terminal | Escape! |

All 12 primary terms (frontal lobe, temporal lobes, brainstem, limbic system, thalamus, hypothalamus, hippocampus, amygdala, neurotransmitters, dopamine, serotonin, GABA) and all 6 supporting terms (water, stress, mindfulness, memory, oxygen, glucose) are taught in the field notes and used in a puzzle. The Neuro Log worksheet has players record what they learn at each station.

## Game master quick key

Keep this away from players. The full key and hint script are on page 3 of the kit.

| Lock | Code |
|---|---|
| Brainstem | `2075` |
| Thalamus | `→ ↑ ↓ ←` |
| Hypothalamus | `FOCUS` |
| Hippocampus | `3816` |
| Limbic system | `587` |
| Synapse pouch (from terminal) | `862` (terminal password: `WERNICKE`) |
| Key | hidden in the container labeled **VESICLE** |
| Final override | `LEARNING` |

**Budget:** about $35–50 for locks, a 6-hole lockout hasp and a pouch, all reusable. The kit also has a $0 envelope option that needs no locks.
