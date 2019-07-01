(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./controllers/index.ts":
/*!******************************!*\
  !*** ./controllers/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst controller = {\n    health: (request, response) => {\n        response.send({ ok: true });\n    },\n};\nexports.default = controller;\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/controllers/index.ts");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n//import dotenv from 'dotenv';\nconst routes_1 = __importDefault(__webpack_require__(/*! ../src/routes */ \"./routes/index.ts\"));\nconst errorHandler_1 = __importDefault(__webpack_require__(/*! ./utils/errorHandler */ \"./utils/errorHandler.ts\"));\nconst logger_1 = __importDefault(__webpack_require__(/*! ./utils/logger */ \"./utils/logger.ts\"));\nconst worker_1 = __webpack_require__(/*! ./worker */ \"./worker/index.ts\");\nconst initElasticsearch_1 = __webpack_require__(/*! ./modules/initElasticsearch */ \"./modules/initElasticsearch.ts\");\nconst initRabbitMq_1 = __webpack_require__(/*! ./modules/initRabbitMq */ \"./modules/initRabbitMq.ts\");\nconst enrich_1 = __webpack_require__(/*! ./worker/enrich */ \"./worker/enrich.ts\");\nconst enrichScheduler_1 = __webpack_require__(/*! ./worker/enrichScheduler */ \"./worker/enrichScheduler.ts\");\nconst counterScheduler_1 = __webpack_require__(/*! ./worker/counterScheduler */ \"./worker/counterScheduler.ts\");\n//require('date-utils');\nconst log = logger_1.default.createLogger();\n//hey you\n//dotenv.load();\nconst app = express_1.default();\napp.set('port', process.env.PORT || 3000);\napp.use(express_1.default.json());\napp.use(express_1.default.urlencoded({ extended: false }));\napp.use('/', routes_1.default);\napp.use(errorHandler_1.default);\napp.use((req, resp, next) => {\n    log.debug('####### Request Log #######');\n    log.debug('Path:', req.path);\n    log.debug('Query:', req.query);\n    log.debug('Methods:', req.method);\n    log.debug('Body %j', req.body);\n    next();\n});\napp.listen(app.get('port'), async () => {\n    /*tslint:disable*/\n    console.log('Add default queues...');\n    await initElasticsearch_1.addElasticIndexTemplates();\n    await initRabbitMq_1.addDefaultQueue();\n    await worker_1.processLogRequest();\n    await enrich_1.enrichLogs();\n    await enrichScheduler_1.startEnrichScheduler();\n    await counterScheduler_1.startCounterScheduler();\n    console.log(`App is running at http://localhost:${app.get('port')}`);\n    //await testRunner();\n    log.info(` App is running at http://localhost:${app.get('port')}`);\n});\nprocess.on('uncaughtException', function (error) {\n    console.error('Something bad happened here....');\n    console.error(error);\n    console.error(error.stack);\n    log.error(error);\n    log.error(error.stack);\n    //utility.sendMessage ( error, { fileName: 'server.js', source: 'boot' } );\n});\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/index.ts");

/***/ }),

/***/ "./modules/initElasticsearch.ts":
/*!**************************************!*\
  !*** ./modules/initElasticsearch.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst elastic_1 = __importDefault(__webpack_require__(/*! ../utils/elastic */ \"./utils/elastic.ts\"));\nconst log = logger_1.default.createLogger();\nexports.addElasticIndexTemplates = async () => {\n    try {\n        await elastic_1.default.indices.deleteTemplate({ name: 'charge' });\n        const chargeResult = await elastic_1.default.indices.putTemplate({\n            name: 'charge',\n            body: getChargeIndexTemplate(),\n        });\n        log.debug('Charge index template added:', chargeResult);\n        await elastic_1.default.indices.deleteTemplate({ name: 'accounting' });\n        const accountingResult = await elastic_1.default.indices.putTemplate({\n            name: 'accounting',\n            body: getAccountingIndexTemplate(),\n        });\n        log.debug('Accounting index template added:', accountingResult);\n        await elastic_1.default.indices.deleteTemplate({ name: 'session' });\n        const sessionResult = await elastic_1.default.indices.putTemplate({\n            name: 'session',\n            body: getSessionIndexTemplate(),\n        });\n        log.debug('Session index template added:', sessionResult);\n        await elastic_1.default.indices.deleteTemplate({ name: 'syslog' });\n        const syslogResult = await elastic_1.default.indices.putTemplate({\n            name: 'syslog',\n            body: getSyslogIndexTemplate(),\n        });\n        log.debug('Syslog index template added:', syslogResult);\n        await elastic_1.default.indices.deleteTemplate({ name: 'netflow' });\n        const netflowResult = await elastic_1.default.indices.putTemplate({\n            name: 'netflow',\n            body: getNetflowIndexTemplate(),\n        });\n        log.debug('Netflow index template added:', netflowResult);\n    }\n    catch (error) {\n        log.error(error);\n        throw error;\n    }\n};\nconst getNetflowIndexTemplate = () => {\n    return {\n        index_patterns: ['netflow*'],\n        settings: {\n            analysis: {\n                normalizer: {\n                    lowercase_normalizer: {\n                        type: 'custom',\n                        char_filter: [],\n                        filter: ['lowercase'],\n                    },\n                },\n                analyzer: {\n                    full_text_ngram: {\n                        tokenizer: 'ngram_tokenizer',\n                    },\n                    domain_name_analyzer: {\n                        filter: 'lowercase',\n                        tokenizer: 'domain_name_tokenizer',\n                        type: 'custom',\n                    },\n                    path_analyzer: {\n                        tokenizer: 'path_tokenizer',\n                    },\n                },\n                tokenizer: {\n                    ngram_tokenizer: {\n                        type: 'nGram',\n                        min_gram: 3,\n                        max_gram: 12,\n                        token_chars: ['letter', 'digit', 'punctuation', 'symbol'],\n                    },\n                    domain_name_tokenizer: {\n                        type: 'PathHierarchy',\n                        delimiter: '.',\n                        reverse: true,\n                    },\n                    path_tokenizer: {\n                        type: 'path_hierarchy',\n                        delimiter: '-',\n                        replacement: '/',\n                        skip: 2,\n                    },\n                },\n            },\n        },\n        mappings: {\n            doc: {\n                properties: {\n                    username: {\n                        type: 'keyword',\n                        normalizer: 'lowercase_normalizer',\n                    },\n                    nasId: {\n                        type: 'keyword',\n                    },\n                    nasTitle: {\n                        enabled: false,\n                    },\n                    mac: {\n                        type: 'keyword',\n                        normalizer: 'lowercase_normalizer',\n                    },\n                    status: {\n                        type: 'keyword',\n                    },\n                    enrichDate: {\n                        type: 'date',\n                    },\n                    memberId: {\n                        type: 'keyword',\n                    },\n                    businessId: {\n                        type: 'keyword',\n                    },\n                    '@timestamp': {\n                        type: 'date',\n                    },\n                    host: {\n                        type: 'keyword',\n                    },\n                    netflow: {\n                        properties: {\n                            bytes: {\n                                enabled: false,\n                            },\n                            version: {\n                                enabled: false,\n                            },\n                            dst_addr: {\n                                type: 'keyword',\n                            },\n                            dst_port: {\n                                type: 'long',\n                            },\n                            protocol: {\n                                type: 'long',\n                            },\n                            src_addr: {\n                                type: 'keyword',\n                            },\n                            ipv4_next_hop: {\n                                type: 'keyword',\n                            },\n                            src_port: {\n                                type: 'long',\n                            },\n                        },\n                    },\n                    tags: {\n                        type: 'text',\n                        fields: {\n                            keyword: {\n                                type: 'keyword',\n                                ignore_above: 256,\n                            },\n                        },\n                    },\n                    type: {\n                        type: 'text',\n                        fields: {\n                            keyword: {\n                                type: 'keyword',\n                                ignore_above: 256,\n                            },\n                        },\n                    },\n                },\n            },\n        },\n    };\n};\nconst getChargeIndexTemplate = () => {\n    return {\n        index_patterns: ['*charge*'],\n        mappings: {\n            doc: {\n                properties: {\n                    timestamp: { type: 'date' },\n                    businessId: { type: 'keyword' },\n                    forThe: { type: 'keyword' },\n                    type: { type: 'keyword' },\n                    amount: { type: 'integer' },\n                    date: { type: 'long' },\n                },\n            },\n        },\n    };\n};\nconst getAccountingIndexTemplate = () => {\n    return {\n        index_patterns: ['*accounting*'],\n        mappings: {\n            doc: {\n                properties: {\n                    timestamp: { type: 'date' },\n                    businessId: { type: 'keyword' },\n                    memberId: { type: 'keyword' },\n                    sessionId: { type: 'keyword' },\n                    nasId: { type: 'keyword' },\n                    mac: { type: 'keyword' },\n                    creationDate: { type: 'long' },\n                    sessionTime: { type: 'long' },\n                    totalUsage: { type: 'long' },\n                    download: { type: 'long' },\n                    upload: { type: 'long' },\n                },\n            },\n        },\n    };\n};\nconst getSessionIndexTemplate = () => {\n    return {\n        index_patterns: ['*session*'],\n        settings: {\n            analysis: {\n                analyzer: {\n                    full_text_ngram: {\n                        tokenizer: 'ngram_tokenizer',\n                    },\n                    domain_name_analyzer: {\n                        filter: 'lowercase',\n                        tokenizer: 'domain_name_tokenizer',\n                        type: 'custom',\n                    },\n                    path_analyzer: {\n                        tokenizer: 'path_tokenizer',\n                    },\n                },\n                tokenizer: {\n                    ngram_tokenizer: {\n                        type: 'nGram',\n                        min_gram: 3,\n                        max_gram: 12,\n                        token_chars: ['letter', 'digit', 'punctuation', 'symbol'],\n                    },\n                    domain_name_tokenizer: {\n                        type: 'PathHierarchy',\n                        delimiter: '.',\n                        reverse: true,\n                    },\n                    path_tokenizer: {\n                        type: 'path_hierarchy',\n                        delimiter: '-',\n                        replacement: '/',\n                        skip: 2,\n                    },\n                },\n            },\n        },\n        mappings: {\n            doc: {\n                properties: {\n                    timestamp: { type: 'date' },\n                    creationDate: { type: 'long' },\n                    businessId: { type: 'keyword' },\n                    memberId: { type: 'keyword' },\n                    nasId: { type: 'keyword' },\n                    nasTitle: { enabled: false },\n                    nasIp: { type: 'keyword' },\n                    groupIdentity: { type: 'keyword' },\n                    groupIdentityId: { type: 'keyword' },\n                    groupIdentityType: { type: 'keyword' },\n                    mac: { type: 'keyword' },\n                    username: { type: 'keyword' },\n                    framedIpAddress: { type: 'keyword' },\n                },\n            },\n        },\n    };\n};\nconst getSyslogIndexTemplate = () => {\n    return {\n        index_patterns: ['syslog*'],\n        settings: {\n            analysis: {\n                normalizer: {\n                    lowercase_normalizer: {\n                        type: 'custom',\n                        char_filter: [],\n                        filter: ['lowercase'],\n                    },\n                },\n                analyzer: {\n                    full_text_ngram: {\n                        tokenizer: 'ngram_tokenizer',\n                        type: 'custom',\n                        filter: ['lowercase'],\n                    },\n                    domain_name_analyzer: {\n                        filter: 'lowercase',\n                        tokenizer: 'domain_name_tokenizer',\n                        type: 'custom',\n                    },\n                    path_analyzer: {\n                        tokenizer: 'path_tokenizer',\n                    },\n                },\n                tokenizer: {\n                    ngram_tokenizer: {\n                        type: 'nGram',\n                        min_gram: 3,\n                        max_gram: 12,\n                        token_chars: ['letter', 'digit', 'punctuation', 'symbol'],\n                    },\n                    domain_name_tokenizer: {\n                        type: 'PathHierarchy',\n                        delimiter: '.',\n                        reverse: true,\n                    },\n                    path_tokenizer: {\n                        type: 'path_hierarchy',\n                        delimiter: '-',\n                        replacement: '/',\n                        skip: 2,\n                    },\n                },\n            },\n        },\n        mappings: {\n            doc: {\n                properties: {\n                    timestamp: {\n                        type: 'date',\n                    },\n                    nasIp: {\n                        type: 'keyword',\n                    },\n                    username: {\n                        type: 'keyword',\n                        normalizer: 'lowercase_normalizer',\n                    },\n                    status: {\n                        type: 'keyword',\n                    },\n                    enrichDate: {\n                        type: 'date',\n                    },\n                    nasId: {\n                        type: 'keyword',\n                    },\n                    nasTitle: {\n                        enabled: false,\n                    },\n                    memberId: {\n                        type: 'keyword',\n                    },\n                    businessId: {\n                        type: 'keyword',\n                    },\n                    path: {\n                        enabled: false,\n                    },\n                    query: {\n                        enabled: false,\n                    },\n                    params: {\n                        enabled: false,\n                    },\n                    message: {\n                        enabled: false,\n                    },\n                    protocol: {\n                        type: 'keyword',\n                        normalizer: 'lowercase_normalizer',\n                    },\n                    memberIp: {\n                        type: 'keyword',\n                    },\n                    method: {\n                        type: 'keyword',\n                        normalizer: 'lowercase_normalizer',\n                    },\n                    url: {\n                        type: 'keyword',\n                        normalizer: 'lowercase_normalizer',\n                    },\n                    domain: {\n                        type: 'keyword',\n                        normalizer: 'lowercase_normalizer',\n                    },\n                    hostGeoIp: {\n                        enabled: false,\n                        properties: {\n                            location: {\n                                enabled: false,\n                            },\n                            timezone: {\n                                enabled: false,\n                            },\n                            city_name: {\n                                enabled: false,\n                            },\n                            country_name: {\n                                enabled: false,\n                            },\n                        },\n                    },\n                },\n            },\n        },\n    };\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/modules/initElasticsearch.ts");

