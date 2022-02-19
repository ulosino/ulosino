// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.// Provides access, routing, and sorting to our OS Pages (Markdown format)

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// The location of the operating system Markdown files
// After `content/`, this should match the URL i.e. `ulosino.com/browse`
const OSPageStore = path.join(process.cwd(), "public/content/browse");

// Get OS Pages and sort them by date, newest first
export function getNewestOSPages() {
  const fileNames = fs.readdirSync(OSPageStore);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(OSPageStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get OS Pages and sort them by date, oldest first
export function getOldestOSPages() {
  const fileNames = fs.readdirSync(OSPageStore);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(OSPageStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get OS Pages and sort them in alphabetical order
export function getOSPages() {
  const fileNames = fs.readdirSync(OSPageStore);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(OSPageStore, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
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

export function getDistributionIds() {
  const fileNames = fs.readdirSync(OSPageStore);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}
