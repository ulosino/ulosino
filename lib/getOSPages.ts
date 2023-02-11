// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Provides access, routing, and sorting to our OS Pages (Markdown format)

// Markdown processing libraries
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// The location of the operating system Markdown files
// After `markdown/`, this should match the URL i.e. `ulosino.com/browse`
const OSPageStore = path.join(process.cwd(), "public/markdown/browse");

export default function getOSPages() {
  const fileNames = fs.readdirSync(OSPageStore);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(OSPageStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
}
