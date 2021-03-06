"use strict";

const printer = require("./printer-markdown");
const options = require("./options");
const languageExtend = require("../utils/language-extend");

const languages = [
  languageExtend({}, require("linguist-languages/data/markdown"), {
    since: "1.8.0",
    parsers: ["remark"],
    filenames: ["README"],
    vscodeLanguageIds: ["markdown"]
  }),
  {
    name: "MDX",
    since: "1.15.0",
    parsers: ["mdx"],
    extensions: [".mdx"],
    vscodeLanguageIds: ["mdx"]
  }
];

const printers = {
  mdast: printer
};

module.exports = {
  languages,
  options,
  printers
};