/***/ }),

/***/ "./modules/initRabbitMq.ts":
/*!*********************************!*\
  !*** ./modules/initRabbitMq.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typings_1 = __webpack_require__(/*! ../typings */ \"./typings/index.ts\");\nconst rabbitmq_1 = __webpack_require__(/*! ../utils/rabbitmq */ \"./utils/rabbitmq.ts\");\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst log = logger_1.default.createLogger();\nconst LOG_REQUEST_RETRY_MS = Number(process.env.LOG_REQUEST_RETRY_MS);\nexports.addDefaultQueue = async () => {\n    try {\n        const channel = await rabbitmq_1.getRabbitMqChannel();\n        // Add log worker queue\n        await channel.assertExchange(typings_1.QUEUES.LOG_WORKER_EXCHANGE, 'fanout', {\n            durable: true,\n        });\n        await channel.assertQueue(typings_1.QUEUES.LOG_WORKER_QUEUE, {\n            deadLetterExchange: typings_1.QUEUES.RETRY_LOG_WORKER_EXCHANGE,\n            durable: true,\n        });\n        await channel.bindQueue(typings_1.QUEUES.LOG_WORKER_QUEUE, typings_1.QUEUES.LOG_WORKER_EXCHANGE, '');\n        // Add retry queue\n        await channel.assertExchange(typings_1.QUEUES.RETRY_LOG_WORKER_EXCHANGE, 'fanout', {\n            durable: true,\n        });\n        await channel.assertQueue(typings_1.QUEUES.RETRY_LOG_WORKER_QUEUE, {\n            deadLetterExchange: typings_1.QUEUES.LOG_WORKER_EXCHANGE,\n            durable: true,\n            messageTtl: LOG_REQUEST_RETRY_MS,\n        });\n        await channel.bindQueue(typings_1.QUEUES.RETRY_LOG_WORKER_QUEUE, typings_1.QUEUES.RETRY_LOG_WORKER_EXCHANGE, '');\n        log.debug('Default report queues added');\n        await channel.assertExchange(typings_1.QUEUES.LOG_ENRICHMENT_WORKER_QUEUE_EXCHANGE, 'fanout', {\n            durable: true,\n        });\n        await channel.assertQueue(typings_1.QUEUES.LOG_ENRICHMENT_WORKER_QUEUE, {\n            deadLetterExchange: typings_1.QUEUES.RETRY_LOG_ENRICHMENT_WORKER_QUEUE_EXCHANGE,\n            durable: true,\n        });\n        await channel.bindQueue(typings_1.QUEUES.LOG_ENRICHMENT_WORKER_QUEUE, typings_1.QUEUES.LOG_ENRICHMENT_WORKER_QUEUE_EXCHANGE, '');\n        // Add retry queue\n        await channel.assertExchange(typings_1.QUEUES.RETRY_LOG_ENRICHMENT_WORKER_QUEUE_EXCHANGE, 'fanout', {\n            durable: true,\n        });\n        await channel.assertQueue(typings_1.QUEUES.RETRY_LOG_ENRICHMENT_WORKER_QUEUE, {\n            deadLetterExchange: typings_1.QUEUES.LOG_ENRICHMENT_WORKER_QUEUE_EXCHANGE,\n            durable: true,\n            messageTtl: LOG_REQUEST_RETRY_MS,\n        });\n        await channel.bindQueue(typings_1.QUEUES.RETRY_LOG_ENRICHMENT_WORKER_QUEUE, typings_1.QUEUES.RETRY_LOG_ENRICHMENT_WORKER_QUEUE_EXCHANGE, '');\n    }\n    catch (error) {\n        log.error(error);\n        log.error('failed to add default queue');\n        throw error;\n    }\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/modules/initRabbitMq.ts");

/***/ }),

/***/ "./routes/index.ts":
/*!*************************!*\
  !*** ./routes/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_promise_router_1 = __importDefault(__webpack_require__(/*! express-promise-router */ \"express-promise-router\"));\nconst controllers_1 = __importDefault(__webpack_require__(/*! ../controllers */ \"./controllers/index.ts\"));\nconst router = express_promise_router_1.default();\nrouter.get('/health', controllers_1.default.health);\nexports.default = router;\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/routes/index.ts");

/***/ }),

/***/ "./typings/index.ts":
/*!**************************!*\
  !*** ./typings/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LOGGER_TIME_ZONE = 'Europe/London';\nexports.LOCAL_TIME_ZONE = 'Asia/Tehran';\nvar QUEUES;\n(function (QUEUES) {\n    QUEUES[\"LOG_ENRICHMENT_WORKER_QUEUE\"] = \"log-enrichment\";\n    QUEUES[\"LOG_ENRICHMENT_WORKER_QUEUE_EXCHANGE\"] = \"log-enrichment-ex\";\n    QUEUES[\"RETRY_LOG_ENRICHMENT_WORKER_QUEUE\"] = \"retry-log-enrichment\";\n    QUEUES[\"RETRY_LOG_ENRICHMENT_WORKER_QUEUE_EXCHANGE\"] = \"retry-log-enrichment-ex\";\n    QUEUES[\"LOG_WORKER_QUEUE\"] = \"log-worker\";\n    QUEUES[\"LOG_WORKER_EXCHANGE\"] = \"log-worker-ex\";\n    QUEUES[\"RETRY_LOG_WORKER_QUEUE\"] = \"retry-log-worker\";\n    QUEUES[\"RETRY_LOG_WORKER_EXCHANGE\"] = \"retry-log-worker-ex\";\n})(QUEUES = exports.QUEUES || (exports.QUEUES = {}));\nvar REPORT_TYPE;\n(function (REPORT_TYPE) {\n    REPORT_TYPE[\"NETFLOW\"] = \"netflow\";\n    REPORT_TYPE[\"SYSLOG\"] = \"syslog\";\n})(REPORT_TYPE = exports.REPORT_TYPE || (exports.REPORT_TYPE = {}));\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/typings/index.ts");

/***/ }),

