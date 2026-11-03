const fs = require("fs");

if (!fs.existsSync("public/index.html")) {
    throw new Error("Application HTML file not found");
}

fs.rmSync("dist", { recursive: true, force: true });

fs.mkdirSync("dist", { recursive: true });

fs.copyFileSync(
    "public/index.html",
    "dist/index.html"
);

console.log("Application built successfully!");
