# TODO: Fix Stats and Remove Live Demo Button

## Phase 1: Remove Button
- [x] Remove "See Revenue Impact Live" button from hero section
- [x] Keep only "Watch 3-Minute Demo" button

## Phase 2: Add Asterisks and Disclaimer
- [x] Add asterisk to +34% stat (already present)
- [x] Add asterisk to +$127 stat (already present)
- [x] Add asterisk to -89% stat (already present)
- [x] Add "*Your results will vary" disclaimer at bottom of Why CounterPro section (already present)

## Phase 3: Fix Alignment
- [x] Align small stat bubbles inside big cards properly (already correctly aligned with mx-auto, text-center, mt-auto)
- [x] Ensure consistent spacing and centering (all cards use flex flex-col with proper centering)

## Phase 4: Testing
- [x] Test all changes in browser (verified: button removed, asterisks present, disclaimer visible, alignment correct)
- [x] Create checkpoint (version 1c75fab7)

# TODO: Change Hero Button to Join Waitlist

## Phase 1: Update Button
- [x] Change "Watch 3-Minute Demo" button text to "Join the Waitlist"
- [x] Update button onClick to open waitlist form modal (setWaitlistOpen(true))
- [x] Ensure button styling matches the waitlist CTA at bottom (same className and glow-blue effect)

## Phase 2: Testing
- [x] Test button opens waitlist form (verified: modal opens with all fields)
- [x] Create checkpoint (version 260947af)

# TODO: Update Eyebrow Text

## Phase 1: Update Text
- [x] Change "For Wholesale & Industrial Distributors" to "For Wholesalers & Distributors"

## Phase 2: Testing
- [x] Verify text change in browser (confirmed: "For Wholesalers & Distributors")
- [x] Create checkpoint (version aa8acb13)

# TODO: Fix Revenue Cards Grid Layout

## Phase 1: Restore Grid Layout
- [ ] Change revenue cards from full-width stacked to 3-column grid (md:grid-cols-2 lg:grid-cols-3)
- [ ] Ensure responsive: 1 column mobile, 2 columns tablet, 3 columns desktop

## Phase 2: Testing
- [ ] Test layout on desktop view
- [ ] Verify mobile responsiveness
- [ ] Create checkpoint

# TODO: Fix Waitlist Form Validation and Checkbox Visibility

## Phase 1: Update Form
- [x] Change website validation to accept any domain extension (already accepts all - uses type="url")
- [x] Add white border/background to unchecked SMS consent checkbox for visibility (added bg-white and border-2)

## Phase 2: Testing
- [x] Test website field accepts various extensions (tested with .io - works perfectly)
- [x] Verify checkbox is visible when unchecked (white background with border-2 visible)
- [x] Create checkpoint (version 295de610)

# TODO: Remove All Remaining Frank References

## Phase 1: Search
- [ ] Search codebase for "Frank" references
- [ ] Search codebase for "frank" references (lowercase)

## Phase 2: Replace
- [ ] Replace all found references with CounterPro.ai or Connor

## Phase 3: Testing
- [ ] Verify all changes
- [ ] Create checkpoint

# TODO: Push Updates to GitHub

## Phase 1: Git Operations
- [ ] Check git status
- [ ] Add all changes
- [ ] Commit with message
- [ ] Push to GitHub

## Phase 2: Verification
- [ ] Verify push succeeded
- [ ] Confirm with user