/***/ "./utils/auth.ts":
/*!***********************!*\
  !*** ./utils/auth.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Created by hamidehnouri on 9/21/2016 AD.\n */\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! ./logger */ \"./utils/logger.ts\"));\nconst httpClient_1 = __webpack_require__(/*! ./httpClient */ \"./utils/httpClient.ts\");\nif (!process.env.SERVICE_MAN_USERNAME ||\n    !process.env.SERVICE_MAN_PASSWORD ||\n    !process.env.API_ADDRESS) {\n    throw new Error('invalid auth env variables');\n}\nconst API_ADDRESS = process.env.API_ADDRESS;\nconst log = logger_1.default.createLogger();\nexports.login = async (username, password) => {\n    const httpClient = httpClient_1.createHttpClient(API_ADDRESS);\n    const response = await httpClient.post('/api/Users/login', {\n        username,\n        password,\n    });\n    return response.data.id;\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/utils/auth.ts");

/***/ }),

/***/ "./utils/elastic.ts":
/*!**************************!*\
  !*** ./utils/elastic.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst elasticsearch_1 = __importDefault(__webpack_require__(/*! elasticsearch */ \"elasticsearch\"));\nconst elastic = new elasticsearch_1.default.Client({\n    // @ts-ignore\n    hosts: `${process.env.ELASTIC_IP}:${process.env.ELASTIC_PORT}`,\n    apiVersion: '6.7',\n    log: process.env.ELASTICSEARCH_LOG_LEVEL || 'info',\n});\nexports.default = elastic;\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/utils/elastic.ts");

/***/ }),

/***/ "./utils/errorHandler.ts":
/*!*******************************!*\
  !*** ./utils/errorHandler.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! ./logger */ \"./utils/logger.ts\"));\nconst log = logger_1.default.createLogger();\n// tslint:disable-next-line\nconst isDev = process.env.DEV == 'true';\nconst errorHandler = (error, req, res, next) => {\n    if (isDev) {\n        if (!error.status || error.status > 499) {\n            // tslint:disable-next-line no-console\n            console.log(error.stack);\n            log.error('Error:', error);\n            //log.error('Main Error Handler:', error.stack);\n        }\n    }\n    res.status(error.status || 500);\n    res.send({ message: error.message });\n};\nexports.default = errorHandler;\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/utils/errorHandler.ts");

/***/ }),

/***/ "./utils/httpClient.ts":
/*!*****************************!*\
  !*** ./utils/httpClient.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nconst https_1 = __importDefault(__webpack_require__(/*! https */ \"https\"));\nconst HTTP_KEEP_ALIVE_TIME = 5 * 60 * 1000;\nconst HTTP_TIME_OUT = 8000;\nexports.createHttpClient = (apiBaseUrl) => {\n    return axios_1.default.create({\n        baseURL: apiBaseUrl,\n        timeout: HTTP_TIME_OUT,\n        httpAgent: new http_1.default.Agent({\n            keepAlive: true,\n            keepAliveMsecs: HTTP_KEEP_ALIVE_TIME,\n        }),\n        httpsAgent: new https_1.default.Agent({\n            keepAlive: true,\n            keepAliveMsecs: HTTP_KEEP_ALIVE_TIME,\n        }),\n    });\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/utils/httpClient.ts");

/***/ }),

/***/ "./utils/logger.ts":
/*!*************************!*\
  !*** ./utils/logger.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bunyan_1 = __importDefault(__webpack_require__(/*! bunyan */ \"bunyan\"));\nexports.createLogger = () => {\n    const level = process.env.LOG_LEVEL;\n    let streams;\n    if (process.env.LOG_LEVEL && process.env.LOG_PATH) {\n        streams = [\n            {\n                path: process.env.LOG_PATH,\n            },\n        ];\n    }\n    return bunyan_1.default.createLogger({\n        name: 'log-worker',\n        streams,\n        level,\n    });\n};\nexports.default = {\n    createLogger: exports.createLogger,\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/utils/logger.ts");

/***/ }),

/***/ "./utils/rabbitmq.ts":
/*!***************************!*\
  !*** ./utils/rabbitmq.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst amqplib_1 = __importDefault(__webpack_require__(/*! amqplib */ \"amqplib\"));\nif (!process.env.RABBITMQ_USERNAME || !process.env.RABBITMQ_PASSWORD) {\n    throw new Error('invalid rabbit credentials');\n}\nlet connection;\nexports.getRabbitMqConnection = async () => {\n    /*tslint:disable*/\n    if (connection !== undefined) {\n        return connection;\n    }\n    connection = await amqplib_1.default.connect(`amqp://${process.env.RABBITMQ_USERNAME}:${process.env.RABBITMQ_PASSWORD}@rabbitmq`);\n    return connection;\n};\nexports.getRabbitMqChannel = async () => {\n    const amqpConnection = await exports.getRabbitMqConnection();\n    return amqpConnection.createConfirmChannel();\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/utils/rabbitmq.ts");

/***/ }),

/***/ "./worker/counterScheduler.ts":
/*!************************************!*\
  !*** ./worker/counterScheduler.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst cron_1 = __webpack_require__(/*! cron */ \"cron\");\nconst auth_1 = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.ts\");\nconst httpClient_1 = __webpack_require__(/*! ../utils/httpClient */ \"./utils/httpClient.ts\");\nconst netflow_1 = __importDefault(__webpack_require__(/*! ../worker/netflow */ \"./worker/netflow.ts\"));\nconst syslog_1 = __importDefault(__webpack_require__(/*! ../worker/syslog */ \"./worker/syslog.ts\"));\nconst moment_timezone_1 = __importDefault(__webpack_require__(/*! moment-timezone */ \"moment-timezone\"));\nconst typings_1 = __webpack_require__(/*! ../typings */ \"./typings/index.ts\");\nconst BUSINESS_API = `${process.env.API_ADDRESS}/api/Businesses`;\nconst log = logger_1.default.createLogger();\nexports.countAndUpdateBusinessReports = async () => {\n    const to = moment_timezone_1.default.tz(Date.now(), typings_1.LOGGER_TIME_ZONE);\n    to.add({ days: 1 });\n    to.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });\n    const from = to.clone().subtract({ days: 30 });\n    const netflowBusinessReportCount = await netflow_1.default.countBusinessReports(from, to);\n    const netflowReportsArray = [];\n    for (const businessId in netflowBusinessReportCount) {\n        netflowReportsArray.push({\n            businessId,\n            count: netflowBusinessReportCount[businessId],\n        });\n    }\n    for (const report of netflowReportsArray) {\n        try {\n            await updateBusiness(report.businessId, {\n                netflowReportCount: report.count,\n            });\n        }\n        catch (e) {\n            log.error(e);\n        }\n    }\n    const businessReportCount = await syslog_1.default.countBusinessReports(from, to);\n    const reportsArray = [];\n    for (const businessId in businessReportCount) {\n        reportsArray.push({ businessId, count: businessReportCount[businessId] });\n    }\n    for (const report of reportsArray) {\n        try {\n            await updateBusiness(report.businessId, {\n                syslogReportCount: report.count,\n            });\n        }\n        catch (e) {\n            log.error(e);\n        }\n    }\n};\nconst updateBusiness = async (businessId, update) => {\n    const token = await auth_1.login(\n    // @ts-ignore\n    process.env.SERVICE_MAN_USERNAME, process.env.SERVICE_MAN_PASSWORD);\n    const httpClient = httpClient_1.createHttpClient(`${BUSINESS_API}`);\n    await httpClient.patch(`/${businessId}`, update, {\n        headers: {\n            authorization: token,\n        },\n    });\n};\nexports.startCounterScheduler = () => {\n    const job = new cron_1.CronJob('0 */2 * * *', async () => {\n        await exports.countAndUpdateBusinessReports();\n        log.debug('report count updated as scheduled', new Date());\n    });\n    job.start();\n};\nif (process.env.START_MANUAL_COUNTER === 'true') {\n    exports.countAndUpdateBusinessReports();\n}\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/worker/counterScheduler.ts");

/***/ }),

