# Landing Page Specification

## ADDED Requirements

### Requirement: Hero Section with Group Logo

The landing page SHALL display a prominent hero section featuring the Group Company logo centered with high visual impact and large size.

#### Scenario: 4K Desktop view

- **WHEN** user views the page on 4K screen (>1920px)
- **THEN** the logo is displayed at max-width 450px, centered, with generous spacing (80px padding)

#### Scenario: Desktop view

- **WHEN** user views the page on desktop (1024px - 1920px)
- **THEN** the logo is displayed at max-width 300px, centered, with generous spacing (60px padding)

#### Scenario: Tablet view

- **WHEN** user views the page on tablet (768px - 1024px)
- **THEN** the logo is displayed at max-width 250px, centered, with medium spacing (50px padding)

#### Scenario: Mobile view

- **WHEN** user views the page on mobile (<640px)
- **THEN** the logo is displayed at max-width 180px, centered, with reduced spacing (30px padding)

#### Scenario: Extra small mobile view

- **WHEN** user views the page on extra small screen (<480px)
- **THEN** the logo is displayed at max-width 150px, centered, with compact spacing (25px padding)

### Requirement: Sub-Company Slider

The landing page SHALL display an auto-playing slider/carousel showcasing 5 sub-companies with their logos and names only (no descriptions).

#### Scenario: Slider content display

- **WHEN** a slide is active
- **THEN** it displays the sub-company circular logo centered with company name below

#### Scenario: Auto-play functionality

- **WHEN** the page loads
- **THEN** the slider automatically advances every 5 seconds with smooth transition

#### Scenario: Infinite loop

- **WHEN** the slider reaches the last slide and advances
- **THEN** it loops back to the first slide seamlessly

### Requirement: Slider Navigation Controls

The slider SHALL provide multiple navigation methods including arrows, dots, keyboard, and touch gestures.

#### Scenario: Arrow navigation

- **WHEN** user clicks the previous/next arrow
- **THEN** the slider navigates to the corresponding slide with visual feedback on hover

#### Scenario: Dot indicator navigation

- **WHEN** user clicks a dot indicator
- **THEN** the slider navigates to the corresponding slide and highlights the active dot

#### Scenario: Keyboard navigation

- **WHEN** user presses left/right arrow keys while slider is focused
- **THEN** the slider navigates to the previous/next slide

#### Scenario: Touch swipe navigation

- **WHEN** user swipes left/right on mobile device
- **THEN** the slider navigates to the next/previous slide

### Requirement: Pause on Interaction

The slider auto-play SHALL pause when user interacts with the slider.

#### Scenario: Pause on hover (desktop)

- **WHEN** user hovers over the slider on desktop
- **THEN** auto-play pauses and resumes when hover ends

#### Scenario: Pause on touch (mobile)

- **WHEN** user touches the slider on mobile
- **THEN** auto-play pauses temporarily

### Requirement: Responsive Layout

The landing page SHALL adapt its layout across 5 responsive breakpoints.

#### Scenario: Desktop layout (>1024px)

- **WHEN** viewport width exceeds 1024px
- **THEN** slider displays side-by-side layout (image left, text right) with generous spacing

#### Scenario: Tablet layout (768px - 1024px)

- **WHEN** viewport width is between 768px and 1024px
- **THEN** slider maintains side-by-side layout with reduced padding and font sizes

#### Scenario: Mobile Large layout (640px - 767px)

- **WHEN** viewport width is between 640px and 767px
- **THEN** slider displays stacked layout (image above, text below) with centered content

#### Scenario: Mobile Small layout (480px - 639px)

- **WHEN** viewport width is between 480px and 639px
- **THEN** slider displays compact layout with minimal spacing

#### Scenario: Extra Small layout (<480px)

- **WHEN** viewport width is below 480px
- **THEN** slider displays ultra-compact layout with smaller but readable fonts

### Requirement: No Horizontal Overflow

The landing page SHALL NOT produce horizontal scrollbars on any viewport size.

#### Scenario: All breakpoints

- **WHEN** user views the page on any device width
- **THEN** all content fits within the viewport without horizontal scroll

### Requirement: Accessibility Compliance

The landing page SHALL meet accessibility standards including ARIA labels, keyboard navigation, and proper color contrast.

#### Scenario: ARIA labels for navigation

- **WHEN** screen reader encounters navigation arrows
- **THEN** it announces "Previous slide" and "Next slide" respectively

#### Scenario: Focus management

- **WHEN** user navigates using keyboard
- **THEN** focus indicators are visible on interactive elements

#### Scenario: Color contrast

- **WHEN** text is displayed on any background
- **THEN** the contrast ratio meets or exceeds 4.5:1

### Requirement: Visual Design Standards

The landing page SHALL follow the specified color scheme, typography, and spacing guidelines.

#### Scenario: Color scheme application

- **WHEN** the page renders
- **THEN** primary blue (#2563eb), dark navy (#0f172a), light gray background (#f8fafc), and white accents are used consistently

#### Scenario: Typography application

- **WHEN** text elements render
- **THEN** Poppins or Inter font family is applied with appropriate weights (400, 500, 600, 700)

### Requirement: Smooth Transitions

The slider SHALL use smooth animations without visual flicker.

#### Scenario: Slide transition

- **WHEN** slider changes slides
- **THEN** transition is smooth (fade or slide effect) with 300-500ms duration and easing function

#### Scenario: Interactive feedback

- **WHEN** user hovers or focuses on buttons and controls
- **THEN** subtle visual feedback is provided through transitions
