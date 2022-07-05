/**
 * Generating Markup from List
 */

const links = [
  { name: "Youtube", url: "http://www.youtube.com" },
  { name: "Fackebook", url: "http://www.facebook.com" },
  { name: "Twitter", url: "http://www.youtube.com" },
  { name: "Linkedin", url: "http://www.linkedin.com" },
  { name: "Instagram", url: "http://www.instagram.com" },
];

let template = `<ul>{{links}}</ul>`;

const linkList = links.reduce((acc, cur) => {
  acc += `<li><a href="${cur.url}">${cur.name}</a></li>`;
  return acc;
}, "");

// Since return a string, so that ->
// template = template.others
template = template.replace("{{links}}", linkList);

console.log(template);