/***/ "./worker/enrich.ts":
/*!**************************!*\
  !*** ./worker/enrich.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst netflow_1 = __importDefault(__webpack_require__(/*! ./netflow */ \"./worker/netflow.ts\"));\nconst syslog_1 = __importDefault(__webpack_require__(/*! ./syslog */ \"./worker/syslog.ts\"));\nconst session_1 = __importDefault(__webpack_require__(/*! ./session */ \"./worker/session.ts\"));\nconst rabbitmq_1 = __webpack_require__(/*! ../utils/rabbitmq */ \"./utils/rabbitmq.ts\");\nconst typings_1 = __webpack_require__(/*! ../typings */ \"./typings/index.ts\");\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst moment = __webpack_require__(/*! moment */ \"moment\");\nconst moment_timezone_1 = __importDefault(__webpack_require__(/*! moment-timezone */ \"moment-timezone\"));\nconst log = logger_1.default.createLogger();\nexports.enrichLogs = async () => {\n    log.debug('At processing enrichment requests');\n    const channel = await rabbitmq_1.getRabbitMqChannel();\n    channel.prefetch(3, true);\n    process.once('SIGINT', async () => {\n        await channel.close();\n    });\n    channel.consume(typings_1.QUEUES.LOG_ENRICHMENT_WORKER_QUEUE, async (message) => {\n        if (!message) {\n            log.debug('empty message:', message);\n            throw new Error('empty message');\n        }\n        const body = message.content.toString();\n        try {\n            log.debug(\" [x] enrichment message received '%s'\", body);\n            const enrichTask = JSON.parse(body);\n            const fromDate = moment(enrichTask.from);\n            const toDate = moment(enrichTask.to);\n            const reportType = enrichTask.reportType;\n            if (reportType === typings_1.REPORT_TYPE.SYSLOG) {\n                const result = await syslog_1.default.syslogGroupByIp(fromDate, toDate);\n                const ipData = getIpData(result);\n                await searchAndUpdateReport(reportType, ipData, fromDate, toDate);\n            }\n            else if (reportType === typings_1.REPORT_TYPE.NETFLOW) {\n                const result = await netflow_1.default.netflowGroupByIp(fromDate, toDate);\n                const ipData = getIpData(result);\n                await searchAndUpdateReport(reportType, ipData, fromDate, toDate);\n            }\n            else {\n                log.warn('unknown enrichment type:', reportType);\n                channel.ack(message);\n                return;\n            }\n            log.warn('............... Enrichment Done...............');\n            channel.ack(message);\n        }\n        catch (error) {\n            log.error(error);\n            channel.nack(message, false, false);\n        }\n    }, { noAck: false });\n};\nconst getIpData = (groupedReports) => {\n    const ips = {};\n    for (const aggregateResult of groupedReports) {\n        for (const nasIpBucket of aggregateResult.group_by_nas_ip.buckets) {\n            const nasIp = nasIpBucket.key;\n            ips[nasIp] = [];\n            for (const memberIpBucket of nasIpBucket.group_by_member_ip.buckets) {\n                const memberIp = memberIpBucket.key;\n                ips[nasIp].push(memberIp);\n            }\n        }\n    }\n    const ipData = [];\n    Object.keys(ips).forEach((nasIp) => {\n        ipData.push({ nasIp, memberIpList: ips[nasIp] });\n    });\n    return ipData;\n};\nconst searchAndUpdateReport = async (reportType, ipData, from, to) => {\n    if (ipData.length === 0) {\n        return;\n    }\n    log.debug(`going to update reports: `, ipData);\n    for (const flowData of ipData) {\n        const nasIp = flowData.nasIp;\n        for (const memberIp of flowData.memberIpList) {\n            try {\n                const groupedSessions = await session_1.default.querySessionsByIp(nasIp, memberIp, from, to);\n                if (groupedSessions.group_by_username.buckets.length > 0) {\n                    log.warn('sessions: ', groupedSessions);\n                }\n                if (groupedSessions.group_by_username.buckets.length === 1) {\n                    const session = groupedSessions.group_by_username.buckets[0];\n                    const username = session.key;\n                    const nasId = groupedSessions.extra.hits.hits[0]._source.nasId;\n                    const nasTitle = groupedSessions.extra.hits.hits[0]._source.nasTitle;\n                    const mac = groupedSessions.extra.hits.hits[0]._source.mac;\n                    const memberId = groupedSessions.extra.hits.hits[0]._source.memberId;\n                    const businessId = groupedSessions.extra.hits.hits[0]._source.businessId;\n                    let updateResult;\n                    if (reportType === typings_1.REPORT_TYPE.SYSLOG) {\n                        updateResult = await syslog_1.default.updateSyslogs(from, to, nasIp, memberIp, {\n                            nasId,\n                            nasTitle,\n                            mac,\n                            memberId,\n                            businessId,\n                            username,\n                        });\n                    }\n                    else if (reportType === typings_1.REPORT_TYPE.NETFLOW) {\n                        updateResult = await netflow_1.default.updateNetflows(from, to, nasIp, memberIp, {\n                            nasId,\n                            nasTitle,\n                            mac,\n                            memberId,\n                            businessId,\n                            username,\n                        });\n                    }\n                    else {\n                        throw new Error(`invalid report type: ${reportType}`);\n                    }\n                    log.debug(`updating ${reportType} report for ${username}  user, from:${moment(from).format('YYYY.MM.DD HH:MM')} to:${moment(to).format('YYYY.MM.DD HH:MM')} router IP:${nasIp} member IP:${memberIp}`, {\n                        nasId,\n                        memberId,\n                        businessId,\n                        username,\n                    });\n                    //log.debug(`update result`, updateResult);\n                }\n                else if (groupedSessions.group_by_username.buckets.length > 1) {\n                    log.debug('more than two up found going to split time range');\n                    const channel = await rabbitmq_1.getRabbitMqChannel();\n                    //split range in two;\n                    const newTo = moment_timezone_1.default.tz(from.valueOf() + (to.valueOf() - from.valueOf()) / 2, typings_1.LOGGER_TIME_ZONE);\n                    const reQueueOne = {\n                        from,\n                        to: newTo,\n                        reportType,\n                    };\n                    await channel.sendToQueue(typings_1.QUEUES.RETRY_LOG_ENRICHMENT_WORKER_QUEUE, Buffer.from(JSON.stringify(reQueueOne)));\n                    const reQueueTwo = {\n                        from: newTo,\n                        to,\n                        reportType,\n                    };\n                    await channel.sendToQueue(typings_1.QUEUES.RETRY_LOG_ENRICHMENT_WORKER_QUEUE, Buffer.from(JSON.stringify(reQueueTwo)));\n                }\n                else if (groupedSessions.group_by_username.buckets.length === 0) {\n                    log.debug(`nothing to update  ${reportType} from:${moment(from)} to:${moment(to)} router IP:${nasIp} member IP:${memberIp}`);\n                }\n            }\n            catch (error) {\n                log.error(error);\n                log.error(ipData);\n                throw error;\n            }\n        }\n    }\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/worker/enrich.ts");

/***/ }),

/***/ "./worker/enrichScheduler.ts":
/*!***********************************!*\
  !*** ./worker/enrichScheduler.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst moment_1 = __importDefault(__webpack_require__(/*! moment */ \"moment\"));\nconst rabbitmq_1 = __webpack_require__(/*! ../utils/rabbitmq */ \"./utils/rabbitmq.ts\");\nconst typings_1 = __webpack_require__(/*! ../typings */ \"./typings/index.ts\");\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst cron_1 = __webpack_require__(/*! cron */ \"cron\");\nconst moment_timezone_1 = __importDefault(__webpack_require__(/*! moment-timezone */ \"moment-timezone\"));\nconst log = logger_1.default.createLogger();\nconst ENRICHMENT_SCOPE = Number(process.env.ENRICHMENT_SCOPE);\nexports.addEnrichmentTasks = async (reportType) => {\n    try {\n        const toDate = moment_timezone_1.default.tz(typings_1.LOGGER_TIME_ZONE);\n        const fromDate = toDate.clone();\n        fromDate.subtract({ minute: ENRICHMENT_SCOPE });\n        log.debug(`Add enrichment scope for : ${typings_1.REPORT_TYPE} from ${fromDate} to ${toDate}`);\n        const channel = await rabbitmq_1.getRabbitMqChannel();\n        const duration = moment_1.default.duration(toDate.diff(fromDate));\n        const hours = Math.ceil(duration.asHours());\n        const RUN_TASK_EVERY_MINUTES = 5;\n        const taskLen = new Array(hours * (60 / RUN_TASK_EVERY_MINUTES));\n        for (const t of taskLen) {\n            const start = fromDate.clone();\n            fromDate.add({\n                minutes: RUN_TASK_EVERY_MINUTES,\n            });\n            const end = fromDate.clone();\n            const enrichTask = {\n                from: start,\n                to: end,\n                reportType,\n            };\n            log.debug(`add new ${enrichTask.reportType} enrichment task from ${moment_1.default(enrichTask.from).format('YYYY.MM.DD hh:mm')} to ${moment_1.default(enrichTask.to).format('YYYY.MM.DD hh:mm')}`);\n            await channel.sendToQueue(typings_1.QUEUES.LOG_ENRICHMENT_WORKER_QUEUE, Buffer.from(JSON.stringify(enrichTask)));\n        }\n    }\n    catch (e) {\n        log.error(e);\n        throw e;\n    }\n};\nexports.startEnrichScheduler = () => {\n    const job = new cron_1.CronJob('0 */1 * * *', async () => {\n        await exports.addEnrichmentTasks(typings_1.REPORT_TYPE.NETFLOW);\n        await exports.addEnrichmentTasks(typings_1.REPORT_TYPE.SYSLOG);\n    });\n    job.start();\n};\nif (process.env.START_MANUAL_ENRICHMENT === 'true') {\n    exports.addEnrichmentTasks(typings_1.REPORT_TYPE.NETFLOW);\n    exports.addEnrichmentTasks(typings_1.REPORT_TYPE.SYSLOG);\n}\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/worker/enrichScheduler.ts");

/***/ }),

