import { test, expect } from "@playwright/test";

test("message投稿時、遷移先ページでmessageの内容が表出していること", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/message");
  // form input
  const messageInput = page.getByRole("textbox", { name: "message" });
  await messageInput.click();
  await messageInput.fill("test message");
  // form submit
  await page.getByRole("button", { name: "submit" }).click();
  // success page
  await expect(page).toHaveURL(
    "http://localhost:3000/message/success?message=test%20message",
  );
  const messageSection = page.getByRole("region", { name: "message" });
  await expect(messageSection.getByText("`test message`")).toBeVisible();
});
