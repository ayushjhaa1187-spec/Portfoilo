from playwright.sync_api import sync_playwright

def verify_navbar_accessibility():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        # Create a new context with a mobile viewport to trigger the hamburger menu
        context = browser.new_context(viewport={'width': 375, 'height': 667})
        page = context.new_page()

        print("Navigating to home page...")
        page.goto("http://localhost:3000")

        # Wait for the mobile menu button to be visible
        print("Waiting for mobile menu button...")
        menu_button = page.locator("button[aria-label='Toggle menu']")
        menu_button.wait_for(state="visible")

        # Check accessibility attributes
        print("Verifying accessibility attributes...")
        aria_label = menu_button.get_attribute("aria-label")
        aria_expanded = menu_button.get_attribute("aria-expanded")
        aria_controls = menu_button.get_attribute("aria-controls")

        print(f"aria-label: {aria_label}")
        print(f"aria-expanded: {aria_expanded}")
        print(f"aria-controls: {aria_controls}")

        if aria_label != "Toggle menu":
            print("ERROR: Incorrect aria-label")
        if aria_expanded != "false":
            print("ERROR: Incorrect aria-expanded state (should be false initially)")
        if aria_controls != "mobile-menu":
            print("ERROR: Incorrect aria-controls")

        # Take a screenshot of the initial state
        page.screenshot(path="/home/jules/verification/navbar_mobile_closed.png")
        print("Screenshot taken: navbar_mobile_closed.png")

        # Click the button to open the menu
        print("Clicking menu button...")
        menu_button.click()

        # Check aria-expanded after click
        aria_expanded_after = menu_button.get_attribute("aria-expanded")
        print(f"aria-expanded (after click): {aria_expanded_after}")

        if aria_expanded_after != "true":
             print("ERROR: Incorrect aria-expanded state (should be true after click)")

        # Check if the menu is visible
        mobile_menu = page.locator("#mobile-menu")
        if mobile_menu.is_visible():
            print("Mobile menu is visible.")
        else:
            print("ERROR: Mobile menu is NOT visible.")

        # Take a screenshot of the open state
        page.screenshot(path="/home/jules/verification/navbar_mobile_open.png")
        print("Screenshot taken: navbar_mobile_open.png")

        browser.close()

if __name__ == "__main__":
    verify_navbar_accessibility()