/***/ "./worker/index.ts":
/*!*************************!*\
  !*** ./worker/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst rabbitmq_1 = __webpack_require__(/*! ../utils/rabbitmq */ \"./utils/rabbitmq.ts\");\nconst netflow_1 = __importDefault(__webpack_require__(/*! ./netflow */ \"./worker/netflow.ts\"));\nconst httpClient_1 = __webpack_require__(/*! ../utils/httpClient */ \"./utils/httpClient.ts\");\nconst { Transform } = __webpack_require__(/*! json2csv */ \"json2csv\");\nconst { Readable } = __webpack_require__(/*! stream */ \"stream\");\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst request_promise_1 = __importDefault(__webpack_require__(/*! request-promise */ \"request-promise\"));\nconst auth_1 = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.ts\");\nconst tmp_promise_1 = __webpack_require__(/*! tmp-promise */ \"tmp-promise\");\nconst util_1 = __importDefault(__webpack_require__(/*! util */ \"util\"));\nconst syslog_1 = __importDefault(__webpack_require__(/*! ./syslog */ \"./worker/syslog.ts\"));\nconst typings_1 = __webpack_require__(/*! ../typings */ \"./typings/index.ts\");\nconst momentTz = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\n// Convert fs.readFile into Promise version of same\nconst log = logger_1.default.createLogger();\nconst REPORT_CONTAINER = process.env.REPORT_CONTAINER || 'reports';\nconst UPLOAD_API = `${process.env.API_ADDRESS}/api/BigFiles/${REPORT_CONTAINER}/upload`;\nconst REPORT_API = `${process.env.API_ADDRESS}/api/Reports`;\nif (!process.env.SERVICE_MAN_USERNAME ||\n    !process.env.SERVICE_MAN_PASSWORD ||\n    !process.env.API_ADDRESS) {\n    throw new Error('invalid auth env variables');\n}\nexports.processLogRequest = async () => {\n    log.debug('At processing log requests');\n    const channel = await rabbitmq_1.getRabbitMqChannel();\n    channel.prefetch(4, true);\n    process.once('SIGINT', async () => {\n        await channel.close();\n    });\n    channel.consume(typings_1.QUEUES.LOG_WORKER_QUEUE, async (message) => {\n        if (!message) {\n            log.debug('empty message:', message);\n            throw new Error('empty message');\n        }\n        const body = message.content.toString();\n        log.debug(\" [x] Received Log Request '%s'\", body);\n        const generalReportRequestTask = JSON.parse(body);\n        if (!generalReportRequestTask.to) {\n            generalReportRequestTask.toDate = momentTz.tz(typings_1.LOGGER_TIME_ZONE);\n            generalReportRequestTask.to = momentTz(generalReportRequestTask.toDate, typings_1.LOCAL_TIME_ZONE).valueOf();\n        }\n        else {\n            generalReportRequestTask.toDate = momentTz.tz(generalReportRequestTask.to, typings_1.LOGGER_TIME_ZONE);\n        }\n        // create fromDate 1 year before from Date\n        if (!generalReportRequestTask.from) {\n            generalReportRequestTask.fromDate = momentTz.tz(generalReportRequestTask.toDate.valueOf() - 31539999 * 1000, typings_1.LOGGER_TIME_ZONE);\n            generalReportRequestTask.from = momentTz(generalReportRequestTask.fromDate, typings_1.LOCAL_TIME_ZONE).valueOf();\n        }\n        else {\n            generalReportRequestTask.fromDate = momentTz.tz(generalReportRequestTask.from, typings_1.LOGGER_TIME_ZONE);\n        }\n        log.debug(`Create ${generalReportRequestTask.type} report from ${generalReportRequestTask.fromDate} to ${generalReportRequestTask.toDate}`, JSON.stringify(generalReportRequestTask));\n        try {\n            let reports;\n            let fields;\n            if (generalReportRequestTask.type === typings_1.REPORT_TYPE.NETFLOW) {\n                reports = await netflow_1.default.getNetflowReports(generalReportRequestTask);\n                fields = getNetflowFields();\n            }\n            else if (generalReportRequestTask.type === typings_1.REPORT_TYPE.SYSLOG) {\n                reports = await syslog_1.default.getSyslogReports(generalReportRequestTask);\n                fields = getSyslogFields();\n            }\n            else {\n                channel.ack(message);\n                throw new Error('invalid report type');\n            }\n            log.debug(`index one of result size: ${reports.length}`);\n            jsonToCsv(fields, reports, async (csv) => {\n                log.debug(`csv created`);\n                await uploadReport(generalReportRequestTask, csv);\n                log.debug(`uploaded`);\n                channel.ack(message);\n            });\n        }\n        catch (error) {\n            log.error(error);\n            channel.nack(message, false, false);\n        }\n    }, { noAck: false });\n};\nconst getNetflowFields = () => {\n    return [\n        'Router',\n        'Username',\n        'Jalali_Date',\n        'Mac',\n        'Src_Addr',\n        'Src_Port',\n        'Dst_Addr',\n        'Dst_Port',\n        'Protocol',\n        'Gregorian_Date',\n    ];\n};\nconst getSyslogFields = () => {\n    return [\n        'Router',\n        'Username',\n        'IP',\n        'Mac',\n        'Jalali_Date',\n        'Http_Method',\n        'Domain',\n        'Url',\n        'Gregorian_Date',\n    ];\n};\nconst jsonToCsv = (fields, jsonData, cb) => {\n    try {\n        const opts = { fields, defaultValue: 'N/A' };\n        const input = new Readable({ objectMode: true });\n        input._read = () => { };\n        for (const row of jsonData) {\n            input.push(row);\n        }\n        // Pushing a null close the stream\n        input.push(null);\n        const transformOpts = { objectMode: true };\n        const json2csv = new Transform(opts, transformOpts);\n        const processor = input.pipe(json2csv);\n        let csv = '';\n        processor.on('data', function (chunk) {\n            csv = csv + chunk;\n        });\n        processor.on('end', function () {\n            log.debug('write csv finished');\n            cb && cb(csv);\n        });\n    }\n    catch (error) {\n        log.error(error);\n        throw error;\n    }\n};\nconst writeFile = util_1.default.promisify(fs_1.default.writeFile);\nconst closeFile = util_1.default.promisify(fs_1.default.close);\nconst unlink = util_1.default.promisify(fs_1.default.unlink);\nconst uploadReport = async (reportRequest, csv) => {\n    try {\n        const reportFile = await tmp_promise_1.file();\n        await writeFile(reportFile.path, csv, 'utf8');\n        await closeFile(reportFile.fd);\n        log.debug(reportFile.path);\n        const token = await auth_1.login(\n        // @ts-ignore\n        process.env.SERVICE_MAN_USERNAME, process.env.SERVICE_MAN_PASSWORD);\n        const fileName = `${Date.now().toString()}.csv`;\n        const options = {\n            method: 'POST',\n            url: UPLOAD_API,\n            timeout: 600000,\n            headers: {\n                authorization: token,\n                Accept: 'application/json',\n                'cache-control': 'no-cache',\n                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',\n            },\n            formData: {\n                businessId: reportRequest.businessId,\n                myfile: {\n                    value: fs_1.default.createReadStream(reportFile.path),\n                    options: { filename: fileName, contentType: 'text/csv' },\n                },\n            },\n        };\n        const response = await request_promise_1.default(options);\n        log.debug('uploaded');\n        log.debug(response);\n        await unlink(reportFile.path);\n        await updateReportRequest(reportRequest, {\n            container: REPORT_CONTAINER,\n            fileName: fileName,\n        });\n    }\n    catch (error) {\n        log.error('upload failed');\n        log.error(error);\n        throw error;\n    }\n};\nconst updateReportRequest = async (reportRequest, fileInfo) => {\n    log.debug('updating report request', fileInfo);\n    log.debug('updating report request', reportRequest);\n    const token = await auth_1.login(\n    // @ts-ignore\n    process.env.SERVICE_MAN_USERNAME, process.env.SERVICE_MAN_PASSWORD);\n    log.debug('report:', reportRequest.id);\n    log.debug('file:', fileInfo);\n    const update = {\n        status: 'ready',\n        container: fileInfo.container,\n        fileName: fileInfo.fileName,\n        from: reportRequest.from,\n        to: reportRequest.to,\n    };\n    const httpClient = httpClient_1.createHttpClient(`${REPORT_API}`);\n    await httpClient.patch(`/${reportRequest.id}`, update, {\n        headers: {\n            authorization: token,\n        },\n    });\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/worker/index.ts");

/***/ }),

