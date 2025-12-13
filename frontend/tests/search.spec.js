import { test, expect } from "@playwright/test";

test("User can search for a movie and open movie details", async ({ page }) => {
  // 0. Login first
  await page.goto("http://localhost:5173/login");

  await page.fill('input[type="email"]', "tarakachennupati@gmail.com");
  await page.fill('input[type="password"]', "Taraka@123");

  // Must wait for redirect!
  await Promise.all([
    page.waitForNavigation(),
    page.click('button:has-text("Login with Email")'),
  ]);

  // Ensure login succeeded
  await expect(page).toHaveURL("http://localhost:5173/");

  // 1. Go to homepage
  await page.goto("http://localhost:5173");

  // 2. Type search
  const input = page.locator('input[placeholder="Search for a movie..."]');
  await input.fill("Inception");

  // 3. Wait for movie cards
  const firstMovie = page.locator(".movie-card").first();
  await firstMovie.waitFor();

  // 4. Click first movie
  await firstMovie.click();

  // 5. Should open MOVIE DETAILS
  await expect(page).toHaveURL(/movie/);

  // 6. Check for movie title
  const title = await page.textContent("h1");
  expect(title.length).toBeGreaterThan(0);
});
