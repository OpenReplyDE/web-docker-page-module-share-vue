import { App as VueApp, createApp } from "vue";

import App from "./App.vue";
import "./style.css";
const elementName = "page-module-share-vue";
class PageModuleShareVue extends HTMLElement {
  private app: VueApp | null = null;
  private mountPoint: HTMLElement | null = null;

  connectedCallback() {
    this.mountPoint = document.querySelector(elementName);
    this.setup();
  }

  setup() {
    if (this.app) this.app.unmount();

    if (this.mountPoint) {
      this.app = createApp(App);
      this.app.mount(this.mountPoint);
      console.log("page-module-share-vue: Mounted");
    } else {
      console.log("page-module-share-vue: Mount point not found");
    }
  }
}

if (!window.customElements.get(elementName)) {
  window.customElements.define(elementName, PageModuleShareVue);
} else {
  console.warn(`${elementName}: Custom element already defined`);
}