/***/ "./worker/netflow.ts":
/*!***************************!*\
  !*** ./worker/netflow.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst elastic_1 = __importDefault(__webpack_require__(/*! ../utils/elastic */ \"./utils/elastic.ts\"));\nconst moment_timezone_1 = __importDefault(__webpack_require__(/*! moment-timezone */ \"moment-timezone\"));\nconst moment_jalaali_1 = __importDefault(__webpack_require__(/*! moment-jalaali */ \"moment-jalaali\"));\nconst typings_1 = __webpack_require__(/*! ../typings */ \"./typings/index.ts\");\nconst lodash_1 = __importDefault(__webpack_require__(/*! lodash */ \"lodash\"));\nconst NETFLOW_LOG_INDEX_PREFIX = `netflow-`;\nconst log = logger_1.default.createLogger();\nconst getIndexNames = (from, to) => {\n    const fromDateCounter = from.clone();\n    const diffBetweenInMs = to.diff(fromDateCounter);\n    let days = 0;\n    if (diffBetweenInMs > 86400000) {\n        days = Math.ceil(diffBetweenInMs / 86400000);\n    }\n    const indexNames = [createNetflowIndexName(fromDateCounter)];\n    for (let i = 0; i < days; i++) {\n        fromDateCounter.add(1, 'days');\n        indexNames.push(createNetflowIndexName(fromDateCounter));\n    }\n    return indexNames;\n};\nconst countBusinessReports = async (fromDate, toDate) => {\n    const indexNames = getIndexNames(fromDate, toDate);\n    let reportCounts = [];\n    for (const index of indexNames) {\n        const exist = await elastic_1.default.indices.exists({\n            index,\n        });\n        if (exist) {\n            const response = await elastic_1.default.search({\n                index,\n                body: createNetflowGroupByBusinessId(),\n            });\n            if (response.aggregations.group_by_business_id &&\n                response.aggregations.group_by_business_id.buckets) {\n                reportCounts = reportCounts.concat(response.aggregations.group_by_business_id.buckets);\n            }\n        }\n    }\n    const businessReportCount = {};\n    for (const reportCount of reportCounts) {\n        businessReportCount[reportCount.key] =\n            businessReportCount[reportCount.key] || 0;\n        businessReportCount[reportCount.key] =\n            businessReportCount[reportCount.key] + reportCount.doc_count;\n    }\n    return businessReportCount;\n};\nconst getNetflowReports = async (reportRequestTask) => {\n    const fromDate = reportRequestTask.fromDate;\n    const toDate = reportRequestTask.toDate;\n    const indexNames = getIndexNames(fromDate, toDate);\n    let data = [];\n    for (const indexName of indexNames) {\n        try {\n            const result = await getNetflowsByIndex(indexName, {\n                fromDate,\n                toDate,\n                srcAddress: reportRequestTask.srcAddress,\n                srcPort: reportRequestTask.srcPort,\n                username: reportRequestTask.username,\n                dstAddress: reportRequestTask.dstAddress,\n                dstPort: reportRequestTask.dstPort,\n                nasId: reportRequestTask.nasId,\n                protocol: reportRequestTask.protocol,\n            });\n            if (result) {\n                data = data.concat(result);\n            }\n        }\n        catch (error) {\n            if (error.status === 404) {\n                log.warn(`${indexName} index not found`);\n            }\n            else {\n                log.error(error.status);\n                throw error;\n            }\n        }\n    }\n    //log.debug('log', data);\n    log.debug(data.length);\n    //log.debug(formattedResult);\n    return formatReports(data);\n};\nconst formatReports = (rawNetflowReports) => {\n    const formatted = rawNetflowReports.map((rawReport) => {\n        const localDate = moment_timezone_1.default.tz(rawReport._source['@timestamp'], typings_1.LOCAL_TIME_ZONE);\n        const jalaaliDate = moment_jalaali_1.default(localDate);\n        const gregorianDate = moment_timezone_1.default.tz(rawReport._source['@timestamp'], typings_1.LOCAL_TIME_ZONE);\n        let protocolString = '';\n        if (rawReport._source.netflow.protocol === '6') {\n            protocolString = 'tcp';\n        }\n        if (rawReport._source.netflow.protocol === '17') {\n            protocolString = 'udp';\n        }\n        return {\n            nasId: rawReport._source.nasId,\n            Router: rawReport._source.nasTitle,\n            Username: rawReport._source.username,\n            Mac: rawReport._source.mac,\n            Jalali_Date: getJalaaliDate(jalaaliDate),\n            Src_Addr: rawReport._source.netflow.src_addr,\n            Src_Port: rawReport._source.netflow.src_port,\n            Dst_Addr: rawReport._source.netflow.dst_addr,\n            Dst_Port: rawReport._source.netflow.dst_port,\n            Protocol: protocolString,\n            Gregorian_Date: gregorianDate.format('YYYY/MM/DD HH:mm'),\n        };\n    });\n    return lodash_1.default.sortBy(formatted, [\n        'Router',\n        'Username',\n        'Jalali_Date',\n        'Src_Addr',\n        'Src_Port',\n    ]);\n};\nconst getJalaaliDate = (date) => {\n    return date.format('jYYYY/jM/jD HH:MM');\n};\nconst createNetflowIndexName = (fromDate) => {\n    return `${NETFLOW_LOG_INDEX_PREFIX}${fromDate.format('YYYY.MM.DD')}`;\n};\nconst getNetflowsByIndex = async (netflowIndex, netflowReportQueryParams) => {\n    const exist = await elastic_1.default.indices.exists({\n        index: netflowIndex,\n    });\n    if (!exist) {\n        return;\n    }\n    log.debug(`query from ${netflowIndex} from ${netflowReportQueryParams.fromDate.format()} to ${netflowReportQueryParams.toDate.format()}`);\n    const countResponse = await elastic_1.default.count({\n        index: netflowIndex,\n        body: createNetflowQuery(netflowReportQueryParams),\n    });\n    const totalLogs = countResponse.count;\n    if (totalLogs === 0) {\n        return;\n    }\n    const maxResultSize = 500;\n    const partsLen = totalLogs > maxResultSize ? Math.ceil(totalLogs / maxResultSize) : 1;\n    log.debug(`query parts: ${partsLen}`);\n    const scrollTtl = '2m';\n    let result = [];\n    const query = createNetflowQuery(netflowReportQueryParams);\n    const scrollResult = await elastic_1.default.search({\n        scroll: scrollTtl,\n        index: netflowIndex,\n        size: maxResultSize,\n        sort: ['_doc'],\n        body: query,\n        ignore: [404],\n    });\n    if (scrollResult.hits) {\n        result = result.concat(scrollResult.hits.hits);\n    }\n    log.debug('netflow query: %j', query);\n    if (!scrollResult._scroll_id) {\n        throw new Error('invalid scrollId ');\n    }\n    let scrollId = scrollResult._scroll_id;\n    const allScrollId = [scrollId];\n    const parts = new Array(partsLen);\n    for (const i of parts) {\n        try {\n            const queryResult = await elastic_1.default.scroll({\n                scrollId: scrollId,\n                scroll: scrollTtl,\n            });\n            if (queryResult._scroll_id && queryResult._scroll_id !== scrollId) {\n                log.debug('new scroll id : ', queryResult._scroll_id);\n                scrollId = queryResult._scroll_id;\n                allScrollId.push(scrollId);\n            }\n            if (queryResult.hits) {\n                result = result.concat(queryResult.hits.hits);\n            }\n            else {\n                log.warn(queryResult);\n            }\n        }\n        catch (error) {\n            log.error('error @getNetflowsByIndex');\n            log.error(error);\n            throw error;\n        }\n    }\n    log.debug('ids', allScrollId);\n    const clearanceRes = await elastic_1.default.clearScroll({\n        scrollId: allScrollId,\n    });\n    log.debug('clear: ', clearanceRes);\n    return result;\n};\nconst createNetflowQuery = (netflowReportQueryParams) => {\n    const filter = [];\n    filter.push({\n        term: {\n            status: 'enriched',\n        },\n    });\n    filter.push({\n        range: {\n            '@timestamp': {\n                gte: netflowReportQueryParams.fromDate.format(),\n                lte: netflowReportQueryParams.toDate.format(),\n            },\n        },\n    });\n    if (netflowReportQueryParams.protocol) {\n        const protocol = netflowReportQueryParams.protocol.toLowerCase();\n        if (protocol === 'tcp') {\n            filter.push({\n                term: {\n                    'netflow.protocol': '6',\n                },\n            });\n        }\n        else if (protocol === 'udp') {\n            filter.push({\n                term: {\n                    'netflow.protocol': '17',\n                },\n            });\n        }\n        else if (protocol === 'tcp/udp') {\n            filter.push({\n                terms: {\n                    'netflow.protocol': ['17', '6'],\n                },\n            });\n        }\n    }\n    if (netflowReportQueryParams.srcPort) {\n        filter.push({\n            terms: {\n                'netflow.src_port': netflowReportQueryParams.srcPort,\n            },\n        });\n    }\n    if (netflowReportQueryParams.srcAddress) {\n        filter.push({\n            wildcard: {\n                'netflow.src_addr': netflowReportQueryParams.srcAddress,\n            },\n        });\n    }\n    if (netflowReportQueryParams.dstPort) {\n        filter.push({\n            terms: {\n                'netflow.dst_port': netflowReportQueryParams.dstPort,\n            },\n        });\n    }\n    if (netflowReportQueryParams.dstAddress) {\n        filter.push({\n            wildcard: {\n                'netflow.dst_addr': netflowReportQueryParams.dstAddress,\n            },\n        });\n    }\n    if (netflowReportQueryParams.nasId) {\n        filter.push({\n            terms: {\n                nasId: netflowReportQueryParams.nasId,\n            },\n        });\n    }\n    if (netflowReportQueryParams.username) {\n        filter.push({\n            wildcard: {\n                username: netflowReportQueryParams.username,\n            },\n        });\n    }\n    return {\n        query: {\n            bool: {\n                filter,\n            },\n        },\n    };\n};\nconst netflowGroupByIp = async (fromDate, toDate) => {\n    const indexNames = getIndexNames(fromDate, toDate);\n    let data = [];\n    for (const indexName of indexNames) {\n        try {\n            const result = await aggregateNetflowByIp(indexName, fromDate, toDate);\n            if (result) {\n                data = data.concat(result);\n            }\n        }\n        catch (error) {\n            if (error.status === 404) {\n                log.warn(`${indexName} index not found`);\n            }\n            else {\n                log.error(error);\n                log.error(error.status);\n                throw error;\n            }\n        }\n    }\n    log.debug('netflow group by ip result length: ', data.length);\n    return data;\n};\nconst aggregateNetflowByIp = async (netflowIndex, fromDate, toDate) => {\n    try {\n        await elastic_1.default.search({});\n        const exist = await elastic_1.default.indices.exists({\n            index: netflowIndex,\n        });\n        if (!exist) {\n            return;\n        }\n        const queryResult = await elastic_1.default.search({\n            index: netflowIndex,\n            size: 0,\n            body: createNetflowGroupByAggregate(fromDate, toDate),\n        });\n        return queryResult.aggregations;\n    }\n    catch (e) {\n        log.error('error @aggregateNetflowByIp');\n        log.error(e);\n        throw e;\n    }\n};\nconst createNetflowGroupByAggregate = (fromDate, toDate) => {\n    return {\n        size: 0,\n        query: {\n            bool: {\n                must: [\n                    {\n                        range: {\n                            '@timestamp': {\n                                gte: fromDate.format(),\n                                lte: toDate.format(),\n                            },\n                        },\n                    },\n                ],\n                must_not: [\n                    {\n                        term: { status: 'enriched' },\n                    },\n                ],\n            },\n        },\n        aggs: {\n            group_by_nas_ip: {\n                terms: {\n                    field: 'host',\n                },\n                aggs: {\n                    group_by_member_ip: {\n                        terms: {\n                            field: 'netflow.src_addr',\n                        },\n                    },\n                },\n            },\n        },\n    };\n};\nconst createNetflowGroupByBusinessId = () => {\n    return {\n        size: 0,\n        aggs: {\n            group_by_business_id: {\n                terms: {\n                    field: 'businessId',\n                },\n            },\n        },\n    };\n};\nconst updateNetflows = async (fromDate, toDate, nasIp, memberIp, updates) => {\n    const indexNames = getIndexNames(fromDate, toDate);\n    let data = [];\n    //log.debug('INDEXES:', indexNames);\n    for (const indexName of indexNames) {\n        try {\n            log.debug('update query %j', createNetflowUpdateQuery(fromDate, toDate, nasIp, memberIp, updates));\n            const result = await elastic_1.default.updateByQuery({\n                index: indexName,\n                type: 'doc',\n                maxRetries: 5,\n                conflicts: 'proceed',\n                body: createNetflowUpdateQuery(fromDate, toDate, nasIp, memberIp, updates),\n            });\n            data = data.concat(result);\n        }\n        catch (error) {\n            if (error.status === 404) {\n                log.warn(`${indexName} index not found`);\n            }\n            else {\n                log.error('error @updateNetflows');\n                log.error(error.status);\n                throw error;\n            }\n        }\n    }\n    log.debug(data);\n    return data;\n};\nconst createNetflowUpdateQuery = (fromDate, toDate, nasIp, memberIp, update) => {\n    return {\n        query: {\n            bool: {\n                must_not: [\n                    {\n                        term: { status: 'enriched' },\n                    },\n                ],\n                filter: [\n                    { term: { host: nasIp } },\n                    {\n                        range: {\n                            '@timestamp': {\n                                gte: fromDate.format(),\n                                lte: toDate.format(),\n                            },\n                        },\n                    },\n                ],\n                should: [\n                    {\n                        term: {\n                            'netflow.src_addr': memberIp,\n                        },\n                    },\n                    {\n                        term: {\n                            'netflow.dst_addr': memberIp,\n                        },\n                    },\n                ],\n                minimum_should_match: 1,\n            },\n        },\n        script: {\n            lang: 'painless',\n            params: update,\n            source: `ctx._source.username=params.username;\n      ctx._source.status=\"enriched\";\n      ctx._source.nasId=params.nasId;\n      ctx._source.nasTitle=params.nasTitle;\n      ctx._source.mac=params.mac;\n      ctx._source.memberId=params.memberId;\n      ctx._source.businessId=params.businessId`,\n        },\n    };\n};\nexports.default = {\n    updateNetflows,\n    netflowGroupByIp,\n    getNetflowReports,\n    countBusinessReports,\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/worker/netflow.ts");

