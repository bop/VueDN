import{_ as r,M as s,p as a,q as l,R as e,t,N as o,a1 as i}from"./framework-5866ffd3.js";const d="/button.svg",c={},h=e("h1",{id:"using-bop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-bop","aria-hidden":"true"},"#"),t(" Using bop")],-1),p=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),u={href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"},_={href:"https://app.netlify.com/",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setup","aria-hidden":"true"},"#"),t(" Setup")],-1),g={href:"https://github.com/NdagiStanley/VueDN",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,"Add a site and link the repository on Netlify",-1),b=e("li",null,"Deploy",-1),m=e("p",null,"To do the three steps above click this button:",-1),k=e("div",null,[e("a",{href:"https://app.netlify.com/start/deploy?repository=https://github.com/NdagiStanley/VueDN"},[e("img",{src:d,alt:"Deploy to Netlify"})])],-1),v=e("h3",{id:"continue-setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#continue-setup","aria-hidden":"true"},"#"),t(" Continue setup")],-1),x={href:"https://docs.netlify.com/visitor-access/identity/#enable-identity-in-the-ui",target:"_blank",rel:"noopener noreferrer"},N=i("<ul><li>Go to <strong>Netlify Identity</strong> integration in your netlify site: <br>Path: Your netlify site&#39;s path with <code>/integrations/identity/netlify</code> appended <br>e.g.: <code>https://app.netlify.com/sites/vuedn/integrations/identity/netlify</code> if your site&#39;s name is <code>vuedn</code></li><li>and click <strong>Enable</strong></li></ul>",1),w=i("<li><p><strong>Enable Git Gateway</strong> in Identity settings</p><ul><li>Go to <strong>Identity</strong> settings <br>Path: Your netlify site&#39;s path with <code>/settings/identity#services</code> appended</li><li>and click <strong>Enable Git Gateway</strong></li></ul></li><li><p>In the live site, go to <code>/admin</code> path of your site and sign up <br>Please note:</p><ul><li>Due to browser extensions, the sign-up modal or Social Auth may not appear. If this happens, set up on an incognito tab.</li><li><code>/admin</code> should be entered manually or linked from another site not your VuePress site. Otherwise, it&#39;ll show a 404 page (rightfully so) since the <em>admin</em> page is not served by VuePress rather by <strong>Netlify Identity</strong> and <strong>DecapCMS</strong>.</li></ul></li><li><p>You&#39;re set!</p></li><li><p>Bonus: Update <em>Registration preferences</em> and <em>External providers</em> in Identity settings, Registration section <br>Path: Your netlify site&#39;s path with <code>/settings/identity#registration</code> appended</p></li>",4),I=e("h2",{id:"reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),t(" Reference")],-1),G={href:"https://vuepress.github.io/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://decapcms.org/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://decapcms.org/docs/configuration-options",target:"_blank",rel:"noopener noreferrer"},V={href:"https://decapcms.org/docs/git-gateway-backend/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://docs.netlify.com/visitor-access/git-gateway/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://docs.netlify.com/visitor-access/identity/",target:"_blank",rel:"noopener noreferrer"};function P(M,q){const n=s("ExternalLinkIcon");return a(),l("div",null,[h,p,e("ul",null,[e("li",null,[e("a",u,[t("GitHub account"),o(n)])]),e("li",null,[e("a",_,[t("Netlify account"),o(n)])])]),f,e("ol",null,[e("li",null,[t("Fork the "),e("a",g,[t("repository"),o(n)])]),y,b]),m,k,v,e("ol",null,[e("li",null,[e("p",null,[e("a",x,[t("Enable Identity integration"),o(n)]),t(" for your site, to enable Authentication for the CMS")]),N]),w]),I,e("ul",null,[e("li",null,[e("a",G,[t("VuePress Frontmatter"),o(n)])]),e("li",null,[e("a",S,[t("DecapCMS"),o(n)])]),e("li",null,[e("a",D,[t("DecapCMS Configuration Options"),o(n)])]),e("li",null,[e("a",V,[t("DecapCMS Git Gateway backend"),o(n)])]),e("li",null,[e("a",C,[t("Git-gateway"),o(n)])]),e("li",null,[e("a",E,[t("Netlify Identity"),o(n)])])])])}const R=r(c,[["render",P],["__file","index.html.vue"]]);export{R as default};
