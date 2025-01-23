import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Julian Bollig",
    // In the following files you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Heard about it in the SWE but not really familiar with it."],
    // Which CI/CD tools do you use in your project?
    tools: "Github and Confluence mostly.",
    // What do you want to learn in this workshop?
    expectations: ["What other tools to use and in general a better understanding."],
  },
});