/***/ }),

/***/ "./worker/session.ts":
/*!***************************!*\
  !*** ./worker/session.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst elastic_1 = __importDefault(__webpack_require__(/*! ../utils/elastic */ \"./utils/elastic.ts\"));\nconst moment_timezone_1 = __importDefault(__webpack_require__(/*! moment-timezone */ \"moment-timezone\"));\nconst typings_1 = __webpack_require__(/*! ../typings */ \"./typings/index.ts\");\nconst SESSION_LOG_INDEX = `${process.env.ELASTIC_INDEX_PREFIX}sessions`;\nconst log = logger_1.default.createLogger();\nconst countSessions = async (sessionQuery) => {\n    const result = await elastic_1.default.count({\n        index: SESSION_LOG_INDEX,\n        body: createSearchSessionQuery(sessionQuery),\n    });\n    return result;\n};\nconst findSessions = async (reportRequestTask) => {\n    const countResponse = await countSessions(reportRequestTask);\n    const totalSessions = countResponse.count;\n    const maxResultSize = 500;\n    log.debug(Math.ceil(totalSessions / maxResultSize));\n    const partsLen = totalSessions > maxResultSize\n        ? Math.ceil(totalSessions / maxResultSize)\n        : 1;\n    const parts = new Array(partsLen);\n    let from = 0;\n    let result = [];\n    for (const i of parts) {\n        try {\n            const queryResult = await querySessions(from, maxResultSize, reportRequestTask);\n            if (queryResult.hits) {\n                result = result.concat(queryResult.hits.hits);\n            }\n            else {\n                log.warn(queryResult);\n            }\n            from = from + maxResultSize;\n        }\n        catch (error) {\n            log.error(error);\n            throw error;\n        }\n    }\n    const clientIpList = new Set();\n    const nasIpList = new Set();\n    result.map((item) => {\n        clientIpList.add(item._source.framedIpAddress);\n        nasIpList.add(item._source.nasIp);\n    });\n    log.debug(Array.from(clientIpList));\n    log.debug(Array.from(nasIpList));\n    return {\n        memberIpList: Array.from(clientIpList),\n        nasIpList: Array.from(nasIpList),\n    };\n};\nconst querySessions = async (from, size, sessionQuery) => {\n    //log.debug(`session query %j`, createSearchSessionQuery(sessionQuery));\n    const result = await elastic_1.default.search({\n        index: SESSION_LOG_INDEX,\n        from,\n        size,\n        filterPath: [\n            'hits.hits._source.framedIpAddress',\n            'hits.hits._source.nasIp',\n        ],\n        body: createSearchSessionQuery(sessionQuery),\n    });\n    return result;\n};\nconst createSearchSessionQuery = (sessionQuery) => {\n    return {\n        query: {\n            bool: {\n                must: [\n                    {\n                        term: {\n                            memberId: sessionQuery.memberId,\n                        },\n                    },\n                    {\n                        term: {\n                            businessId: sessionQuery.businessId,\n                        },\n                    },\n                    {\n                        range: {\n                            '@timestamp': {\n                                gte: sessionQuery.fromDate.format(),\n                                lte: sessionQuery.toDate.format(),\n                            },\n                        },\n                    },\n                ],\n            },\n        },\n    };\n};\nconst querySessionsByIp = async (nasIp, memberIp, from, to) => {\n    const fromDate = moment_timezone_1.default.tz(from, typings_1.LOGGER_TIME_ZONE);\n    const toDate = moment_timezone_1.default.tz(to, typings_1.LOGGER_TIME_ZONE);\n    log.debug(`session query %j`, createSessionByIpQuery(nasIp, memberIp, fromDate, toDate));\n    const result = await elastic_1.default.search({\n        index: SESSION_LOG_INDEX,\n        size: 0,\n        body: createSessionByIpQuery(nasIp, memberIp, fromDate, toDate),\n    });\n    if (result.aggregations.group_by_username.buckets.length > 0) {\n        log.warn('query session: %j  result:', createSessionByIpQuery(nasIp, memberIp, fromDate, toDate), JSON.stringify(result));\n    }\n    return result.aggregations;\n};\nconst createSessionByIpQuery = (nasIp, memberIp, fromDate, toDate) => {\n    return {\n        query: {\n            bool: {\n                must: [\n                    {\n                        range: {\n                            '@timestamp': {\n                                gte: fromDate.format(),\n                                lte: toDate.format(),\n                            },\n                        },\n                    },\n                    {\n                        terms: {\n                            nasIp: [nasIp],\n                        },\n                    },\n                    {\n                        terms: {\n                            framedIpAddress: [memberIp],\n                        },\n                    },\n                ],\n            },\n        },\n        aggs: {\n            group_by_username: {\n                terms: {\n                    field: 'username',\n                },\n            },\n            extra: {\n                top_hits: {\n                    size: 1,\n                },\n            },\n        },\n    };\n};\nexports.default = {\n    querySessionsByIp,\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/worker/session.ts");

/***/ }),

