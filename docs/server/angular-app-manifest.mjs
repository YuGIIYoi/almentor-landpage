
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/almentor-landpage/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/almentor-landpage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2217, hash: 'ae46bcb6c39808950de6be2b80b9589b644071ad0f3fd737bb7964c70bc9f5b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1030, hash: '118bce0691b9d04f297b56a0a162cd0eb436f0adae237ac336fd5d9e338121ab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 70918, hash: 'b167c9a0a2f597cd4c6744360448601248eb6b9a563ff29942e0dfd94b101559', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AV46BI7F.css': {size: 10046, hash: 'MLy7eMx4T3k', text: () => import('./assets-chunks/styles-AV46BI7F_css.mjs').then(m => m.default)}
  },
};
