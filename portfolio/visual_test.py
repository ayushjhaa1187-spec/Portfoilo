import time
from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        # Create context with video recording and mobile viewport
        context = browser.new_context(
            viewport={"width": 375, "height": 812},
            record_video_dir="/app/portfolio/videos/"
        )
        page = context.new_page()

        print("Navigating to http://localhost:3000...")
        page.goto("http://localhost:3000")
        page.wait_for_load_state('load')
        time.sleep(3) # Wait for initial animations

        # Scroll down to ensure all Framer Motion components trigger their whileInView animations
        print("Scrolling...")
        page.evaluate('window.scrollBy(0, 1000)')
        time.sleep(2)
        page.evaluate('window.scrollBy(0, 1000)')
        time.sleep(2)
        page.evaluate('window.scrollBy(0, 1000)')
        time.sleep(2)

        # Take a screenshot
        print("Capturing screenshot...")
        page.screenshot(path="/app/portfolio/screenshot.png", full_page=True)

        context.close()
        browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    main()
