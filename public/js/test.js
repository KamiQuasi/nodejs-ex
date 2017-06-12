var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("rhdp-search-07-results", ["rhdp-search-06-result"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var rhdp_search_06_result_1, RHDPSearchResults;
    return {
        setters: [
            function (rhdp_search_06_result_1_1) {
                rhdp_search_06_result_1 = rhdp_search_06_result_1_1;
            }
        ],
        execute: function () {
            RHDPSearchResults = (function (_super) {
                __extends(RHDPSearchResults, _super);
                function RHDPSearchResults() {
                    return _super.call(this) || this;
                }
                Object.defineProperty(RHDPSearchResults.prototype, "results", {
                    get: function () {
                        return this._results;
                    },
                    set: function (val) {
                        if (this._results === val)
                            return;
                        this._results = val;
                        this.renderResults();
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchResults.prototype.connectedCallback = function () {
                };
                Object.defineProperty(RHDPSearchResults, "observedAttributes", {
                    get: function () {
                        return ['results'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchResults.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchResults.prototype.addResult = function (result) {
                    var item = new rhdp_search_06_result_1.RHDPSearchResult();
                    item.result = result;
                    this.appendChild(item);
                };
                RHDPSearchResults.prototype.renderResults = function () {
                    while (this.hasChildNodes()) {
                        this.removeChild(this.lastChild);
                    }
                    if (this.results && this.results.hits && this.results.hits.hits) {
                        var hits = this.results.hits.hits;
                        var l = hits.length;
                        for (var i = 0; i < l; i++) {
                            this.addResult(hits[i]);
                        }
                    }
                };
                return RHDPSearchResults;
            }(HTMLElement));
            exports_7("RHDPSearchResults", RHDPSearchResults);
            customElements.define('rhdp-search-results', RHDPSearchResults);
        }
    };
});
System.register("rhdp-search-06-result", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var RHDPSearchResult;
    return {
        setters: [],
        execute: function () {
            RHDPSearchResult = (function (_super) {
                __extends(RHDPSearchResult, _super);
                function RHDPSearchResult() {
                    var _this = _super.call(this) || this;
                    _this._url = ['', ''];
                    _this.template = function (strings, url0, url1, title, kind, created, description) {
                        return "<div class=\"result result-search\" >\n        <h4>" + url0 + title + url1 + "</h4>\n        <p class=\"result-info\">\n            <span class=\"caps\">" + kind + "</span>\n            <span>" + created + "</span>\n        </p>\n        <p class=\"result-description\">" + description + "</p>\n    </div>";
                    };
                    return _this;
                }
                Object.defineProperty(RHDPSearchResult.prototype, "url", {
                    get: function () {
                        return this._url;
                    },
                    set: function (val) {
                        if (this._url === val)
                            return;
                        this._url = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    set: function (val) {
                        if (this._title === val)
                            return;
                        this._title = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "kind", {
                    get: function () {
                        return this._kind;
                    },
                    set: function (val) {
                        if (this._kind === val)
                            return;
                        this._kind = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "created", {
                    get: function () {
                        return this._created;
                    },
                    set: function (val) {
                        if (this._created === val)
                            return;
                        this._created = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "description", {
                    get: function () {
                        return this._description;
                    },
                    set: function (val) {
                        if (this._description === val)
                            return;
                        this._description = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "result", {
                    get: function () {
                        return this._result;
                    },
                    set: function (val) {
                        if (this._result === val)
                            return;
                        this._result = val;
                        this.computeTitle(val);
                        this.computeKind(val);
                        this.computeCreated(val);
                        this.computeDescription(val);
                        this.computeURL(val);
                        this.renderResult();
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchResult.prototype.connectedCallback = function () {
                };
                Object.defineProperty(RHDPSearchResult, "observedAttributes", {
                    get: function () {
                        return ['result'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchResult.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchResult.prototype.renderResult = function () {
                    this.innerHTML = (_a = ["", "", "", "", "", "", ""], _a.raw = ["", "", "", "", "", "", ""], this.template(_a, this.url[0], this.url[1], this.title, this.kind, this.created, this.description));
                    var _a;
                };
                RHDPSearchResult.prototype.computeTitle = function (result) {
                    var title = '';
                    if (result.highlight && result.highlight.sys_title) {
                        title = result.highlight.sys_title[0];
                    }
                    else {
                        title = result.fields.sys_title[0];
                    }
                    this.title = title;
                };
                RHDPSearchResult.prototype.computeKind = function (result) {
                    var kind = result.fields.sys_type || "webpage", map = {
                        video: 'Video',
                        blogpost: 'Blog Post',
                        book: 'Book',
                        article: 'Article',
                        solution: 'Article',
                        demo: 'Demo',
                        event: 'Event',
                        quickstart: 'Quickstart',
                        quickstart_early_access: 'Demo',
                        forumthread: 'Forum Thread',
                        stackoverflow_thread: 'Stack Overflow',
                        webpage: 'Webpage',
                        jbossdeveloper_quickstart: 'Quickstart',
                        jbossdeveloper_demo: 'Demo',
                        jbossdeveloper_bom: 'Bom',
                        jbossdeveloper_archetype: 'Archetype',
                        jbossdeveloper_example: 'Demo',
                        jbossdeveloper_vimeo: 'Video',
                        jbossdeveloper_youtube: 'Video',
                        jbossdeveloper_book: 'Book',
                        jbossdeveloper_event: 'Event',
                        rht_knowledgebase_article: 'Article',
                        rht_knowledgebase_solution: 'Article',
                        stackoverflow_question: 'Stack Overflow',
                        jbossorg_sbs_forum: 'Forum Thread',
                        jbossorg_blog: 'Blog Post',
                        rht_website: 'Website',
                        rht_apidocs: 'Docs & APIs'
                    };
                    this.kind = map[kind];
                };
                RHDPSearchResult.prototype.computeCreated = function (result) {
                    var options = { month: 'long', day: 'numeric', year: 'numeric' };
                    var created = result.fields.sys_created ? '- ' + new Intl.DateTimeFormat('en-US', options).format(new Date(result.fields.sys_created[0])) : "";
                    this.created = created;
                };
                RHDPSearchResult.prototype.computeDescription = function (result) {
                    var description = '';
                    if (result.highlight && result.highlight.sys_description) {
                        description = result.highlight.sys_description[0];
                    }
                    else if (result.highlight && result.highlight.sys_content_plaintext) {
                        description = result.highlight.sys_content_plaintext[0];
                    }
                    else if (result.fields && result.fields.sys_description) {
                        description = result.fields.sys_description[0];
                    }
                    else {
                        description = result.fields.sys_content_plaintext[0];
                    }
                    this.description = description;
                };
                RHDPSearchResult.prototype.computeURL = function (result) {
                    var url = ['', ''];
                    if (result.fields && result.fields.sys_url_view) {
                        url[0] = "<a href=\"" + result.fields.sys_url_view + "\">";
                        url[1] = '</a>';
                    }
                    this.url = url;
                };
                return RHDPSearchResult;
            }(HTMLElement));
            exports_6("RHDPSearchResult", RHDPSearchResult);
            customElements.define('rhdp-search-result', RHDPSearchResult);
        }
    };
});