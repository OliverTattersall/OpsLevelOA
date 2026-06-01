# Take Home Todo List

## Problem Description

Working for a startup, I often find that I have a wide variety of things to complete. Rather than buying software, I'd prefer to have a simple application where I can create a list of items I need to complete.

This is essentially a **TODO List application**. Build a simple implementation based on the requirements below.

---

## Requirements

### Core functionality

- **Create** new todo items
- **Delete** existing todo items
- **List** all current todo items

### Priority system

- Each item must be assigned a **positive integer** priority when created
- **Lower integer = higher priority** (e.g., priority `2` is higher priority than priority `5`)
- Duplicate priorities are allowed (multiple items can share the same priority)

### Missing priorities

The application must show all priority values that are **not currently assigned** to any todo item. This helps decide what priority to assign to new tasks.

**Example:**

| Current item priorities | Missing priorities        |
| ----------------------- | ------------------------- |
| 1, 3, 5, 5, 7, 12       | 2, 4, 6, 8, 9, 10, 11     |

If the item with priority `12` is deleted, the missing priorities become: **2, 4, 6, 8, 9, 10, 11**.

---

## Assumptions

- **No persistence required** — storing items in memory is fine
- **Interactive UI** — users should interact with the todo list through some form of interface
- **Language/framework** — use whatever you are most comfortable with

---

## Implementation checklist

- [ ] Create todo items with a positive integer priority
- [ ] Delete todo items
- [ ] List all todo items
- [ ] Display missing priorities (gaps in the priority range)
- [ ] Interactive UI
- [ ] In-memory storage only
