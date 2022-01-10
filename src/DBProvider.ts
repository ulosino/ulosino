// Provides access, routing, and sorting to our Database Content (currently only OS Pages)

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dStore = path.join(process.cwd(), "public/content/browse");

export function getNewestDistributions() {
  const fileNames = fs.readdirSync(dStore);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(dStore, fileName);
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

export function getOldestDistributions() {
  const fileNames = fs.readdirSync(dStore);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(dStore, fileName);
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

export function getDistributions() {
  const fileNames = fs.readdirSync(dStore);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(dStore, fileName);
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
  const fileNames = fs.readdirSync(dStore);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}
