const test = require("node:test");
const assert = require("node:assert");

test("Application HTML file should exist", () => {
    const fs = require("fs");

    assert.strictEqual(
        fs.existsSync("public/index.html"),
        true
    );
});

test("Application should contain CI/CD heading", () => {
    const fs = require("fs");

    const content = fs.readFileSync(
        "public/index.html",
        "utf8"
    );

    assert.ok(
        content.includes("Welcome to CI/CD Pipeline!")
    );
});
