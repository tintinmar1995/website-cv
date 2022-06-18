class SkillsRow extends HTMLElement {
  constructor() {
    // Always call parent constructor first
    super();

    // Get template content from DOM
    var template = document.createElement("TEMPLATE");
      template.innerHTML = `
      <style>
        .staticrow{
          display: flex;
          margin-bottom: 10px;
        }
        .columnleft {
          text-align: right;
          padding-left: 2%;
          padding-right: 5px;
          flex: 0 0 150px;
        }
        .columnrightnoborder {
          padding-left: 5px;
          min-width: 500px;
          flex:0 0 80%;
        }
      </style>
      <div class="staticrow">
        <div class="columnleft"><b><slot name='title'>Title..</slot></b></div>
        <div class="columnrightnoborder"> <slot name='list'>Some skills...</slot></div>
      </div>
      `
    // Create new Shadow Root
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );

  }

  connectedCallback() {
    let title = this.getAttribute('title') || '';

    if(title){
      const shadow = this.shadowRoot;
      shadow.querySelector('[name=title]').innerText = title;
    }
  }
}
customElements.define("skills-row", SkillsRow);
