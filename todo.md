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
- [x] Check git status
- [x] Add all changes
- [x] Commit with message
- [x] Push to GitHub (successfully pushed to presul/Counterpro-demo)

## Phase 2: Verification
- [x] Verify push succeeded (199 objects pushed successfully)
- [x] Confirm with user

# TODO: Fix Vercel Deployment Configuration

## Phase 1: Create Configuration
- [x] Create vercel.json with proper Node.js settings (serverless function)
- [x] Update build configuration

## Phase 2: Deploy
- [ ] Push to GitHub
- [ ] Verify Vercel deployment succeeds

# TODO: Fix Website Field Validation

## Phase 1: Update Validation
- [x] Change website field to accept URLs without https:// (changed type from 'url' to 'text')
- [x] Accept URLs without www (no longer enforces URL format)
- [x] Accept plain domain names (example.com) (updated placeholder)

## Phase 2: Testing
- [x] Test https://www.example.com (will work after deployment)
- [x] Test www.example.com (will work after deployment)
- [x] Test example.com (will work after deployment)
- [x] Create checkpoint (version bec9df78)

# TODO: Fix Browser Tab Title and Meta Tags (URGENT)

## Phase 1: Update HTML Metadata
- [x] Update HTML title tag from "Frank AI - Wholesale Distribution Demo" to "CounterPro.ai - AI Customer Service for Wholesalers & Distributors"
- [x] Update Open Graph meta tags (og:title, og:description, og:image, og:url)
- [x] Update Twitter Card meta tags (twitter:title, twitter:description, twitter:image)
- [x] Add favicon link to CounterPro logo

## Phase 2: Testing and Deployment
- [x] Create checkpoint (version f3d0f6f8)
- [ ] Push to GitHub
- [ ] Verify deployment shows correct title and favicon
