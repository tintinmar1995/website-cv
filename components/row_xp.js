class XPRow extends HTMLElement {
  constructor() {
    // Always call parent constructor first
    super();

    // Get template content from DOM
    var template = document.createElement("TEMPLATE");
      template.innerHTML = `
      <link rel="stylesheet" href="../css/balloon.min.css">
      <style>
        p {
          margin:0px;
        }

        ::slotted([slot=desc]) {
          text-align: justify;
          text-justify: inter-word;
        }

        .xp-skills {
          list-style: none;
          margin-left: 10px;
          padding-left: 0;
        }

        .xp-skills > ::slotted(li) {
          padding-left: 1em;
          text-indent: -1em;
        }

        .modal-btn {
          text-decoration:none;
          font-size:20pt;
          color: #555555;
          margin-bottom: 10px;
        }

        .xp-skills > ::slotted(li):before {
          content: "> ";
          padding-right: 4px;
        }

        .xp-logo {
          max-width:100%;
          float:right;
          margin-top:10px;
          display:none;
        }

        .row{
          overflow-x: auto;
          overflow-y: hidden;
          display: flex;
          margin-bottom: 10px;
        }

        .kw-row {
          margin-top: 15px;
        }

        .kw-row > ::slotted(span) {
          padding:3px;
          margin-right:6px;
          font:bold 13px Arial;
          background: #677ce720;
          /*background:#f5f5f5;*/
          /*color:#555;*/
          color: #6e65c7;
          border-radius:5px;
          width:100px;
          border:1px solid #677ce720;
        }

        .columnleft {
          text-align: right;
          padding-right: 5px;
          flex: 0 0 85px;
          color: #6e65c7;
        }

        .columnright {
          border-left: 1px solid;
          padding-left: 5px;
          min-width:500px;
          flex:0 0 80%;
          margin-bottom: 5px;
        }
      </style>
      <script src="https://kit.fontawesome.com/ae25e386da.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="row">
        <div class="columnleft">
          <b><p id="start"></p> <p id="end"></p></b>
          <img id="logo" width="80px" class="xp-logo">
        </div>
        <div class="columnright">
            <p>
              <b id='title'></b> <em style='color:#6e65c7;'>@</em> <em id="company" style="color:#6e65c7;"></em>
              <a id="website"><i class="fa fa-external-link" style="margin-left: 7px; font-size: 11px; color: teal"></i></a>
            </p>
            <slot name="desc"></slot>
            <ul class="xp-skills"><slot name="skills"></slot></ul>
            <div id="jobs-container" style="display:none;">
              <p>Des exemples de missions :</p>
              <ul class="xp-skills"><slot name="jobs"></slot></ul>
            </div>
            <center>
              <a class="modal-btn" id="modal-btn" data-balloon-pos="up"
                 aria-label="Plus sur cette expérience"
              ><i class="fa fa-plus-square"></i></a>
            </center>
            <div class="kw-row">
              <slot name="kw"></slot>
            </div>
        </div>
      </div>
      `
    // Create new Shadow Root
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );

    this.onmouseover = this.showLogo;
    this.onmouseout = this.hideLogo;

  }

  connectedCallback() {
    const shadow = this.shadowRoot;

    let label = this.getAttribute('label') || '';
    if(label){
      shadow.querySelector('#title').innerText = label + ',';
    }

    let company = this.getAttribute('company') || '';
    if(company){
      shadow.querySelector('#company').innerText = company;
    }

    let start = this.getAttribute('start') || '';
    if(start){
      shadow.querySelector('#start').innerText = start;
    }

    let end = this.getAttribute('end') || '';
    if(end){
      shadow.querySelector('#end').innerText = end;
    }

    let hashtag = this.getAttribute('hashtag') || '';
    if(hashtag){
      shadow.querySelector('#modal-btn').href = '#' + hashtag;
    }

    let website = this.getAttribute('website') || '';
    if(website){
      shadow.querySelector('#website').href = website;
    } else {
      shadow.querySelector('#website').style.display = 'none';
    }

    let logo = this.getAttribute('logo') || '';
    if(logo){
      shadow.querySelector('#logo').src = logo;
    }

    let logo_wth = this.getAttribute('logoWidth') || '';
    if(logo_wth){
      shadow.querySelector('#logo').style.width = logo_wth;
    }

    let showJobs = this.getAttribute('showJobs') || '';
    if(showJobs){
      shadow.querySelector('#jobs-container').style.display = 'block';
    }

  }

  showLogo(){
    this.shadowRoot.querySelector('#logo').style.display = 'block';
  }

  hideJobs(){
    this.shadowRoot.querySelector('#jobs-container').style.display = 'none';    
  }

  hideLogo(){
    this.shadowRoot.querySelector('#logo').style.display = 'none';
  }

  hideExternalLink(){
    this.shadowRoot.querySelector('#website').style.display = 'none';
  }

  hideModalButton(){
    this.shadowRoot.querySelector('#modal-btn').style.display = 'none';
  }

}
customElements.define("xp-row", XPRow);
