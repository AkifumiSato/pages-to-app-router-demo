// import { test, expect } from "@playwright/test";
import { test, expect, rest } from "next/experimental/testmode/playwright/msw";

test.use({
  mswHandlers: [
    rest.get("https://dummyjson.com/products/1", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          title: "msw data",
        }),
      );
    }),
  ],
});

test("`dummyjson`より取得したデータが表示されること", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(
    page.getByRole("heading", { name: "Hello world" }),
  ).toBeVisible();
});