/***/ "./worker/syslog.ts":
/*!**************************!*\
  !*** ./worker/syslog.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./utils/logger.ts\"));\nconst elastic_1 = __importDefault(__webpack_require__(/*! ../utils/elastic */ \"./utils/elastic.ts\"));\nconst moment_timezone_1 = __importDefault(__webpack_require__(/*! moment-timezone */ \"moment-timezone\"));\nconst moment_jalaali_1 = __importDefault(__webpack_require__(/*! moment-jalaali */ \"moment-jalaali\"));\nconst typings_1 = __webpack_require__(/*! ../typings */ \"./typings/index.ts\");\nconst lodash_1 = __importDefault(__webpack_require__(/*! lodash */ \"lodash\"));\nconst SYSLOG_LOG_INDEX_PREFIX = `syslog-`;\nconst log = logger_1.default.createLogger();\nconst getIndexNames = (from, to) => {\n    const fromDateCounter = from.clone();\n    const diffBetweenInMs = to.diff(fromDateCounter);\n    let days = 0;\n    if (diffBetweenInMs > 86400000) {\n        days = Math.ceil(diffBetweenInMs / 86400000);\n    }\n    const indexNames = [exports.createSyslogIndexName(fromDateCounter)];\n    for (let i = 0; i < days; i++) {\n        fromDateCounter.add(1, 'days');\n        indexNames.push(exports.createSyslogIndexName(fromDateCounter));\n    }\n    return indexNames;\n};\nconst getSyslogReports = async (syslogReportRequestTask) => {\n    const fromDate = syslogReportRequestTask.fromDate;\n    const toDate = syslogReportRequestTask.toDate;\n    const indexNames = getIndexNames(fromDate, toDate);\n    let data = [];\n    log.debug('indexes: ', indexNames);\n    for (const indexName of indexNames) {\n        try {\n            const result = await getSyslogByIndex(indexName, {\n                fromDate,\n                toDate,\n                method: syslogReportRequestTask.method,\n                domain: syslogReportRequestTask.domain,\n                nasId: syslogReportRequestTask.nasId,\n                url: syslogReportRequestTask.url,\n                username: syslogReportRequestTask.username,\n            });\n            if (result) {\n                data = data.concat(result);\n            }\n        }\n        catch (error) {\n            if (error.status === 404) {\n                log.warn(`${indexName} index not found`);\n            }\n            else {\n                log.error(error.status);\n                throw error;\n            }\n        }\n    }\n    //log.debug('log', data);\n    log.debug('Result size:', data.length);\n    //log.debug(formattedResult);\n    return formatReports(data);\n};\nconst formatReports = (rawSyslogReports) => {\n    const formatted = rawSyslogReports.map((rawReport) => {\n        const localDate = moment_timezone_1.default.tz(rawReport._source['@timestamp'], typings_1.LOCAL_TIME_ZONE);\n        const gregorianDate = moment_timezone_1.default.tz(rawReport._source['@timestamp'], typings_1.LOCAL_TIME_ZONE);\n        const jalaaliDate = moment_jalaali_1.default(localDate);\n        return {\n            Router: rawReport._source.nasTitle,\n            Username: rawReport._source.username,\n            IP: rawReport._source.memberIp,\n            Mac: rawReport._source.mac,\n            Jalali_Date: getJalaaliDate(jalaaliDate),\n            Http_Method: rawReport._source.method,\n            Domain: rawReport._source.domain,\n            Url: rawReport._source.url,\n            Gregorian_Date: gregorianDate.format('YYYY/MM/DD HH:mm'),\n        };\n    });\n    return lodash_1.default.sortBy(formatted, ['Router', 'Username', 'Jalali_Date', 'Domain']);\n};\nconst getJalaaliDate = (date) => {\n    return date.format('jYYYY/jM/jD HH:MM');\n};\nexports.createSyslogIndexName = (fromDate) => {\n    return `${SYSLOG_LOG_INDEX_PREFIX}${fromDate.format('YYYY.MM.DD')}`;\n};\nconst getSyslogByIndex = async (syslogIndex, syslogReportQueryParams) => {\n    const exist = await elastic_1.default.indices.exists({\n        index: syslogIndex,\n    });\n    if (!exist) {\n        return;\n    }\n    const query = createSyslogQuery(syslogReportQueryParams);\n    const countResponse = await elastic_1.default.count({\n        index: syslogIndex,\n        body: query,\n    });\n    log.debug(`query from ${syslogIndex} from ${syslogReportQueryParams.fromDate.format()} to ${syslogReportQueryParams.toDate.format()}`);\n    const totalLogs = countResponse.count;\n    if (totalLogs === 0) {\n        return;\n    }\n    let result = [];\n    const scrollTtl = '2m';\n    const maxResultSize = 500;\n    log.debug(`total logs count ${totalLogs}`);\n    const scrollResult = await elastic_1.default.search({\n        scroll: scrollTtl,\n        index: syslogIndex,\n        size: maxResultSize,\n        sort: ['_doc'],\n        body: query,\n        ignore: [404],\n    });\n    if (!scrollResult._scroll_id) {\n        throw new Error('invalid scrollId ');\n    }\n    let scrollId = scrollResult._scroll_id;\n    const allScrollId = [scrollId];\n    if (scrollResult.hits) {\n        result = result.concat(scrollResult.hits.hits);\n    }\n    const partsLen = totalLogs > maxResultSize ? Math.ceil(totalLogs / maxResultSize) : 1;\n    log.debug(`query parts: ${partsLen}`);\n    const parts = new Array(partsLen);\n    for (const i of parts) {\n        try {\n            const queryResult = await elastic_1.default.scroll({\n                scrollId: scrollId,\n                scroll: scrollTtl,\n            });\n            if (queryResult._scroll_id && queryResult._scroll_id !== scrollId) {\n                log.debug('new scroll id : ', queryResult._scroll_id);\n                scrollId = queryResult._scroll_id;\n                allScrollId.push(scrollId);\n            }\n            if (queryResult.hits) {\n                result = result.concat(queryResult.hits.hits);\n            }\n            else {\n                log.warn(queryResult);\n            }\n        }\n        catch (error) {\n            log.error(error);\n            throw error;\n        }\n    }\n    log.debug('ids:', allScrollId);\n    const clearanceRes = await elastic_1.default.clearScroll({\n        scrollId: allScrollId,\n    });\n    log.debug('clear: ', clearanceRes);\n    return result;\n};\nconst createSyslogQuery = (syslogReportQueryParams) => {\n    const filter = [];\n    if (syslogReportQueryParams.domain) {\n        filter.push({\n            wildcard: {\n                domain: syslogReportQueryParams.domain,\n            },\n        });\n    }\n    if (syslogReportQueryParams.username) {\n        filter.push({\n            wildcard: {\n                username: syslogReportQueryParams.username,\n            },\n        });\n    }\n    if (syslogReportQueryParams.url) {\n        filter.push({\n            wildcard: {\n                url: syslogReportQueryParams.url,\n            },\n        });\n    }\n    filter.push({\n        term: {\n            status: 'enriched',\n        },\n    });\n    filter.push({\n        range: {\n            '@timestamp': {\n                gte: syslogReportQueryParams.fromDate.format(),\n                lte: syslogReportQueryParams.toDate.format(),\n            },\n        },\n    });\n    if (syslogReportQueryParams.method) {\n        filter.push({\n            terms: {\n                method: syslogReportQueryParams.method,\n            },\n        });\n    }\n    if (syslogReportQueryParams.nasId) {\n        filter.push({\n            terms: {\n                nasId: syslogReportQueryParams.nasId,\n            },\n        });\n    }\n    return {\n        query: {\n            bool: {\n                filter,\n            },\n        },\n    };\n};\nconst syslogGroupByIp = async (fromDate, toDate) => {\n    const indexNames = getIndexNames(fromDate, toDate);\n    let data = [];\n    for (const indexName of indexNames) {\n        try {\n            const result = await aggregateSyslogByIp(indexName, fromDate, toDate);\n            if (result) {\n                data = data.concat(result);\n            }\n        }\n        catch (error) {\n            if (error.status === 404) {\n                log.warn(`${indexName} index not found`);\n            }\n            else {\n                log.error(error.status);\n                throw error;\n            }\n        }\n    }\n    log.debug('syslog group by ip result length: ', data.length);\n    return data;\n};\nconst aggregateSyslogByIp = async (syslogIndex, fromDate, toDate) => {\n    const exist = await elastic_1.default.indices.exists({\n        index: syslogIndex,\n    });\n    if (!exist) {\n        return;\n    }\n    const queryResult = await elastic_1.default.search({\n        index: syslogIndex,\n        size: 0,\n        body: createSyslogGroupByQuery(fromDate, toDate),\n    });\n    return queryResult.aggregations;\n};\nconst createSyslogGroupByQuery = (fromDate, toDate) => {\n    return {\n        size: 0,\n        query: {\n            bool: {\n                must_not: [\n                    {\n                        term: { status: 'enriched' },\n                    },\n                ],\n                filter: [\n                    {\n                        range: {\n                            '@timestamp': {\n                                gte: fromDate.format(),\n                                lte: toDate.format(),\n                            },\n                        },\n                    },\n                ],\n            },\n        },\n        aggs: {\n            group_by_nas_ip: {\n                terms: {\n                    field: 'nasIp',\n                },\n                aggs: {\n                    group_by_member_ip: {\n                        terms: {\n                            field: 'memberIp',\n                        },\n                    },\n                },\n            },\n        },\n    };\n};\nconst updateSyslogs = async (fromDate, toDate, nasIp, memberIp, updates) => {\n    const indexNames = getIndexNames(fromDate, toDate);\n    let data = [];\n    log.debug('INDEXES:', indexNames);\n    for (const index of indexNames) {\n        try {\n            const result = await elastic_1.default.updateByQuery({\n                index,\n                type: 'doc',\n                maxRetries: 5,\n                conflicts: 'proceed',\n                body: createUsernameUpdateQuery(fromDate, toDate, nasIp, memberIp, updates),\n            });\n            data = data.concat(result);\n        }\n        catch (error) {\n            if (error.status === 404) {\n                log.warn(`${index} index not found`);\n            }\n            else {\n                log.error(error.status);\n                throw error;\n            }\n        }\n    }\n    log.debug(data);\n    return data;\n};\nconst createUsernameUpdateQuery = (fromDate, toDate, nasIp, memberIp, update) => {\n    return {\n        query: {\n            bool: {\n                must_not: [\n                    {\n                        term: { status: 'enriched' },\n                    },\n                ],\n                filter: [\n                    {\n                        range: {\n                            '@timestamp': {\n                                gte: fromDate.format(),\n                                lte: toDate.format(),\n                            },\n                        },\n                    },\n                    {\n                        term: {\n                            nasIp,\n                        },\n                    },\n                    {\n                        term: {\n                            memberIp,\n                        },\n                    },\n                ],\n            },\n        },\n        script: {\n            lang: 'painless',\n            params: update,\n            source: `ctx._source['username']=params.username;\n            ctx._source['status']= \"enriched\";\n            ctx._source['nasId']=params.nasId;\n            ctx._source['nasTitle']=params.nasTitle;\n            ctx._source['mac']=params.mac;\n            ctx._source['memberId']=params.memberId;\n            ctx._source['businessId']=params.businessId;\n            `,\n        },\n    };\n};\nconst countBusinessReports = async (fromDate, toDate) => {\n    const indexNames = getIndexNames(fromDate, toDate);\n    let reportCounts = [];\n    for (const index of indexNames) {\n        const exist = await elastic_1.default.indices.exists({\n            index,\n        });\n        if (exist) {\n            const response = await elastic_1.default.search({\n                index,\n                body: createSyslogGroupByBusinessIdQuery(),\n            });\n            if (response.aggregations.group_by_business_id &&\n                response.aggregations.group_by_business_id.buckets) {\n                reportCounts = reportCounts.concat(response.aggregations.group_by_business_id.buckets);\n            }\n        }\n    }\n    const businessReportCount = {};\n    for (const reportCount of reportCounts) {\n        businessReportCount[reportCount.key] =\n            businessReportCount[reportCount.key] || 0;\n        businessReportCount[reportCount.key] =\n            businessReportCount[reportCount.key] + reportCount.doc_count;\n    }\n    log.error('2783648723647263478627486278634728643');\n    log.error(businessReportCount);\n    return businessReportCount;\n};\nconst createSyslogGroupByBusinessIdQuery = () => {\n    return {\n        size: 0,\n        aggs: {\n            group_by_business_id: {\n                terms: {\n                    field: 'businessId',\n                },\n            },\n        },\n    };\n};\nexports.default = {\n    syslogGroupByIp,\n    updateSyslogs,\n    getSyslogReports,\n    countBusinessReports,\n};\n\n\n//# sourceURL=file:////Users/payamyousefi/projects/hotspotplus/log-worker/src/worker/syslog.ts");

/***/ }),

/***/ "amqplib":
/*!**************************!*\
  !*** external "amqplib" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"amqplib\");\n\n//# sourceURL=file:///external%2520%2522amqplib%2522");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=file:///external%2520%2522axios%2522");

/***/ }),

/***/ "bunyan":
/*!*************************!*\
  !*** external "bunyan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bunyan\");\n\n//# sourceURL=file:///external%2520%2522bunyan%2522");

/***/ }),

/***/ "cron":
/*!***********************!*\
  !*** external "cron" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cron\");\n\n//# sourceURL=file:///external%2520%2522cron%2522");

/***/ }),

/***/ "elasticsearch":
/*!********************************!*\
  !*** external "elasticsearch" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"elasticsearch\");\n\n//# sourceURL=file:///external%2520%2522elasticsearch%2522");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=file:///external%2520%2522express%2522");

/***/ }),

/***/ "express-promise-router":
/*!*****************************************!*\
  !*** external "express-promise-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-promise-router\");\n\n//# sourceURL=file:///external%2520%2522express-promise-router%2522");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=file:///external%2520%2522fs%2522");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=file:///external%2520%2522http%2522");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=file:///external%2520%2522https%2522");

/***/ }),

/***/ "json2csv":
/*!***************************!*\
  !*** external "json2csv" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"json2csv\");\n\n//# sourceURL=file:///external%2520%2522json2csv%2522");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=file:///external%2520%2522lodash%2522");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=file:///external%2520%2522moment%2522");

/***/ }),

/***/ "moment-jalaali":
/*!*********************************!*\
  !*** external "moment-jalaali" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment-jalaali\");\n\n//# sourceURL=file:///external%2520%2522moment-jalaali%2522");

/***/ }),

/***/ "moment-timezone":
/*!**********************************!*\
  !*** external "moment-timezone" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment-timezone\");\n\n//# sourceURL=file:///external%2520%2522moment-timezone%2522");

/***/ }),

/***/ "request-promise":
/*!**********************************!*\
  !*** external "request-promise" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request-promise\");\n\n//# sourceURL=file:///external%2520%2522request-promise%2522");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=file:///external%2520%2522stream%2522");

/***/ }),

/***/ "tmp-promise":
/*!******************************!*\
  !*** external "tmp-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tmp-promise\");\n\n//# sourceURL=file:///external%2520%2522tmp-promise%2522");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=file:///external%2520%2522util%2522");

/***/ })

/******/ })));