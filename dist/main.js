/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bpmn-moddle/dist/index.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/bpmn-moddle/dist/index.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var moddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moddle */ "./node_modules/moddle/dist/index.esm.js");
/* harmony import */ var moddle_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moddle-xml */ "./node_modules/moddle-xml/dist/index.esm.js");




/**
 * A sub class of {@link Moddle} with support for import and export of BPMN 2.0 xml files.
 *
 * @class BpmnModdle
 * @extends Moddle
 *
 * @param {Object|Array} packages to use for instantiating the model
 * @param {Object} [options] additional options to pass over
 */
function BpmnModdle(packages, options) {
  moddle__WEBPACK_IMPORTED_MODULE_1__["Moddle"].call(this, packages, options);
}

BpmnModdle.prototype = Object.create(moddle__WEBPACK_IMPORTED_MODULE_1__["Moddle"].prototype);


/**
 * Instantiates a BPMN model tree from a given xml string.
 *
 * @param {String}   xmlStr
 * @param {String}   [typeName='bpmn:Definitions'] name of the root element
 * @param {Object}   [options]  options to pass to the underlying reader
 * @param {Function} done       callback that is invoked with (err, result, parseContext)
 *                              once the import completes
 */
BpmnModdle.prototype.fromXML = function(xmlStr, typeName, options, done) {

  if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isString"])(typeName)) {
    done = options;
    options = typeName;
    typeName = 'bpmn:Definitions';
  }

  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(options)) {
    done = options;
    options = {};
  }

  var reader = new moddle_xml__WEBPACK_IMPORTED_MODULE_2__["Reader"](Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({ model: this, lax: true }, options));
  var rootHandler = reader.handler(typeName);

  reader.fromXML(xmlStr, rootHandler, done);
};


/**
 * Serializes a BPMN 2.0 object tree to XML.
 *
 * @param {String}   element    the root element, typically an instance of `bpmn:Definitions`
 * @param {Object}   [options]  to pass to the underlying writer
 * @param {Function} done       callback invoked with (err, xmlStr) once the import completes
 */
BpmnModdle.prototype.toXML = function(element, options, done) {

  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(options)) {
    done = options;
    options = {};
  }

  var writer = new moddle_xml__WEBPACK_IMPORTED_MODULE_2__["Writer"](options);

  var result;
  var err;

  try {
    result = writer.toXML(element);
  } catch (e) {
    err = e;
  }

  return done(err, result);
};

var name = "BPMN20";
var uri = "http://www.omg.org/spec/BPMN/20100524/MODEL";
var associations = [
];
var types = [
	{
		name: "Interface",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "operations",
				type: "Operation",
				isMany: true
			},
			{
				name: "implementationRef",
				type: "String",
				isAttr: true
			}
		]
	},
	{
		name: "Operation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "inMessageRef",
				type: "Message",
				isReference: true
			},
			{
				name: "outMessageRef",
				type: "Message",
				isReference: true
			},
			{
				name: "errorRef",
				type: "Error",
				isMany: true,
				isReference: true
			},
			{
				name: "implementationRef",
				type: "String",
				isAttr: true
			}
		]
	},
	{
		name: "EndPoint",
		superClass: [
			"RootElement"
		]
	},
	{
		name: "Auditing",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "GlobalTask",
		superClass: [
			"CallableElement"
		],
		properties: [
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			}
		]
	},
	{
		name: "Monitoring",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Performer",
		superClass: [
			"ResourceRole"
		]
	},
	{
		name: "Process",
		superClass: [
			"FlowElementsContainer",
			"CallableElement"
		],
		properties: [
			{
				name: "processType",
				type: "ProcessType",
				isAttr: true
			},
			{
				name: "isClosed",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "auditing",
				type: "Auditing"
			},
			{
				name: "monitoring",
				type: "Monitoring"
			},
			{
				name: "properties",
				type: "Property",
				isMany: true
			},
			{
				name: "laneSets",
				type: "LaneSet",
				isMany: true,
				replaces: "FlowElementsContainer#laneSets"
			},
			{
				name: "flowElements",
				type: "FlowElement",
				isMany: true,
				replaces: "FlowElementsContainer#flowElements"
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			},
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			},
			{
				name: "correlationSubscriptions",
				type: "CorrelationSubscription",
				isMany: true
			},
			{
				name: "supports",
				type: "Process",
				isMany: true,
				isReference: true
			},
			{
				name: "definitionalCollaborationRef",
				type: "Collaboration",
				isAttr: true,
				isReference: true
			},
			{
				name: "isExecutable",
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "LaneSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "lanes",
				type: "Lane",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Lane",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "partitionElementRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			},
			{
				name: "partitionElement",
				type: "BaseElement"
			},
			{
				name: "flowNodeRef",
				type: "FlowNode",
				isMany: true,
				isReference: true
			},
			{
				name: "childLaneSet",
				type: "LaneSet",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "GlobalManualTask",
		superClass: [
			"GlobalTask"
		]
	},
	{
		name: "ManualTask",
		superClass: [
			"Task"
		]
	},
	{
		name: "UserTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "renderings",
				type: "Rendering",
				isMany: true
			},
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Rendering",
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "HumanPerformer",
		superClass: [
			"Performer"
		]
	},
	{
		name: "PotentialOwner",
		superClass: [
			"HumanPerformer"
		]
	},
	{
		name: "GlobalUserTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "renderings",
				type: "Rendering",
				isMany: true
			}
		]
	},
	{
		name: "Gateway",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "gatewayDirection",
				type: "GatewayDirection",
				"default": "Unspecified",
				isAttr: true
			}
		]
	},
	{
		name: "EventBasedGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "instantiate",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "eventGatewayType",
				type: "EventBasedGatewayType",
				isAttr: true,
				"default": "Exclusive"
			}
		]
	},
	{
		name: "ComplexGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "activationCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExclusiveGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "InclusiveGateway",
		superClass: [
			"Gateway"
		],
		properties: [
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParallelGateway",
		superClass: [
			"Gateway"
		]
	},
	{
		name: "RootElement",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Relationship",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "type",
				isAttr: true,
				type: "String"
			},
			{
				name: "direction",
				type: "RelationshipDirection",
				isAttr: true
			},
			{
				name: "source",
				isMany: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "target",
				isMany: true,
				isReference: true,
				type: "Element"
			}
		]
	},
	{
		name: "BaseElement",
		isAbstract: true,
		properties: [
			{
				name: "id",
				isAttr: true,
				type: "String",
				isId: true
			},
			{
				name: "documentation",
				type: "Documentation",
				isMany: true
			},
			{
				name: "extensionDefinitions",
				type: "ExtensionDefinition",
				isMany: true,
				isReference: true
			},
			{
				name: "extensionElements",
				type: "ExtensionElements"
			}
		]
	},
	{
		name: "Extension",
		properties: [
			{
				name: "mustUnderstand",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "definition",
				type: "ExtensionDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExtensionDefinition",
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "extensionAttributeDefinitions",
				type: "ExtensionAttributeDefinition",
				isMany: true
			}
		]
	},
	{
		name: "ExtensionAttributeDefinition",
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "type",
				isAttr: true,
				type: "String"
			},
			{
				name: "isReference",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "extensionDefinition",
				type: "ExtensionDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ExtensionElements",
		properties: [
			{
				name: "valueRef",
				isAttr: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "values",
				type: "Element",
				isMany: true
			},
			{
				name: "extensionAttributeDefinition",
				type: "ExtensionAttributeDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Documentation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "text",
				type: "String",
				isBody: true
			},
			{
				name: "textFormat",
				"default": "text/plain",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Event",
		isAbstract: true,
		superClass: [
			"FlowNode",
			"InteractionNode"
		],
		properties: [
			{
				name: "properties",
				type: "Property",
				isMany: true
			}
		]
	},
	{
		name: "IntermediateCatchEvent",
		superClass: [
			"CatchEvent"
		]
	},
	{
		name: "IntermediateThrowEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "EndEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "StartEvent",
		superClass: [
			"CatchEvent"
		],
		properties: [
			{
				name: "isInterrupting",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "ThrowEvent",
		isAbstract: true,
		superClass: [
			"Event"
		],
		properties: [
			{
				name: "dataInputs",
				type: "DataInput",
				isMany: true
			},
			{
				name: "dataInputAssociations",
				type: "DataInputAssociation",
				isMany: true
			},
			{
				name: "inputSet",
				type: "InputSet"
			},
			{
				name: "eventDefinitions",
				type: "EventDefinition",
				isMany: true
			},
			{
				name: "eventDefinitionRef",
				type: "EventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "CatchEvent",
		isAbstract: true,
		superClass: [
			"Event"
		],
		properties: [
			{
				name: "parallelMultiple",
				isAttr: true,
				type: "Boolean",
				"default": false
			},
			{
				name: "dataOutputs",
				type: "DataOutput",
				isMany: true
			},
			{
				name: "dataOutputAssociations",
				type: "DataOutputAssociation",
				isMany: true
			},
			{
				name: "outputSet",
				type: "OutputSet"
			},
			{
				name: "eventDefinitions",
				type: "EventDefinition",
				isMany: true
			},
			{
				name: "eventDefinitionRef",
				type: "EventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "BoundaryEvent",
		superClass: [
			"CatchEvent"
		],
		properties: [
			{
				name: "cancelActivity",
				"default": true,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "attachedToRef",
				type: "Activity",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "EventDefinition",
		isAbstract: true,
		superClass: [
			"RootElement"
		]
	},
	{
		name: "CancelEventDefinition",
		superClass: [
			"EventDefinition"
		]
	},
	{
		name: "ErrorEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "errorRef",
				type: "Error",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TerminateEventDefinition",
		superClass: [
			"EventDefinition"
		]
	},
	{
		name: "EscalationEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "escalationRef",
				type: "Escalation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Escalation",
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "escalationCode",
				isAttr: true,
				type: "String"
			}
		],
		superClass: [
			"RootElement"
		]
	},
	{
		name: "CompensateEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "waitForCompletion",
				isAttr: true,
				type: "Boolean",
				"default": true
			},
			{
				name: "activityRef",
				type: "Activity",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TimerEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "timeDate",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "timeCycle",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "timeDuration",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "LinkEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "target",
				type: "LinkEventDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "source",
				type: "LinkEventDefinition",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "MessageEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ConditionalEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "condition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "SignalEventDefinition",
		superClass: [
			"EventDefinition"
		],
		properties: [
			{
				name: "signalRef",
				type: "Signal",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Signal",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ImplicitThrowEvent",
		superClass: [
			"ThrowEvent"
		]
	},
	{
		name: "DataState",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ItemAwareElement",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "itemSubjectRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "dataState",
				type: "DataState"
			}
		]
	},
	{
		name: "DataAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "assignment",
				type: "Assignment",
				isMany: true
			},
			{
				name: "sourceRef",
				type: "ItemAwareElement",
				isMany: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "transformation",
				type: "FormalExpression",
				xml: {
					serialize: "property"
				}
			}
		]
	},
	{
		name: "DataInput",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "inputSetRef",
				type: "InputSet",
				isVirtual: true,
				isMany: true,
				isReference: true
			},
			{
				name: "inputSetWithOptional",
				type: "InputSet",
				isVirtual: true,
				isMany: true,
				isReference: true
			},
			{
				name: "inputSetWithWhileExecuting",
				type: "InputSet",
				isVirtual: true,
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "DataOutput",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "outputSetRef",
				type: "OutputSet",
				isVirtual: true,
				isMany: true,
				isReference: true
			},
			{
				name: "outputSetWithOptional",
				type: "OutputSet",
				isVirtual: true,
				isMany: true,
				isReference: true
			},
			{
				name: "outputSetWithWhileExecuting",
				type: "OutputSet",
				isVirtual: true,
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "InputSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "dataInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "optionalInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "whileExecutingInputRefs",
				type: "DataInput",
				isMany: true,
				isReference: true
			},
			{
				name: "outputSetRefs",
				type: "OutputSet",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "OutputSet",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "inputSetRefs",
				type: "InputSet",
				isMany: true,
				isReference: true
			},
			{
				name: "optionalOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			},
			{
				name: "whileExecutingOutputRefs",
				type: "DataOutput",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "Property",
		superClass: [
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "DataInputAssociation",
		superClass: [
			"DataAssociation"
		]
	},
	{
		name: "DataOutputAssociation",
		superClass: [
			"DataAssociation"
		]
	},
	{
		name: "InputOutputSpecification",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataInputs",
				type: "DataInput",
				isMany: true
			},
			{
				name: "dataOutputs",
				type: "DataOutput",
				isMany: true
			},
			{
				name: "inputSets",
				type: "InputSet",
				isMany: true
			},
			{
				name: "outputSets",
				type: "OutputSet",
				isMany: true
			}
		]
	},
	{
		name: "DataObject",
		superClass: [
			"FlowElement",
			"ItemAwareElement"
		],
		properties: [
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "InputOutputBinding",
		properties: [
			{
				name: "inputDataRef",
				type: "InputSet",
				isAttr: true,
				isReference: true
			},
			{
				name: "outputDataRef",
				type: "OutputSet",
				isAttr: true,
				isReference: true
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Assignment",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "from",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "to",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "DataStore",
		superClass: [
			"RootElement",
			"ItemAwareElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "capacity",
				isAttr: true,
				type: "Integer"
			},
			{
				name: "isUnlimited",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "DataStoreReference",
		superClass: [
			"ItemAwareElement",
			"FlowElement"
		],
		properties: [
			{
				name: "dataStoreRef",
				type: "DataStore",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "DataObjectReference",
		superClass: [
			"ItemAwareElement",
			"FlowElement"
		],
		properties: [
			{
				name: "dataObjectRef",
				type: "DataObject",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ConversationLink",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "sourceRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ConversationAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerConversationNodeRef",
				type: "ConversationNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerConversationNodeRef",
				type: "ConversationNode",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CallConversation",
		superClass: [
			"ConversationNode"
		],
		properties: [
			{
				name: "calledCollaborationRef",
				type: "Collaboration",
				isAttr: true,
				isReference: true
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			}
		]
	},
	{
		name: "Conversation",
		superClass: [
			"ConversationNode"
		]
	},
	{
		name: "SubConversation",
		superClass: [
			"ConversationNode"
		],
		properties: [
			{
				name: "conversationNodes",
				type: "ConversationNode",
				isMany: true
			}
		]
	},
	{
		name: "ConversationNode",
		isAbstract: true,
		superClass: [
			"InteractionNode",
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			},
			{
				name: "messageFlowRefs",
				type: "MessageFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			}
		]
	},
	{
		name: "GlobalConversation",
		superClass: [
			"Collaboration"
		]
	},
	{
		name: "PartnerEntity",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "PartnerRole",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationProperty",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "correlationPropertyRetrievalExpression",
				type: "CorrelationPropertyRetrievalExpression",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "type",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Error",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "structureRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "errorCode",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "CorrelationKey",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "correlationPropertyRef",
				type: "CorrelationProperty",
				isMany: true,
				isReference: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Expression",
		superClass: [
			"BaseElement"
		],
		isAbstract: false,
		properties: [
			{
				name: "body",
				type: "String",
				isBody: true
			}
		]
	},
	{
		name: "FormalExpression",
		superClass: [
			"Expression"
		],
		properties: [
			{
				name: "language",
				isAttr: true,
				type: "String"
			},
			{
				name: "evaluatesToTypeRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Message",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "itemRef",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ItemDefinition",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "itemKind",
				type: "ItemKind",
				isAttr: true
			},
			{
				name: "structureRef",
				type: "String",
				isAttr: true
			},
			{
				name: "isCollection",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "import",
				type: "Import",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "FlowElement",
		isAbstract: true,
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "auditing",
				type: "Auditing"
			},
			{
				name: "monitoring",
				type: "Monitoring"
			},
			{
				name: "categoryValueRef",
				type: "CategoryValue",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "SequenceFlow",
		superClass: [
			"FlowElement"
		],
		properties: [
			{
				name: "isImmediate",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "conditionExpression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "sourceRef",
				type: "FlowNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "FlowNode",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "FlowElementsContainer",
		isAbstract: true,
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "laneSets",
				type: "LaneSet",
				isMany: true
			},
			{
				name: "flowElements",
				type: "FlowElement",
				isMany: true
			}
		]
	},
	{
		name: "CallableElement",
		isAbstract: true,
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "ioSpecification",
				type: "InputOutputSpecification",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "supportedInterfaceRef",
				type: "Interface",
				isMany: true,
				isReference: true
			},
			{
				name: "ioBinding",
				type: "InputOutputBinding",
				isMany: true,
				xml: {
					serialize: "property"
				}
			}
		]
	},
	{
		name: "FlowNode",
		isAbstract: true,
		superClass: [
			"FlowElement"
		],
		properties: [
			{
				name: "incoming",
				type: "SequenceFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "outgoing",
				type: "SequenceFlow",
				isMany: true,
				isReference: true
			},
			{
				name: "lanes",
				type: "Lane",
				isVirtual: true,
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationPropertyRetrievalExpression",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "messagePath",
				type: "FormalExpression"
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationPropertyBinding",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "dataPath",
				type: "FormalExpression"
			},
			{
				name: "correlationPropertyRef",
				type: "CorrelationProperty",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Resource",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "resourceParameters",
				type: "ResourceParameter",
				isMany: true
			}
		]
	},
	{
		name: "ResourceParameter",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isRequired",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "type",
				type: "ItemDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "CorrelationSubscription",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "correlationKeyRef",
				type: "CorrelationKey",
				isAttr: true,
				isReference: true
			},
			{
				name: "correlationPropertyBinding",
				type: "CorrelationPropertyBinding",
				isMany: true
			}
		]
	},
	{
		name: "MessageFlow",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "sourceRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "InteractionNode",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "MessageFlowAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerMessageFlowRef",
				type: "MessageFlow",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerMessageFlowRef",
				type: "MessageFlow",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "InteractionNode",
		isAbstract: true,
		properties: [
			{
				name: "incomingConversationLinks",
				type: "ConversationLink",
				isVirtual: true,
				isMany: true,
				isReference: true
			},
			{
				name: "outgoingConversationLinks",
				type: "ConversationLink",
				isVirtual: true,
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "Participant",
		superClass: [
			"InteractionNode",
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "interfaceRef",
				type: "Interface",
				isMany: true,
				isReference: true
			},
			{
				name: "participantMultiplicity",
				type: "ParticipantMultiplicity"
			},
			{
				name: "endPointRefs",
				type: "EndPoint",
				isMany: true,
				isReference: true
			},
			{
				name: "processRef",
				type: "Process",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParticipantAssociation",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "innerParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			},
			{
				name: "outerParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ParticipantMultiplicity",
		properties: [
			{
				name: "minimum",
				"default": 0,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "maximum",
				"default": 1,
				isAttr: true,
				type: "Integer"
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Collaboration",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "isClosed",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "participants",
				type: "Participant",
				isMany: true
			},
			{
				name: "messageFlows",
				type: "MessageFlow",
				isMany: true
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			},
			{
				name: "conversations",
				type: "ConversationNode",
				isMany: true
			},
			{
				name: "conversationAssociations",
				type: "ConversationAssociation"
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			},
			{
				name: "messageFlowAssociations",
				type: "MessageFlowAssociation",
				isMany: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			},
			{
				name: "choreographyRef",
				type: "Choreography",
				isMany: true,
				isReference: true
			},
			{
				name: "conversationLinks",
				type: "ConversationLink",
				isMany: true
			}
		]
	},
	{
		name: "ChoreographyActivity",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "participantRef",
				type: "Participant",
				isMany: true,
				isReference: true
			},
			{
				name: "initiatingParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			},
			{
				name: "correlationKeys",
				type: "CorrelationKey",
				isMany: true
			},
			{
				name: "loopType",
				type: "ChoreographyLoopType",
				"default": "None",
				isAttr: true
			}
		]
	},
	{
		name: "CallChoreography",
		superClass: [
			"ChoreographyActivity"
		],
		properties: [
			{
				name: "calledChoreographyRef",
				type: "Choreography",
				isAttr: true,
				isReference: true
			},
			{
				name: "participantAssociations",
				type: "ParticipantAssociation",
				isMany: true
			}
		]
	},
	{
		name: "SubChoreography",
		superClass: [
			"ChoreographyActivity",
			"FlowElementsContainer"
		],
		properties: [
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			}
		]
	},
	{
		name: "ChoreographyTask",
		superClass: [
			"ChoreographyActivity"
		],
		properties: [
			{
				name: "messageFlowRef",
				type: "MessageFlow",
				isMany: true,
				isReference: true
			}
		]
	},
	{
		name: "Choreography",
		superClass: [
			"Collaboration",
			"FlowElementsContainer"
		]
	},
	{
		name: "GlobalChoreographyTask",
		superClass: [
			"Choreography"
		],
		properties: [
			{
				name: "initiatingParticipantRef",
				type: "Participant",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "TextAnnotation",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "text",
				type: "String"
			},
			{
				name: "textFormat",
				"default": "text/plain",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Group",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "categoryValueRef",
				type: "CategoryValue",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Association",
		superClass: [
			"Artifact"
		],
		properties: [
			{
				name: "associationDirection",
				type: "AssociationDirection",
				isAttr: true
			},
			{
				name: "sourceRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			},
			{
				name: "targetRef",
				type: "BaseElement",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "Category",
		superClass: [
			"RootElement"
		],
		properties: [
			{
				name: "categoryValue",
				type: "CategoryValue",
				isMany: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Artifact",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "CategoryValue",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "categorizedFlowElements",
				type: "FlowElement",
				isVirtual: true,
				isMany: true,
				isReference: true
			},
			{
				name: "value",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Activity",
		isAbstract: true,
		superClass: [
			"FlowNode"
		],
		properties: [
			{
				name: "isForCompensation",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "default",
				type: "SequenceFlow",
				isAttr: true,
				isReference: true
			},
			{
				name: "ioSpecification",
				type: "InputOutputSpecification",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "boundaryEventRefs",
				type: "BoundaryEvent",
				isMany: true,
				isReference: true
			},
			{
				name: "properties",
				type: "Property",
				isMany: true
			},
			{
				name: "dataInputAssociations",
				type: "DataInputAssociation",
				isMany: true
			},
			{
				name: "dataOutputAssociations",
				type: "DataOutputAssociation",
				isMany: true
			},
			{
				name: "startQuantity",
				"default": 1,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "resources",
				type: "ResourceRole",
				isMany: true
			},
			{
				name: "completionQuantity",
				"default": 1,
				isAttr: true,
				type: "Integer"
			},
			{
				name: "loopCharacteristics",
				type: "LoopCharacteristics"
			}
		]
	},
	{
		name: "ServiceTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "SubProcess",
		superClass: [
			"Activity",
			"FlowElementsContainer",
			"InteractionNode"
		],
		properties: [
			{
				name: "triggeredByEvent",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "artifacts",
				type: "Artifact",
				isMany: true
			}
		]
	},
	{
		name: "LoopCharacteristics",
		isAbstract: true,
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "MultiInstanceLoopCharacteristics",
		superClass: [
			"LoopCharacteristics"
		],
		properties: [
			{
				name: "isSequential",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "behavior",
				type: "MultiInstanceBehavior",
				"default": "All",
				isAttr: true
			},
			{
				name: "loopCardinality",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "loopDataInputRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "loopDataOutputRef",
				type: "ItemAwareElement",
				isReference: true
			},
			{
				name: "inputDataItem",
				type: "DataInput",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "outputDataItem",
				type: "DataOutput",
				xml: {
					serialize: "property"
				}
			},
			{
				name: "complexBehaviorDefinition",
				type: "ComplexBehaviorDefinition",
				isMany: true
			},
			{
				name: "completionCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "oneBehaviorEventRef",
				type: "EventDefinition",
				isAttr: true,
				isReference: true
			},
			{
				name: "noneBehaviorEventRef",
				type: "EventDefinition",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "StandardLoopCharacteristics",
		superClass: [
			"LoopCharacteristics"
		],
		properties: [
			{
				name: "testBefore",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "loopCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "loopMaximum",
				type: "Integer",
				isAttr: true
			}
		]
	},
	{
		name: "CallActivity",
		superClass: [
			"Activity"
		],
		properties: [
			{
				name: "calledElement",
				type: "String",
				isAttr: true
			}
		]
	},
	{
		name: "Task",
		superClass: [
			"Activity",
			"InteractionNode"
		]
	},
	{
		name: "SendTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ReceiveTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			},
			{
				name: "instantiate",
				"default": false,
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "operationRef",
				type: "Operation",
				isAttr: true,
				isReference: true
			},
			{
				name: "messageRef",
				type: "Message",
				isAttr: true,
				isReference: true
			}
		]
	},
	{
		name: "ScriptTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "scriptFormat",
				isAttr: true,
				type: "String"
			},
			{
				name: "script",
				type: "String"
			}
		]
	},
	{
		name: "BusinessRuleTask",
		superClass: [
			"Task"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "AdHocSubProcess",
		superClass: [
			"SubProcess"
		],
		properties: [
			{
				name: "completionCondition",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "ordering",
				type: "AdHocOrdering",
				isAttr: true
			},
			{
				name: "cancelRemainingInstances",
				"default": true,
				isAttr: true,
				type: "Boolean"
			}
		]
	},
	{
		name: "Transaction",
		superClass: [
			"SubProcess"
		],
		properties: [
			{
				name: "protocol",
				isAttr: true,
				type: "String"
			},
			{
				name: "method",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "GlobalScriptTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "scriptLanguage",
				isAttr: true,
				type: "String"
			},
			{
				name: "script",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "GlobalBusinessRuleTask",
		superClass: [
			"GlobalTask"
		],
		properties: [
			{
				name: "implementation",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ComplexBehaviorDefinition",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "condition",
				type: "FormalExpression"
			},
			{
				name: "event",
				type: "ImplicitThrowEvent"
			}
		]
	},
	{
		name: "ResourceRole",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "resourceRef",
				type: "Resource",
				isReference: true
			},
			{
				name: "resourceParameterBindings",
				type: "ResourceParameterBinding",
				isMany: true
			},
			{
				name: "resourceAssignmentExpression",
				type: "ResourceAssignmentExpression"
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ResourceParameterBinding",
		properties: [
			{
				name: "expression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			},
			{
				name: "parameterRef",
				type: "ResourceParameter",
				isAttr: true,
				isReference: true
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "ResourceAssignmentExpression",
		properties: [
			{
				name: "expression",
				type: "Expression",
				xml: {
					serialize: "xsi:type"
				}
			}
		],
		superClass: [
			"BaseElement"
		]
	},
	{
		name: "Import",
		properties: [
			{
				name: "importType",
				isAttr: true,
				type: "String"
			},
			{
				name: "location",
				isAttr: true,
				type: "String"
			},
			{
				name: "namespace",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "Definitions",
		superClass: [
			"BaseElement"
		],
		properties: [
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "targetNamespace",
				isAttr: true,
				type: "String"
			},
			{
				name: "expressionLanguage",
				"default": "http://www.w3.org/1999/XPath",
				isAttr: true,
				type: "String"
			},
			{
				name: "typeLanguage",
				"default": "http://www.w3.org/2001/XMLSchema",
				isAttr: true,
				type: "String"
			},
			{
				name: "imports",
				type: "Import",
				isMany: true
			},
			{
				name: "extensions",
				type: "Extension",
				isMany: true
			},
			{
				name: "rootElements",
				type: "RootElement",
				isMany: true
			},
			{
				name: "diagrams",
				isMany: true,
				type: "bpmndi:BPMNDiagram"
			},
			{
				name: "exporter",
				isAttr: true,
				type: "String"
			},
			{
				name: "relationships",
				type: "Relationship",
				isMany: true
			},
			{
				name: "exporterVersion",
				isAttr: true,
				type: "String"
			}
		]
	}
];
var enumerations = [
	{
		name: "ProcessType",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Public"
			},
			{
				name: "Private"
			}
		]
	},
	{
		name: "GatewayDirection",
		literalValues: [
			{
				name: "Unspecified"
			},
			{
				name: "Converging"
			},
			{
				name: "Diverging"
			},
			{
				name: "Mixed"
			}
		]
	},
	{
		name: "EventBasedGatewayType",
		literalValues: [
			{
				name: "Parallel"
			},
			{
				name: "Exclusive"
			}
		]
	},
	{
		name: "RelationshipDirection",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Forward"
			},
			{
				name: "Backward"
			},
			{
				name: "Both"
			}
		]
	},
	{
		name: "ItemKind",
		literalValues: [
			{
				name: "Physical"
			},
			{
				name: "Information"
			}
		]
	},
	{
		name: "ChoreographyLoopType",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "Standard"
			},
			{
				name: "MultiInstanceSequential"
			},
			{
				name: "MultiInstanceParallel"
			}
		]
	},
	{
		name: "AssociationDirection",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "One"
			},
			{
				name: "Both"
			}
		]
	},
	{
		name: "MultiInstanceBehavior",
		literalValues: [
			{
				name: "None"
			},
			{
				name: "One"
			},
			{
				name: "All"
			},
			{
				name: "Complex"
			}
		]
	},
	{
		name: "AdHocOrdering",
		literalValues: [
			{
				name: "Parallel"
			},
			{
				name: "Sequential"
			}
		]
	}
];
var prefix = "bpmn";
var xml = {
	tagAlias: "lowerCase",
	typePrefix: "t"
};
var BpmnPackage = {
	name: name,
	uri: uri,
	associations: associations,
	types: types,
	enumerations: enumerations,
	prefix: prefix,
	xml: xml
};

var name$1 = "BPMNDI";
var uri$1 = "http://www.omg.org/spec/BPMN/20100524/DI";
var types$1 = [
	{
		name: "BPMNDiagram",
		properties: [
			{
				name: "plane",
				type: "BPMNPlane",
				redefines: "di:Diagram#rootElement"
			},
			{
				name: "labelStyle",
				type: "BPMNLabelStyle",
				isMany: true
			}
		],
		superClass: [
			"di:Diagram"
		]
	},
	{
		name: "BPMNPlane",
		properties: [
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			}
		],
		superClass: [
			"di:Plane"
		]
	},
	{
		name: "BPMNShape",
		properties: [
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			},
			{
				name: "isHorizontal",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "isExpanded",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "isMarkerVisible",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "label",
				type: "BPMNLabel"
			},
			{
				name: "isMessageVisible",
				isAttr: true,
				type: "Boolean"
			},
			{
				name: "participantBandKind",
				type: "ParticipantBandKind",
				isAttr: true
			},
			{
				name: "choreographyActivityShape",
				type: "BPMNShape",
				isAttr: true,
				isReference: true
			}
		],
		superClass: [
			"di:LabeledShape"
		]
	},
	{
		name: "BPMNEdge",
		properties: [
			{
				name: "label",
				type: "BPMNLabel"
			},
			{
				name: "bpmnElement",
				isAttr: true,
				isReference: true,
				type: "bpmn:BaseElement",
				redefines: "di:DiagramElement#modelElement"
			},
			{
				name: "sourceElement",
				isAttr: true,
				isReference: true,
				type: "di:DiagramElement",
				redefines: "di:Edge#source"
			},
			{
				name: "targetElement",
				isAttr: true,
				isReference: true,
				type: "di:DiagramElement",
				redefines: "di:Edge#target"
			},
			{
				name: "messageVisibleKind",
				type: "MessageVisibleKind",
				isAttr: true,
				"default": "initiating"
			}
		],
		superClass: [
			"di:LabeledEdge"
		]
	},
	{
		name: "BPMNLabel",
		properties: [
			{
				name: "labelStyle",
				type: "BPMNLabelStyle",
				isAttr: true,
				isReference: true,
				redefines: "di:DiagramElement#style"
			}
		],
		superClass: [
			"di:Label"
		]
	},
	{
		name: "BPMNLabelStyle",
		properties: [
			{
				name: "font",
				type: "dc:Font"
			}
		],
		superClass: [
			"di:Style"
		]
	}
];
var enumerations$1 = [
	{
		name: "ParticipantBandKind",
		literalValues: [
			{
				name: "top_initiating"
			},
			{
				name: "middle_initiating"
			},
			{
				name: "bottom_initiating"
			},
			{
				name: "top_non_initiating"
			},
			{
				name: "middle_non_initiating"
			},
			{
				name: "bottom_non_initiating"
			}
		]
	},
	{
		name: "MessageVisibleKind",
		literalValues: [
			{
				name: "initiating"
			},
			{
				name: "non_initiating"
			}
		]
	}
];
var associations$1 = [
];
var prefix$1 = "bpmndi";
var BpmnDiPackage = {
	name: name$1,
	uri: uri$1,
	types: types$1,
	enumerations: enumerations$1,
	associations: associations$1,
	prefix: prefix$1
};

var name$2 = "DC";
var uri$2 = "http://www.omg.org/spec/DD/20100524/DC";
var types$2 = [
	{
		name: "Boolean"
	},
	{
		name: "Integer"
	},
	{
		name: "Real"
	},
	{
		name: "String"
	},
	{
		name: "Font",
		properties: [
			{
				name: "name",
				type: "String",
				isAttr: true
			},
			{
				name: "size",
				type: "Real",
				isAttr: true
			},
			{
				name: "isBold",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isItalic",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isUnderline",
				type: "Boolean",
				isAttr: true
			},
			{
				name: "isStrikeThrough",
				type: "Boolean",
				isAttr: true
			}
		]
	},
	{
		name: "Point",
		properties: [
			{
				name: "x",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "y",
				type: "Real",
				"default": "0",
				isAttr: true
			}
		]
	},
	{
		name: "Bounds",
		properties: [
			{
				name: "x",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "y",
				type: "Real",
				"default": "0",
				isAttr: true
			},
			{
				name: "width",
				type: "Real",
				isAttr: true
			},
			{
				name: "height",
				type: "Real",
				isAttr: true
			}
		]
	}
];
var prefix$2 = "dc";
var associations$2 = [
];
var DcPackage = {
	name: name$2,
	uri: uri$2,
	types: types$2,
	prefix: prefix$2,
	associations: associations$2
};

var name$3 = "DI";
var uri$3 = "http://www.omg.org/spec/DD/20100524/DI";
var types$3 = [
	{
		name: "DiagramElement",
		isAbstract: true,
		properties: [
			{
				name: "id",
				type: "String",
				isAttr: true,
				isId: true
			},
			{
				name: "extension",
				type: "Extension"
			},
			{
				name: "owningDiagram",
				type: "Diagram",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "owningElement",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "modelElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true,
				type: "Element"
			},
			{
				name: "style",
				type: "Style",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "ownedElement",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isMany: true
			}
		]
	},
	{
		name: "Node",
		isAbstract: true,
		superClass: [
			"DiagramElement"
		]
	},
	{
		name: "Edge",
		isAbstract: true,
		superClass: [
			"DiagramElement"
		],
		properties: [
			{
				name: "source",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "target",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true,
				isReference: true
			},
			{
				name: "waypoint",
				isUnique: false,
				isMany: true,
				type: "dc:Point",
				xml: {
					serialize: "xsi:type"
				}
			}
		]
	},
	{
		name: "Diagram",
		isAbstract: true,
		properties: [
			{
				name: "id",
				type: "String",
				isAttr: true,
				isId: true
			},
			{
				name: "rootElement",
				type: "DiagramElement",
				isReadOnly: true,
				isVirtual: true
			},
			{
				name: "name",
				isAttr: true,
				type: "String"
			},
			{
				name: "documentation",
				isAttr: true,
				type: "String"
			},
			{
				name: "resolution",
				isAttr: true,
				type: "Real"
			},
			{
				name: "ownedStyle",
				type: "Style",
				isReadOnly: true,
				isVirtual: true,
				isMany: true
			}
		]
	},
	{
		name: "Shape",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "bounds",
				type: "dc:Bounds"
			}
		]
	},
	{
		name: "Plane",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "planeElement",
				type: "DiagramElement",
				subsettedProperty: "DiagramElement-ownedElement",
				isMany: true
			}
		]
	},
	{
		name: "LabeledEdge",
		isAbstract: true,
		superClass: [
			"Edge"
		],
		properties: [
			{
				name: "ownedLabel",
				type: "Label",
				isReadOnly: true,
				subsettedProperty: "DiagramElement-ownedElement",
				isVirtual: true,
				isMany: true
			}
		]
	},
	{
		name: "LabeledShape",
		isAbstract: true,
		superClass: [
			"Shape"
		],
		properties: [
			{
				name: "ownedLabel",
				type: "Label",
				isReadOnly: true,
				subsettedProperty: "DiagramElement-ownedElement",
				isVirtual: true,
				isMany: true
			}
		]
	},
	{
		name: "Label",
		isAbstract: true,
		superClass: [
			"Node"
		],
		properties: [
			{
				name: "bounds",
				type: "dc:Bounds"
			}
		]
	},
	{
		name: "Style",
		isAbstract: true,
		properties: [
			{
				name: "id",
				type: "String",
				isAttr: true,
				isId: true
			}
		]
	},
	{
		name: "Extension",
		properties: [
			{
				name: "values",
				type: "Element",
				isMany: true
			}
		]
	}
];
var associations$3 = [
];
var prefix$3 = "di";
var xml$1 = {
	tagAlias: "lowerCase"
};
var DiPackage = {
	name: name$3,
	uri: uri$3,
	types: types$3,
	associations: associations$3,
	prefix: prefix$3,
	xml: xml$1
};

var name$4 = "bpmn.io colors for BPMN";
var uri$4 = "http://bpmn.io/schema/bpmn/biocolor/1.0";
var prefix$4 = "bioc";
var types$4 = [
	{
		name: "ColoredShape",
		"extends": [
			"bpmndi:BPMNShape"
		],
		properties: [
			{
				name: "stroke",
				isAttr: true,
				type: "String"
			},
			{
				name: "fill",
				isAttr: true,
				type: "String"
			}
		]
	},
	{
		name: "ColoredEdge",
		"extends": [
			"bpmndi:BPMNEdge"
		],
		properties: [
			{
				name: "stroke",
				isAttr: true,
				type: "String"
			},
			{
				name: "fill",
				isAttr: true,
				type: "String"
			}
		]
	}
];
var enumerations$2 = [
];
var associations$4 = [
];
var BiocPackage = {
	name: name$4,
	uri: uri$4,
	prefix: prefix$4,
	types: types$4,
	enumerations: enumerations$2,
	associations: associations$4
};

var packages = {
  bpmn: BpmnPackage,
  bpmndi: BpmnDiPackage,
  dc: DcPackage,
  di: DiPackage,
  bioc: BiocPackage
};

function simple(additionalPackages, options) {
  var pks = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, packages, additionalPackages);

  return new BpmnModdle(pks, options);
}

/* harmony default export */ __webpack_exports__["default"] = (simple);


/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: flatten, find, findIndex, filter, forEach, without, reduce, every, some, map, keys, size, values, groupBy, uniqueBy, unionBy, sortBy, matchPattern, debounce, throttle, bind, isUndefined, isDefined, isNil, isArray, isObject, isNumber, isFunction, isString, ensureArray, has, assign, pick, omit, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionBy", function() { return unionBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire() {
    var now = Date.now();
    var scheduledDiff = lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  return function () {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  };
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}




/***/ }),

/***/ "./node_modules/moddle-xml/dist/index.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/moddle-xml/dist/index.esm.js ***!
  \***************************************************/
/*! exports provided: Reader, Writer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reader", function() { return Reader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Writer", function() { return Writer; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var saxen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! saxen */ "./node_modules/saxen/dist/index.esm.js");
/* harmony import */ var moddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moddle */ "./node_modules/moddle/dist/index.esm.js");




function hasLowerCaseAlias(pkg) {
  return pkg.xml && pkg.xml.tagAlias === 'lowerCase';
}

var DEFAULT_NS_MAP = {
  'xsi': 'http://www.w3.org/2001/XMLSchema-instance'
};

var XSI_TYPE = 'xsi:type';

function serializeFormat(element) {
  return element.xml && element.xml.serialize;
}

function serializeAsType(element) {
  return serializeFormat(element) === XSI_TYPE;
}

function serializeAsProperty(element) {
  return serializeFormat(element) === 'property';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function aliasToName(aliasNs, pkg) {

  if (!hasLowerCaseAlias(pkg)) {
    return aliasNs.name;
  }

  return aliasNs.prefix + ':' + capitalize(aliasNs.localName);
}

function prefixedToName(nameNs, pkg) {

  var name = nameNs.name,
      localName = nameNs.localName;

  var typePrefix = pkg.xml && pkg.xml.typePrefix;

  if (typePrefix && localName.indexOf(typePrefix) === 0) {
    return nameNs.prefix + ':' + localName.slice(typePrefix.length);
  } else {
    return name;
  }
}

function normalizeXsiTypeName(name, model) {

  var nameNs = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["parseNameNS"])(name);
  var pkg = model.getPackage(nameNs.prefix);

  return prefixedToName(nameNs, pkg);
}

function error(message) {
  return new Error(message);
}

/**
 * Get the moddle descriptor for a given instance or type.
 *
 * @param  {ModdleElement|Function} element
 *
 * @return {Object} the moddle descriptor
 */
function getModdleDescriptor(element) {
  return element.$descriptor;
}

function defer(fn) {
  setTimeout(fn, 0);
}

/**
 * A parse context.
 *
 * @class
 *
 * @param {Object} options
 * @param {ElementHandler} options.rootHandler the root handler for parsing a document
 * @param {boolean} [options.lax=false] whether or not to ignore invalid elements
 */
function Context(options) {

  /**
   * @property {ElementHandler} rootHandler
   */

  /**
   * @property {Boolean} lax
   */

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(this, options);

  this.elementsById = {};
  this.references = [];
  this.warnings = [];

  /**
   * Add an unresolved reference.
   *
   * @param {Object} reference
   */
  this.addReference = function(reference) {
    this.references.push(reference);
  };

  /**
   * Add a processed element.
   *
   * @param {ModdleElement} element
   */
  this.addElement = function(element) {

    if (!element) {
      throw error('expected element');
    }

    var elementsById = this.elementsById;

    var descriptor = getModdleDescriptor(element);

    var idProperty = descriptor.idProperty,
        id;

    if (idProperty) {
      id = element.get(idProperty.name);

      if (id) {
        // for QName validation as per http://www.w3.org/TR/REC-xml/#NT-NameChar
        if (!/^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i.test(id)) {
          throw new Error('illegal ID <' + id + '>');
        }

        if (elementsById[id]) {
          throw error('duplicate ID <' + id + '>');
        }

        elementsById[id] = element;
      }
    }
  };

  /**
   * Add an import warning.
   *
   * @param {Object} warning
   * @param {String} warning.message
   * @param {Error} [warning.error]
   */
  this.addWarning = function(warning) {
    this.warnings.push(warning);
  };
}

function BaseHandler() {}

BaseHandler.prototype.handleEnd = function() {};
BaseHandler.prototype.handleText = function() {};
BaseHandler.prototype.handleNode = function() {};


/**
 * A simple pass through handler that does nothing except for
 * ignoring all input it receives.
 *
 * This is used to ignore unknown elements and
 * attributes.
 */
function NoopHandler() { }

NoopHandler.prototype = Object.create(BaseHandler.prototype);

NoopHandler.prototype.handleNode = function() {
  return this;
};

function BodyHandler() {}

BodyHandler.prototype = Object.create(BaseHandler.prototype);

BodyHandler.prototype.handleText = function(text) {
  this.body = (this.body || '') + text;
};

function ReferenceHandler(property, context) {
  this.property = property;
  this.context = context;
}

ReferenceHandler.prototype = Object.create(BodyHandler.prototype);

ReferenceHandler.prototype.handleNode = function(node) {

  if (this.element) {
    throw error('expected no sub nodes');
  } else {
    this.element = this.createReference(node);
  }

  return this;
};

ReferenceHandler.prototype.handleEnd = function() {
  this.element.id = this.body;
};

ReferenceHandler.prototype.createReference = function(node) {
  return {
    property: this.property.ns.name,
    id: ''
  };
};

function ValueHandler(propertyDesc, element) {
  this.element = element;
  this.propertyDesc = propertyDesc;
}

ValueHandler.prototype = Object.create(BodyHandler.prototype);

ValueHandler.prototype.handleEnd = function() {

  var value = this.body || '',
      element = this.element,
      propertyDesc = this.propertyDesc;

  value = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["coerceType"])(propertyDesc.type, value);

  if (propertyDesc.isMany) {
    element.get(propertyDesc.name).push(value);
  } else {
    element.set(propertyDesc.name, value);
  }
};


function BaseElementHandler() {}

BaseElementHandler.prototype = Object.create(BodyHandler.prototype);

BaseElementHandler.prototype.handleNode = function(node) {
  var parser = this,
      element = this.element;

  if (!element) {
    element = this.element = this.createElement(node);

    this.context.addElement(element);
  } else {
    parser = this.handleChild(node);
  }

  return parser;
};

/**
 * @class Reader.ElementHandler
 *
 */
function ElementHandler(model, typeName, context) {
  this.model = model;
  this.type = model.getType(typeName);
  this.context = context;
}

ElementHandler.prototype = Object.create(BaseElementHandler.prototype);

ElementHandler.prototype.addReference = function(reference) {
  this.context.addReference(reference);
};

ElementHandler.prototype.handleText = function(text) {

  var element = this.element,
      descriptor = getModdleDescriptor(element),
      bodyProperty = descriptor.bodyProperty;

  if (!bodyProperty) {
    throw error('unexpected body text <' + text + '>');
  }

  BodyHandler.prototype.handleText.call(this, text);
};

ElementHandler.prototype.handleEnd = function() {

  var value = this.body,
      element = this.element,
      descriptor = getModdleDescriptor(element),
      bodyProperty = descriptor.bodyProperty;

  if (bodyProperty && value !== undefined) {
    value = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["coerceType"])(bodyProperty.type, value);
    element.set(bodyProperty.name, value);
  }
};

/**
 * Create an instance of the model from the given node.
 *
 * @param  {Element} node the xml node
 */
ElementHandler.prototype.createElement = function(node) {
  var attributes = node.attributes,
      Type = this.type,
      descriptor = getModdleDescriptor(Type),
      context = this.context,
      instance = new Type({}),
      model = this.model,
      propNameNs;

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(attributes, function(value, name) {

    var prop = descriptor.propertiesByName[name],
        values;

    if (prop && prop.isReference) {

      if (!prop.isMany) {
        context.addReference({
          element: instance,
          property: prop.ns.name,
          id: value
        });
      } else {
        // IDREFS: parse references as whitespace-separated list
        values = value.split(' ');

        Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(values, function(v) {
          context.addReference({
            element: instance,
            property: prop.ns.name,
            id: v
          });
        });
      }

    } else {
      if (prop) {
        value = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["coerceType"])(prop.type, value);
      } else
      if (name !== 'xmlns') {
        propNameNs = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["parseNameNS"])(name, descriptor.ns.prefix);

        // check whether attribute is defined in a well-known namespace
        // if that is the case we emit a warning to indicate potential misuse
        if (model.getPackage(propNameNs.prefix)) {

          context.addWarning({
            message: 'unknown attribute <' + name + '>',
            element: instance,
            property: name,
            value: value
          });
        }
      }

      instance.set(name, value);
    }
  });

  return instance;
};

ElementHandler.prototype.getPropertyForNode = function(node) {

  var name = node.name;
  var nameNs = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["parseNameNS"])(name);

  var type = this.type,
      model = this.model,
      descriptor = getModdleDescriptor(type);

  var propertyName = nameNs.name,
      property = descriptor.propertiesByName[propertyName],
      elementTypeName,
      elementType;

  // search for properties by name first

  if (property) {

    if (serializeAsType(property)) {
      elementTypeName = node.attributes[XSI_TYPE];

      // xsi type is optional, if it does not exists the
      // default type is assumed
      if (elementTypeName) {

        // take possible type prefixes from XML
        // into account, i.e.: xsi:type="t{ActualType}"
        elementTypeName = normalizeXsiTypeName(elementTypeName, model);

        elementType = model.getType(elementTypeName);

        return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, property, {
          effectiveType: getModdleDescriptor(elementType).name
        });
      }
    }

    // search for properties by name first
    return property;
  }

  var pkg = model.getPackage(nameNs.prefix);

  if (pkg) {
    elementTypeName = aliasToName(nameNs, pkg);
    elementType = model.getType(elementTypeName);

    // search for collection members later
    property = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["find"])(descriptor.properties, function(p) {
      return !p.isVirtual && !p.isReference && !p.isAttribute && elementType.hasType(p.type);
    });

    if (property) {
      return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, property, {
        effectiveType: getModdleDescriptor(elementType).name
      });
    }
  } else {
    // parse unknown element (maybe extension)
    property = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["find"])(descriptor.properties, function(p) {
      return !p.isReference && !p.isAttribute && p.type === 'Element';
    });

    if (property) {
      return property;
    }
  }

  throw error('unrecognized element <' + nameNs.name + '>');
};

ElementHandler.prototype.toString = function() {
  return 'ElementDescriptor[' + getModdleDescriptor(this.type).name + ']';
};

ElementHandler.prototype.valueHandler = function(propertyDesc, element) {
  return new ValueHandler(propertyDesc, element);
};

ElementHandler.prototype.referenceHandler = function(propertyDesc) {
  return new ReferenceHandler(propertyDesc, this.context);
};

ElementHandler.prototype.handler = function(type) {
  if (type === 'Element') {
    return new GenericElementHandler(this.model, type, this.context);
  } else {
    return new ElementHandler(this.model, type, this.context);
  }
};

/**
 * Handle the child element parsing
 *
 * @param  {Element} node the xml node
 */
ElementHandler.prototype.handleChild = function(node) {
  var propertyDesc, type, element, childHandler;

  propertyDesc = this.getPropertyForNode(node);
  element = this.element;

  type = propertyDesc.effectiveType || propertyDesc.type;

  if (Object(moddle__WEBPACK_IMPORTED_MODULE_2__["isSimpleType"])(type)) {
    return this.valueHandler(propertyDesc, element);
  }

  if (propertyDesc.isReference) {
    childHandler = this.referenceHandler(propertyDesc).handleNode(node);
  } else {
    childHandler = this.handler(type).handleNode(node);
  }

  var newElement = childHandler.element;

  // child handles may decide to skip elements
  // by not returning anything
  if (newElement !== undefined) {

    if (propertyDesc.isMany) {
      element.get(propertyDesc.name).push(newElement);
    } else {
      element.set(propertyDesc.name, newElement);
    }

    if (propertyDesc.isReference) {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(newElement, {
        element: element
      });

      this.context.addReference(newElement);
    } else {
      // establish child -> parent relationship
      newElement.$parent = element;
    }
  }

  return childHandler;
};

/**
 * An element handler that performs special validation
 * to ensure the node it gets initialized with matches
 * the handlers type (namespace wise).
 *
 * @param {Moddle} model
 * @param {String} typeName
 * @param {Context} context
 */
function RootElementHandler(model, typeName, context) {
  ElementHandler.call(this, model, typeName, context);
}

RootElementHandler.prototype = Object.create(ElementHandler.prototype);

RootElementHandler.prototype.createElement = function(node) {

  var name = node.name,
      nameNs = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["parseNameNS"])(name),
      model = this.model,
      type = this.type,
      pkg = model.getPackage(nameNs.prefix),
      typeName = pkg && aliasToName(nameNs, pkg) || name;

  // verify the correct namespace if we parse
  // the first element in the handler tree
  //
  // this ensures we don't mistakenly import wrong namespace elements
  if (!type.hasType(typeName)) {
    throw error('unexpected element <' + node.originalName + '>');
  }

  return ElementHandler.prototype.createElement.call(this, node);
};


function GenericElementHandler(model, typeName, context) {
  this.model = model;
  this.context = context;
}

GenericElementHandler.prototype = Object.create(BaseElementHandler.prototype);

GenericElementHandler.prototype.createElement = function(node) {

  var name = node.name,
      ns = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["parseNameNS"])(name),
      prefix = ns.prefix,
      uri = node.ns[prefix + '$uri'],
      attributes = node.attributes;

  return this.model.createAny(name, uri, attributes);
};

GenericElementHandler.prototype.handleChild = function(node) {

  var handler = new GenericElementHandler(this.model, 'Element', this.context).handleNode(node),
      element = this.element;

  var newElement = handler.element,
      children;

  if (newElement !== undefined) {
    children = element.$children = element.$children || [];
    children.push(newElement);

    // establish child -> parent relationship
    newElement.$parent = element;
  }

  return handler;
};

GenericElementHandler.prototype.handleEnd = function() {
  if (this.body) {
    this.element.$body = this.body;
  }
};

/**
 * A reader for a meta-model
 *
 * @param {Object} options
 * @param {Model} options.model used to read xml files
 * @param {Boolean} options.lax whether to make parse errors warnings
 */
function Reader(options) {

  if (options instanceof moddle__WEBPACK_IMPORTED_MODULE_2__["Moddle"]) {
    options = {
      model: options
    };
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(this, { lax: false }, options);
}


/**
 * Parse the given XML into a moddle document tree.
 *
 * @param {String} xml
 * @param {ElementHandler|Object} options or rootHandler
 * @param  {Function} done
 */
Reader.prototype.fromXML = function(xml, options, done) {

  var rootHandler = options.rootHandler;

  if (options instanceof ElementHandler) {
    // root handler passed via (xml, { rootHandler: ElementHandler }, ...)
    rootHandler = options;
    options = {};
  } else {
    if (typeof options === 'string') {
      // rootHandler passed via (xml, 'someString', ...)
      rootHandler = this.handler(options);
      options = {};
    } else if (typeof rootHandler === 'string') {
      // rootHandler passed via (xml, { rootHandler: 'someString' }, ...)
      rootHandler = this.handler(rootHandler);
    }
  }

  var model = this.model,
      lax = this.lax;

  var context = new Context(Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options, { rootHandler: rootHandler })),
      parser = new saxen__WEBPACK_IMPORTED_MODULE_1__["Parser"]({ proxy: true }),
      stack = createStack();

  rootHandler.context = context;

  // push root handler
  stack.push(rootHandler);


  /**
   * Handle error.
   *
   * @param  {Error} err
   * @param  {Function} getContext
   * @param  {boolean} lax
   *
   * @return {boolean} true if handled
   */
  function handleError(err, getContext, lax) {

    var ctx = getContext();

    var line = ctx.line,
        column = ctx.column,
        data = ctx.data;

    // we receive the full context data here,
    // for elements trim down the information
    // to the tag name, only
    if (data.charAt(0) === '<' && data.indexOf(' ') !== -1) {
      data = data.slice(0, data.indexOf(' ')) + '>';
    }

    var message =
      'unparsable content ' + (data ? data + ' ' : '') + 'detected\n\t' +
        'line: ' + line + '\n\t' +
        'column: ' + column + '\n\t' +
        'nested error: ' + err.message;

    if (lax) {
      context.addWarning({
        message: message,
        error: err
      });

      return true;
    } else {
      throw error(message);
    }
  }

  function handleWarning(err, getContext) {
    // just like handling errors in <lax=true> mode
    return handleError(err, getContext, true);
  }

  /**
   * Resolve collected references on parse end.
   */
  function resolveReferences() {

    var elementsById = context.elementsById;
    var references = context.references;

    var i, r;

    for (i = 0; (r = references[i]); i++) {
      var element = r.element;
      var reference = elementsById[r.id];
      var property = getModdleDescriptor(element).propertiesByName[r.property];

      if (!reference) {
        context.addWarning({
          message: 'unresolved reference <' + r.id + '>',
          element: r.element,
          property: r.property,
          value: r.id
        });
      }

      if (property.isMany) {
        var collection = element.get(property.name),
            idx = collection.indexOf(r);

        // we replace an existing place holder (idx != -1) or
        // append to the collection instead
        if (idx === -1) {
          idx = collection.length;
        }

        if (!reference) {
          // remove unresolvable reference
          collection.splice(idx, 1);
        } else {
          // add or update reference in collection
          collection[idx] = reference;
        }
      } else {
        element.set(property.name, reference);
      }
    }
  }

  function handleClose() {
    stack.pop().handleEnd();
  }

  var PREAMBLE_START_PATTERN = /^<\?xml /i;

  var ENCODING_PATTERN = / encoding="([^"]+)"/i;

  var UTF_8_PATTERN = /^utf-8$/i;

  function handleQuestion(question) {

    if (!PREAMBLE_START_PATTERN.test(question)) {
      return;
    }

    var match = ENCODING_PATTERN.exec(question);
    var encoding = match && match[1];

    if (!encoding || UTF_8_PATTERN.test(encoding)) {
      return;
    }

    context.addWarning({
      message:
        'unsupported document encoding <' + encoding + '>, ' +
        'falling back to UTF-8'
    });
  }

  function handleOpen(node, getContext) {
    var handler = stack.peek();

    try {
      stack.push(handler.handleNode(node));
    } catch (err) {

      if (handleError(err, getContext, lax)) {
        stack.push(new NoopHandler());
      }
    }
  }

  function handleCData(text, getContext) {

    try {
      stack.peek().handleText(text);
    } catch (err) {
      handleWarning(err, getContext);
    }
  }

  function handleText(text, getContext) {
    // strip whitespace only nodes, i.e. before
    // <!CDATA[ ... ]> sections and in between tags
    text = text.trim();

    if (!text) {
      return;
    }

    handleCData(text, getContext);
  }

  var uriMap = model.getPackages().reduce(function(uriMap, p) {
    uriMap[p.uri] = p.prefix;

    return uriMap;
  }, {});

  parser
    .ns(uriMap)
    .on('openTag', function(obj, decodeStr, selfClosing, getContext) {

      // gracefully handle unparsable attributes (attrs=false)
      var attrs = obj.attrs || {};

      var decodedAttrs = Object.keys(attrs).reduce(function(d, key) {
        var value = decodeStr(attrs[key]);

        d[key] = value;

        return d;
      }, {});

      var node = {
        name: obj.name,
        originalName: obj.originalName,
        attributes: decodedAttrs,
        ns: obj.ns
      };

      handleOpen(node, getContext);
    })
    .on('question', handleQuestion)
    .on('closeTag', handleClose)
    .on('cdata', handleCData)
    .on('text', function(text, decodeEntities, getContext) {
      handleText(decodeEntities(text), getContext);
    })
    .on('error', handleError)
    .on('warn', handleWarning);

  // deferred parse XML to make loading really ascnchronous
  // this ensures the execution environment (node or browser)
  // is kept responsive and that certain optimization strategies
  // can kick in
  defer(function() {
    var err;

    try {
      parser.parse(xml);

      resolveReferences();
    } catch (e) {
      err = e;
    }

    var element = rootHandler.element;

    // handle the situation that we could not extract
    // the desired root element from the document
    if (!err && !element) {
      err = error('failed to parse document as <' + rootHandler.type.$descriptor.name + '>');
    }

    done(err, err ? undefined : element, context);
  });
};

Reader.prototype.handler = function(name) {
  return new RootElementHandler(this.model, name);
};


// helpers //////////////////////////

function createStack() {
  var stack = [];

  Object.defineProperty(stack, 'peek', {
    value: function() {
      return this[this.length - 1];
    }
  });

  return stack;
}

var XML_PREAMBLE = '<?xml version="1.0" encoding="UTF-8"?>\n';

var ESCAPE_ATTR_CHARS = /<|>|'|"|&|\n\r|\n/g;
var ESCAPE_CHARS = /<|>|&/g;


function Namespaces(parent) {

  var prefixMap = {};
  var uriMap = {};
  var used = {};

  var wellknown = [];
  var custom = [];

  // API

  this.byUri = function(uri) {
    return uriMap[uri] || (
      parent && parent.byUri(uri)
    );
  };

  this.add = function(ns, isWellknown) {

    uriMap[ns.uri] = ns;

    if (isWellknown) {
      wellknown.push(ns);
    } else {
      custom.push(ns);
    }

    this.mapPrefix(ns.prefix, ns.uri);
  };

  this.uriByPrefix = function(prefix) {
    return prefixMap[prefix || 'xmlns'];
  };

  this.mapPrefix = function(prefix, uri) {
    prefixMap[prefix || 'xmlns'] = uri;
  };

  this.logUsed = function(ns) {
    var uri = ns.uri;

    used[uri] = this.byUri(uri);
  };

  this.getUsed = function(ns) {

    function isUsed(ns) {
      return used[ns.uri];
    }

    var allNs = [].concat(wellknown, custom);

    return allNs.filter(isUsed);
  };

}

function lower(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function nameToAlias(name, pkg) {
  if (hasLowerCaseAlias(pkg)) {
    return lower(name);
  } else {
    return name;
  }
}

function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

function nsName(ns) {
  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isString"])(ns)) {
    return ns;
  } else {
    return (ns.prefix ? ns.prefix + ':' : '') + ns.localName;
  }
}

function getNsAttrs(namespaces) {

  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["map"])(namespaces.getUsed(), function(ns) {
    var name = 'xmlns' + (ns.prefix ? ':' + ns.prefix : '');
    return { name: name, value: ns.uri };
  });

}

function getElementNs(ns, descriptor) {
  if (descriptor.isGeneric) {
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({ localName: descriptor.ns.localName }, ns);
  } else {
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({ localName: nameToAlias(descriptor.ns.localName, descriptor.$pkg) }, ns);
  }
}

function getPropertyNs(ns, descriptor) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({ localName: descriptor.ns.localName }, ns);
}

function getSerializableProperties(element) {
  var descriptor = element.$descriptor;

  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(descriptor.properties, function(p) {
    var name = p.name;

    if (p.isVirtual) {
      return false;
    }

    // do not serialize defaults
    if (!element.hasOwnProperty(name)) {
      return false;
    }

    var value = element[name];

    // do not serialize default equals
    if (value === p.default) {
      return false;
    }

    // do not serialize null properties
    if (value === null) {
      return false;
    }

    return p.isMany ? value.length : true;
  });
}

var ESCAPE_ATTR_MAP = {
  '\n': '#10',
  '\n\r': '#10',
  '"': '#34',
  '\'': '#39',
  '<': '#60',
  '>': '#62',
  '&': '#38'
};

var ESCAPE_MAP = {
  '<': 'lt',
  '>': 'gt',
  '&': 'amp'
};

function escape(str, charPattern, replaceMap) {

  // ensure we are handling strings here
  str = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isString"])(str) ? str : '' + str;

  return str.replace(charPattern, function(s) {
    return '&' + replaceMap[s] + ';';
  });
}

/**
 * Escape a string attribute to not contain any bad values (line breaks, '"', ...)
 *
 * @param {String} str the string to escape
 * @return {String} the escaped string
 */
function escapeAttr(str) {
  return escape(str, ESCAPE_ATTR_CHARS, ESCAPE_ATTR_MAP);
}

function escapeBody(str) {
  return escape(str, ESCAPE_CHARS, ESCAPE_MAP);
}

function filterAttributes(props) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(props, function(p) { return p.isAttr; });
}

function filterContained(props) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["filter"])(props, function(p) { return !p.isAttr; });
}


function ReferenceSerializer(tagName) {
  this.tagName = tagName;
}

ReferenceSerializer.prototype.build = function(element) {
  this.element = element;
  return this;
};

ReferenceSerializer.prototype.serializeTo = function(writer) {
  writer
    .appendIndent()
    .append('<' + this.tagName + '>' + this.element.id + '</' + this.tagName + '>')
    .appendNewLine();
};

function BodySerializer() {}

BodySerializer.prototype.serializeValue =
BodySerializer.prototype.serializeTo = function(writer) {
  writer.append(
    this.escape
      ? escapeBody(this.value)
      : this.value
  );
};

BodySerializer.prototype.build = function(prop, value) {
  this.value = value;

  if (prop.type === 'String' && value.search(ESCAPE_CHARS) !== -1) {
    this.escape = true;
  }

  return this;
};

function ValueSerializer(tagName) {
  this.tagName = tagName;
}

inherits(ValueSerializer, BodySerializer);

ValueSerializer.prototype.serializeTo = function(writer) {

  writer
    .appendIndent()
    .append('<' + this.tagName + '>');

  this.serializeValue(writer);

  writer
    .append('</' + this.tagName + '>')
    .appendNewLine();
};

function ElementSerializer(parent, propertyDescriptor) {
  this.body = [];
  this.attrs = [];

  this.parent = parent;
  this.propertyDescriptor = propertyDescriptor;
}

ElementSerializer.prototype.build = function(element) {
  this.element = element;

  var elementDescriptor = element.$descriptor,
      propertyDescriptor = this.propertyDescriptor;

  var otherAttrs,
      properties;

  var isGeneric = elementDescriptor.isGeneric;

  if (isGeneric) {
    otherAttrs = this.parseGeneric(element);
  } else {
    otherAttrs = this.parseNsAttributes(element);
  }

  if (propertyDescriptor) {
    this.ns = this.nsPropertyTagName(propertyDescriptor);
  } else {
    this.ns = this.nsTagName(elementDescriptor);
  }

  // compute tag name
  this.tagName = this.addTagName(this.ns);

  if (!isGeneric) {
    properties = getSerializableProperties(element);

    this.parseAttributes(filterAttributes(properties));
    this.parseContainments(filterContained(properties));
  }

  this.parseGenericAttributes(element, otherAttrs);

  return this;
};

ElementSerializer.prototype.nsTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getElementNs(effectiveNs, descriptor);
};

ElementSerializer.prototype.nsPropertyTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getPropertyNs(effectiveNs, descriptor);
};

ElementSerializer.prototype.isLocalNs = function(ns) {
  return ns.uri === this.ns.uri;
};

/**
 * Get the actual ns attribute name for the given element.
 *
 * @param {Object} element
 * @param {Boolean} [element.inherited=false]
 *
 * @return {Object} nsName
 */
ElementSerializer.prototype.nsAttributeName = function(element) {

  var ns;

  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isString"])(element)) {
    ns = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["parseNameNS"])(element);
  } else {
    ns = element.ns;
  }

  // return just local name for inherited attributes
  if (element.inherited) {
    return { localName: ns.localName };
  }

  // parse + log effective ns
  var effectiveNs = this.logNamespaceUsed(ns);

  // LOG ACTUAL namespace use
  this.getNamespaces().logUsed(effectiveNs);

  // strip prefix if same namespace like parent
  if (this.isLocalNs(effectiveNs)) {
    return { localName: ns.localName };
  } else {
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({ localName: ns.localName }, effectiveNs);
  }
};

ElementSerializer.prototype.parseGeneric = function(element) {

  var self = this,
      body = this.body;

  var attributes = [];

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(element, function(val, key) {

    var nonNsAttr;

    if (key === '$body') {
      body.push(new BodySerializer().build({ type: 'String' }, val));
    } else
    if (key === '$children') {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(val, function(child) {
        body.push(new ElementSerializer(self).build(child));
      });
    } else
    if (key.indexOf('$') !== 0) {
      nonNsAttr = self.parseNsAttribute(element, key, val);

      if (nonNsAttr) {
        attributes.push({ name: key, value: val });
      }
    }
  });

  return attributes;
};

ElementSerializer.prototype.parseNsAttribute = function(element, name, value) {
  var model = element.$model;

  var nameNs = Object(moddle__WEBPACK_IMPORTED_MODULE_2__["parseNameNS"])(name);

  var ns;

  // parse xmlns:foo="http://foo.bar"
  if (nameNs.prefix === 'xmlns') {
    ns = { prefix: nameNs.localName, uri: value };
  }

  // parse xmlns="http://foo.bar"
  if (!nameNs.prefix && nameNs.localName === 'xmlns') {
    ns = { uri: value };
  }

  if (!ns) {
    return {
      name: name,
      value: value
    };
  }

  if (model && model.getPackage(value)) {
    // register well known namespace
    this.logNamespace(ns, true, true);
  } else {
    // log custom namespace directly as used
    var actualNs = this.logNamespaceUsed(ns, true);

    this.getNamespaces().logUsed(actualNs);
  }
};


/**
 * Parse namespaces and return a list of left over generic attributes
 *
 * @param  {Object} element
 * @return {Array<Object>}
 */
ElementSerializer.prototype.parseNsAttributes = function(element, attrs) {
  var self = this;

  var genericAttrs = element.$attrs;

  var attributes = [];

  // parse namespace attributes first
  // and log them. push non namespace attributes to a list
  // and process them later
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(genericAttrs, function(value, name) {

    var nonNsAttr = self.parseNsAttribute(element, name, value);

    if (nonNsAttr) {
      attributes.push(nonNsAttr);
    }
  });

  return attributes;
};

ElementSerializer.prototype.parseGenericAttributes = function(element, attributes) {

  var self = this;

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(attributes, function(attr) {

    // do not serialize xsi:type attribute
    // it is set manually based on the actual implementation type
    if (attr.name === XSI_TYPE) {
      return;
    }

    try {
      self.addAttribute(self.nsAttributeName(attr.name), attr.value);
    } catch (e) {
      console.warn(
        'missing namespace information for ',
        attr.name, '=', attr.value, 'on', element,
        e);
    }
  });
};

ElementSerializer.prototype.parseContainments = function(properties) {

  var self = this,
      body = this.body,
      element = this.element;

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(properties, function(p) {
    var value = element.get(p.name),
        isReference = p.isReference,
        isMany = p.isMany;

    if (!isMany) {
      value = [ value ];
    }

    if (p.isBody) {
      body.push(new BodySerializer().build(p, value[0]));
    } else
    if (Object(moddle__WEBPACK_IMPORTED_MODULE_2__["isSimpleType"])(p.type)) {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(value, function(v) {
        body.push(new ValueSerializer(self.addTagName(self.nsPropertyTagName(p))).build(p, v));
      });
    } else
    if (isReference) {
      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(value, function(v) {
        body.push(new ReferenceSerializer(self.addTagName(self.nsPropertyTagName(p))).build(v));
      });
    } else {
      // allow serialization via type
      // rather than element name
      var asType = serializeAsType(p),
          asProperty = serializeAsProperty(p);

      Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(value, function(v) {
        var serializer;

        if (asType) {
          serializer = new TypeSerializer(self, p);
        } else
        if (asProperty) {
          serializer = new ElementSerializer(self, p);
        } else {
          serializer = new ElementSerializer(self);
        }

        body.push(serializer.build(v));
      });
    }
  });
};

ElementSerializer.prototype.getNamespaces = function(local) {

  var namespaces = this.namespaces,
      parent = this.parent,
      parentNamespaces;

  if (!namespaces) {
    parentNamespaces = parent && parent.getNamespaces();

    if (local || !parentNamespaces) {
      this.namespaces = namespaces = new Namespaces(parentNamespaces);
    } else {
      namespaces = parentNamespaces;
    }
  }

  return namespaces;
};

ElementSerializer.prototype.logNamespace = function(ns, wellknown, local) {
  var namespaces = this.getNamespaces(local);

  var nsUri = ns.uri,
      nsPrefix = ns.prefix;

  var existing = namespaces.byUri(nsUri);

  if (!existing) {
    namespaces.add(ns, wellknown);
  }

  namespaces.mapPrefix(nsPrefix, nsUri);

  return ns;
};

ElementSerializer.prototype.logNamespaceUsed = function(ns, local) {
  var element = this.element,
      model = element.$model,
      namespaces = this.getNamespaces(local);

  // ns may be
  //
  //   * prefix only
  //   * prefix:uri
  //   * localName only

  var prefix = ns.prefix,
      uri = ns.uri,
      newPrefix, idx,
      wellknownUri;

  // handle anonymous namespaces (elementForm=unqualified), cf. #23
  if (!prefix && !uri) {
    return { localName: ns.localName };
  }

  wellknownUri = DEFAULT_NS_MAP[prefix] || model && (model.getPackage(prefix) || {}).uri;

  uri = uri || wellknownUri || namespaces.uriByPrefix(prefix);

  if (!uri) {
    throw new Error('no namespace uri given for prefix <' + prefix + '>');
  }

  ns = namespaces.byUri(uri);

  if (!ns) {
    newPrefix = prefix;
    idx = 1;

    // find a prefix that is not mapped yet
    while (namespaces.uriByPrefix(newPrefix)) {
      newPrefix = prefix + '_' + idx++;
    }

    ns = this.logNamespace({ prefix: newPrefix, uri: uri }, wellknownUri === uri);
  }

  if (prefix) {
    namespaces.mapPrefix(prefix, uri);
  }

  return ns;
};

ElementSerializer.prototype.parseAttributes = function(properties) {
  var self = this,
      element = this.element;

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(properties, function(p) {

    var value = element.get(p.name);

    if (p.isReference) {

      if (!p.isMany) {
        value = value.id;
      }
      else {
        var values = [];
        Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(value, function(v) {
          values.push(v.id);
        });
        // IDREFS is a whitespace-separated list of references.
        value = values.join(' ');
      }

    }

    self.addAttribute(self.nsAttributeName(p), value);
  });
};

ElementSerializer.prototype.addTagName = function(nsTagName) {
  var actualNs = this.logNamespaceUsed(nsTagName);

  this.getNamespaces().logUsed(actualNs);

  return nsName(nsTagName);
};

ElementSerializer.prototype.addAttribute = function(name, value) {
  var attrs = this.attrs;

  if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
    value = escapeAttr(value);
  }

  attrs.push({ name: name, value: value });
};

ElementSerializer.prototype.serializeAttributes = function(writer) {
  var attrs = this.attrs,
      namespaces = this.namespaces;

  if (namespaces) {
    attrs = getNsAttrs(namespaces).concat(attrs);
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(attrs, function(a) {
    writer
      .append(' ')
      .append(nsName(a.name)).append('="').append(a.value).append('"');
  });
};

ElementSerializer.prototype.serializeTo = function(writer) {
  var firstBody = this.body[0],
      indent = firstBody && firstBody.constructor !== BodySerializer;

  writer
    .appendIndent()
    .append('<' + this.tagName);

  this.serializeAttributes(writer);

  writer.append(firstBody ? '>' : ' />');

  if (firstBody) {

    if (indent) {
      writer
        .appendNewLine()
        .indent();
    }

    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(this.body, function(b) {
      b.serializeTo(writer);
    });

    if (indent) {
      writer
        .unindent()
        .appendIndent();
    }

    writer.append('</' + this.tagName + '>');
  }

  writer.appendNewLine();
};

/**
 * A serializer for types that handles serialization of data types
 */
function TypeSerializer(parent, propertyDescriptor) {
  ElementSerializer.call(this, parent, propertyDescriptor);
}

inherits(TypeSerializer, ElementSerializer);

TypeSerializer.prototype.parseNsAttributes = function(element) {

  // extracted attributes
  var attributes = ElementSerializer.prototype.parseNsAttributes.call(this, element);

  var descriptor = element.$descriptor;

  // only serialize xsi:type if necessary
  if (descriptor.name === this.propertyDescriptor.type) {
    return attributes;
  }

  var typeNs = this.typeNs = this.nsTagName(descriptor);
  this.getNamespaces().logUsed(this.typeNs);

  // add xsi:type attribute to represent the elements
  // actual type

  var pkg = element.$model.getPackage(typeNs.uri),
      typePrefix = (pkg.xml && pkg.xml.typePrefix) || '';

  this.addAttribute(
    this.nsAttributeName(XSI_TYPE),
    (typeNs.prefix ? typeNs.prefix + ':' : '') + typePrefix + descriptor.ns.localName
  );

  return attributes;
};

TypeSerializer.prototype.isLocalNs = function(ns) {
  return ns.uri === (this.typeNs || this.ns).uri;
};

function SavingWriter() {
  this.value = '';

  this.write = function(str) {
    this.value += str;
  };
}

function FormatingWriter(out, format) {

  var indent = [''];

  this.append = function(str) {
    out.write(str);

    return this;
  };

  this.appendNewLine = function() {
    if (format) {
      out.write('\n');
    }

    return this;
  };

  this.appendIndent = function() {
    if (format) {
      out.write(indent.join('  '));
    }

    return this;
  };

  this.indent = function() {
    indent.push('');
    return this;
  };

  this.unindent = function() {
    indent.pop();
    return this;
  };
}

/**
 * A writer for meta-model backed document trees
 *
 * @param {Object} options output options to pass into the writer
 */
function Writer(options) {

  options = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({ format: false, preamble: true }, options || {});

  function toXML(tree, writer) {
    var internalWriter = writer || new SavingWriter();
    var formatingWriter = new FormatingWriter(internalWriter, options.format);

    if (options.preamble) {
      formatingWriter.append(XML_PREAMBLE);
    }

    new ElementSerializer().build(tree).serializeTo(formatingWriter);

    if (!writer) {
      return internalWriter.value;
    }
  }

  return {
    toXML: toXML
  };
}




/***/ }),

/***/ "./node_modules/moddle/dist/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/moddle/dist/index.esm.js ***!
  \***********************************************/
/*! exports provided: Moddle, coerceType, isBuiltInType, isSimpleType, parseNameNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moddle", function() { return Moddle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceType", function() { return coerceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuiltInType", function() { return isBuiltIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSimpleType", function() { return isSimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNameNS", function() { return parseName; });
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");


/**
 * Moddle base element.
 */
function Base() { }

Base.prototype.get = function(name) {
  return this.$model.properties.get(this, name);
};

Base.prototype.set = function(name, value) {
  this.$model.properties.set(this, name, value);
};

/**
 * A model element factory.
 *
 * @param {Moddle} model
 * @param {Properties} properties
 */
function Factory(model, properties) {
  this.model = model;
  this.properties = properties;
}


Factory.prototype.createType = function(descriptor) {

  var model = this.model;

  var props = this.properties,
      prototype = Object.create(Base.prototype);

  // initialize default values
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(descriptor.properties, function(p) {
    if (!p.isMany && p.default !== undefined) {
      prototype[p.name] = p.default;
    }
  });

  props.defineModel(prototype, model);
  props.defineDescriptor(prototype, descriptor);

  var name = descriptor.ns.name;

  /**
   * The new type constructor
   */
  function ModdleElement(attrs) {
    props.define(this, '$type', { value: name, enumerable: true });
    props.define(this, '$attrs', { value: {} });
    props.define(this, '$parent', { writable: true });

    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(attrs, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["bind"])(function(val, key) {
      this.set(key, val);
    }, this));
  }

  ModdleElement.prototype = prototype;

  ModdleElement.hasType = prototype.$instanceOf = this.model.hasType;

  // static links
  props.defineModel(ModdleElement, model);
  props.defineDescriptor(ModdleElement, descriptor);

  return ModdleElement;
};

/**
 * Built-in moddle types
 */
var BUILTINS = {
  String: true,
  Boolean: true,
  Integer: true,
  Real: true,
  Element: true
};

/**
 * Converters for built in types from string representations
 */
var TYPE_CONVERTERS = {
  String: function(s) { return s; },
  Boolean: function(s) { return s === 'true'; },
  Integer: function(s) { return parseInt(s, 10); },
  Real: function(s) { return parseFloat(s, 10); }
};

/**
 * Convert a type to its real representation
 */
function coerceType(type, value) {

  var converter = TYPE_CONVERTERS[type];

  if (converter) {
    return converter(value);
  } else {
    return value;
  }
}

/**
 * Return whether the given type is built-in
 */
function isBuiltIn(type) {
  return !!BUILTINS[type];
}

/**
 * Return whether the given type is simple
 */
function isSimple(type) {
  return !!TYPE_CONVERTERS[type];
}

/**
 * Parses a namespaced attribute name of the form (ns:)localName to an object,
 * given a default prefix to assume in case no explicit namespace is given.
 *
 * @param {String} name
 * @param {String} [defaultPrefix] the default prefix to take, if none is present.
 *
 * @return {Object} the parsed name
 */
function parseName(name, defaultPrefix) {
  var parts = name.split(/:/),
      localName, prefix;

  // no prefix (i.e. only local name)
  if (parts.length === 1) {
    localName = name;
    prefix = defaultPrefix;
  } else
  // prefix + local name
  if (parts.length === 2) {
    localName = parts[1];
    prefix = parts[0];
  } else {
    throw new Error('expected <prefix:localName> or <localName>, got ' + name);
  }

  name = (prefix ? prefix + ':' : '') + localName;

  return {
    name: name,
    prefix: prefix,
    localName: localName
  };
}

/**
 * A utility to build element descriptors.
 */
function DescriptorBuilder(nameNs) {
  this.ns = nameNs;
  this.name = nameNs.name;
  this.allTypes = [];
  this.allTypesByName = {};
  this.properties = [];
  this.propertiesByName = {};
}


DescriptorBuilder.prototype.build = function() {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["pick"])(this, [
    'ns',
    'name',
    'allTypes',
    'allTypesByName',
    'properties',
    'propertiesByName',
    'bodyProperty',
    'idProperty'
  ]);
};

/**
 * Add property at given index.
 *
 * @param {Object} p
 * @param {Number} [idx]
 * @param {Boolean} [validate=true]
 */
DescriptorBuilder.prototype.addProperty = function(p, idx, validate) {

  if (typeof idx === 'boolean') {
    validate = idx;
    idx = undefined;
  }

  this.addNamedProperty(p, validate !== false);

  var properties = this.properties;

  if (idx !== undefined) {
    properties.splice(idx, 0, p);
  } else {
    properties.push(p);
  }
};


DescriptorBuilder.prototype.replaceProperty = function(oldProperty, newProperty, replace) {
  var oldNameNs = oldProperty.ns;

  var props = this.properties,
      propertiesByName = this.propertiesByName,
      rename = oldProperty.name !== newProperty.name;

  if (oldProperty.isId) {
    if (!newProperty.isId) {
      throw new Error(
        'property <' + newProperty.ns.name + '> must be id property ' +
        'to refine <' + oldProperty.ns.name + '>');
    }

    this.setIdProperty(newProperty, false);
  }

  if (oldProperty.isBody) {

    if (!newProperty.isBody) {
      throw new Error(
        'property <' + newProperty.ns.name + '> must be body property ' +
        'to refine <' + oldProperty.ns.name + '>');
    }

    // TODO: Check compatibility
    this.setBodyProperty(newProperty, false);
  }

  // validate existence and get location of old property
  var idx = props.indexOf(oldProperty);
  if (idx === -1) {
    throw new Error('property <' + oldNameNs.name + '> not found in property list');
  }

  // remove old property
  props.splice(idx, 1);

  // replacing the named property is intentional
  //
  //  * validate only if this is a "rename" operation
  //  * add at specific index unless we "replace"
  //
  this.addProperty(newProperty, replace ? undefined : idx, rename);

  // make new property available under old name
  propertiesByName[oldNameNs.name] = propertiesByName[oldNameNs.localName] = newProperty;
};


DescriptorBuilder.prototype.redefineProperty = function(p, targetPropertyName, replace) {

  var nsPrefix = p.ns.prefix;
  var parts = targetPropertyName.split('#');

  var name = parseName(parts[0], nsPrefix);
  var attrName = parseName(parts[1], name.prefix).name;

  var redefinedProperty = this.propertiesByName[attrName];
  if (!redefinedProperty) {
    throw new Error('refined property <' + attrName + '> not found');
  } else {
    this.replaceProperty(redefinedProperty, p, replace);
  }

  delete p.redefines;
};

DescriptorBuilder.prototype.addNamedProperty = function(p, validate) {
  var ns = p.ns,
      propsByName = this.propertiesByName;

  if (validate) {
    this.assertNotDefined(p, ns.name);
    this.assertNotDefined(p, ns.localName);
  }

  propsByName[ns.name] = propsByName[ns.localName] = p;
};

DescriptorBuilder.prototype.removeNamedProperty = function(p) {
  var ns = p.ns,
      propsByName = this.propertiesByName;

  delete propsByName[ns.name];
  delete propsByName[ns.localName];
};

DescriptorBuilder.prototype.setBodyProperty = function(p, validate) {

  if (validate && this.bodyProperty) {
    throw new Error(
      'body property defined multiple times ' +
      '(<' + this.bodyProperty.ns.name + '>, <' + p.ns.name + '>)');
  }

  this.bodyProperty = p;
};

DescriptorBuilder.prototype.setIdProperty = function(p, validate) {

  if (validate && this.idProperty) {
    throw new Error(
      'id property defined multiple times ' +
      '(<' + this.idProperty.ns.name + '>, <' + p.ns.name + '>)');
  }

  this.idProperty = p;
};

DescriptorBuilder.prototype.assertNotDefined = function(p, name) {
  var propertyName = p.name,
      definedProperty = this.propertiesByName[propertyName];

  if (definedProperty) {
    throw new Error(
      'property <' + propertyName + '> already defined; ' +
      'override of <' + definedProperty.definedBy.ns.name + '#' + definedProperty.ns.name + '> by ' +
      '<' + p.definedBy.ns.name + '#' + p.ns.name + '> not allowed without redefines');
  }
};

DescriptorBuilder.prototype.hasProperty = function(name) {
  return this.propertiesByName[name];
};

DescriptorBuilder.prototype.addTrait = function(t, inherited) {

  var typesByName = this.allTypesByName,
      types = this.allTypes;

  var typeName = t.name;

  if (typeName in typesByName) {
    return;
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(t.properties, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["bind"])(function(p) {

    // clone property to allow extensions
    p = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, p, {
      name: p.ns.localName,
      inherited: inherited
    });

    Object.defineProperty(p, 'definedBy', {
      value: t
    });

    var replaces = p.replaces,
        redefines = p.redefines;

    // add replace/redefine support
    if (replaces || redefines) {
      this.redefineProperty(p, replaces || redefines, replaces);
    } else {
      if (p.isBody) {
        this.setBodyProperty(p);
      }
      if (p.isId) {
        this.setIdProperty(p);
      }
      this.addProperty(p);
    }
  }, this));

  types.push(t);
  typesByName[typeName] = t;
};

/**
 * A registry of Moddle packages.
 *
 * @param {Array<Package>} packages
 * @param {Properties} properties
 */
function Registry(packages, properties) {
  this.packageMap = {};
  this.typeMap = {};

  this.packages = [];

  this.properties = properties;

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(packages, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["bind"])(this.registerPackage, this));
}


Registry.prototype.getPackage = function(uriOrPrefix) {
  return this.packageMap[uriOrPrefix];
};

Registry.prototype.getPackages = function() {
  return this.packages;
};


Registry.prototype.registerPackage = function(pkg) {

  // copy package
  pkg = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, pkg);

  var pkgMap = this.packageMap;

  ensureAvailable(pkgMap, pkg, 'prefix');
  ensureAvailable(pkgMap, pkg, 'uri');

  // register types
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(pkg.types, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["bind"])(function(descriptor) {
    this.registerType(descriptor, pkg);
  }, this));

  pkgMap[pkg.uri] = pkgMap[pkg.prefix] = pkg;
  this.packages.push(pkg);
};


/**
 * Register a type from a specific package with us
 */
Registry.prototype.registerType = function(type, pkg) {

  type = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, type, {
    superClass: (type.superClass || []).slice(),
    extends: (type.extends || []).slice(),
    properties: (type.properties || []).slice(),
    meta: Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])((type.meta || {}))
  });

  var ns = parseName(type.name, pkg.prefix),
      name = ns.name,
      propertiesByName = {};

  // parse properties
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(type.properties, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["bind"])(function(p) {

    // namespace property names
    var propertyNs = parseName(p.name, ns.prefix),
        propertyName = propertyNs.name;

    // namespace property types
    if (!isBuiltIn(p.type)) {
      p.type = parseName(p.type, propertyNs.prefix).name;
    }

    Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(p, {
      ns: propertyNs,
      name: propertyName
    });

    propertiesByName[propertyName] = p;
  }, this));

  // update ns + name
  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["assign"])(type, {
    ns: ns,
    name: name,
    propertiesByName: propertiesByName
  });

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(type.extends, Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["bind"])(function(extendsName) {
    var extended = this.typeMap[extendsName];

    extended.traits = extended.traits || [];
    extended.traits.push(name);
  }, this));

  // link to package
  this.definePackage(type, pkg);

  // register
  this.typeMap[name] = type;
};


/**
 * Traverse the type hierarchy from bottom to top,
 * calling iterator with (type, inherited) for all elements in
 * the inheritance chain.
 *
 * @param {Object} nsName
 * @param {Function} iterator
 * @param {Boolean} [trait=false]
 */
Registry.prototype.mapTypes = function(nsName, iterator, trait) {

  var type = isBuiltIn(nsName.name) ? { name: nsName.name } : this.typeMap[nsName.name];

  var self = this;

  /**
   * Traverse the selected trait.
   *
   * @param {String} cls
   */
  function traverseTrait(cls) {
    return traverseSuper(cls, true);
  }

  /**
   * Traverse the selected super type or trait
   *
   * @param {String} cls
   * @param {Boolean} [trait=false]
   */
  function traverseSuper(cls, trait) {
    var parentNs = parseName(cls, isBuiltIn(cls) ? '' : nsName.prefix);
    self.mapTypes(parentNs, iterator, trait);
  }

  if (!type) {
    throw new Error('unknown type <' + nsName.name + '>');
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(type.superClass, trait ? traverseTrait : traverseSuper);

  // call iterator with (type, inherited=!trait)
  iterator(type, !trait);

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(type.traits, traverseTrait);
};


/**
 * Returns the effective descriptor for a type.
 *
 * @param  {String} type the namespaced name (ns:localName) of the type
 *
 * @return {Descriptor} the resulting effective descriptor
 */
Registry.prototype.getEffectiveDescriptor = function(name) {

  var nsName = parseName(name);

  var builder = new DescriptorBuilder(nsName);

  this.mapTypes(nsName, function(type, inherited) {
    builder.addTrait(type, inherited);
  });

  var descriptor = builder.build();

  // define package link
  this.definePackage(descriptor, descriptor.allTypes[descriptor.allTypes.length - 1].$pkg);

  return descriptor;
};


Registry.prototype.definePackage = function(target, pkg) {
  this.properties.define(target, '$pkg', { value: pkg });
};



///////// helpers ////////////////////////////

function ensureAvailable(packageMap, pkg, identifierKey) {

  var value = pkg[identifierKey];

  if (value in packageMap) {
    throw new Error('package with ' + identifierKey + ' <' + value + '> already defined');
  }
}

/**
 * A utility that gets and sets properties of model elements.
 *
 * @param {Model} model
 */
function Properties(model) {
  this.model = model;
}


/**
 * Sets a named property on the target element.
 * If the value is undefined, the property gets deleted.
 *
 * @param {Object} target
 * @param {String} name
 * @param {Object} value
 */
Properties.prototype.set = function(target, name, value) {

  var property = this.model.getPropertyDescriptor(target, name);

  var propertyName = property && property.name;

  if (isUndefined(value)) {
    // unset the property, if the specified value is undefined;
    // delete from $attrs (for extensions) or the target itself
    if (property) {
      delete target[propertyName];
    } else {
      delete target.$attrs[name];
    }
  } else {
    // set the property, defining well defined properties on the fly
    // or simply updating them in target.$attrs (for extensions)
    if (property) {
      if (propertyName in target) {
        target[propertyName] = value;
      } else {
        defineProperty(target, property, value);
      }
    } else {
      target.$attrs[name] = value;
    }
  }
};

/**
 * Returns the named property of the given element
 *
 * @param  {Object} target
 * @param  {String} name
 *
 * @return {Object}
 */
Properties.prototype.get = function(target, name) {

  var property = this.model.getPropertyDescriptor(target, name);

  if (!property) {
    return target.$attrs[name];
  }

  var propertyName = property.name;

  // check if access to collection property and lazily initialize it
  if (!target[propertyName] && property.isMany) {
    defineProperty(target, property, []);
  }

  return target[propertyName];
};


/**
 * Define a property on the target element
 *
 * @param  {Object} target
 * @param  {String} name
 * @param  {Object} options
 */
Properties.prototype.define = function(target, name, options) {
  Object.defineProperty(target, name, options);
};


/**
 * Define the descriptor for an element
 */
Properties.prototype.defineDescriptor = function(target, descriptor) {
  this.define(target, '$descriptor', { value: descriptor });
};

/**
 * Define the model for an element
 */
Properties.prototype.defineModel = function(target, model) {
  this.define(target, '$model', { value: model });
};


function isUndefined(val) {
  return typeof val === 'undefined';
}

function defineProperty(target, property, value) {
  Object.defineProperty(target, property.name, {
    enumerable: !property.isReference,
    writable: true,
    value: value,
    configurable: true
  });
}

//// Moddle implementation /////////////////////////////////////////////////

/**
 * @class Moddle
 *
 * A model that can be used to create elements of a specific type.
 *
 * @example
 *
 * var Moddle = require('moddle');
 *
 * var pkg = {
 *   name: 'mypackage',
 *   prefix: 'my',
 *   types: [
 *     { name: 'Root' }
 *   ]
 * };
 *
 * var moddle = new Moddle([pkg]);
 *
 * @param {Array<Package>} packages the packages to contain
 */
function Moddle(packages) {

  this.properties = new Properties(this);

  this.factory = new Factory(this, this.properties);
  this.registry = new Registry(packages, this.properties);

  this.typeCache = {};
}


/**
 * Create an instance of the specified type.
 *
 * @method Moddle#create
 *
 * @example
 *
 * var foo = moddle.create('my:Foo');
 * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
 *
 * @param  {String|Object} descriptor the type descriptor or name know to the model
 * @param  {Object} attrs   a number of attributes to initialize the model instance with
 * @return {Object}         model instance
 */
Moddle.prototype.create = function(descriptor, attrs) {
  var Type = this.getType(descriptor);

  if (!Type) {
    throw new Error('unknown type <' + descriptor + '>');
  }

  return new Type(attrs);
};


/**
 * Returns the type representing a given descriptor
 *
 * @method Moddle#getType
 *
 * @example
 *
 * var Foo = moddle.getType('my:Foo');
 * var foo = new Foo({ 'id' : 'FOO_1' });
 *
 * @param  {String|Object} descriptor the type descriptor or name know to the model
 * @return {Object}         the type representing the descriptor
 */
Moddle.prototype.getType = function(descriptor) {

  var cache = this.typeCache;

  var name = Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isString"])(descriptor) ? descriptor : descriptor.ns.name;

  var type = cache[name];

  if (!type) {
    descriptor = this.registry.getEffectiveDescriptor(name);
    type = cache[name] = this.factory.createType(descriptor);
  }

  return type;
};


/**
 * Creates an any-element type to be used within model instances.
 *
 * This can be used to create custom elements that lie outside the meta-model.
 * The created element contains all the meta-data required to serialize it
 * as part of meta-model elements.
 *
 * @method Moddle#createAny
 *
 * @example
 *
 * var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
 *   value: 'bar'
 * });
 *
 * var container = moddle.create('my:Container', 'http://my', {
 *   any: [ foo ]
 * });
 *
 * // go ahead and serialize the stuff
 *
 *
 * @param  {String} name  the name of the element
 * @param  {String} nsUri the namespace uri of the element
 * @param  {Object} [properties] a map of properties to initialize the instance with
 * @return {Object} the any type instance
 */
Moddle.prototype.createAny = function(name, nsUri, properties) {

  var nameNs = parseName(name);

  var element = {
    $type: name,
    $instanceOf: function(type) {
      return type === this.$type;
    }
  };

  var descriptor = {
    name: name,
    isGeneric: true,
    ns: {
      prefix: nameNs.prefix,
      localName: nameNs.localName,
      uri: nsUri
    }
  };

  this.properties.defineDescriptor(element, descriptor);
  this.properties.defineModel(element, this);
  this.properties.define(element, '$parent', { enumerable: false, writable: true });

  Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(properties, function(a, key) {
    if (Object(min_dash__WEBPACK_IMPORTED_MODULE_0__["isObject"])(a) && a.value !== undefined) {
      element[a.name] = a.value;
    } else {
      element[key] = a;
    }
  });

  return element;
};

/**
 * Returns a registered package by uri or prefix
 *
 * @return {Object} the package
 */
Moddle.prototype.getPackage = function(uriOrPrefix) {
  return this.registry.getPackage(uriOrPrefix);
};

/**
 * Returns a snapshot of all known packages
 *
 * @return {Object} the package
 */
Moddle.prototype.getPackages = function() {
  return this.registry.getPackages();
};

/**
 * Returns the descriptor for an element
 */
Moddle.prototype.getElementDescriptor = function(element) {
  return element.$descriptor;
};

/**
 * Returns true if the given descriptor or instance
 * represents the given type.
 *
 * May be applied to this, if element is omitted.
 */
Moddle.prototype.hasType = function(element, type) {
  if (type === undefined) {
    type = element;
    element = this;
  }

  var descriptor = element.$model.getElementDescriptor(element);

  return (type in descriptor.allTypesByName);
};

/**
 * Returns the descriptor of an elements named property
 */
Moddle.prototype.getPropertyDescriptor = function(element, property) {
  return this.getElementDescriptor(element).propertiesByName[property];
};

/**
 * Returns a mapped type's descriptor
 */
Moddle.prototype.getTypeDescriptor = function(type) {
  return this.registry.typeMap[type];
};




/***/ }),

/***/ "./node_modules/saxen/dist/index.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/saxen/dist/index.esm.js ***!
  \**********************************************/
/*! exports provided: Parser, decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decodeEntities; });
var fromCharCode = String.fromCharCode;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var ENTITY_PATTERN = /&#(\d+);|&#x([0-9a-f]+);|&(\w+);/ig;

var ENTITY_MAPPING = {
  'amp': '&',
  'apos': '\'',
  'gt': '>',
  'lt': '<',
  'quot': '"'
};

// map UPPERCASE variants of supported special chars
Object.keys(ENTITY_MAPPING).forEach(function(k) {
  ENTITY_MAPPING[k.toUpperCase()] = ENTITY_MAPPING[k];
});


function replaceEntities(_, d, x, z) {

  // reserved names, i.e. &nbsp;
  if (z) {
    if (hasOwnProperty.call(ENTITY_MAPPING, z)) {
      return ENTITY_MAPPING[z];
    } else {
      // fall back to original value
      return '&' + z + ';';
    }
  }

  // decimal encoded char
  if (d) {
    return fromCharCode(d);
  }

  // hex encoded char
  return fromCharCode(parseInt(x, 16));
}


/**
 * A basic entity decoder that can decode a minimal
 * sub-set of reserved names (&amp;) as well as
 * hex (&#xaaf;) and decimal (&#1231;) encoded characters.
 *
 * @param {string} str
 *
 * @return {string} decoded string
 */
function decodeEntities(s) {
  if (s.length > 3 && s.indexOf('&') !== -1) {
    return s.replace(ENTITY_PATTERN, replaceEntities);
  }

  return s;
}

var XSI_URI = 'http://www.w3.org/2001/XMLSchema-instance';
var XSI_PREFIX = 'xsi';
var XSI_TYPE = 'xsi:type';

var NON_WHITESPACE_OUTSIDE_ROOT_NODE = 'non-whitespace outside of root node';

function error(msg) {
  return new Error(msg);
}

function missingNamespaceForPrefix(prefix) {
  return 'missing namespace for prefix <' + prefix + '>';
}

function getter(getFn) {
  return {
    'get': getFn,
    'enumerable': true
  };
}

function cloneNsMatrix(nsMatrix) {
  var clone = {}, key;
  for (key in nsMatrix) {
    clone[key] = nsMatrix[key];
  }
  return clone;
}

function uriPrefix(prefix) {
  return prefix + '$uri';
}

function buildNsMatrix(nsUriToPrefix) {
  var nsMatrix = {},
      uri,
      prefix;

  for (uri in nsUriToPrefix) {
    prefix = nsUriToPrefix[uri];
    nsMatrix[prefix] = prefix;
    nsMatrix[uriPrefix(prefix)] = uri;
  }

  return nsMatrix;
}

function noopGetContext() {
  return { 'line': 0, 'column': 0 };
}

function throwFunc(err) {
  throw err;
}

/**
 * Creates a new parser with the given options.
 *
 * @constructor
 *
 * @param  {!Object<string, ?>=} options
 */
function Parser(options) {

  if (!this) {
    return new Parser(options);
  }

  var proxy = options && options['proxy'];

  var onText,
      onOpenTag,
      onCloseTag,
      onCDATA,
      onError = throwFunc,
      onWarning,
      onComment,
      onQuestion,
      onAttention;

  var getContext = noopGetContext;

  /**
   * Do we need to parse the current elements attributes for namespaces?
   *
   * @type {boolean}
   */
  var maybeNS = false;

  /**
   * Do we process namespaces at all?
   *
   * @type {boolean}
   */
  var isNamespace = false;

  /**
   * The caught error returned on parse end
   *
   * @type {Error}
   */
  var returnError = null;

  /**
   * Should we stop parsing?
   *
   * @type {boolean}
   */
  var parseStop = false;

  /**
   * A map of { uri: prefix } used by the parser.
   *
   * This map will ensure we can normalize prefixes during processing;
   * for each uri, only one prefix will be exposed to the handlers.
   *
   * @type {!Object<string, string>}}
   */
  var nsUriToPrefix;

  /**
   * Handle parse error.
   *
   * @param  {string|Error} err
   */
  function handleError(err) {
    if (!(err instanceof Error)) {
      err = error(err);
    }

    returnError = err;

    onError(err, getContext);
  }

  /**
   * Handle parse error.
   *
   * @param  {string|Error} err
   */
  function handleWarning(err) {

    if (!onWarning) {
      return;
    }

    if (!(err instanceof Error)) {
      err = error(err);
    }

    onWarning(err, getContext);
  }

  /**
   * Register parse listener.
   *
   * @param  {string}   name
   * @param  {Function} cb
   *
   * @return {Parser}
   */
  this['on'] = function(name, cb) {

    if (typeof cb !== 'function') {
      throw error('required args <name, cb>');
    }

    switch (name) {
    case 'openTag': onOpenTag = cb; break;
    case 'text': onText = cb; break;
    case 'closeTag': onCloseTag = cb; break;
    case 'error': onError = cb; break;
    case 'warn': onWarning = cb; break;
    case 'cdata': onCDATA = cb; break;
    case 'attention': onAttention = cb; break; // <!XXXXX zzzz="eeee">
    case 'question': onQuestion = cb; break; // <? ....  ?>
    case 'comment': onComment = cb; break;
    default:
      throw error('unsupported event: ' + name);
    }

    return this;
  };

  /**
   * Set the namespace to prefix mapping.
   *
   * @example
   *
   * parser.ns({
   *   'http://foo': 'foo',
   *   'http://bar': 'bar'
   * });
   *
   * @param  {!Object<string, string>} nsMap
   *
   * @return {Parser}
   */
  this['ns'] = function(nsMap) {

    if (typeof nsMap === 'undefined') {
      nsMap = {};
    }

    if (typeof nsMap !== 'object') {
      throw error('required args <nsMap={}>');
    }

    var _nsUriToPrefix = {}, k;

    for (k in nsMap) {
      _nsUriToPrefix[k] = nsMap[k];
    }

    // FORCE default mapping for schema instance
    _nsUriToPrefix[XSI_URI] = XSI_PREFIX;

    isNamespace = true;
    nsUriToPrefix = _nsUriToPrefix;

    return this;
  };

  /**
   * Parse xml string.
   *
   * @param  {string} xml
   *
   * @return {Error} returnError, if not thrown
   */
  this['parse'] = function(xml) {
    if (typeof xml !== 'string') {
      throw error('required args <xml=string>');
    }

    returnError = null;

    parse(xml);

    getContext = noopGetContext;
    parseStop = false;

    return returnError;
  };

  /**
   * Stop parsing.
   */
  this['stop'] = function() {
    parseStop = true;
  };

  /**
   * Parse string, invoking configured listeners on element.
   *
   * @param  {string} xml
   */
  function parse(xml) {
    var nsMatrixStack = isNamespace ? [] : null,
        nsMatrix = isNamespace ? buildNsMatrix(nsUriToPrefix) : null,
        _nsMatrix,
        nodeStack = [],
        anonymousNsCount = 0,
        tagStart = false,
        tagEnd = false,
        i = 0, j = 0,
        x, y, q, w,
        xmlns,
        elementName,
        _elementName,
        elementProxy
        ;

    var attrsString = '',
        attrsStart = 0,
        cachedAttrs // false = parsed with errors, null = needs parsing
        ;

    /**
     * Parse attributes on demand and returns the parsed attributes.
     *
     * Return semantics: (1) `false` on attribute parse error,
     * (2) object hash on extracted attrs.
     *
     * @return {boolean|Object}
     */
    function getAttrs() {
      if (cachedAttrs !== null) {
        return cachedAttrs;
      }

      var nsUri,
          nsUriPrefix,
          nsName,
          defaultAlias = isNamespace && nsMatrix['xmlns'],
          attrList = isNamespace && maybeNS ? [] : null,
          i = attrsStart,
          s = attrsString,
          l = s.length,
          hasNewMatrix,
          newalias,
          value,
          alias,
          name,
          attrs = {},
          seenAttrs = {},
          skipAttr,
          w,
          j;

      parseAttr:
      for (; i < l; i++) {
        skipAttr = false;
        w = s.charCodeAt(i);

        if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE={ \f\n\r\t\v}
          continue;
        }

        // wait for non whitespace character
        if (w < 65 || w > 122 || (w > 90 && w < 97)) {
          if (w !== 95 && w !== 58) { // char 95"_" 58":"
            handleWarning('illegal first char attribute name');
            skipAttr = true;
          }
        }

        // parse attribute name
        for (j = i + 1; j < l; j++) {
          w = s.charCodeAt(j);

          if (
            w > 96 && w < 123 ||
            w > 64 && w < 91 ||
            w > 47 && w < 59 ||
            w === 46 || // '.'
            w === 45 || // '-'
            w === 95 // '_'
          ) {
            continue;
          }

          // unexpected whitespace
          if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
            handleWarning('missing attribute value');
            i = j;

            continue parseAttr;
          }

          // expected "="
          if (w === 61) { // "=" == 61
            break;
          }

          handleWarning('illegal attribute name char');
          skipAttr = true;
        }

        name = s.substring(i, j);

        if (name === 'xmlns:xmlns') {
          handleWarning('illegal declaration of xmlns');
          skipAttr = true;
        }

        w = s.charCodeAt(j + 1);

        if (w === 34) { // '"'
          j = s.indexOf('"', i = j + 2);

          if (j === -1) {
            j = s.indexOf('\'', i);

            if (j !== -1) {
              handleWarning('attribute value quote missmatch');
              skipAttr = true;
            }
          }

        } else if (w === 39) { // "'"
          j = s.indexOf('\'', i = j + 2);

          if (j === -1) {
            j = s.indexOf('"', i);

            if (j !== -1) {
              handleWarning('attribute value quote missmatch');
              skipAttr = true;
            }
          }

        } else {
          handleWarning('missing attribute value quotes');
          skipAttr = true;

          // skip to next space
          for (j = j + 1; j < l; j++) {
            w = s.charCodeAt(j + 1);

            if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
              break;
            }
          }

        }

        if (j === -1) {
          handleWarning('missing closing quotes');

          j = l;
          skipAttr = true;
        }

        if (!skipAttr) {
          value = s.substring(i, j);
        }

        i = j;

        // ensure SPACE follows attribute
        // skip illegal content otherwise
        // example a="b"c
        for (; j + 1 < l; j++) {
          w = s.charCodeAt(j + 1);

          if (w === 32 || (w < 14 && w > 8)) { // WHITESPACE
            break;
          }

          // FIRST ILLEGAL CHAR
          if (i === j) {
            handleWarning('illegal character after attribute end');
            skipAttr = true;
          }
        }

        // advance cursor to next attribute
        i = j + 1;

        if (skipAttr) {
          continue parseAttr;
        }

        // check attribute re-declaration
        if (name in seenAttrs) {
          handleWarning('attribute <' + name + '> already defined');
          continue;
        }

        seenAttrs[name] = true;

        if (!isNamespace) {
          attrs[name] = value;
          continue;
        }

        // try to extract namespace information
        if (maybeNS) {
          newalias = (
            name === 'xmlns'
              ? 'xmlns'
              : (name.charCodeAt(0) === 120 && name.substr(0, 6) === 'xmlns:')
                ? name.substr(6)
                : null
          );

          // handle xmlns(:alias) assignment
          if (newalias !== null) {
            nsUri = decodeEntities(value);
            nsUriPrefix = uriPrefix(newalias);

            alias = nsUriToPrefix[nsUri];

            if (!alias) {
              // no prefix defined or prefix collision
              if (
                (newalias === 'xmlns') ||
                (nsUriPrefix in nsMatrix && nsMatrix[nsUriPrefix] !== nsUri)
              ) {
                // alocate free ns prefix
                do {
                  alias = 'ns' + (anonymousNsCount++);
                } while (typeof nsMatrix[alias] !== 'undefined');
              } else {
                alias = newalias;
              }

              nsUriToPrefix[nsUri] = alias;
            }

            if (nsMatrix[newalias] !== alias) {
              if (!hasNewMatrix) {
                nsMatrix = cloneNsMatrix(nsMatrix);
                hasNewMatrix = true;
              }

              nsMatrix[newalias] = alias;
              if (newalias === 'xmlns') {
                nsMatrix[uriPrefix(alias)] = nsUri;
                defaultAlias = alias;
              }

              nsMatrix[nsUriPrefix] = nsUri;
            }

            // expose xmlns(:asd)="..." in attributes
            attrs[name] = value;
            continue;
          }

          // collect attributes until all namespace
          // declarations are processed
          attrList.push(name, value);
          continue;

        } /** end if (maybeNs) */

        // handle attributes on element without
        // namespace declarations
        w = name.indexOf(':');
        if (w === -1) {
          attrs[name] = value;
          continue;
        }

        // normalize ns attribute name
        if (!(nsName = nsMatrix[name.substring(0, w)])) {
          handleWarning(missingNamespaceForPrefix(name.substring(0, w)));
          continue;
        }

        name = defaultAlias === nsName
          ? name.substr(w + 1)
          : nsName + name.substr(w);
        // end: normalize ns attribute name

        // normalize xsi:type ns attribute value
        if (name === XSI_TYPE) {
          w = value.indexOf(':');

          if (w !== -1) {
            nsName = value.substring(0, w);
            // handle default prefixes, i.e. xs:String gracefully
            nsName = nsMatrix[nsName] || nsName;
            value = nsName + value.substring(w);
          } else {
            value = defaultAlias + ':' + value;
          }
        }
        // end: normalize xsi:type ns attribute value

        attrs[name] = value;
      }


      // handle deferred, possibly namespaced attributes
      if (maybeNS) {

        // normalize captured attributes
        for (i = 0, l = attrList.length; i < l; i++) {

          name = attrList[i++];
          value = attrList[i];

          w = name.indexOf(':');

          if (w !== -1) {
            // normalize ns attribute name
            if (!(nsName = nsMatrix[name.substring(0, w)])) {
              handleWarning(missingNamespaceForPrefix(name.substring(0, w)));
              continue;
            }

            name = defaultAlias === nsName
              ? name.substr(w + 1)
              : nsName + name.substr(w);
            // end: normalize ns attribute name

            // normalize xsi:type ns attribute value
            if (name === XSI_TYPE) {
              w = value.indexOf(':');

              if (w !== -1) {
                nsName = value.substring(0, w);
                // handle default prefixes, i.e. xs:String gracefully
                nsName = nsMatrix[nsName] || nsName;
                value = nsName + value.substring(w);
              } else {
                value = defaultAlias + ':' + value;
              }
            }
            // end: normalize xsi:type ns attribute value
          }

          attrs[name] = value;
        }
        // end: normalize captured attributes
      }

      return cachedAttrs = attrs;
    }

    /**
     * Extract the parse context { line, column, part }
     * from the current parser position.
     *
     * @return {Object} parse context
     */
    function getParseContext() {
      var splitsRe = /(\r\n|\r|\n)/g;

      var line = 0;
      var column = 0;
      var startOfLine = 0;
      var endOfLine = j;
      var match;
      var data;

      while (i >= startOfLine) {

        match = splitsRe.exec(xml);

        if (!match) {
          break;
        }

        // end of line = (break idx + break chars)
        endOfLine = match[0].length + match.index;

        if (endOfLine > i) {
          break;
        }

        // advance to next line
        line += 1;

        startOfLine = endOfLine;
      }

      // EOF errors
      if (i == -1) {
        column = endOfLine;
        data = xml.substring(j);
      } else
      // start errors
      if (j === 0) {
        console.log(i - startOfLine);
        data = xml.substring(j, i);
      }
      // other errors
      else {
        column = i - startOfLine;
        data = (j == -1 ? xml.substring(i) : xml.substring(i, j + 1));
      }

      return {
        'data': data,
        'line': line,
        'column': column
      };
    }

    getContext = getParseContext;


    if (proxy) {
      elementProxy = Object.create({}, {
        'name': getter(function() {
          return elementName;
        }),
        'originalName': getter(function() {
          return _elementName;
        }),
        'attrs': getter(getAttrs),
        'ns': getter(function() {
          return nsMatrix;
        })
      });
    }

    // actual parse logic
    while (j !== -1) {

      if (xml.charCodeAt(j) === 60) { // "<"
        i = j;
      } else {
        i = xml.indexOf('<', j);
      }

      // parse end
      if (i === -1) {
        if (nodeStack.length) {
          return handleError('unexpected end of file');
        }

        if (j === 0) {
          return handleError('missing start tag');
        }

        if (j < xml.length) {
          if (xml.substring(j).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);
          }
        }

        return;
      }

      // parse text
      if (j !== i) {

        if (nodeStack.length) {
          if (onText) {
            onText(xml.substring(j, i), decodeEntities, getContext);

            if (parseStop) {
              return;
            }
          }
        } else {
          if (xml.substring(j, i).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);

            if (parseStop) {
              return;
            }
          }
        }
      }

      w = xml.charCodeAt(i+1);

      // parse comments + CDATA
      if (w === 33) { // "!"
        w = xml.charCodeAt(i+2);
        if (w === 91 && xml.substr(i + 3, 6) === 'CDATA[') { // 91 == "["
          j = xml.indexOf(']]>', i);
          if (j === -1) {
            return handleError('unclosed cdata');
          }

          if (onCDATA) {
            onCDATA(xml.substring(i + 9, j), getContext);
            if (parseStop) {
              return;
            }
          }

          j += 3;
          continue;
        }


        if (w === 45 && xml.charCodeAt(i + 3) === 45) { // 45 == "-"
          j = xml.indexOf('-->', i);
          if (j === -1) {
            return handleError('unclosed comment');
          }


          if (onComment) {
            onComment(xml.substring(i + 4, j), decodeEntities, getContext);
            if (parseStop) {
              return;
            }
          }

          j += 3;
          continue;
        }

        j = xml.indexOf('>', i + 1);
        if (j === -1) {
          return handleError('unclosed tag');
        }

        if (onAttention) {
          onAttention(xml.substring(i, j + 1), decodeEntities, getContext);
          if (parseStop) {
            return;
          }
        }

        j += 1;
        continue;
      }

      if (w === 63) { // "?"
        j = xml.indexOf('?>', i);
        if (j === -1) {
          return handleError('unclosed question');
        }

        if (onQuestion) {
          onQuestion(xml.substring(i, j + 2), getContext);
          if (parseStop) {
            return;
          }
        }

        j += 2;
        continue;
      }

      j = xml.indexOf('>', i + 1);

      if (j == -1) {
        return handleError('unclosed tag');
      }

      // don't process attributes;
      // there are none
      cachedAttrs = {};

      // if (xml.charCodeAt(i+1) === 47) { // </...
      if (w === 47) { // </...
        tagStart = false;
        tagEnd = true;

        if (!nodeStack.length) {
          return handleError('missing open tag');
        }

        // verify open <-> close tag match
        x = elementName = nodeStack.pop();
        q = i + 2 + x.length;

        if (xml.substring(i + 2, q) !== x) {
          return handleError('closing tag mismatch');
        }

        // verify chars in close tag
        for (; q < j; q++) {
          w = xml.charCodeAt(q);

          if (w === 32 || (w > 8 && w < 14)) { // \f\n\r\t\v space
            continue;
          }

          return handleError('close tag');
        }

      } else {
        if (xml.charCodeAt(j - 1) === 47) { // .../>
          x = elementName = xml.substring(i + 1, j - 1);

          tagStart = true;
          tagEnd = true;

        } else {
          x = elementName = xml.substring(i + 1, j);

          tagStart = true;
          tagEnd = false;
        }

        if (!(w > 96 && w < 123 || w > 64 && w < 91 || w === 95 || w === 58)) { // char 95"_" 58":"
          return handleError('illegal first char nodeName');
        }

        for (q = 1, y = x.length; q < y; q++) {
          w = x.charCodeAt(q);

          if (w > 96 && w < 123 || w > 64 && w < 91 || w > 47 && w < 59 || w === 45 || w === 95 || w == 46) {
            continue;
          }

          if (w === 32 || (w < 14 && w > 8)) { // \f\n\r\t\v space
            elementName = x.substring(0, q);
            // maybe there are attributes
            cachedAttrs = null;
            break;
          }

          return handleError('invalid nodeName');
        }

        if (!tagEnd) {
          nodeStack.push(elementName);
        }
      }

      if (isNamespace) {

        _nsMatrix = nsMatrix;

        if (tagStart) {
          // remember old namespace
          // unless we're self-closing
          if (!tagEnd) {
            nsMatrixStack.push(_nsMatrix);
          }

          if (cachedAttrs === null) {
            // quick check, whether there may be namespace
            // declarations on the node; if that is the case
            // we need to eagerly parse the node attributes
            if ((maybeNS = x.indexOf('xmlns', q) !== -1)) {
              attrsStart = q;
              attrsString = x;

              getAttrs();

              maybeNS = false;
            }
          }
        }

        _elementName = elementName;

        w = elementName.indexOf(':');
        if (w !== -1) {
          xmlns = nsMatrix[elementName.substring(0, w)];

          // prefix given; namespace must exist
          if (!xmlns) {
            return handleError('missing namespace on <' + _elementName + '>');
          }

          elementName = elementName.substr(w + 1);
        } else {
          xmlns = nsMatrix['xmlns'];

          // if no default namespace is defined,
          // we'll import the element as anonymous.
          //
          // it is up to users to correct that to the document defined
          // targetNamespace, or whatever their undersanding of the
          // XML spec mandates.
        }

        // adjust namespace prefixs as configured
        if (xmlns) {
          elementName = xmlns + ':' + elementName;
        }

      }

      if (tagStart) {
        attrsStart = q;
        attrsString = x;

        if (onOpenTag) {
          if (proxy) {
            onOpenTag(elementProxy, decodeEntities, tagEnd, getContext);
          } else {
            onOpenTag(elementName, getAttrs, decodeEntities, tagEnd, getContext);
          }

          if (parseStop) {
            return;
          }
        }

      }

      if (tagEnd) {

        if (onCloseTag) {
          onCloseTag(proxy ? elementProxy : elementName, decodeEntities, tagStart, getContext);

          if (parseStop) {
            return;
          }
        }

        // restore old namespace
        if (isNamespace) {
          if (!tagStart) {
            nsMatrix = nsMatrixStack.pop();
          } else {
            nsMatrix = _nsMatrix;
          }
        }
      }

      j += 1;
    }
  } /** end parse */

}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bpmn_moddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bpmn-moddle */ "./node_modules/bpmn-moddle/dist/index.esm.js");
/* harmony import */ var _xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xml */ "./src/xml.js");




var moddle = new bpmn_moddle__WEBPACK_IMPORTED_MODULE_0__["default"]();
moddle.fromXML(_xml__WEBPACK_IMPORTED_MODULE_1__["default"], function(err, definitions) {

  console.log(definitions);
  // Traverse the Process
  var elements = definitions.rootElements[0].flowElements;
  console.log(elements);
  const startEvent = elements.find(el => {
    // console.log(el);
    return el.$type === 'bpmn:StartEvent';
  });

  const idToElementMap = {};
  elements.forEach(element => {
    idToElementMap[element.id] = element;
  });


  console.log('_____________Traversing__________')

  let current = startEvent;
  console.log(current.id, current)

  while(current = current.outgoing && current.outgoing[0].targetRef) {
    console.log(current.id, current);

    if(current.$type === 'bpmn:ScriptTask') {
      eval(current.script)
    }
  }

  console.log('_____________Done__________')



  // console.log(idToElementMap);
  // console.log(startEvent);



  // // update id attribute
  // definitions.set('id', 'NEW ID');

  // // add a root element
  // var bpmnProcess = moddle.create('bpmn:Process', { id: 'MyProcess_1' });
  // definitions.get('rootElements').push(bpmnProcess);

  // moddle.toXML(definitions, function(err, xmlStrUpdated) {

  //   // xmlStrUpdated contains new id and the added process

  // });

});


/***/ }),

/***/ "./src/xml.js":
/*!********************!*\
  !*** ./src/xml.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1hp6wik" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="3.5.0">
  <bpmn:process id="Process_09qh5h4" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>SequenceFlow_08uoep0</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="SequenceFlow_08uoep0" sourceRef="StartEvent_1" targetRef="Task_18yhr5r" />
    <bpmn:scriptTask id="Task_18yhr5r" scriptFormat="javascript">
      <bpmn:incoming>SequenceFlow_08uoep0</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0r49ag5</bpmn:outgoing>
      <bpmn:script>var x = 42;
console.log('foo', x);

window.fooBar = 'baz';</bpmn:script>
    </bpmn:scriptTask>
    <bpmn:endEvent id="EndEvent_0oyp4ec">
      <bpmn:incoming>SequenceFlow_0r49ag5</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0r49ag5" sourceRef="Task_18yhr5r" targetRef="EndEvent_0oyp4ec" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_09qh5h4">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_08uoep0_di" bpmnElement="SequenceFlow_08uoep0">
        <di:waypoint x="215" y="117" />
        <di:waypoint x="270" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ScriptTask_0tvoxxr_di" bpmnElement="Task_18yhr5r">
        <dc:Bounds x="270" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_0oyp4ec_di" bpmnElement="EndEvent_0oyp4ec">
        <dc:Bounds x="432" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0r49ag5_di" bpmnElement="SequenceFlow_0r49ag5">
        <di:waypoint x="370" y="117" />
        <di:waypoint x="432" y="117" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

`);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JwbW4tbW9kZGxlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taW4tZGFzaC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9kZGxlLXhtbC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9kZGxlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXhlbi9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3htbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ3hCO0FBQ1k7O0FBRTVDO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQSxFQUFFLDZDQUFNO0FBQ1I7O0FBRUEscUNBQXFDLDZDQUFNOzs7QUFHM0M7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHlEQUFRO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSwyREFBVTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlEQUFNLENBQUMsdURBQU0sRUFBRSx5QkFBeUI7QUFDM0Q7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQSxNQUFNLDJEQUFVO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaURBQU07O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHVEQUFNLEdBQUc7O0FBRXJCO0FBQ0E7O0FBRWUscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ2psSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLGdCQUFnQjtBQUM1QjtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLFNBQVM7QUFDckI7QUFDQSxZQUFZLE1BQU07QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksU0FBUztBQUNyQixZQUFZLElBQUk7QUFDaEI7QUFDQSxZQUFZLElBQUk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLFNBQVM7QUFDckI7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVksTUFBTTtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVksT0FBTyxXQUFXO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRkFBK0YsYUFBYTtBQUM1RztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVksU0FBUztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVksU0FBUztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZLE9BQU87QUFDbkI7QUFDQSxZQUFZLFNBQVM7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQjtBQUNBLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakI7QUFDQSxZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakI7QUFDQSxZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFVBQVU7QUFDckI7QUFDQSxZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQSwrRkFBK0YsZUFBZTtBQUM5RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFdVQ7Ozs7Ozs7Ozs7Ozs7QUM3a0J2VDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0U7QUFDekM7QUFDd0M7O0FBRXZFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSwwREFBVztBQUMxQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjs7QUFFQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCOztBQUVBLEVBQUUsdURBQU07O0FBRVI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLHlEQUFVOztBQUVwQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx5REFBVTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBLEVBQUUsd0RBQU87O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBLFFBQVEsd0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUEsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCLHlEQUFVO0FBQzFCLE9BQU87QUFDUDtBQUNBLHFCQUFxQiwwREFBVzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSwwREFBVzs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLFdBQVc7QUFDdEQ7O0FBRUE7O0FBRUEsZUFBZSx1REFBTSxHQUFHO0FBQ3hCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscURBQUk7QUFDbkI7QUFDQSxLQUFLOztBQUVMO0FBQ0EsYUFBYSx1REFBTSxHQUFHO0FBQ3RCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxxREFBSTtBQUNuQjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFNLDJEQUFZO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHVEQUFNO0FBQ1o7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSwwREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVcsMERBQVc7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUEseUJBQXlCLDZDQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsdURBQU0sUUFBUSxhQUFhO0FBQzdCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxzQkFBc0I7QUFDakMsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQ0FBc0MsOEJBQThCO0FBQ3BFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUNBQXVDLDRCQUE0QjtBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsdURBQU0sR0FBRyxZQUFZLDJCQUEyQjtBQUM1RSxtQkFBbUIsNENBQU0sRUFBRSxjQUFjO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQixjQUFjLFNBQVM7QUFDdkIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTyxJQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLE1BQU0seURBQVE7QUFDZDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyxvREFBRztBQUNaO0FBQ0EsWUFBWTtBQUNaLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLFdBQVcsdURBQU0sRUFBRSxxQ0FBcUM7QUFDeEQsR0FBRztBQUNILFdBQVcsdURBQU0sRUFBRSxtRUFBbUU7QUFDdEY7QUFDQTs7QUFFQTtBQUNBLFNBQVMsdURBQU0sRUFBRSxxQ0FBcUM7QUFDdEQ7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLHVEQUFNO0FBQ2Y7O0FB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsd0RBQU8sZUFBZSxxREFBSTs7QUFFNUI7QUFDQSxRQUFRLHVEQUFNLEdBQUc7QUFDakI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRSx3REFBTyxXQUFXLHFEQUFJO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLFFBQVEsdURBQU0sR0FBRzs7QUFFakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUUsd0RBQU8sWUFBWSxxREFBSTtBQUN6QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHVEQUFNLEdBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsVUFBVSx1REFBTSxpQkFBaUI7QUFDakMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHdEQUFPLGtCQUFrQixxREFBSTs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksdURBQU07QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxFQUFFLHVEQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLHdEQUFPLGVBQWUscURBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQjtBQUNBOztBQUVBLHVDQUF1QyxvQkFBb0I7O0FBRTNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsd0RBQU87O0FBRVQ7QUFDQTs7QUFFQSxFQUFFLHdEQUFPO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMEMsYUFBYTtBQUN2RDs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0JBQW9CO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQ7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0EsWUFBWSxjQUFjO0FBQzFCLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTs7QUFFQSxhQUFhLHlEQUFROztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsb0NBQW9DOztBQUVsRixFQUFFLHdEQUFPO0FBQ1QsUUFBUSx5REFBUTtBQUNoQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4Rzs7Ozs7Ozs7Ozs7OztBQzkzQjlHO0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUVBLDhCQUE4QixnQkFBZ0IsUUFBUTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsZUFBZSxzQkFBc0I7QUFDckM7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLHFDQUFxQztBQUNyQywrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUMvQix1Q0FBdUMsT0FBTztBQUM5QyxxQ0FBcUMsT0FBTztBQUM1QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGNBQWMsd0JBQXdCO0FBQ3RDO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMscUJBQXFCO0FBQzlCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6Qjs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsT0FBTzs7QUFFL0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQyxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsT0FBTztBQUNyQjs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUCwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtFQUErRTtBQUMvRTtBQUNBOztBQUVBLGlDQUFpQyxPQUFPO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUU0Qzs7Ozs7Ozs7Ozs7OztBQ2xoQzVDO0FBQUE7QUFBQTtBQUFxQztBQUNUOzs7QUFHNUIsaUJBQWlCLG1EQUFVO0FBQzNCLGVBQWUsNENBQU87O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCxvQkFBb0I7QUFDMUU7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTixDQUFDOzs7Ozs7Ozs7Ozs7O0FDekREO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IGlzU3RyaW5nLCBpc0Z1bmN0aW9uLCBhc3NpZ24gfSBmcm9tICdtaW4tZGFzaCc7XG5pbXBvcnQgeyBNb2RkbGUgfSBmcm9tICdtb2RkbGUnO1xuaW1wb3J0IHsgUmVhZGVyLCBXcml0ZXIgfSBmcm9tICdtb2RkbGUteG1sJztcblxuLyoqXG4gKiBBIHN1YiBjbGFzcyBvZiB7QGxpbmsgTW9kZGxlfSB3aXRoIHN1cHBvcnQgZm9yIGltcG9ydCBhbmQgZXhwb3J0IG9mIEJQTU4gMi4wIHhtbCBmaWxlcy5cbiAqXG4gKiBAY2xhc3MgQnBtbk1vZGRsZVxuICogQGV4dGVuZHMgTW9kZGxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHBhY2thZ2VzIHRvIHVzZSBmb3IgaW5zdGFudGlhdGluZyB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWRkaXRpb25hbCBvcHRpb25zIHRvIHBhc3Mgb3ZlclxuICovXG5mdW5jdGlvbiBCcG1uTW9kZGxlKHBhY2thZ2VzLCBvcHRpb25zKSB7XG4gIE1vZGRsZS5jYWxsKHRoaXMsIHBhY2thZ2VzLCBvcHRpb25zKTtcbn1cblxuQnBtbk1vZGRsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1vZGRsZS5wcm90b3R5cGUpO1xuXG5cbi8qKlxuICogSW5zdGFudGlhdGVzIGEgQlBNTiBtb2RlbCB0cmVlIGZyb20gYSBnaXZlbiB4bWwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSAgIHhtbFN0clxuICogQHBhcmFtIHtTdHJpbmd9ICAgW3R5cGVOYW1lPSdicG1uOkRlZmluaXRpb25zJ10gbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gICBbb3B0aW9uc10gIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgdW5kZXJseWluZyByZWFkZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmUgICAgICAgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdpdGggKGVyciwgcmVzdWx0LCBwYXJzZUNvbnRleHQpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2UgdGhlIGltcG9ydCBjb21wbGV0ZXNcbiAqL1xuQnBtbk1vZGRsZS5wcm90b3R5cGUuZnJvbVhNTCA9IGZ1bmN0aW9uKHhtbFN0ciwgdHlwZU5hbWUsIG9wdGlvbnMsIGRvbmUpIHtcblxuICBpZiAoIWlzU3RyaW5nKHR5cGVOYW1lKSkge1xuICAgIGRvbmUgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSB0eXBlTmFtZTtcbiAgICB0eXBlTmFtZSA9ICdicG1uOkRlZmluaXRpb25zJztcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgZG9uZSA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIHJlYWRlciA9IG5ldyBSZWFkZXIoYXNzaWduKHsgbW9kZWw6IHRoaXMsIGxheDogdHJ1ZSB9LCBvcHRpb25zKSk7XG4gIHZhciByb290SGFuZGxlciA9IHJlYWRlci5oYW5kbGVyKHR5cGVOYW1lKTtcblxuICByZWFkZXIuZnJvbVhNTCh4bWxTdHIsIHJvb3RIYW5kbGVyLCBkb25lKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIGEgQlBNTiAyLjAgb2JqZWN0IHRyZWUgdG8gWE1MLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSAgIGVsZW1lbnQgICAgdGhlIHJvb3QgZWxlbWVudCwgdHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIGBicG1uOkRlZmluaXRpb25zYFxuICogQHBhcmFtIHtPYmplY3R9ICAgW29wdGlvbnNdICB0byBwYXNzIHRvIHRoZSB1bmRlcmx5aW5nIHdyaXRlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZSAgICAgICBjYWxsYmFjayBpbnZva2VkIHdpdGggKGVyciwgeG1sU3RyKSBvbmNlIHRoZSBpbXBvcnQgY29tcGxldGVzXG4gKi9cbkJwbW5Nb2RkbGUucHJvdG90eXBlLnRvWE1MID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgZG9uZSkge1xuXG4gIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgZG9uZSA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIHdyaXRlciA9IG5ldyBXcml0ZXIob3B0aW9ucyk7XG5cbiAgdmFyIHJlc3VsdDtcbiAgdmFyIGVycjtcblxuICB0cnkge1xuICAgIHJlc3VsdCA9IHdyaXRlci50b1hNTChlbGVtZW50KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVyciA9IGU7XG4gIH1cblxuICByZXR1cm4gZG9uZShlcnIsIHJlc3VsdCk7XG59O1xuXG52YXIgbmFtZSA9IFwiQlBNTjIwXCI7XG52YXIgdXJpID0gXCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9CUE1OLzIwMTAwNTI0L01PREVMXCI7XG52YXIgYXNzb2NpYXRpb25zID0gW1xuXTtcbnZhciB0eXBlcyA9IFtcblx0e1xuXHRcdG5hbWU6IFwiSW50ZXJmYWNlXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJSb290RWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3BlcmF0aW9uc1wiLFxuXHRcdFx0XHR0eXBlOiBcIk9wZXJhdGlvblwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW1wbGVtZW50YXRpb25SZWZcIixcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJPcGVyYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbk1lc3NhZ2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlXCIsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm91dE1lc3NhZ2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlXCIsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImVycm9yUmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXJyb3JcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbXBsZW1lbnRhdGlvblJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkVuZFBvaW50XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJSb290RWxlbWVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJBdWRpdGluZ1wiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiR2xvYmFsVGFza1wiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQ2FsbGFibGVFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJyZXNvdXJjZXNcIixcblx0XHRcdFx0dHlwZTogXCJSZXNvdXJjZVJvbGVcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJNb25pdG9yaW5nXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJQZXJmb3JtZXJcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlJlc291cmNlUm9sZVwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJQcm9jZXNzXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJGbG93RWxlbWVudHNDb250YWluZXJcIixcblx0XHRcdFwiQ2FsbGFibGVFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJwcm9jZXNzVHlwZVwiLFxuXHRcdFx0XHR0eXBlOiBcIlByb2Nlc3NUeXBlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpc0Nsb3NlZFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImF1ZGl0aW5nXCIsXG5cdFx0XHRcdHR5cGU6IFwiQXVkaXRpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJtb25pdG9yaW5nXCIsXG5cdFx0XHRcdHR5cGU6IFwiTW9uaXRvcmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInByb3BlcnRpZXNcIixcblx0XHRcdFx0dHlwZTogXCJQcm9wZXJ0eVwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibGFuZVNldHNcIixcblx0XHRcdFx0dHlwZTogXCJMYW5lU2V0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0cmVwbGFjZXM6IFwiRmxvd0VsZW1lbnRzQ29udGFpbmVyI2xhbmVTZXRzXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZmxvd0VsZW1lbnRzXCIsXG5cdFx0XHRcdHR5cGU6IFwiRmxvd0VsZW1lbnRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRyZXBsYWNlczogXCJGbG93RWxlbWVudHNDb250YWluZXIjZmxvd0VsZW1lbnRzXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiYXJ0aWZhY3RzXCIsXG5cdFx0XHRcdHR5cGU6IFwiQXJ0aWZhY3RcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInJlc291cmNlc1wiLFxuXHRcdFx0XHR0eXBlOiBcIlJlc291cmNlUm9sZVwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY29ycmVsYXRpb25TdWJzY3JpcHRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiQ29ycmVsYXRpb25TdWJzY3JpcHRpb25cIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInN1cHBvcnRzXCIsXG5cdFx0XHRcdHR5cGU6IFwiUHJvY2Vzc1wiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImRlZmluaXRpb25hbENvbGxhYm9yYXRpb25SZWZcIixcblx0XHRcdFx0dHlwZTogXCJDb2xsYWJvcmF0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNFeGVjdXRhYmxlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJCb29sZWFuXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkxhbmVTZXRcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJsYW5lc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkxhbmVcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJMYW5lXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicGFydGl0aW9uRWxlbWVudFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkJhc2VFbGVtZW50XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicGFydGl0aW9uRWxlbWVudFwiLFxuXHRcdFx0XHR0eXBlOiBcIkJhc2VFbGVtZW50XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZmxvd05vZGVSZWZcIixcblx0XHRcdFx0dHlwZTogXCJGbG93Tm9kZVwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImNoaWxkTGFuZVNldFwiLFxuXHRcdFx0XHR0eXBlOiBcIkxhbmVTZXRcIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiR2xvYmFsTWFudWFsVGFza1wiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiR2xvYmFsVGFza1wiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJNYW51YWxUYXNrXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJUYXNrXCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlVzZXJUYXNrXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJUYXNrXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJyZW5kZXJpbmdzXCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVuZGVyaW5nXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbXBsZW1lbnRhdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlJlbmRlcmluZ1wiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiSHVtYW5QZXJmb3JtZXJcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlBlcmZvcm1lclwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJQb3RlbnRpYWxPd25lclwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiSHVtYW5QZXJmb3JtZXJcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiR2xvYmFsVXNlclRhc2tcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkdsb2JhbFRhc2tcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImltcGxlbWVudGF0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJyZW5kZXJpbmdzXCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVuZGVyaW5nXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiR2F0ZXdheVwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJGbG93Tm9kZVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZ2F0ZXdheURpcmVjdGlvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkdhdGV3YXlEaXJlY3Rpb25cIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiVW5zcGVjaWZpZWRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJFdmVudEJhc2VkR2F0ZXdheVwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiR2F0ZXdheVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW5zdGFudGlhdGVcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImV2ZW50R2F0ZXdheVR5cGVcIixcblx0XHRcdFx0dHlwZTogXCJFdmVudEJhc2VkR2F0ZXdheVR5cGVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJFeGNsdXNpdmVcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ29tcGxleEdhdGV3YXlcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkdhdGV3YXlcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImFjdGl2YXRpb25Db25kaXRpb25cIixcblx0XHRcdFx0dHlwZTogXCJFeHByZXNzaW9uXCIsXG5cdFx0XHRcdHhtbDoge1xuXHRcdFx0XHRcdHNlcmlhbGl6ZTogXCJ4c2k6dHlwZVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZGVmYXVsdFwiLFxuXHRcdFx0XHR0eXBlOiBcIlNlcXVlbmNlRmxvd1wiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJFeGNsdXNpdmVHYXRld2F5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJHYXRld2F5XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJkZWZhdWx0XCIsXG5cdFx0XHRcdHR5cGU6IFwiU2VxdWVuY2VGbG93XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkluY2x1c2l2ZUdhdGV3YXlcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkdhdGV3YXlcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImRlZmF1bHRcIixcblx0XHRcdFx0dHlwZTogXCJTZXF1ZW5jZUZsb3dcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiUGFyYWxsZWxHYXRld2F5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJHYXRld2F5XCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlJvb3RFbGVtZW50XCIsXG5cdFx0aXNBYnN0cmFjdDogdHJ1ZSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlJlbGF0aW9uc2hpcFwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInR5cGVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImRpcmVjdGlvblwiLFxuXHRcdFx0XHR0eXBlOiBcIlJlbGF0aW9uc2hpcERpcmVjdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwic291cmNlXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiRWxlbWVudFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRhcmdldFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkVsZW1lbnRcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQmFzZUVsZW1lbnRcIixcblx0XHRpc0Fic3RyYWN0OiB0cnVlLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpZFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCIsXG5cdFx0XHRcdGlzSWQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZG9jdW1lbnRhdGlvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkRvY3VtZW50YXRpb25cIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImV4dGVuc2lvbkRlZmluaXRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXh0ZW5zaW9uRGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImV4dGVuc2lvbkVsZW1lbnRzXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXh0ZW5zaW9uRWxlbWVudHNcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRXh0ZW5zaW9uXCIsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm11c3RVbmRlcnN0YW5kXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBmYWxzZSxcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJkZWZpbml0aW9uXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXh0ZW5zaW9uRGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJFeHRlbnNpb25EZWZpbml0aW9uXCIsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImV4dGVuc2lvbkF0dHJpYnV0ZURlZmluaXRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXh0ZW5zaW9uQXR0cmlidXRlRGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkV4dGVuc2lvbkF0dHJpYnV0ZURlZmluaXRpb25cIixcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidHlwZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNSZWZlcmVuY2VcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImV4dGVuc2lvbkRlZmluaXRpb25cIixcblx0XHRcdFx0dHlwZTogXCJFeHRlbnNpb25EZWZpbml0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkV4dGVuc2lvbkVsZW1lbnRzXCIsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInZhbHVlUmVmXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiRWxlbWVudFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInZhbHVlc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkVsZW1lbnRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImV4dGVuc2lvbkF0dHJpYnV0ZURlZmluaXRpb25cIixcblx0XHRcdFx0dHlwZTogXCJFeHRlbnNpb25BdHRyaWJ1dGVEZWZpbml0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkRvY3VtZW50YXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCIsXG5cdFx0XHRcdGlzQm9keTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0ZXh0Rm9ybWF0XCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcInRleHQvcGxhaW5cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJFdmVudFwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJGbG93Tm9kZVwiLFxuXHRcdFx0XCJJbnRlcmFjdGlvbk5vZGVcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInByb3BlcnRpZXNcIixcblx0XHRcdFx0dHlwZTogXCJQcm9wZXJ0eVwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkludGVybWVkaWF0ZUNhdGNoRXZlbnRcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkNhdGNoRXZlbnRcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiSW50ZXJtZWRpYXRlVGhyb3dFdmVudFwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiVGhyb3dFdmVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJFbmRFdmVudFwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiVGhyb3dFdmVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJTdGFydEV2ZW50XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJDYXRjaEV2ZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpc0ludGVycnVwdGluZ1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogdHJ1ZSxcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiVGhyb3dFdmVudFwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJFdmVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZGF0YUlucHV0c1wiLFxuXHRcdFx0XHR0eXBlOiBcIkRhdGFJbnB1dFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZGF0YUlucHV0QXNzb2NpYXRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGF0YUlucHV0QXNzb2NpYXRpb25cIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlucHV0U2V0XCIsXG5cdFx0XHRcdHR5cGU6IFwiSW5wdXRTZXRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJldmVudERlZmluaXRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXZlbnREZWZpbml0aW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJldmVudERlZmluaXRpb25SZWZcIixcblx0XHRcdFx0dHlwZTogXCJFdmVudERlZmluaXRpb25cIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ2F0Y2hFdmVudFwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJFdmVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicGFyYWxsZWxNdWx0aXBsZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZGF0YU91dHB1dHNcIixcblx0XHRcdFx0dHlwZTogXCJEYXRhT3V0cHV0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJkYXRhT3V0cHV0QXNzb2NpYXRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGF0YU91dHB1dEFzc29jaWF0aW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJvdXRwdXRTZXRcIixcblx0XHRcdFx0dHlwZTogXCJPdXRwdXRTZXRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJldmVudERlZmluaXRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXZlbnREZWZpbml0aW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJldmVudERlZmluaXRpb25SZWZcIixcblx0XHRcdFx0dHlwZTogXCJFdmVudERlZmluaXRpb25cIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQm91bmRhcnlFdmVudFwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQ2F0Y2hFdmVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2FuY2VsQWN0aXZpdHlcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IHRydWUsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJCb29sZWFuXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiYXR0YWNoZWRUb1JlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkFjdGl2aXR5XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkV2ZW50RGVmaW5pdGlvblwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJSb290RWxlbWVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDYW5jZWxFdmVudERlZmluaXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkV2ZW50RGVmaW5pdGlvblwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJFcnJvckV2ZW50RGVmaW5pdGlvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiRXZlbnREZWZpbml0aW9uXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJlcnJvclJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkVycm9yXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlRlcm1pbmF0ZUV2ZW50RGVmaW5pdGlvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiRXZlbnREZWZpbml0aW9uXCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkVzY2FsYXRpb25FdmVudERlZmluaXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkV2ZW50RGVmaW5pdGlvblwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZXNjYWxhdGlvblJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkVzY2FsYXRpb25cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRXNjYWxhdGlvblwiLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzdHJ1Y3R1cmVSZWZcIixcblx0XHRcdFx0dHlwZTogXCJJdGVtRGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImVzY2FsYXRpb25Db2RlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJSb290RWxlbWVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDb21wZW5zYXRlRXZlbnREZWZpbml0aW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJFdmVudERlZmluaXRpb25cIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIndhaXRGb3JDb21wbGV0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJCb29sZWFuXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImFjdGl2aXR5UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiQWN0aXZpdHlcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiVGltZXJFdmVudERlZmluaXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkV2ZW50RGVmaW5pdGlvblwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidGltZURhdGVcIixcblx0XHRcdFx0dHlwZTogXCJFeHByZXNzaW9uXCIsXG5cdFx0XHRcdHhtbDoge1xuXHRcdFx0XHRcdHNlcmlhbGl6ZTogXCJ4c2k6dHlwZVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidGltZUN5Y2xlXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXhwcmVzc2lvblwiLFxuXHRcdFx0XHR4bWw6IHtcblx0XHRcdFx0XHRzZXJpYWxpemU6IFwieHNpOnR5cGVcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRpbWVEdXJhdGlvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTGlua0V2ZW50RGVmaW5pdGlvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiRXZlbnREZWZpbml0aW9uXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0YXJnZXRcIixcblx0XHRcdFx0dHlwZTogXCJMaW5rRXZlbnREZWZpbml0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwic291cmNlXCIsXG5cdFx0XHRcdHR5cGU6IFwiTGlua0V2ZW50RGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJNZXNzYWdlRXZlbnREZWZpbml0aW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJFdmVudERlZmluaXRpb25cIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1lc3NhZ2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3BlcmF0aW9uUmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiT3BlcmF0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNvbmRpdGlvbmFsRXZlbnREZWZpbml0aW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJFdmVudERlZmluaXRpb25cIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImNvbmRpdGlvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiU2lnbmFsRXZlbnREZWZpbml0aW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJFdmVudERlZmluaXRpb25cIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInNpZ25hbFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIlNpZ25hbFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJTaWduYWxcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlJvb3RFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzdHJ1Y3R1cmVSZWZcIixcblx0XHRcdFx0dHlwZTogXCJJdGVtRGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJJbXBsaWNpdFRocm93RXZlbnRcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlRocm93RXZlbnRcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRGF0YVN0YXRlXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkl0ZW1Bd2FyZUVsZW1lbnRcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpdGVtU3ViamVjdFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkl0ZW1EZWZpbml0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZGF0YVN0YXRlXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGF0YVN0YXRlXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkRhdGFBc3NvY2lhdGlvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImFzc2lnbm1lbnRcIixcblx0XHRcdFx0dHlwZTogXCJBc3NpZ25tZW50XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzb3VyY2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJJdGVtQXdhcmVFbGVtZW50XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidGFyZ2V0UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiSXRlbUF3YXJlRWxlbWVudFwiLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0cmFuc2Zvcm1hdGlvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkZvcm1hbEV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInByb3BlcnR5XCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRGF0YUlucHV0XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJJdGVtQXdhcmVFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpc0NvbGxlY3Rpb25cIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlucHV0U2V0UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW5wdXRTZXRcIixcblx0XHRcdFx0aXNWaXJ0dWFsOiB0cnVlLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlucHV0U2V0V2l0aE9wdGlvbmFsXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW5wdXRTZXRcIixcblx0XHRcdFx0aXNWaXJ0dWFsOiB0cnVlLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlucHV0U2V0V2l0aFdoaWxlRXhlY3V0aW5nXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW5wdXRTZXRcIixcblx0XHRcdFx0aXNWaXJ0dWFsOiB0cnVlLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJEYXRhT3V0cHV0XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJJdGVtQXdhcmVFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpc0NvbGxlY3Rpb25cIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm91dHB1dFNldFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIk91dHB1dFNldFwiLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3V0cHV0U2V0V2l0aE9wdGlvbmFsXCIsXG5cdFx0XHRcdHR5cGU6IFwiT3V0cHV0U2V0XCIsXG5cdFx0XHRcdGlzVmlydHVhbDogdHJ1ZSxcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJvdXRwdXRTZXRXaXRoV2hpbGVFeGVjdXRpbmdcIixcblx0XHRcdFx0dHlwZTogXCJPdXRwdXRTZXRcIixcblx0XHRcdFx0aXNWaXJ0dWFsOiB0cnVlLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJJbnB1dFNldFwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImRhdGFJbnB1dFJlZnNcIixcblx0XHRcdFx0dHlwZTogXCJEYXRhSW5wdXRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJvcHRpb25hbElucHV0UmVmc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkRhdGFJbnB1dFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIndoaWxlRXhlY3V0aW5nSW5wdXRSZWZzXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGF0YUlucHV0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3V0cHV0U2V0UmVmc1wiLFxuXHRcdFx0XHR0eXBlOiBcIk91dHB1dFNldFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJPdXRwdXRTZXRcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJkYXRhT3V0cHV0UmVmc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkRhdGFPdXRwdXRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbnB1dFNldFJlZnNcIixcblx0XHRcdFx0dHlwZTogXCJJbnB1dFNldFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm9wdGlvbmFsT3V0cHV0UmVmc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkRhdGFPdXRwdXRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ3aGlsZUV4ZWN1dGluZ091dHB1dFJlZnNcIixcblx0XHRcdFx0dHlwZTogXCJEYXRhT3V0cHV0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlByb3BlcnR5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJJdGVtQXdhcmVFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRGF0YUlucHV0QXNzb2NpYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkRhdGFBc3NvY2lhdGlvblwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJEYXRhT3V0cHV0QXNzb2NpYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkRhdGFBc3NvY2lhdGlvblwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJJbnB1dE91dHB1dFNwZWNpZmljYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJkYXRhSW5wdXRzXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGF0YUlucHV0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJkYXRhT3V0cHV0c1wiLFxuXHRcdFx0XHR0eXBlOiBcIkRhdGFPdXRwdXRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlucHV0U2V0c1wiLFxuXHRcdFx0XHR0eXBlOiBcIklucHV0U2V0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJvdXRwdXRTZXRzXCIsXG5cdFx0XHRcdHR5cGU6IFwiT3V0cHV0U2V0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRGF0YU9iamVjdFwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiRmxvd0VsZW1lbnRcIixcblx0XHRcdFwiSXRlbUF3YXJlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNDb2xsZWN0aW9uXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBmYWxzZSxcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiSW5wdXRPdXRwdXRCaW5kaW5nXCIsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlucHV0RGF0YVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIklucHV0U2V0XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3V0cHV0RGF0YVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIk91dHB1dFNldFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm9wZXJhdGlvblJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIk9wZXJhdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJBc3NpZ25tZW50XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZnJvbVwiLFxuXHRcdFx0XHR0eXBlOiBcIkV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0b1wiLFxuXHRcdFx0XHR0eXBlOiBcIkV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRGF0YVN0b3JlXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJSb290RWxlbWVudFwiLFxuXHRcdFx0XCJJdGVtQXdhcmVFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjYXBhY2l0eVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiSW50ZWdlclwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlzVW5saW1pdGVkXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB0cnVlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJEYXRhU3RvcmVSZWZlcmVuY2VcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkl0ZW1Bd2FyZUVsZW1lbnRcIixcblx0XHRcdFwiRmxvd0VsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImRhdGFTdG9yZVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkRhdGFTdG9yZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJEYXRhT2JqZWN0UmVmZXJlbmNlXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJJdGVtQXdhcmVFbGVtZW50XCIsXG5cdFx0XHRcIkZsb3dFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJkYXRhT2JqZWN0UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGF0YU9iamVjdFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDb252ZXJzYXRpb25MaW5rXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwic291cmNlUmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW50ZXJhY3Rpb25Ob2RlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidGFyZ2V0UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW50ZXJhY3Rpb25Ob2RlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNvbnZlcnNhdGlvbkFzc29jaWF0aW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW5uZXJDb252ZXJzYXRpb25Ob2RlUmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiQ29udmVyc2F0aW9uTm9kZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm91dGVyQ29udmVyc2F0aW9uTm9kZVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkNvbnZlcnNhdGlvbk5vZGVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ2FsbENvbnZlcnNhdGlvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQ29udmVyc2F0aW9uTm9kZVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2FsbGVkQ29sbGFib3JhdGlvblJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkNvbGxhYm9yYXRpb25cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJwYXJ0aWNpcGFudEFzc29jaWF0aW9uc1wiLFxuXHRcdFx0XHR0eXBlOiBcIlBhcnRpY2lwYW50QXNzb2NpYXRpb25cIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDb252ZXJzYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkNvbnZlcnNhdGlvbk5vZGVcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiU3ViQ29udmVyc2F0aW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJDb252ZXJzYXRpb25Ob2RlXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjb252ZXJzYXRpb25Ob2Rlc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkNvbnZlcnNhdGlvbk5vZGVcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDb252ZXJzYXRpb25Ob2RlXCIsXG5cdFx0aXNBYnN0cmFjdDogdHJ1ZSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkludGVyYWN0aW9uTm9kZVwiLFxuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicGFydGljaXBhbnRSZWZcIixcblx0XHRcdFx0dHlwZTogXCJQYXJ0aWNpcGFudFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1lc3NhZ2VGbG93UmVmc1wiLFxuXHRcdFx0XHR0eXBlOiBcIk1lc3NhZ2VGbG93XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY29ycmVsYXRpb25LZXlzXCIsXG5cdFx0XHRcdHR5cGU6IFwiQ29ycmVsYXRpb25LZXlcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJHbG9iYWxDb252ZXJzYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkNvbGxhYm9yYXRpb25cIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiUGFydG5lckVudGl0eVwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiUm9vdEVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInBhcnRpY2lwYW50UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiUGFydGljaXBhbnRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiUGFydG5lclJvbGVcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlJvb3RFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJwYXJ0aWNpcGFudFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIlBhcnRpY2lwYW50XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNvcnJlbGF0aW9uUHJvcGVydHlcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlJvb3RFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjb3JyZWxhdGlvblByb3BlcnR5UmV0cmlldmFsRXhwcmVzc2lvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkNvcnJlbGF0aW9uUHJvcGVydHlSZXRyaWV2YWxFeHByZXNzaW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0eXBlXCIsXG5cdFx0XHRcdHR5cGU6IFwiSXRlbURlZmluaXRpb25cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRXJyb3JcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlJvb3RFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzdHJ1Y3R1cmVSZWZcIixcblx0XHRcdFx0dHlwZTogXCJJdGVtRGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImVycm9yQ29kZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNvcnJlbGF0aW9uS2V5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY29ycmVsYXRpb25Qcm9wZXJ0eVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkNvcnJlbGF0aW9uUHJvcGVydHlcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRXhwcmVzc2lvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0aXNBYnN0cmFjdDogZmFsc2UsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImJvZHlcIixcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIixcblx0XHRcdFx0aXNCb2R5OiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJGb3JtYWxFeHByZXNzaW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJFeHByZXNzaW9uXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZXZhbHVhdGVzVG9UeXBlUmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiSXRlbURlZmluaXRpb25cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTWVzc2FnZVwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiUm9vdEVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIml0ZW1SZWZcIixcblx0XHRcdFx0dHlwZTogXCJJdGVtRGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJJdGVtRGVmaW5pdGlvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiUm9vdEVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIml0ZW1LaW5kXCIsXG5cdFx0XHRcdHR5cGU6IFwiSXRlbUtpbmRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInN0cnVjdHVyZVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNDb2xsZWN0aW9uXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBmYWxzZSxcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbXBvcnRcIixcblx0XHRcdFx0dHlwZTogXCJJbXBvcnRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRmxvd0VsZW1lbnRcIixcblx0XHRpc0Fic3RyYWN0OiB0cnVlLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImF1ZGl0aW5nXCIsXG5cdFx0XHRcdHR5cGU6IFwiQXVkaXRpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJtb25pdG9yaW5nXCIsXG5cdFx0XHRcdHR5cGU6IFwiTW9uaXRvcmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImNhdGVnb3J5VmFsdWVSZWZcIixcblx0XHRcdFx0dHlwZTogXCJDYXRlZ29yeVZhbHVlXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlNlcXVlbmNlRmxvd1wiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiRmxvd0VsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlzSW1tZWRpYXRlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJCb29sZWFuXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY29uZGl0aW9uRXhwcmVzc2lvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzb3VyY2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJGbG93Tm9kZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRhcmdldFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkZsb3dOb2RlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkZsb3dFbGVtZW50c0NvbnRhaW5lclwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibGFuZVNldHNcIixcblx0XHRcdFx0dHlwZTogXCJMYW5lU2V0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJmbG93RWxlbWVudHNcIixcblx0XHRcdFx0dHlwZTogXCJGbG93RWxlbWVudFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNhbGxhYmxlRWxlbWVudFwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJSb290RWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW9TcGVjaWZpY2F0aW9uXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW5wdXRPdXRwdXRTcGVjaWZpY2F0aW9uXCIsXG5cdFx0XHRcdHhtbDoge1xuXHRcdFx0XHRcdHNlcmlhbGl6ZTogXCJwcm9wZXJ0eVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwic3VwcG9ydGVkSW50ZXJmYWNlUmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW50ZXJmYWNlXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW9CaW5kaW5nXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW5wdXRPdXRwdXRCaW5kaW5nXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInByb3BlcnR5XCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRmxvd05vZGVcIixcblx0XHRpc0Fic3RyYWN0OiB0cnVlLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiRmxvd0VsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImluY29taW5nXCIsXG5cdFx0XHRcdHR5cGU6IFwiU2VxdWVuY2VGbG93XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3V0Z29pbmdcIixcblx0XHRcdFx0dHlwZTogXCJTZXF1ZW5jZUZsb3dcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJsYW5lc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkxhbmVcIixcblx0XHRcdFx0aXNWaXJ0dWFsOiB0cnVlLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDb3JyZWxhdGlvblByb3BlcnR5UmV0cmlldmFsRXhwcmVzc2lvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1lc3NhZ2VQYXRoXCIsXG5cdFx0XHRcdHR5cGU6IFwiRm9ybWFsRXhwcmVzc2lvblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1lc3NhZ2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNvcnJlbGF0aW9uUHJvcGVydHlCaW5kaW5nXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZGF0YVBhdGhcIixcblx0XHRcdFx0dHlwZTogXCJGb3JtYWxFeHByZXNzaW9uXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY29ycmVsYXRpb25Qcm9wZXJ0eVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkNvcnJlbGF0aW9uUHJvcGVydHlcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiUmVzb3VyY2VcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlJvb3RFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJyZXNvdXJjZVBhcmFtZXRlcnNcIixcblx0XHRcdFx0dHlwZTogXCJSZXNvdXJjZVBhcmFtZXRlclwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlJlc291cmNlUGFyYW1ldGVyXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNSZXF1aXJlZFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInR5cGVcIixcblx0XHRcdFx0dHlwZTogXCJJdGVtRGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDb3JyZWxhdGlvblN1YnNjcmlwdGlvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImNvcnJlbGF0aW9uS2V5UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiQ29ycmVsYXRpb25LZXlcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjb3JyZWxhdGlvblByb3BlcnR5QmluZGluZ1wiLFxuXHRcdFx0XHR0eXBlOiBcIkNvcnJlbGF0aW9uUHJvcGVydHlCaW5kaW5nXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTWVzc2FnZUZsb3dcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzb3VyY2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJJbnRlcmFjdGlvbk5vZGVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0YXJnZXRSZWZcIixcblx0XHRcdFx0dHlwZTogXCJJbnRlcmFjdGlvbk5vZGVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJtZXNzYWdlUmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiTWVzc2FnZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJNZXNzYWdlRmxvd0Fzc29jaWF0aW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW5uZXJNZXNzYWdlRmxvd1JlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIk1lc3NhZ2VGbG93XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3V0ZXJNZXNzYWdlRmxvd1JlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIk1lc3NhZ2VGbG93XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkludGVyYWN0aW9uTm9kZVwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImluY29taW5nQ29udmVyc2F0aW9uTGlua3NcIixcblx0XHRcdFx0dHlwZTogXCJDb252ZXJzYXRpb25MaW5rXCIsXG5cdFx0XHRcdGlzVmlydHVhbDogdHJ1ZSxcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJvdXRnb2luZ0NvbnZlcnNhdGlvbkxpbmtzXCIsXG5cdFx0XHRcdHR5cGU6IFwiQ29udmVyc2F0aW9uTGlua1wiLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlBhcnRpY2lwYW50XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJJbnRlcmFjdGlvbk5vZGVcIixcblx0XHRcdFwiQmFzZUVsZW1lbnRcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImludGVyZmFjZVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkludGVyZmFjZVwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInBhcnRpY2lwYW50TXVsdGlwbGljaXR5XCIsXG5cdFx0XHRcdHR5cGU6IFwiUGFydGljaXBhbnRNdWx0aXBsaWNpdHlcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJlbmRQb2ludFJlZnNcIixcblx0XHRcdFx0dHlwZTogXCJFbmRQb2ludFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInByb2Nlc3NSZWZcIixcblx0XHRcdFx0dHlwZTogXCJQcm9jZXNzXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlBhcnRpY2lwYW50QXNzb2NpYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbm5lclBhcnRpY2lwYW50UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiUGFydGljaXBhbnRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJvdXRlclBhcnRpY2lwYW50UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiUGFydGljaXBhbnRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiUGFydGljaXBhbnRNdWx0aXBsaWNpdHlcIixcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibWluaW11bVwiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogMCxcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkludGVnZXJcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJtYXhpbXVtXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiAxLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiSW50ZWdlclwiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNvbGxhYm9yYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlJvb3RFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpc0Nsb3NlZFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInBhcnRpY2lwYW50c1wiLFxuXHRcdFx0XHR0eXBlOiBcIlBhcnRpY2lwYW50XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJtZXNzYWdlRmxvd3NcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlRmxvd1wiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiYXJ0aWZhY3RzXCIsXG5cdFx0XHRcdHR5cGU6IFwiQXJ0aWZhY3RcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImNvbnZlcnNhdGlvbnNcIixcblx0XHRcdFx0dHlwZTogXCJDb252ZXJzYXRpb25Ob2RlXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjb252ZXJzYXRpb25Bc3NvY2lhdGlvbnNcIixcblx0XHRcdFx0dHlwZTogXCJDb252ZXJzYXRpb25Bc3NvY2lhdGlvblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInBhcnRpY2lwYW50QXNzb2NpYXRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiUGFydGljaXBhbnRBc3NvY2lhdGlvblwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibWVzc2FnZUZsb3dBc3NvY2lhdGlvbnNcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlRmxvd0Fzc29jaWF0aW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjb3JyZWxhdGlvbktleXNcIixcblx0XHRcdFx0dHlwZTogXCJDb3JyZWxhdGlvbktleVwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2hvcmVvZ3JhcGh5UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiQ2hvcmVvZ3JhcGh5XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY29udmVyc2F0aW9uTGlua3NcIixcblx0XHRcdFx0dHlwZTogXCJDb252ZXJzYXRpb25MaW5rXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ2hvcmVvZ3JhcGh5QWN0aXZpdHlcIixcblx0XHRpc0Fic3RyYWN0OiB0cnVlLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiRmxvd05vZGVcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInBhcnRpY2lwYW50UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiUGFydGljaXBhbnRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbml0aWF0aW5nUGFydGljaXBhbnRSZWZcIixcblx0XHRcdFx0dHlwZTogXCJQYXJ0aWNpcGFudFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImNvcnJlbGF0aW9uS2V5c1wiLFxuXHRcdFx0XHR0eXBlOiBcIkNvcnJlbGF0aW9uS2V5XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJsb29wVHlwZVwiLFxuXHRcdFx0XHR0eXBlOiBcIkNob3Jlb2dyYXBoeUxvb3BUeXBlXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIk5vbmVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDYWxsQ2hvcmVvZ3JhcGh5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJDaG9yZW9ncmFwaHlBY3Rpdml0eVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2FsbGVkQ2hvcmVvZ3JhcGh5UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiQ2hvcmVvZ3JhcGh5XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicGFydGljaXBhbnRBc3NvY2lhdGlvbnNcIixcblx0XHRcdFx0dHlwZTogXCJQYXJ0aWNpcGFudEFzc29jaWF0aW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiU3ViQ2hvcmVvZ3JhcGh5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJDaG9yZW9ncmFwaHlBY3Rpdml0eVwiLFxuXHRcdFx0XCJGbG93RWxlbWVudHNDb250YWluZXJcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImFydGlmYWN0c1wiLFxuXHRcdFx0XHR0eXBlOiBcIkFydGlmYWN0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ2hvcmVvZ3JhcGh5VGFza1wiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiQ2hvcmVvZ3JhcGh5QWN0aXZpdHlcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1lc3NhZ2VGbG93UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiTWVzc2FnZUZsb3dcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ2hvcmVvZ3JhcGh5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJDb2xsYWJvcmF0aW9uXCIsXG5cdFx0XHRcIkZsb3dFbGVtZW50c0NvbnRhaW5lclwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJHbG9iYWxDaG9yZW9ncmFwaHlUYXNrXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJDaG9yZW9ncmFwaHlcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImluaXRpYXRpbmdQYXJ0aWNpcGFudFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIlBhcnRpY2lwYW50XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlRleHRBbm5vdGF0aW9uXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJBcnRpZmFjdFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidGV4dFwiLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRleHRGb3JtYXRcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkdyb3VwXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJBcnRpZmFjdFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2F0ZWdvcnlWYWx1ZVJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkNhdGVnb3J5VmFsdWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQXNzb2NpYXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkFydGlmYWN0XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJhc3NvY2lhdGlvbkRpcmVjdGlvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkFzc29jaWF0aW9uRGlyZWN0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzb3VyY2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJCYXNlRWxlbWVudFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRhcmdldFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkJhc2VFbGVtZW50XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNhdGVnb3J5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJSb290RWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2F0ZWdvcnlWYWx1ZVwiLFxuXHRcdFx0XHR0eXBlOiBcIkNhdGVnb3J5VmFsdWVcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJBcnRpZmFjdFwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJDYXRlZ29yeVZhbHVlXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2F0ZWdvcml6ZWRGbG93RWxlbWVudHNcIixcblx0XHRcdFx0dHlwZTogXCJGbG93RWxlbWVudFwiLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidmFsdWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJBY3Rpdml0eVwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJGbG93Tm9kZVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNGb3JDb21wZW5zYXRpb25cIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImRlZmF1bHRcIixcblx0XHRcdFx0dHlwZTogXCJTZXF1ZW5jZUZsb3dcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpb1NwZWNpZmljYXRpb25cIixcblx0XHRcdFx0dHlwZTogXCJJbnB1dE91dHB1dFNwZWNpZmljYXRpb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInByb3BlcnR5XCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJib3VuZGFyeUV2ZW50UmVmc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkJvdW5kYXJ5RXZlbnRcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJwcm9wZXJ0aWVzXCIsXG5cdFx0XHRcdHR5cGU6IFwiUHJvcGVydHlcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImRhdGFJbnB1dEFzc29jaWF0aW9uc1wiLFxuXHRcdFx0XHR0eXBlOiBcIkRhdGFJbnB1dEFzc29jaWF0aW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJkYXRhT3V0cHV0QXNzb2NpYXRpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGF0YU91dHB1dEFzc29jaWF0aW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzdGFydFF1YW50aXR5XCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiAxLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiSW50ZWdlclwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInJlc291cmNlc1wiLFxuXHRcdFx0XHR0eXBlOiBcIlJlc291cmNlUm9sZVwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY29tcGxldGlvblF1YW50aXR5XCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiAxLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiSW50ZWdlclwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImxvb3BDaGFyYWN0ZXJpc3RpY3NcIixcblx0XHRcdFx0dHlwZTogXCJMb29wQ2hhcmFjdGVyaXN0aWNzXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlNlcnZpY2VUYXNrXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJUYXNrXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbXBsZW1lbnRhdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3BlcmF0aW9uUmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiT3BlcmF0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlN1YlByb2Nlc3NcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkFjdGl2aXR5XCIsXG5cdFx0XHRcIkZsb3dFbGVtZW50c0NvbnRhaW5lclwiLFxuXHRcdFx0XCJJbnRlcmFjdGlvbk5vZGVcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRyaWdnZXJlZEJ5RXZlbnRcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImFydGlmYWN0c1wiLFxuXHRcdFx0XHR0eXBlOiBcIkFydGlmYWN0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTG9vcENoYXJhY3RlcmlzdGljc1wiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJNdWx0aUluc3RhbmNlTG9vcENoYXJhY3RlcmlzdGljc1wiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiTG9vcENoYXJhY3RlcmlzdGljc1wiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNTZXF1ZW50aWFsXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBmYWxzZSxcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJiZWhhdmlvclwiLFxuXHRcdFx0XHR0eXBlOiBcIk11bHRpSW5zdGFuY2VCZWhhdmlvclwiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJBbGxcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImxvb3BDYXJkaW5hbGl0eVwiLFxuXHRcdFx0XHR0eXBlOiBcIkV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJsb29wRGF0YUlucHV0UmVmXCIsXG5cdFx0XHRcdHR5cGU6IFwiSXRlbUF3YXJlRWxlbWVudFwiLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJsb29wRGF0YU91dHB1dFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkl0ZW1Bd2FyZUVsZW1lbnRcIixcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW5wdXREYXRhSXRlbVwiLFxuXHRcdFx0XHR0eXBlOiBcIkRhdGFJbnB1dFwiLFxuXHRcdFx0XHR4bWw6IHtcblx0XHRcdFx0XHRzZXJpYWxpemU6IFwicHJvcGVydHlcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm91dHB1dERhdGFJdGVtXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGF0YU91dHB1dFwiLFxuXHRcdFx0XHR4bWw6IHtcblx0XHRcdFx0XHRzZXJpYWxpemU6IFwicHJvcGVydHlcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImNvbXBsZXhCZWhhdmlvckRlZmluaXRpb25cIixcblx0XHRcdFx0dHlwZTogXCJDb21wbGV4QmVoYXZpb3JEZWZpbml0aW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjb21wbGV0aW9uQ29uZGl0aW9uXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXhwcmVzc2lvblwiLFxuXHRcdFx0XHR4bWw6IHtcblx0XHRcdFx0XHRzZXJpYWxpemU6IFwieHNpOnR5cGVcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm9uZUJlaGF2aW9yRXZlbnRSZWZcIixcblx0XHRcdFx0dHlwZTogXCJFdmVudERlZmluaXRpb25cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJub25lQmVoYXZpb3JFdmVudFJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIkV2ZW50RGVmaW5pdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJTdGFuZGFyZExvb3BDaGFyYWN0ZXJpc3RpY3NcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkxvb3BDaGFyYWN0ZXJpc3RpY3NcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRlc3RCZWZvcmVcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImxvb3BDb25kaXRpb25cIixcblx0XHRcdFx0dHlwZTogXCJFeHByZXNzaW9uXCIsXG5cdFx0XHRcdHhtbDoge1xuXHRcdFx0XHRcdHNlcmlhbGl6ZTogXCJ4c2k6dHlwZVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibG9vcE1heGltdW1cIixcblx0XHRcdFx0dHlwZTogXCJJbnRlZ2VyXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ2FsbEFjdGl2aXR5XCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJBY3Rpdml0eVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2FsbGVkRWxlbWVudFwiLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlRhc2tcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkFjdGl2aXR5XCIsXG5cdFx0XHRcIkludGVyYWN0aW9uTm9kZVwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJTZW5kVGFza1wiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiVGFza1wiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW1wbGVtZW50YXRpb25cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm9wZXJhdGlvblJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIk9wZXJhdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1lc3NhZ2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlJlY2VpdmVUYXNrXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJUYXNrXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbXBsZW1lbnRhdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW5zdGFudGlhdGVcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IGZhbHNlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm9wZXJhdGlvblJlZlwiLFxuXHRcdFx0XHR0eXBlOiBcIk9wZXJhdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1lc3NhZ2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlNjcmlwdFRhc2tcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlRhc2tcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInNjcmlwdEZvcm1hdFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwic2NyaXB0XCIsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkJ1c2luZXNzUnVsZVRhc2tcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIlRhc2tcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImltcGxlbWVudGF0aW9uXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQWRIb2NTdWJQcm9jZXNzXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJTdWJQcm9jZXNzXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjb21wbGV0aW9uQ29uZGl0aW9uXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXhwcmVzc2lvblwiLFxuXHRcdFx0XHR4bWw6IHtcblx0XHRcdFx0XHRzZXJpYWxpemU6IFwieHNpOnR5cGVcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm9yZGVyaW5nXCIsXG5cdFx0XHRcdHR5cGU6IFwiQWRIb2NPcmRlcmluZ1wiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2FuY2VsUmVtYWluaW5nSW5zdGFuY2VzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiB0cnVlLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJUcmFuc2FjdGlvblwiLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiU3ViUHJvY2Vzc1wiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicHJvdG9jb2xcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1ldGhvZFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkdsb2JhbFNjcmlwdFRhc2tcIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkdsb2JhbFRhc2tcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInNjcmlwdExhbmd1YWdlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzY3JpcHRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJHbG9iYWxCdXNpbmVzc1J1bGVUYXNrXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJHbG9iYWxUYXNrXCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbXBsZW1lbnRhdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkNvbXBsZXhCZWhhdmlvckRlZmluaXRpb25cIixcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJjb25kaXRpb25cIixcblx0XHRcdFx0dHlwZTogXCJGb3JtYWxFeHByZXNzaW9uXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZXZlbnRcIixcblx0XHRcdFx0dHlwZTogXCJJbXBsaWNpdFRocm93RXZlbnRcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiUmVzb3VyY2VSb2xlXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicmVzb3VyY2VSZWZcIixcblx0XHRcdFx0dHlwZTogXCJSZXNvdXJjZVwiLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJyZXNvdXJjZVBhcmFtZXRlckJpbmRpbmdzXCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVzb3VyY2VQYXJhbWV0ZXJCaW5kaW5nXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJyZXNvdXJjZUFzc2lnbm1lbnRFeHByZXNzaW9uXCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVzb3VyY2VBc3NpZ25tZW50RXhwcmVzc2lvblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJSZXNvdXJjZVBhcmFtZXRlckJpbmRpbmdcIixcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZXhwcmVzc2lvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJwYXJhbWV0ZXJSZWZcIixcblx0XHRcdFx0dHlwZTogXCJSZXNvdXJjZVBhcmFtZXRlclwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkJhc2VFbGVtZW50XCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlJlc291cmNlQXNzaWdubWVudEV4cHJlc3Npb25cIixcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZXhwcmVzc2lvblwiLFxuXHRcdFx0XHR0eXBlOiBcIkV4cHJlc3Npb25cIixcblx0XHRcdFx0eG1sOiB7XG5cdFx0XHRcdFx0c2VyaWFsaXplOiBcInhzaTp0eXBlXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJJbXBvcnRcIixcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaW1wb3J0VHlwZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibG9jYXRpb25cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm5hbWVzcGFjZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkRlZmluaXRpb25zXCIsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJCYXNlRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidGFyZ2V0TmFtZXNwYWNlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJleHByZXNzaW9uTGFuZ3VhZ2VcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YUGF0aFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidHlwZUxhbmd1YWdlXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbXBvcnRzXCIsXG5cdFx0XHRcdHR5cGU6IFwiSW1wb3J0XCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJleHRlbnNpb25zXCIsXG5cdFx0XHRcdHR5cGU6IFwiRXh0ZW5zaW9uXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJyb290RWxlbWVudHNcIixcblx0XHRcdFx0dHlwZTogXCJSb290RWxlbWVudFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZGlhZ3JhbXNcIixcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcImJwbW5kaTpCUE1ORGlhZ3JhbVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImV4cG9ydGVyXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJyZWxhdGlvbnNoaXBzXCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVsYXRpb25zaGlwXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJleHBvcnRlclZlcnNpb25cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG5dO1xudmFyIGVudW1lcmF0aW9ucyA9IFtcblx0e1xuXHRcdG5hbWU6IFwiUHJvY2Vzc1R5cGVcIixcblx0XHRsaXRlcmFsVmFsdWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiTm9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlB1YmxpY1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlByaXZhdGVcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiR2F0ZXdheURpcmVjdGlvblwiLFxuXHRcdGxpdGVyYWxWYWx1ZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJVbnNwZWNpZmllZFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIkNvbnZlcmdpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJEaXZlcmdpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJNaXhlZFwiXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJFdmVudEJhc2VkR2F0ZXdheVR5cGVcIixcblx0XHRsaXRlcmFsVmFsdWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiUGFyYWxsZWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJFeGNsdXNpdmVcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiUmVsYXRpb25zaGlwRGlyZWN0aW9uXCIsXG5cdFx0bGl0ZXJhbFZhbHVlczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIk5vbmVcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJGb3J3YXJkXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiQmFja3dhcmRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJCb3RoXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkl0ZW1LaW5kXCIsXG5cdFx0bGl0ZXJhbFZhbHVlczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlBoeXNpY2FsXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiSW5mb3JtYXRpb25cIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ2hvcmVvZ3JhcGh5TG9vcFR5cGVcIixcblx0XHRsaXRlcmFsVmFsdWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiTm9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlN0YW5kYXJkXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiTXVsdGlJbnN0YW5jZVNlcXVlbnRpYWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJNdWx0aUluc3RhbmNlUGFyYWxsZWxcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQXNzb2NpYXRpb25EaXJlY3Rpb25cIixcblx0XHRsaXRlcmFsVmFsdWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiTm9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIk9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIkJvdGhcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTXVsdGlJbnN0YW5jZUJlaGF2aW9yXCIsXG5cdFx0bGl0ZXJhbFZhbHVlczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIk5vbmVcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJPbmVcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJBbGxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJDb21wbGV4XCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkFkSG9jT3JkZXJpbmdcIixcblx0XHRsaXRlcmFsVmFsdWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiUGFyYWxsZWxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJTZXF1ZW50aWFsXCJcblx0XHRcdH1cblx0XHRdXG5cdH1cbl07XG52YXIgcHJlZml4ID0gXCJicG1uXCI7XG52YXIgeG1sID0ge1xuXHR0YWdBbGlhczogXCJsb3dlckNhc2VcIixcblx0dHlwZVByZWZpeDogXCJ0XCJcbn07XG52YXIgQnBtblBhY2thZ2UgPSB7XG5cdG5hbWU6IG5hbWUsXG5cdHVyaTogdXJpLFxuXHRhc3NvY2lhdGlvbnM6IGFzc29jaWF0aW9ucyxcblx0dHlwZXM6IHR5cGVzLFxuXHRlbnVtZXJhdGlvbnM6IGVudW1lcmF0aW9ucyxcblx0cHJlZml4OiBwcmVmaXgsXG5cdHhtbDogeG1sXG59O1xuXG52YXIgbmFtZSQxID0gXCJCUE1ORElcIjtcbnZhciB1cmkkMSA9IFwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvQlBNTi8yMDEwMDUyNC9ESVwiO1xudmFyIHR5cGVzJDEgPSBbXG5cdHtcblx0XHRuYW1lOiBcIkJQTU5EaWFncmFtXCIsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInBsYW5lXCIsXG5cdFx0XHRcdHR5cGU6IFwiQlBNTlBsYW5lXCIsXG5cdFx0XHRcdHJlZGVmaW5lczogXCJkaTpEaWFncmFtI3Jvb3RFbGVtZW50XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibGFiZWxTdHlsZVwiLFxuXHRcdFx0XHR0eXBlOiBcIkJQTU5MYWJlbFN0eWxlXCIsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJkaTpEaWFncmFtXCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkJQTU5QbGFuZVwiLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJicG1uRWxlbWVudFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcImJwbW46QmFzZUVsZW1lbnRcIixcblx0XHRcdFx0cmVkZWZpbmVzOiBcImRpOkRpYWdyYW1FbGVtZW50I21vZGVsRWxlbWVudFwiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcImRpOlBsYW5lXCJcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkJQTU5TaGFwZVwiLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJicG1uRWxlbWVudFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcImJwbW46QmFzZUVsZW1lbnRcIixcblx0XHRcdFx0cmVkZWZpbmVzOiBcImRpOkRpYWdyYW1FbGVtZW50I21vZGVsRWxlbWVudFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlzSG9yaXpvbnRhbFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlzRXhwYW5kZWRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpc01hcmtlclZpc2libGVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJsYWJlbFwiLFxuXHRcdFx0XHR0eXBlOiBcIkJQTU5MYWJlbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlzTWVzc2FnZVZpc2libGVcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJwYXJ0aWNpcGFudEJhbmRLaW5kXCIsXG5cdFx0XHRcdHR5cGU6IFwiUGFydGljaXBhbnRCYW5kS2luZFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiY2hvcmVvZ3JhcGh5QWN0aXZpdHlTaGFwZVwiLFxuXHRcdFx0XHR0eXBlOiBcIkJQTU5TaGFwZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcImRpOkxhYmVsZWRTaGFwZVwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJCUE1ORWRnZVwiLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJsYWJlbFwiLFxuXHRcdFx0XHR0eXBlOiBcIkJQTU5MYWJlbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImJwbW5FbGVtZW50XCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiYnBtbjpCYXNlRWxlbWVudFwiLFxuXHRcdFx0XHRyZWRlZmluZXM6IFwiZGk6RGlhZ3JhbUVsZW1lbnQjbW9kZWxFbGVtZW50XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwic291cmNlRWxlbWVudFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcImRpOkRpYWdyYW1FbGVtZW50XCIsXG5cdFx0XHRcdHJlZGVmaW5lczogXCJkaTpFZGdlI3NvdXJjZVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInRhcmdldEVsZW1lbnRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJkaTpEaWFncmFtRWxlbWVudFwiLFxuXHRcdFx0XHRyZWRlZmluZXM6IFwiZGk6RWRnZSN0YXJnZXRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJtZXNzYWdlVmlzaWJsZUtpbmRcIixcblx0XHRcdFx0dHlwZTogXCJNZXNzYWdlVmlzaWJsZUtpbmRcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCJpbml0aWF0aW5nXCJcblx0XHRcdH1cblx0XHRdLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiZGk6TGFiZWxlZEVkZ2VcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQlBNTkxhYmVsXCIsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImxhYmVsU3R5bGVcIixcblx0XHRcdFx0dHlwZTogXCJCUE1OTGFiZWxTdHlsZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlLFxuXHRcdFx0XHRyZWRlZmluZXM6IFwiZGk6RGlhZ3JhbUVsZW1lbnQjc3R5bGVcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJkaTpMYWJlbFwiXG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJCUE1OTGFiZWxTdHlsZVwiLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJmb250XCIsXG5cdFx0XHRcdHR5cGU6IFwiZGM6Rm9udFwiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcImRpOlN0eWxlXCJcblx0XHRdXG5cdH1cbl07XG52YXIgZW51bWVyYXRpb25zJDEgPSBbXG5cdHtcblx0XHRuYW1lOiBcIlBhcnRpY2lwYW50QmFuZEtpbmRcIixcblx0XHRsaXRlcmFsVmFsdWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidG9wX2luaXRpYXRpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJtaWRkbGVfaW5pdGlhdGluZ1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImJvdHRvbV9pbml0aWF0aW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidG9wX25vbl9pbml0aWF0aW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibWlkZGxlX25vbl9pbml0aWF0aW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiYm90dG9tX25vbl9pbml0aWF0aW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIk1lc3NhZ2VWaXNpYmxlS2luZFwiLFxuXHRcdGxpdGVyYWxWYWx1ZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpbml0aWF0aW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibm9uX2luaXRpYXRpbmdcIlxuXHRcdFx0fVxuXHRcdF1cblx0fVxuXTtcbnZhciBhc3NvY2lhdGlvbnMkMSA9IFtcbl07XG52YXIgcHJlZml4JDEgPSBcImJwbW5kaVwiO1xudmFyIEJwbW5EaVBhY2thZ2UgPSB7XG5cdG5hbWU6IG5hbWUkMSxcblx0dXJpOiB1cmkkMSxcblx0dHlwZXM6IHR5cGVzJDEsXG5cdGVudW1lcmF0aW9uczogZW51bWVyYXRpb25zJDEsXG5cdGFzc29jaWF0aW9uczogYXNzb2NpYXRpb25zJDEsXG5cdHByZWZpeDogcHJlZml4JDFcbn07XG5cbnZhciBuYW1lJDIgPSBcIkRDXCI7XG52YXIgdXJpJDIgPSBcImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RELzIwMTAwNTI0L0RDXCI7XG52YXIgdHlwZXMkMiA9IFtcblx0e1xuXHRcdG5hbWU6IFwiQm9vbGVhblwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkludGVnZXJcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJSZWFsXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiU3RyaW5nXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRm9udFwiLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJuYW1lXCIsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzaXplXCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVhbFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNCb2xkXCIsXG5cdFx0XHRcdHR5cGU6IFwiQm9vbGVhblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaXNJdGFsaWNcIixcblx0XHRcdFx0dHlwZTogXCJCb29sZWFuXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpc1VuZGVybGluZVwiLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlzU3RyaWtlVGhyb3VnaFwiLFxuXHRcdFx0XHR0eXBlOiBcIkJvb2xlYW5cIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJQb2ludFwiLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ4XCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVhbFwiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIwXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ5XCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVhbFwiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIwXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQm91bmRzXCIsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInhcIixcblx0XHRcdFx0dHlwZTogXCJSZWFsXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIjBcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInlcIixcblx0XHRcdFx0dHlwZTogXCJSZWFsXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIjBcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIndpZHRoXCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVhbFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaGVpZ2h0XCIsXG5cdFx0XHRcdHR5cGU6IFwiUmVhbFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH1cbl07XG52YXIgcHJlZml4JDIgPSBcImRjXCI7XG52YXIgYXNzb2NpYXRpb25zJDIgPSBbXG5dO1xudmFyIERjUGFja2FnZSA9IHtcblx0bmFtZTogbmFtZSQyLFxuXHR1cmk6IHVyaSQyLFxuXHR0eXBlczogdHlwZXMkMixcblx0cHJlZml4OiBwcmVmaXgkMixcblx0YXNzb2NpYXRpb25zOiBhc3NvY2lhdGlvbnMkMlxufTtcblxudmFyIG5hbWUkMyA9IFwiRElcIjtcbnZhciB1cmkkMyA9IFwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvREQvMjAxMDA1MjQvRElcIjtcbnZhciB0eXBlcyQzID0gW1xuXHR7XG5cdFx0bmFtZTogXCJEaWFncmFtRWxlbWVudFwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImlkXCIsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0aXNJZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJleHRlbnNpb25cIixcblx0XHRcdFx0dHlwZTogXCJFeHRlbnNpb25cIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJvd25pbmdEaWFncmFtXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGlhZ3JhbVwiLFxuXHRcdFx0XHRpc1JlYWRPbmx5OiB0cnVlLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm93bmluZ0VsZW1lbnRcIixcblx0XHRcdFx0dHlwZTogXCJEaWFncmFtRWxlbWVudFwiLFxuXHRcdFx0XHRpc1JlYWRPbmx5OiB0cnVlLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm1vZGVsRWxlbWVudFwiLFxuXHRcdFx0XHRpc1JlYWRPbmx5OiB0cnVlLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcIkVsZW1lbnRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJzdHlsZVwiLFxuXHRcdFx0XHR0eXBlOiBcIlN0eWxlXCIsXG5cdFx0XHRcdGlzUmVhZE9ubHk6IHRydWUsXG5cdFx0XHRcdGlzVmlydHVhbDogdHJ1ZSxcblx0XHRcdFx0aXNSZWZlcmVuY2U6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3duZWRFbGVtZW50XCIsXG5cdFx0XHRcdHR5cGU6IFwiRGlhZ3JhbUVsZW1lbnRcIixcblx0XHRcdFx0aXNSZWFkT25seTogdHJ1ZSxcblx0XHRcdFx0aXNWaXJ0dWFsOiB0cnVlLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIk5vZGVcIixcblx0XHRpc0Fic3RyYWN0OiB0cnVlLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiRGlhZ3JhbUVsZW1lbnRcIlxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRWRnZVwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJEaWFncmFtRWxlbWVudFwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwic291cmNlXCIsXG5cdFx0XHRcdHR5cGU6IFwiRGlhZ3JhbUVsZW1lbnRcIixcblx0XHRcdFx0aXNSZWFkT25seTogdHJ1ZSxcblx0XHRcdFx0aXNWaXJ0dWFsOiB0cnVlLFxuXHRcdFx0XHRpc1JlZmVyZW5jZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJ0YXJnZXRcIixcblx0XHRcdFx0dHlwZTogXCJEaWFncmFtRWxlbWVudFwiLFxuXHRcdFx0XHRpc1JlYWRPbmx5OiB0cnVlLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzUmVmZXJlbmNlOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIndheXBvaW50XCIsXG5cdFx0XHRcdGlzVW5pcXVlOiBmYWxzZSxcblx0XHRcdFx0aXNNYW55OiB0cnVlLFxuXHRcdFx0XHR0eXBlOiBcImRjOlBvaW50XCIsXG5cdFx0XHRcdHhtbDoge1xuXHRcdFx0XHRcdHNlcmlhbGl6ZTogXCJ4c2k6dHlwZVwiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkRpYWdyYW1cIixcblx0XHRpc0Fic3RyYWN0OiB0cnVlLFxuXHRcdHByb3BlcnRpZXM6IFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJpZFwiLFxuXHRcdFx0XHR0eXBlOiBcIlN0cmluZ1wiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdGlzSWQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicm9vdEVsZW1lbnRcIixcblx0XHRcdFx0dHlwZTogXCJEaWFncmFtRWxlbWVudFwiLFxuXHRcdFx0XHRpc1JlYWRPbmx5OiB0cnVlLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwibmFtZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZG9jdW1lbnRhdGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwicmVzb2x1dGlvblwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiUmVhbFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm93bmVkU3R5bGVcIixcblx0XHRcdFx0dHlwZTogXCJTdHlsZVwiLFxuXHRcdFx0XHRpc1JlYWRPbmx5OiB0cnVlLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiU2hhcGVcIixcblx0XHRpc0Fic3RyYWN0OiB0cnVlLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiTm9kZVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiYm91bmRzXCIsXG5cdFx0XHRcdHR5cGU6IFwiZGM6Qm91bmRzXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlBsYW5lXCIsXG5cdFx0aXNBYnN0cmFjdDogdHJ1ZSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIk5vZGVcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInBsYW5lRWxlbWVudFwiLFxuXHRcdFx0XHR0eXBlOiBcIkRpYWdyYW1FbGVtZW50XCIsXG5cdFx0XHRcdHN1YnNldHRlZFByb3BlcnR5OiBcIkRpYWdyYW1FbGVtZW50LW93bmVkRWxlbWVudFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkxhYmVsZWRFZGdlXCIsXG5cdFx0aXNBYnN0cmFjdDogdHJ1ZSxcblx0XHRzdXBlckNsYXNzOiBbXG5cdFx0XHRcIkVkZ2VcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIm93bmVkTGFiZWxcIixcblx0XHRcdFx0dHlwZTogXCJMYWJlbFwiLFxuXHRcdFx0XHRpc1JlYWRPbmx5OiB0cnVlLFxuXHRcdFx0XHRzdWJzZXR0ZWRQcm9wZXJ0eTogXCJEaWFncmFtRWxlbWVudC1vd25lZEVsZW1lbnRcIixcblx0XHRcdFx0aXNWaXJ0dWFsOiB0cnVlLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkxhYmVsZWRTaGFwZVwiLFxuXHRcdGlzQWJzdHJhY3Q6IHRydWUsXG5cdFx0c3VwZXJDbGFzczogW1xuXHRcdFx0XCJTaGFwZVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwib3duZWRMYWJlbFwiLFxuXHRcdFx0XHR0eXBlOiBcIkxhYmVsXCIsXG5cdFx0XHRcdGlzUmVhZE9ubHk6IHRydWUsXG5cdFx0XHRcdHN1YnNldHRlZFByb3BlcnR5OiBcIkRpYWdyYW1FbGVtZW50LW93bmVkRWxlbWVudFwiLFxuXHRcdFx0XHRpc1ZpcnR1YWw6IHRydWUsXG5cdFx0XHRcdGlzTWFueTogdHJ1ZVxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTGFiZWxcIixcblx0XHRpc0Fic3RyYWN0OiB0cnVlLFxuXHRcdHN1cGVyQ2xhc3M6IFtcblx0XHRcdFwiTm9kZVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiYm91bmRzXCIsXG5cdFx0XHRcdHR5cGU6IFwiZGM6Qm91bmRzXCJcblx0XHRcdH1cblx0XHRdXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlN0eWxlXCIsXG5cdFx0aXNBYnN0cmFjdDogdHJ1ZSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiaWRcIixcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIixcblx0XHRcdFx0aXNBdHRyOiB0cnVlLFxuXHRcdFx0XHRpc0lkOiB0cnVlXG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJFeHRlbnNpb25cIixcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwidmFsdWVzXCIsXG5cdFx0XHRcdHR5cGU6IFwiRWxlbWVudFwiLFxuXHRcdFx0XHRpc01hbnk6IHRydWVcblx0XHRcdH1cblx0XHRdXG5cdH1cbl07XG52YXIgYXNzb2NpYXRpb25zJDMgPSBbXG5dO1xudmFyIHByZWZpeCQzID0gXCJkaVwiO1xudmFyIHhtbCQxID0ge1xuXHR0YWdBbGlhczogXCJsb3dlckNhc2VcIlxufTtcbnZhciBEaVBhY2thZ2UgPSB7XG5cdG5hbWU6IG5hbWUkMyxcblx0dXJpOiB1cmkkMyxcblx0dHlwZXM6IHR5cGVzJDMsXG5cdGFzc29jaWF0aW9uczogYXNzb2NpYXRpb25zJDMsXG5cdHByZWZpeDogcHJlZml4JDMsXG5cdHhtbDogeG1sJDFcbn07XG5cbnZhciBuYW1lJDQgPSBcImJwbW4uaW8gY29sb3JzIGZvciBCUE1OXCI7XG52YXIgdXJpJDQgPSBcImh0dHA6Ly9icG1uLmlvL3NjaGVtYS9icG1uL2Jpb2NvbG9yLzEuMFwiO1xudmFyIHByZWZpeCQ0ID0gXCJiaW9jXCI7XG52YXIgdHlwZXMkNCA9IFtcblx0e1xuXHRcdG5hbWU6IFwiQ29sb3JlZFNoYXBlXCIsXG5cdFx0XCJleHRlbmRzXCI6IFtcblx0XHRcdFwiYnBtbmRpOkJQTU5TaGFwZVwiXG5cdFx0XSxcblx0XHRwcm9wZXJ0aWVzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwic3Ryb2tlXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJmaWxsXCIsXG5cdFx0XHRcdGlzQXR0cjogdHJ1ZSxcblx0XHRcdFx0dHlwZTogXCJTdHJpbmdcIlxuXHRcdFx0fVxuXHRcdF1cblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQ29sb3JlZEVkZ2VcIixcblx0XHRcImV4dGVuZHNcIjogW1xuXHRcdFx0XCJicG1uZGk6QlBNTkVkZ2VcIlxuXHRcdF0sXG5cdFx0cHJvcGVydGllczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInN0cm9rZVwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiZmlsbFwiLFxuXHRcdFx0XHRpc0F0dHI6IHRydWUsXG5cdFx0XHRcdHR5cGU6IFwiU3RyaW5nXCJcblx0XHRcdH1cblx0XHRdXG5cdH1cbl07XG52YXIgZW51bWVyYXRpb25zJDIgPSBbXG5dO1xudmFyIGFzc29jaWF0aW9ucyQ0ID0gW1xuXTtcbnZhciBCaW9jUGFja2FnZSA9IHtcblx0bmFtZTogbmFtZSQ0LFxuXHR1cmk6IHVyaSQ0LFxuXHRwcmVmaXg6IHByZWZpeCQ0LFxuXHR0eXBlczogdHlwZXMkNCxcblx0ZW51bWVyYXRpb25zOiBlbnVtZXJhdGlvbnMkMixcblx0YXNzb2NpYXRpb25zOiBhc3NvY2lhdGlvbnMkNFxufTtcblxudmFyIHBhY2thZ2VzID0ge1xuICBicG1uOiBCcG1uUGFja2FnZSxcbiAgYnBtbmRpOiBCcG1uRGlQYWNrYWdlLFxuICBkYzogRGNQYWNrYWdlLFxuICBkaTogRGlQYWNrYWdlLFxuICBiaW9jOiBCaW9jUGFja2FnZVxufTtcblxuZnVuY3Rpb24gc2ltcGxlKGFkZGl0aW9uYWxQYWNrYWdlcywgb3B0aW9ucykge1xuICB2YXIgcGtzID0gYXNzaWduKHt9LCBwYWNrYWdlcywgYWRkaXRpb25hbFBhY2thZ2VzKTtcblxuICByZXR1cm4gbmV3IEJwbW5Nb2RkbGUocGtzLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlO1xuIiwiLyoqXG4gKiBGbGF0dGVuIGFycmF5LCBvbmUgbGV2ZWwgZGVlcC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PD8+fSBhcnJcbiAqXG4gKiBAcmV0dXJuIHtBcnJheTw/Pn1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycik7XG59XG5cbnZhciBuYXRpdmVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmF0aXZlSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzRGVmaW5lZChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNOaWwob2JqKSB7XG4gIHJldHVybiBvYmogPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5mdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICB2YXIgdGFnID0gbmF0aXZlVG9TdHJpbmcuY2FsbChvYmopO1xuICByZXR1cm4gdGFnID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8IHRhZyA9PT0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nIHx8IHRhZyA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEFzeW5jR2VuZXJhdG9yRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IFByb3h5XSc7XG59XG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG4vKipcbiAqIEVuc3VyZSBjb2xsZWN0aW9uIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5mdW5jdGlvbiBlbnN1cmVBcnJheShvYmopIHtcbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignbXVzdCBzdXBwbHkgYXJyYXknKTtcbn1cbi8qKlxuICogUmV0dXJuIHRydWUsIGlmIHRhcmdldCBvd25zIGEgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGhhcyh0YXJnZXQsIGtleSkge1xuICByZXR1cm4gbmF0aXZlSGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSk7XG59XG5cbi8qKlxuICogRmluZCBlbGVtZW50IGluIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtICB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gIHtGdW5jdGlvbnxPYmplY3R9IG1hdGNoZXJcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gZmluZChjb2xsZWN0aW9uLCBtYXRjaGVyKSB7XG4gIG1hdGNoZXIgPSB0b01hdGNoZXIobWF0Y2hlcik7XG4gIHZhciBtYXRjaDtcbiAgZm9yRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICBpZiAobWF0Y2hlcih2YWwsIGtleSkpIHtcbiAgICAgIG1hdGNoID0gdmFsO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtYXRjaDtcbn1cbi8qKlxuICogRmluZCBlbGVtZW50IGluZGV4IGluIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtICB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gbWF0Y2hlclxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBmaW5kSW5kZXgoY29sbGVjdGlvbiwgbWF0Y2hlcikge1xuICBtYXRjaGVyID0gdG9NYXRjaGVyKG1hdGNoZXIpO1xuICB2YXIgaWR4ID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IC0xIDogdW5kZWZpbmVkO1xuICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgIGlmIChtYXRjaGVyKHZhbCwga2V5KSkge1xuICAgICAgaWR4ID0ga2V5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpZHg7XG59XG4vKipcbiAqIEZpbmQgZWxlbWVudCBpbiBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fE9iamVjdH0gY29sbGVjdGlvblxuICogQHBhcmFtICB7RnVuY3Rpb259IG1hdGNoZXJcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gcmVzdWx0XG4gKi9cblxuZnVuY3Rpb24gZmlsdGVyKGNvbGxlY3Rpb24sIG1hdGNoZXIpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgIGlmIChtYXRjaGVyKHZhbCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgY29sbGVjdGlvbjsgcmV0dXJuaW5nIHNvbWV0aGluZ1xuICogKG5vbi11bmRlZmluZWQpIHdpbGwgc3RvcCBpdGVyYXRpb24uXG4gKlxuICogQHBhcmFtICB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaXRlcmF0b3JcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJldHVybiByZXN1bHQgdGhhdCBzdG9wcGVkIHRoZSBpdGVyYXRpb25cbiAqL1xuXG5mdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdG9yKSB7XG4gIHZhciB2YWwsIHJlc3VsdDtcblxuICBpZiAoaXNVbmRlZmluZWQoY29sbGVjdGlvbikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udmVydEtleSA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyB0b051bSA6IGlkZW50aXR5O1xuXG4gIGZvciAodmFyIGtleSBpbiBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKGhhcyhjb2xsZWN0aW9uLCBrZXkpKSB7XG4gICAgICB2YWwgPSBjb2xsZWN0aW9uW2tleV07XG4gICAgICByZXN1bHQgPSBpdGVyYXRvcih2YWwsIGNvbnZlcnRLZXkoa2V5KSk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIFJldHVybiBjb2xsZWN0aW9uIHdpdGhvdXQgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gbWF0Y2hlclxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmZ1bmN0aW9uIHdpdGhvdXQoYXJyLCBtYXRjaGVyKSB7XG4gIGlmIChpc1VuZGVmaW5lZChhcnIpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZW5zdXJlQXJyYXkoYXJyKTtcbiAgbWF0Y2hlciA9IHRvTWF0Y2hlcihtYXRjaGVyKTtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGVsLCBpZHgpIHtcbiAgICByZXR1cm4gIW1hdGNoZXIoZWwsIGlkeCk7XG4gIH0pO1xufVxuLyoqXG4gKiBSZWR1Y2UgY29sbGVjdGlvbiwgcmV0dXJuaW5nIGEgc2luZ2xlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVyYXRvclxuICogQHBhcmFtICB7QW55fSByZXN1bHRcbiAqXG4gKiBAcmV0dXJuIHtBbnl9IHJlc3VsdCByZXR1cm5lZCBmcm9tIGxhc3QgaXRlcmF0b3JcbiAqL1xuXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgaXRlcmF0b3IsIHJlc3VsdCkge1xuICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uICh2YWx1ZSwgaWR4KSB7XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCB2YWx1ZSwgaWR4KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybiB0cnVlIGlmIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb25cbiAqIG1hdGNoZXMgdGhlIGNyaXRlcmlhLlxuICpcbiAqIEBwYXJhbSAge09iamVjdHxBcnJheX0gY29sbGVjdGlvblxuICogQHBhcmFtICB7RnVuY3Rpb259IG1hdGNoZXJcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGV2ZXJ5KGNvbGxlY3Rpb24sIG1hdGNoZXIpIHtcbiAgcmV0dXJuICEhcmVkdWNlKGNvbGxlY3Rpb24sIGZ1bmN0aW9uIChtYXRjaGVzLCB2YWwsIGtleSkge1xuICAgIHJldHVybiBtYXRjaGVzICYmIG1hdGNoZXIodmFsLCBrZXkpO1xuICB9LCB0cnVlKTtcbn1cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgc29tZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvblxuICogbWF0Y2ggdGhlIGNyaXRlcmlhLlxuICpcbiAqIEBwYXJhbSAge09iamVjdHxBcnJheX0gY29sbGVjdGlvblxuICogQHBhcmFtICB7RnVuY3Rpb259IG1hdGNoZXJcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIHNvbWUoY29sbGVjdGlvbiwgbWF0Y2hlcikge1xuICByZXR1cm4gISFmaW5kKGNvbGxlY3Rpb24sIG1hdGNoZXIpO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBjb2xsZWN0aW9uIGludG8gYW5vdGhlciBjb2xsZWN0aW9uXG4gKiBieSBwaXBpbmcgZWFjaCBtZW1iZXIgdGhyb3VnaCB0aGUgZ2l2ZW4gZm4uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSAgIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICpcbiAqIEByZXR1cm4ge0FycmF5fSB0cmFuc2Zvcm1lZCBjb2xsZWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGZuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICByZXN1bHQucHVzaChmbih2YWwsIGtleSkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogR2V0IHRoZSBjb2xsZWN0aW9ucyBrZXlzLlxuICpcbiAqIEBwYXJhbSAge09iamVjdHxBcnJheX0gY29sbGVjdGlvblxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmZ1bmN0aW9uIGtleXMoY29sbGVjdGlvbikge1xuICByZXR1cm4gY29sbGVjdGlvbiAmJiBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKSB8fCBbXTtcbn1cbi8qKlxuICogU2hvcnRoYW5kIGZvciBga2V5cyhvKS5sZW5ndGhgLlxuICpcbiAqIEBwYXJhbSAge09iamVjdHxBcnJheX0gY29sbGVjdGlvblxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuXG5mdW5jdGlvbiBzaXplKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIGtleXMoY29sbGVjdGlvbikubGVuZ3RoO1xufVxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlcyBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9IGNvbGxlY3Rpb25cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5mdW5jdGlvbiB2YWx1ZXMoY29sbGVjdGlvbikge1xuICByZXR1cm4gbWFwKGNvbGxlY3Rpb24sIGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9KTtcbn1cbi8qKlxuICogR3JvdXAgY29sbGVjdGlvbiBtZW1iZXJzIGJ5IGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHRyYWN0b3JcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IG1hcCB3aXRoIHsgYXR0clZhbHVlID0+IFsgYSwgYiwgYyBdIH1cbiAqL1xuXG5mdW5jdGlvbiBncm91cEJ5KGNvbGxlY3Rpb24sIGV4dHJhY3Rvcikge1xuICB2YXIgZ3JvdXBlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIGV4dHJhY3RvciA9IHRvRXh0cmFjdG9yKGV4dHJhY3Rvcik7XG4gIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhciBkaXNjcmltaW5hdG9yID0gZXh0cmFjdG9yKHZhbCkgfHwgJ18nO1xuICAgIHZhciBncm91cCA9IGdyb3VwZWRbZGlzY3JpbWluYXRvcl07XG5cbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICBncm91cCA9IGdyb3VwZWRbZGlzY3JpbWluYXRvcl0gPSBbXTtcbiAgICB9XG5cbiAgICBncm91cC5wdXNoKHZhbCk7XG4gIH0pO1xuICByZXR1cm4gZ3JvdXBlZDtcbn1cbmZ1bmN0aW9uIHVuaXF1ZUJ5KGV4dHJhY3Rvcikge1xuICBleHRyYWN0b3IgPSB0b0V4dHJhY3RvcihleHRyYWN0b3IpO1xuICB2YXIgZ3JvdXBlZCA9IHt9O1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjb2xsZWN0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY29sbGVjdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZm9yRWFjaChjb2xsZWN0aW9ucywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gZ3JvdXBCeShjLCBleHRyYWN0b3IsIGdyb3VwZWQpO1xuICB9KTtcbiAgdmFyIHJlc3VsdCA9IG1hcChncm91cGVkLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICByZXR1cm4gdmFsWzBdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciB1bmlvbkJ5ID0gdW5pcXVlQnk7XG4vKipcbiAqIFNvcnQgY29sbGVjdGlvbiBieSBjcml0ZXJpYS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R8QXJyYXl9IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSAge1N0cmluZ3xGdW5jdGlvbn0gZXh0cmFjdG9yXG4gKlxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gc29ydEJ5KGNvbGxlY3Rpb24sIGV4dHJhY3Rvcikge1xuICBleHRyYWN0b3IgPSB0b0V4dHJhY3RvcihleHRyYWN0b3IpO1xuICB2YXIgc29ydGVkID0gW107XG4gIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICB2YXIgZGlzYyA9IGV4dHJhY3Rvcih2YWx1ZSwga2V5KTtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICBkOiBkaXNjLFxuICAgICAgdjogdmFsdWVcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgc29ydGVkLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgIHZhciBkID0gc29ydGVkW2lkeF0uZDtcblxuICAgICAgaWYgKGRpc2MgPCBkKSB7XG4gICAgICAgIHNvcnRlZC5zcGxpY2UoaWR4LCAwLCBlbnRyeSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IC8vIG5vdCBpbnNlcnRlZCwgYXBwZW5kICghKVxuXG5cbiAgICBzb3J0ZWQucHVzaChlbnRyeSk7XG4gIH0pO1xuICByZXR1cm4gbWFwKHNvcnRlZCwgZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS52O1xuICB9KTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIG9iamVjdCBwYXR0ZXJuIG1hdGNoZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBtYXRjaGVyID0gbWF0Y2hQYXR0ZXJuKHsgaWQ6IDEgfSk7XG4gKlxuICogdmFyIGVsZW1lbnQgPSBmaW5kKGVsZW1lbnRzLCBtYXRjaGVyKTtcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBhdHRlcm5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gbWF0Y2hlckZuXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2hQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBldmVyeShwYXR0ZXJuLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgIHJldHVybiBlbFtrZXldID09PSB2YWw7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvRXh0cmFjdG9yKGV4dHJhY3Rvcikge1xuICByZXR1cm4gaXNGdW5jdGlvbihleHRyYWN0b3IpID8gZXh0cmFjdG9yIDogZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZVtleHRyYWN0b3JdO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b01hdGNoZXIobWF0Y2hlcikge1xuICByZXR1cm4gaXNGdW5jdGlvbihtYXRjaGVyKSA/IG1hdGNoZXIgOiBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlID09PSBtYXRjaGVyO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eShhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn1cblxuZnVuY3Rpb24gdG9OdW0oYXJnKSB7XG4gIHJldHVybiBOdW1iZXIoYXJnKTtcbn1cblxuLyoqXG4gKiBEZWJvdW5jZSBmbiwgY2FsbGluZyBpdCBvbmx5IG9uY2UgaWZcbiAqIHRoZSBnaXZlbiB0aW1lIGVsYXBzZWQgYmV0d2VlbiBjYWxscy5cbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSAge051bWJlcn0gdGltZW91dFxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZm4sIHRpbWVvdXQpIHtcbiAgdmFyIHRpbWVyO1xuICB2YXIgbGFzdEFyZ3M7XG4gIHZhciBsYXN0VGhpcztcbiAgdmFyIGxhc3ROb3c7XG5cbiAgZnVuY3Rpb24gZmlyZSgpIHtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgc2NoZWR1bGVkRGlmZiA9IGxhc3ROb3cgKyB0aW1lb3V0IC0gbm93O1xuXG4gICAgaWYgKHNjaGVkdWxlZERpZmYgPiAwKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGUoc2NoZWR1bGVkRGlmZik7XG4gICAgfVxuXG4gICAgZm4uYXBwbHkobGFzdFRoaXMsIGxhc3RBcmdzKTtcbiAgICB0aW1lciA9IGxhc3ROb3cgPSBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGUodGltZW91dCkge1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmaXJlLCB0aW1lb3V0KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbGFzdE5vdyA9IERhdGUubm93KCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGFzdEFyZ3MgPSBhcmdzO1xuICAgIGxhc3RUaGlzID0gdGhpczsgLy8gZW5zdXJlIGFuIGV4ZWN1dGlvbiBpcyBzY2hlZHVsZWRcblxuICAgIGlmICghdGltZXIpIHtcbiAgICAgIHNjaGVkdWxlKHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcbn1cbi8qKlxuICogVGhyb3R0bGUgZm4sIGNhbGxpbmcgYXQgbW9zdCBvbmNlXG4gKiBpbiB0aGUgZ2l2ZW4gaW50ZXJ2YWwuXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGludGVydmFsXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IHRocm90dGxlZCBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCBpbnRlcnZhbCkge1xuICB2YXIgdGhyb3R0bGluZyA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aHJvdHRsaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm4uYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIHRocm90dGxpbmcgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3R0bGluZyA9IGZhbHNlO1xuICAgIH0sIGludGVydmFsKTtcbiAgfTtcbn1cbi8qKlxuICogQmluZCBmdW5jdGlvbiBhZ2FpbnN0IHRhcmdldCA8dGhpcz4uXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGFyZ2V0XG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IGJvdW5kIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gYmluZChmbiwgdGFyZ2V0KSB7XG4gIHJldHVybiBmbi5iaW5kKHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogQ29udmVuaWVuY2Ugd3JhcHBlciBmb3IgYE9iamVjdC5hc3NpZ25gLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBvdGhlcnNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB0YXJnZXRcbiAqL1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvdGhlcnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG90aGVyc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodm9pZCAwLCBbdGFyZ2V0XS5jb25jYXQob3RoZXJzKSk7XG59XG4vKipcbiAqIFBpY2sgZ2l2ZW4gcHJvcGVydGllcyBmcm9tIHRoZSB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BlcnRpZXNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRhcmdldFxuICovXG5cbmZ1bmN0aW9uIHBpY2sodGFyZ2V0LCBwcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIG9iaiA9IE9iamVjdCh0YXJnZXQpO1xuICBmb3JFYWNoKHByb3BlcnRpZXMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gb2JqKSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSB0YXJnZXRbcHJvcF07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogUGljayBhbGwgdGFyZ2V0IHByb3BlcnRpZXMsIGV4Y2x1ZGluZyB0aGUgZ2l2ZW4gb25lcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wZXJ0aWVzXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB0YXJnZXRcbiAqL1xuXG5mdW5jdGlvbiBvbWl0KHRhcmdldCwgcHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBvYmogPSBPYmplY3QodGFyZ2V0KTtcbiAgZm9yRWFjaChvYmosIGZ1bmN0aW9uIChwcm9wLCBrZXkpIHtcbiAgICBpZiAocHJvcGVydGllcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHByb3A7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogUmVjdXJzaXZlbHkgbWVyZ2UgYC4uLnNvdXJjZXNgIGludG8gZ2l2ZW4gdGFyZ2V0LlxuICpcbiAqIERvZXMgc3VwcG9ydCBtZXJnaW5nIG9iamVjdHM7IGRvZXMgbm90IHN1cHBvcnQgbWVyZ2luZyBhcnJheXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHsuLi5PYmplY3R9IHNvdXJjZXNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB0YXJnZXRcbiAqL1xuXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBzb3VyY2VzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBzb3VyY2VzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmb3JFYWNoKHNvdXJjZXMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAvLyBza2lwIG5vbi1vYmogc291cmNlcywgaS5lLiBudWxsXG4gICAgaWYgKCFzb3VyY2UgfHwgIWlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHNvdXJjZVZhbCwga2V5KSB7XG4gICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXRWYWwgPSB0YXJnZXRba2V5XTtcblxuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVZhbCkpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdCh0YXJnZXRWYWwpKSB7XG4gICAgICAgICAgLy8gb3ZlcnJpZGUgdGFyZ2V0W2tleV0gd2l0aCBvYmplY3RcbiAgICAgICAgICB0YXJnZXRWYWwgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gbWVyZ2UodGFyZ2V0VmFsLCBzb3VyY2VWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2VWYWw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgeyBmbGF0dGVuLCBmaW5kLCBmaW5kSW5kZXgsIGZpbHRlciwgZm9yRWFjaCwgd2l0aG91dCwgcmVkdWNlLCBldmVyeSwgc29tZSwgbWFwLCBrZXlzLCBzaXplLCB2YWx1ZXMsIGdyb3VwQnksIHVuaXF1ZUJ5LCB1bmlvbkJ5LCBzb3J0QnksIG1hdGNoUGF0dGVybiwgZGVib3VuY2UsIHRocm90dGxlLCBiaW5kLCBpc1VuZGVmaW5lZCwgaXNEZWZpbmVkLCBpc05pbCwgaXNBcnJheSwgaXNPYmplY3QsIGlzTnVtYmVyLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgZW5zdXJlQXJyYXksIGhhcywgYXNzaWduLCBwaWNrLCBvbWl0LCBtZXJnZSB9O1xuIiwiaW1wb3J0IHsgZm9yRWFjaCwgYXNzaWduLCBmaW5kLCBmaWx0ZXIsIGlzU3RyaW5nLCBtYXAgfSBmcm9tICdtaW4tZGFzaCc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdzYXhlbic7XG5pbXBvcnQgeyBjb2VyY2VUeXBlLCBwYXJzZU5hbWVOUywgaXNTaW1wbGVUeXBlLCBNb2RkbGUgfSBmcm9tICdtb2RkbGUnO1xuXG5mdW5jdGlvbiBoYXNMb3dlckNhc2VBbGlhcyhwa2cpIHtcbiAgcmV0dXJuIHBrZy54bWwgJiYgcGtnLnhtbC50YWdBbGlhcyA9PT0gJ2xvd2VyQ2FzZSc7XG59XG5cbnZhciBERUZBVUxUX05TX01BUCA9IHtcbiAgJ3hzaSc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSdcbn07XG5cbnZhciBYU0lfVFlQRSA9ICd4c2k6dHlwZSc7XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUZvcm1hdChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnhtbCAmJiBlbGVtZW50LnhtbC5zZXJpYWxpemU7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUFzVHlwZShlbGVtZW50KSB7XG4gIHJldHVybiBzZXJpYWxpemVGb3JtYXQoZWxlbWVudCkgPT09IFhTSV9UWVBFO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVBc1Byb3BlcnR5KGVsZW1lbnQpIHtcbiAgcmV0dXJuIHNlcmlhbGl6ZUZvcm1hdChlbGVtZW50KSA9PT0gJ3Byb3BlcnR5Jztcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gYWxpYXNUb05hbWUoYWxpYXNOcywgcGtnKSB7XG5cbiAgaWYgKCFoYXNMb3dlckNhc2VBbGlhcyhwa2cpKSB7XG4gICAgcmV0dXJuIGFsaWFzTnMubmFtZTtcbiAgfVxuXG4gIHJldHVybiBhbGlhc05zLnByZWZpeCArICc6JyArIGNhcGl0YWxpemUoYWxpYXNOcy5sb2NhbE5hbWUpO1xufVxuXG5mdW5jdGlvbiBwcmVmaXhlZFRvTmFtZShuYW1lTnMsIHBrZykge1xuXG4gIHZhciBuYW1lID0gbmFtZU5zLm5hbWUsXG4gICAgICBsb2NhbE5hbWUgPSBuYW1lTnMubG9jYWxOYW1lO1xuXG4gIHZhciB0eXBlUHJlZml4ID0gcGtnLnhtbCAmJiBwa2cueG1sLnR5cGVQcmVmaXg7XG5cbiAgaWYgKHR5cGVQcmVmaXggJiYgbG9jYWxOYW1lLmluZGV4T2YodHlwZVByZWZpeCkgPT09IDApIHtcbiAgICByZXR1cm4gbmFtZU5zLnByZWZpeCArICc6JyArIGxvY2FsTmFtZS5zbGljZSh0eXBlUHJlZml4Lmxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplWHNpVHlwZU5hbWUobmFtZSwgbW9kZWwpIHtcblxuICB2YXIgbmFtZU5zID0gcGFyc2VOYW1lTlMobmFtZSk7XG4gIHZhciBwa2cgPSBtb2RlbC5nZXRQYWNrYWdlKG5hbWVOcy5wcmVmaXgpO1xuXG4gIHJldHVybiBwcmVmaXhlZFRvTmFtZShuYW1lTnMsIHBrZyk7XG59XG5cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1vZGRsZSBkZXNjcmlwdG9yIGZvciBhIGdpdmVuIGluc3RhbmNlIG9yIHR5cGUuXG4gKlxuICogQHBhcmFtICB7TW9kZGxlRWxlbWVudHxGdW5jdGlvbn0gZWxlbWVudFxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIG1vZGRsZSBkZXNjcmlwdG9yXG4gKi9cbmZ1bmN0aW9uIGdldE1vZGRsZURlc2NyaXB0b3IoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC4kZGVzY3JpcHRvcjtcbn1cblxuZnVuY3Rpb24gZGVmZXIoZm4pIHtcbiAgc2V0VGltZW91dChmbiwgMCk7XG59XG5cbi8qKlxuICogQSBwYXJzZSBjb250ZXh0LlxuICpcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0VsZW1lbnRIYW5kbGVyfSBvcHRpb25zLnJvb3RIYW5kbGVyIHRoZSByb290IGhhbmRsZXIgZm9yIHBhcnNpbmcgYSBkb2N1bWVudFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sYXg9ZmFsc2VdIHdoZXRoZXIgb3Igbm90IHRvIGlnbm9yZSBpbnZhbGlkIGVsZW1lbnRzXG4gKi9cbmZ1bmN0aW9uIENvbnRleHQob3B0aW9ucykge1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkge0VsZW1lbnRIYW5kbGVyfSByb290SGFuZGxlclxuICAgKi9cblxuICAvKipcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBsYXhcbiAgICovXG5cbiAgYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG4gIHRoaXMuZWxlbWVudHNCeUlkID0ge307XG4gIHRoaXMucmVmZXJlbmNlcyA9IFtdO1xuICB0aGlzLndhcm5pbmdzID0gW107XG5cbiAgLyoqXG4gICAqIEFkZCBhbiB1bnJlc29sdmVkIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlZmVyZW5jZVxuICAgKi9cbiAgdGhpcy5hZGRSZWZlcmVuY2UgPSBmdW5jdGlvbihyZWZlcmVuY2UpIHtcbiAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSBwcm9jZXNzZWQgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtNb2RkbGVFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICB0aGlzLmFkZEVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IGVycm9yKCdleHBlY3RlZCBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRzQnlJZCA9IHRoaXMuZWxlbWVudHNCeUlkO1xuXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRNb2RkbGVEZXNjcmlwdG9yKGVsZW1lbnQpO1xuXG4gICAgdmFyIGlkUHJvcGVydHkgPSBkZXNjcmlwdG9yLmlkUHJvcGVydHksXG4gICAgICAgIGlkO1xuXG4gICAgaWYgKGlkUHJvcGVydHkpIHtcbiAgICAgIGlkID0gZWxlbWVudC5nZXQoaWRQcm9wZXJ0eS5uYW1lKTtcblxuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIC8vIGZvciBRTmFtZSB2YWxpZGF0aW9uIGFzIHBlciBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLyNOVC1OYW1lQ2hhclxuICAgICAgICBpZiAoIS9eKFthLXpdW1xcdy0uXSo6KT9bYS16X11bXFx3LS5dKiQvaS50ZXN0KGlkKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaWxsZWdhbCBJRCA8JyArIGlkICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50c0J5SWRbaWRdKSB7XG4gICAgICAgICAgdGhyb3cgZXJyb3IoJ2R1cGxpY2F0ZSBJRCA8JyArIGlkICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRzQnlJZFtpZF0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIGFuIGltcG9ydCB3YXJuaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gd2FybmluZ1xuICAgKiBAcGFyYW0ge1N0cmluZ30gd2FybmluZy5tZXNzYWdlXG4gICAqIEBwYXJhbSB7RXJyb3J9IFt3YXJuaW5nLmVycm9yXVxuICAgKi9cbiAgdGhpcy5hZGRXYXJuaW5nID0gZnVuY3Rpb24od2FybmluZykge1xuICAgIHRoaXMud2FybmluZ3MucHVzaCh3YXJuaW5nKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gQmFzZUhhbmRsZXIoKSB7fVxuXG5CYXNlSGFuZGxlci5wcm90b3R5cGUuaGFuZGxlRW5kID0gZnVuY3Rpb24oKSB7fTtcbkJhc2VIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVUZXh0ID0gZnVuY3Rpb24oKSB7fTtcbkJhc2VIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVOb2RlID0gZnVuY3Rpb24oKSB7fTtcblxuXG4vKipcbiAqIEEgc2ltcGxlIHBhc3MgdGhyb3VnaCBoYW5kbGVyIHRoYXQgZG9lcyBub3RoaW5nIGV4Y2VwdCBmb3JcbiAqIGlnbm9yaW5nIGFsbCBpbnB1dCBpdCByZWNlaXZlcy5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgdG8gaWdub3JlIHVua25vd24gZWxlbWVudHMgYW5kXG4gKiBhdHRyaWJ1dGVzLlxuICovXG5mdW5jdGlvbiBOb29wSGFuZGxlcigpIHsgfVxuXG5Ob29wSGFuZGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VIYW5kbGVyLnByb3RvdHlwZSk7XG5cbk5vb3BIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVOb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gQm9keUhhbmRsZXIoKSB7fVxuXG5Cb2R5SGFuZGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VIYW5kbGVyLnByb3RvdHlwZSk7XG5cbkJvZHlIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVUZXh0ID0gZnVuY3Rpb24odGV4dCkge1xuICB0aGlzLmJvZHkgPSAodGhpcy5ib2R5IHx8ICcnKSArIHRleHQ7XG59O1xuXG5mdW5jdGlvbiBSZWZlcmVuY2VIYW5kbGVyKHByb3BlcnR5LCBjb250ZXh0KSB7XG4gIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuUmVmZXJlbmNlSGFuZGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJvZHlIYW5kbGVyLnByb3RvdHlwZSk7XG5cblJlZmVyZW5jZUhhbmRsZXIucHJvdG90eXBlLmhhbmRsZU5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG5cbiAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgIHRocm93IGVycm9yKCdleHBlY3RlZCBubyBzdWIgbm9kZXMnKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZVJlZmVyZW5jZShub2RlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVmZXJlbmNlSGFuZGxlci5wcm90b3R5cGUuaGFuZGxlRW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5pZCA9IHRoaXMuYm9keTtcbn07XG5cblJlZmVyZW5jZUhhbmRsZXIucHJvdG90eXBlLmNyZWF0ZVJlZmVyZW5jZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0eTogdGhpcy5wcm9wZXJ0eS5ucy5uYW1lLFxuICAgIGlkOiAnJ1xuICB9O1xufTtcblxuZnVuY3Rpb24gVmFsdWVIYW5kbGVyKHByb3BlcnR5RGVzYywgZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLnByb3BlcnR5RGVzYyA9IHByb3BlcnR5RGVzYztcbn1cblxuVmFsdWVIYW5kbGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQm9keUhhbmRsZXIucHJvdG90eXBlKTtcblxuVmFsdWVIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVFbmQgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgdmFsdWUgPSB0aGlzLmJvZHkgfHwgJycsXG4gICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgcHJvcGVydHlEZXNjID0gdGhpcy5wcm9wZXJ0eURlc2M7XG5cbiAgdmFsdWUgPSBjb2VyY2VUeXBlKHByb3BlcnR5RGVzYy50eXBlLCB2YWx1ZSk7XG5cbiAgaWYgKHByb3BlcnR5RGVzYy5pc01hbnkpIHtcbiAgICBlbGVtZW50LmdldChwcm9wZXJ0eURlc2MubmFtZSkucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zZXQocHJvcGVydHlEZXNjLm5hbWUsIHZhbHVlKTtcbiAgfVxufTtcblxuXG5mdW5jdGlvbiBCYXNlRWxlbWVudEhhbmRsZXIoKSB7fVxuXG5CYXNlRWxlbWVudEhhbmRsZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCb2R5SGFuZGxlci5wcm90b3R5cGUpO1xuXG5CYXNlRWxlbWVudEhhbmRsZXIucHJvdG90eXBlLmhhbmRsZU5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gIHZhciBwYXJzZXIgPSB0aGlzLFxuICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KG5vZGUpO1xuXG4gICAgdGhpcy5jb250ZXh0LmFkZEVsZW1lbnQoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgcGFyc2VyID0gdGhpcy5oYW5kbGVDaGlsZChub2RlKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZXI7XG59O1xuXG4vKipcbiAqIEBjbGFzcyBSZWFkZXIuRWxlbWVudEhhbmRsZXJcbiAqXG4gKi9cbmZ1bmN0aW9uIEVsZW1lbnRIYW5kbGVyKG1vZGVsLCB0eXBlTmFtZSwgY29udGV4dCkge1xuICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIHRoaXMudHlwZSA9IG1vZGVsLmdldFR5cGUodHlwZU5hbWUpO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5FbGVtZW50SGFuZGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VFbGVtZW50SGFuZGxlci5wcm90b3R5cGUpO1xuXG5FbGVtZW50SGFuZGxlci5wcm90b3R5cGUuYWRkUmVmZXJlbmNlID0gZnVuY3Rpb24ocmVmZXJlbmNlKSB7XG4gIHRoaXMuY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbn07XG5cbkVsZW1lbnRIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVUZXh0ID0gZnVuY3Rpb24odGV4dCkge1xuXG4gIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgZGVzY3JpcHRvciA9IGdldE1vZGRsZURlc2NyaXB0b3IoZWxlbWVudCksXG4gICAgICBib2R5UHJvcGVydHkgPSBkZXNjcmlwdG9yLmJvZHlQcm9wZXJ0eTtcblxuICBpZiAoIWJvZHlQcm9wZXJ0eSkge1xuICAgIHRocm93IGVycm9yKCd1bmV4cGVjdGVkIGJvZHkgdGV4dCA8JyArIHRleHQgKyAnPicpO1xuICB9XG5cbiAgQm9keUhhbmRsZXIucHJvdG90eXBlLmhhbmRsZVRleHQuY2FsbCh0aGlzLCB0ZXh0KTtcbn07XG5cbkVsZW1lbnRIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVFbmQgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgdmFsdWUgPSB0aGlzLmJvZHksXG4gICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgZGVzY3JpcHRvciA9IGdldE1vZGRsZURlc2NyaXB0b3IoZWxlbWVudCksXG4gICAgICBib2R5UHJvcGVydHkgPSBkZXNjcmlwdG9yLmJvZHlQcm9wZXJ0eTtcblxuICBpZiAoYm9keVByb3BlcnR5ICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWx1ZSA9IGNvZXJjZVR5cGUoYm9keVByb3BlcnR5LnR5cGUsIHZhbHVlKTtcbiAgICBlbGVtZW50LnNldChib2R5UHJvcGVydHkubmFtZSwgdmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgbW9kZWwgZnJvbSB0aGUgZ2l2ZW4gbm9kZS5cbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlIHRoZSB4bWwgbm9kZVxuICovXG5FbGVtZW50SGFuZGxlci5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXMsXG4gICAgICBUeXBlID0gdGhpcy50eXBlLFxuICAgICAgZGVzY3JpcHRvciA9IGdldE1vZGRsZURlc2NyaXB0b3IoVHlwZSksXG4gICAgICBjb250ZXh0ID0gdGhpcy5jb250ZXh0LFxuICAgICAgaW5zdGFuY2UgPSBuZXcgVHlwZSh7fSksXG4gICAgICBtb2RlbCA9IHRoaXMubW9kZWwsXG4gICAgICBwcm9wTmFtZU5zO1xuXG4gIGZvckVhY2goYXR0cmlidXRlcywgZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcblxuICAgIHZhciBwcm9wID0gZGVzY3JpcHRvci5wcm9wZXJ0aWVzQnlOYW1lW25hbWVdLFxuICAgICAgICB2YWx1ZXM7XG5cbiAgICBpZiAocHJvcCAmJiBwcm9wLmlzUmVmZXJlbmNlKSB7XG5cbiAgICAgIGlmICghcHJvcC5pc01hbnkpIHtcbiAgICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2Uoe1xuICAgICAgICAgIGVsZW1lbnQ6IGluc3RhbmNlLFxuICAgICAgICAgIHByb3BlcnR5OiBwcm9wLm5zLm5hbWUsXG4gICAgICAgICAgaWQ6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSURSRUZTOiBwYXJzZSByZWZlcmVuY2VzIGFzIHdoaXRlc3BhY2Utc2VwYXJhdGVkIGxpc3RcbiAgICAgICAgdmFsdWVzID0gdmFsdWUuc3BsaXQoJyAnKTtcblxuICAgICAgICBmb3JFYWNoKHZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGluc3RhbmNlLFxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3AubnMubmFtZSxcbiAgICAgICAgICAgIGlkOiB2XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgIHZhbHVlID0gY29lcmNlVHlwZShwcm9wLnR5cGUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKG5hbWUgIT09ICd4bWxucycpIHtcbiAgICAgICAgcHJvcE5hbWVOcyA9IHBhcnNlTmFtZU5TKG5hbWUsIGRlc2NyaXB0b3IubnMucHJlZml4KTtcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGF0dHJpYnV0ZSBpcyBkZWZpbmVkIGluIGEgd2VsbC1rbm93biBuYW1lc3BhY2VcbiAgICAgICAgLy8gaWYgdGhhdCBpcyB0aGUgY2FzZSB3ZSBlbWl0IGEgd2FybmluZyB0byBpbmRpY2F0ZSBwb3RlbnRpYWwgbWlzdXNlXG4gICAgICAgIGlmIChtb2RlbC5nZXRQYWNrYWdlKHByb3BOYW1lTnMucHJlZml4KSkge1xuXG4gICAgICAgICAgY29udGV4dC5hZGRXYXJuaW5nKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICd1bmtub3duIGF0dHJpYnV0ZSA8JyArIG5hbWUgKyAnPicsXG4gICAgICAgICAgICBlbGVtZW50OiBpbnN0YW5jZSxcbiAgICAgICAgICAgIHByb3BlcnR5OiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2Uuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbkVsZW1lbnRIYW5kbGVyLnByb3RvdHlwZS5nZXRQcm9wZXJ0eUZvck5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG5cbiAgdmFyIG5hbWUgPSBub2RlLm5hbWU7XG4gIHZhciBuYW1lTnMgPSBwYXJzZU5hbWVOUyhuYW1lKTtcblxuICB2YXIgdHlwZSA9IHRoaXMudHlwZSxcbiAgICAgIG1vZGVsID0gdGhpcy5tb2RlbCxcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRNb2RkbGVEZXNjcmlwdG9yKHR5cGUpO1xuXG4gIHZhciBwcm9wZXJ0eU5hbWUgPSBuYW1lTnMubmFtZSxcbiAgICAgIHByb3BlcnR5ID0gZGVzY3JpcHRvci5wcm9wZXJ0aWVzQnlOYW1lW3Byb3BlcnR5TmFtZV0sXG4gICAgICBlbGVtZW50VHlwZU5hbWUsXG4gICAgICBlbGVtZW50VHlwZTtcblxuICAvLyBzZWFyY2ggZm9yIHByb3BlcnRpZXMgYnkgbmFtZSBmaXJzdFxuXG4gIGlmIChwcm9wZXJ0eSkge1xuXG4gICAgaWYgKHNlcmlhbGl6ZUFzVHlwZShwcm9wZXJ0eSkpIHtcbiAgICAgIGVsZW1lbnRUeXBlTmFtZSA9IG5vZGUuYXR0cmlidXRlc1tYU0lfVFlQRV07XG5cbiAgICAgIC8vIHhzaSB0eXBlIGlzIG9wdGlvbmFsLCBpZiBpdCBkb2VzIG5vdCBleGlzdHMgdGhlXG4gICAgICAvLyBkZWZhdWx0IHR5cGUgaXMgYXNzdW1lZFxuICAgICAgaWYgKGVsZW1lbnRUeXBlTmFtZSkge1xuXG4gICAgICAgIC8vIHRha2UgcG9zc2libGUgdHlwZSBwcmVmaXhlcyBmcm9tIFhNTFxuICAgICAgICAvLyBpbnRvIGFjY291bnQsIGkuZS46IHhzaTp0eXBlPVwidHtBY3R1YWxUeXBlfVwiXG4gICAgICAgIGVsZW1lbnRUeXBlTmFtZSA9IG5vcm1hbGl6ZVhzaVR5cGVOYW1lKGVsZW1lbnRUeXBlTmFtZSwgbW9kZWwpO1xuXG4gICAgICAgIGVsZW1lbnRUeXBlID0gbW9kZWwuZ2V0VHlwZShlbGVtZW50VHlwZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiBhc3NpZ24oe30sIHByb3BlcnR5LCB7XG4gICAgICAgICAgZWZmZWN0aXZlVHlwZTogZ2V0TW9kZGxlRGVzY3JpcHRvcihlbGVtZW50VHlwZSkubmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZWFyY2ggZm9yIHByb3BlcnRpZXMgYnkgbmFtZSBmaXJzdFxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHZhciBwa2cgPSBtb2RlbC5nZXRQYWNrYWdlKG5hbWVOcy5wcmVmaXgpO1xuXG4gIGlmIChwa2cpIHtcbiAgICBlbGVtZW50VHlwZU5hbWUgPSBhbGlhc1RvTmFtZShuYW1lTnMsIHBrZyk7XG4gICAgZWxlbWVudFR5cGUgPSBtb2RlbC5nZXRUeXBlKGVsZW1lbnRUeXBlTmFtZSk7XG5cbiAgICAvLyBzZWFyY2ggZm9yIGNvbGxlY3Rpb24gbWVtYmVycyBsYXRlclxuICAgIHByb3BlcnR5ID0gZmluZChkZXNjcmlwdG9yLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHApIHtcbiAgICAgIHJldHVybiAhcC5pc1ZpcnR1YWwgJiYgIXAuaXNSZWZlcmVuY2UgJiYgIXAuaXNBdHRyaWJ1dGUgJiYgZWxlbWVudFR5cGUuaGFzVHlwZShwLnR5cGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gYXNzaWduKHt9LCBwcm9wZXJ0eSwge1xuICAgICAgICBlZmZlY3RpdmVUeXBlOiBnZXRNb2RkbGVEZXNjcmlwdG9yKGVsZW1lbnRUeXBlKS5uYW1lXG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gcGFyc2UgdW5rbm93biBlbGVtZW50IChtYXliZSBleHRlbnNpb24pXG4gICAgcHJvcGVydHkgPSBmaW5kKGRlc2NyaXB0b3IucHJvcGVydGllcywgZnVuY3Rpb24ocCkge1xuICAgICAgcmV0dXJuICFwLmlzUmVmZXJlbmNlICYmICFwLmlzQXR0cmlidXRlICYmIHAudHlwZSA9PT0gJ0VsZW1lbnQnO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgZXJyb3IoJ3VucmVjb2duaXplZCBlbGVtZW50IDwnICsgbmFtZU5zLm5hbWUgKyAnPicpO1xufTtcblxuRWxlbWVudEhhbmRsZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnRWxlbWVudERlc2NyaXB0b3JbJyArIGdldE1vZGRsZURlc2NyaXB0b3IodGhpcy50eXBlKS5uYW1lICsgJ10nO1xufTtcblxuRWxlbWVudEhhbmRsZXIucHJvdG90eXBlLnZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKHByb3BlcnR5RGVzYywgZWxlbWVudCkge1xuICByZXR1cm4gbmV3IFZhbHVlSGFuZGxlcihwcm9wZXJ0eURlc2MsIGVsZW1lbnQpO1xufTtcblxuRWxlbWVudEhhbmRsZXIucHJvdG90eXBlLnJlZmVyZW5jZUhhbmRsZXIgPSBmdW5jdGlvbihwcm9wZXJ0eURlc2MpIHtcbiAgcmV0dXJuIG5ldyBSZWZlcmVuY2VIYW5kbGVyKHByb3BlcnR5RGVzYywgdGhpcy5jb250ZXh0KTtcbn07XG5cbkVsZW1lbnRIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVyID0gZnVuY3Rpb24odHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ0VsZW1lbnQnKSB7XG4gICAgcmV0dXJuIG5ldyBHZW5lcmljRWxlbWVudEhhbmRsZXIodGhpcy5tb2RlbCwgdHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnRIYW5kbGVyKHRoaXMubW9kZWwsIHR5cGUsIHRoaXMuY29udGV4dCk7XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlIHRoZSBjaGlsZCBlbGVtZW50IHBhcnNpbmdcbiAqXG4gKiBAcGFyYW0gIHtFbGVtZW50fSBub2RlIHRoZSB4bWwgbm9kZVxuICovXG5FbGVtZW50SGFuZGxlci5wcm90b3R5cGUuaGFuZGxlQ2hpbGQgPSBmdW5jdGlvbihub2RlKSB7XG4gIHZhciBwcm9wZXJ0eURlc2MsIHR5cGUsIGVsZW1lbnQsIGNoaWxkSGFuZGxlcjtcblxuICBwcm9wZXJ0eURlc2MgPSB0aGlzLmdldFByb3BlcnR5Rm9yTm9kZShub2RlKTtcbiAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblxuICB0eXBlID0gcHJvcGVydHlEZXNjLmVmZmVjdGl2ZVR5cGUgfHwgcHJvcGVydHlEZXNjLnR5cGU7XG5cbiAgaWYgKGlzU2ltcGxlVHlwZSh0eXBlKSkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlSGFuZGxlcihwcm9wZXJ0eURlc2MsIGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5RGVzYy5pc1JlZmVyZW5jZSkge1xuICAgIGNoaWxkSGFuZGxlciA9IHRoaXMucmVmZXJlbmNlSGFuZGxlcihwcm9wZXJ0eURlc2MpLmhhbmRsZU5vZGUobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGRIYW5kbGVyID0gdGhpcy5oYW5kbGVyKHR5cGUpLmhhbmRsZU5vZGUobm9kZSk7XG4gIH1cblxuICB2YXIgbmV3RWxlbWVudCA9IGNoaWxkSGFuZGxlci5lbGVtZW50O1xuXG4gIC8vIGNoaWxkIGhhbmRsZXMgbWF5IGRlY2lkZSB0byBza2lwIGVsZW1lbnRzXG4gIC8vIGJ5IG5vdCByZXR1cm5pbmcgYW55dGhpbmdcbiAgaWYgKG5ld0VsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgaWYgKHByb3BlcnR5RGVzYy5pc01hbnkpIHtcbiAgICAgIGVsZW1lbnQuZ2V0KHByb3BlcnR5RGVzYy5uYW1lKS5wdXNoKG5ld0VsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnNldChwcm9wZXJ0eURlc2MubmFtZSwgbmV3RWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5RGVzYy5pc1JlZmVyZW5jZSkge1xuICAgICAgYXNzaWduKG5ld0VsZW1lbnQsIHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29udGV4dC5hZGRSZWZlcmVuY2UobmV3RWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzdGFibGlzaCBjaGlsZCAtPiBwYXJlbnQgcmVsYXRpb25zaGlwXG4gICAgICBuZXdFbGVtZW50LiRwYXJlbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZEhhbmRsZXI7XG59O1xuXG4vKipcbiAqIEFuIGVsZW1lbnQgaGFuZGxlciB0aGF0IHBlcmZvcm1zIHNwZWNpYWwgdmFsaWRhdGlvblxuICogdG8gZW5zdXJlIHRoZSBub2RlIGl0IGdldHMgaW5pdGlhbGl6ZWQgd2l0aCBtYXRjaGVzXG4gKiB0aGUgaGFuZGxlcnMgdHlwZSAobmFtZXNwYWNlIHdpc2UpLlxuICpcbiAqIEBwYXJhbSB7TW9kZGxlfSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gKiBAcGFyYW0ge0NvbnRleHR9IGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gUm9vdEVsZW1lbnRIYW5kbGVyKG1vZGVsLCB0eXBlTmFtZSwgY29udGV4dCkge1xuICBFbGVtZW50SGFuZGxlci5jYWxsKHRoaXMsIG1vZGVsLCB0eXBlTmFtZSwgY29udGV4dCk7XG59XG5cblJvb3RFbGVtZW50SGFuZGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVsZW1lbnRIYW5kbGVyLnByb3RvdHlwZSk7XG5cblJvb3RFbGVtZW50SGFuZGxlci5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcblxuICB2YXIgbmFtZSA9IG5vZGUubmFtZSxcbiAgICAgIG5hbWVOcyA9IHBhcnNlTmFtZU5TKG5hbWUpLFxuICAgICAgbW9kZWwgPSB0aGlzLm1vZGVsLFxuICAgICAgdHlwZSA9IHRoaXMudHlwZSxcbiAgICAgIHBrZyA9IG1vZGVsLmdldFBhY2thZ2UobmFtZU5zLnByZWZpeCksXG4gICAgICB0eXBlTmFtZSA9IHBrZyAmJiBhbGlhc1RvTmFtZShuYW1lTnMsIHBrZykgfHwgbmFtZTtcblxuICAvLyB2ZXJpZnkgdGhlIGNvcnJlY3QgbmFtZXNwYWNlIGlmIHdlIHBhcnNlXG4gIC8vIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBoYW5kbGVyIHRyZWVcbiAgLy9cbiAgLy8gdGhpcyBlbnN1cmVzIHdlIGRvbid0IG1pc3Rha2VubHkgaW1wb3J0IHdyb25nIG5hbWVzcGFjZSBlbGVtZW50c1xuICBpZiAoIXR5cGUuaGFzVHlwZSh0eXBlTmFtZSkpIHtcbiAgICB0aHJvdyBlcnJvcigndW5leHBlY3RlZCBlbGVtZW50IDwnICsgbm9kZS5vcmlnaW5hbE5hbWUgKyAnPicpO1xuICB9XG5cbiAgcmV0dXJuIEVsZW1lbnRIYW5kbGVyLnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LmNhbGwodGhpcywgbm9kZSk7XG59O1xuXG5cbmZ1bmN0aW9uIEdlbmVyaWNFbGVtZW50SGFuZGxlcihtb2RlbCwgdHlwZU5hbWUsIGNvbnRleHQpIHtcbiAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5HZW5lcmljRWxlbWVudEhhbmRsZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlRWxlbWVudEhhbmRsZXIucHJvdG90eXBlKTtcblxuR2VuZXJpY0VsZW1lbnRIYW5kbGVyLnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24obm9kZSkge1xuXG4gIHZhciBuYW1lID0gbm9kZS5uYW1lLFxuICAgICAgbnMgPSBwYXJzZU5hbWVOUyhuYW1lKSxcbiAgICAgIHByZWZpeCA9IG5zLnByZWZpeCxcbiAgICAgIHVyaSA9IG5vZGUubnNbcHJlZml4ICsgJyR1cmknXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cbiAgcmV0dXJuIHRoaXMubW9kZWwuY3JlYXRlQW55KG5hbWUsIHVyaSwgYXR0cmlidXRlcyk7XG59O1xuXG5HZW5lcmljRWxlbWVudEhhbmRsZXIucHJvdG90eXBlLmhhbmRsZUNoaWxkID0gZnVuY3Rpb24obm9kZSkge1xuXG4gIHZhciBoYW5kbGVyID0gbmV3IEdlbmVyaWNFbGVtZW50SGFuZGxlcih0aGlzLm1vZGVsLCAnRWxlbWVudCcsIHRoaXMuY29udGV4dCkuaGFuZGxlTm9kZShub2RlKSxcbiAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgdmFyIG5ld0VsZW1lbnQgPSBoYW5kbGVyLmVsZW1lbnQsXG4gICAgICBjaGlsZHJlbjtcblxuICBpZiAobmV3RWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRyZW4gPSBlbGVtZW50LiRjaGlsZHJlbiA9IGVsZW1lbnQuJGNoaWxkcmVuIHx8IFtdO1xuICAgIGNoaWxkcmVuLnB1c2gobmV3RWxlbWVudCk7XG5cbiAgICAvLyBlc3RhYmxpc2ggY2hpbGQgLT4gcGFyZW50IHJlbGF0aW9uc2hpcFxuICAgIG5ld0VsZW1lbnQuJHBhcmVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gaGFuZGxlcjtcbn07XG5cbkdlbmVyaWNFbGVtZW50SGFuZGxlci5wcm90b3R5cGUuaGFuZGxlRW5kID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmJvZHkpIHtcbiAgICB0aGlzLmVsZW1lbnQuJGJvZHkgPSB0aGlzLmJvZHk7XG4gIH1cbn07XG5cbi8qKlxuICogQSByZWFkZXIgZm9yIGEgbWV0YS1tb2RlbFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge01vZGVsfSBvcHRpb25zLm1vZGVsIHVzZWQgdG8gcmVhZCB4bWwgZmlsZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5sYXggd2hldGhlciB0byBtYWtlIHBhcnNlIGVycm9ycyB3YXJuaW5nc1xuICovXG5mdW5jdGlvbiBSZWFkZXIob3B0aW9ucykge1xuXG4gIGlmIChvcHRpb25zIGluc3RhbmNlb2YgTW9kZGxlKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIG1vZGVsOiBvcHRpb25zXG4gICAgfTtcbiAgfVxuXG4gIGFzc2lnbih0aGlzLCB7IGxheDogZmFsc2UgfSwgb3B0aW9ucyk7XG59XG5cblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gWE1MIGludG8gYSBtb2RkbGUgZG9jdW1lbnQgdHJlZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30geG1sXG4gKiBAcGFyYW0ge0VsZW1lbnRIYW5kbGVyfE9iamVjdH0gb3B0aW9ucyBvciByb290SGFuZGxlclxuICogQHBhcmFtICB7RnVuY3Rpb259IGRvbmVcbiAqL1xuUmVhZGVyLnByb3RvdHlwZS5mcm9tWE1MID0gZnVuY3Rpb24oeG1sLCBvcHRpb25zLCBkb25lKSB7XG5cbiAgdmFyIHJvb3RIYW5kbGVyID0gb3B0aW9ucy5yb290SGFuZGxlcjtcblxuICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEVsZW1lbnRIYW5kbGVyKSB7XG4gICAgLy8gcm9vdCBoYW5kbGVyIHBhc3NlZCB2aWEgKHhtbCwgeyByb290SGFuZGxlcjogRWxlbWVudEhhbmRsZXIgfSwgLi4uKVxuICAgIHJvb3RIYW5kbGVyID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0ge307XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gcm9vdEhhbmRsZXIgcGFzc2VkIHZpYSAoeG1sLCAnc29tZVN0cmluZycsIC4uLilcbiAgICAgIHJvb3RIYW5kbGVyID0gdGhpcy5oYW5kbGVyKG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJvb3RIYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gcm9vdEhhbmRsZXIgcGFzc2VkIHZpYSAoeG1sLCB7IHJvb3RIYW5kbGVyOiAnc29tZVN0cmluZycgfSwgLi4uKVxuICAgICAgcm9vdEhhbmRsZXIgPSB0aGlzLmhhbmRsZXIocm9vdEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBtb2RlbCA9IHRoaXMubW9kZWwsXG4gICAgICBsYXggPSB0aGlzLmxheDtcblxuICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KGFzc2lnbih7fSwgb3B0aW9ucywgeyByb290SGFuZGxlcjogcm9vdEhhbmRsZXIgfSkpLFxuICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcih7IHByb3h5OiB0cnVlIH0pLFxuICAgICAgc3RhY2sgPSBjcmVhdGVTdGFjaygpO1xuXG4gIHJvb3RIYW5kbGVyLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gIC8vIHB1c2ggcm9vdCBoYW5kbGVyXG4gIHN0YWNrLnB1c2gocm9vdEhhbmRsZXIpO1xuXG5cbiAgLyoqXG4gICAqIEhhbmRsZSBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtICB7RXJyb3J9IGVyclxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZ2V0Q29udGV4dFxuICAgKiBAcGFyYW0gIHtib29sZWFufSBsYXhcbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBoYW5kbGVkXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIsIGdldENvbnRleHQsIGxheCkge1xuXG4gICAgdmFyIGN0eCA9IGdldENvbnRleHQoKTtcblxuICAgIHZhciBsaW5lID0gY3R4LmxpbmUsXG4gICAgICAgIGNvbHVtbiA9IGN0eC5jb2x1bW4sXG4gICAgICAgIGRhdGEgPSBjdHguZGF0YTtcblxuICAgIC8vIHdlIHJlY2VpdmUgdGhlIGZ1bGwgY29udGV4dCBkYXRhIGhlcmUsXG4gICAgLy8gZm9yIGVsZW1lbnRzIHRyaW0gZG93biB0aGUgaW5mb3JtYXRpb25cbiAgICAvLyB0byB0aGUgdGFnIG5hbWUsIG9ubHlcbiAgICBpZiAoZGF0YS5jaGFyQXQoMCkgPT09ICc8JyAmJiBkYXRhLmluZGV4T2YoJyAnKSAhPT0gLTEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKDAsIGRhdGEuaW5kZXhPZignICcpKSArICc+JztcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9XG4gICAgICAndW5wYXJzYWJsZSBjb250ZW50ICcgKyAoZGF0YSA/IGRhdGEgKyAnICcgOiAnJykgKyAnZGV0ZWN0ZWRcXG5cXHQnICtcbiAgICAgICAgJ2xpbmU6ICcgKyBsaW5lICsgJ1xcblxcdCcgK1xuICAgICAgICAnY29sdW1uOiAnICsgY29sdW1uICsgJ1xcblxcdCcgK1xuICAgICAgICAnbmVzdGVkIGVycm9yOiAnICsgZXJyLm1lc3NhZ2U7XG5cbiAgICBpZiAobGF4KSB7XG4gICAgICBjb250ZXh0LmFkZFdhcm5pbmcoe1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBlcnJvcjogZXJyXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVdhcm5pbmcoZXJyLCBnZXRDb250ZXh0KSB7XG4gICAgLy8ganVzdCBsaWtlIGhhbmRsaW5nIGVycm9ycyBpbiA8bGF4PXRydWU+IG1vZGVcbiAgICByZXR1cm4gaGFuZGxlRXJyb3IoZXJyLCBnZXRDb250ZXh0LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGNvbGxlY3RlZCByZWZlcmVuY2VzIG9uIHBhcnNlIGVuZC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc29sdmVSZWZlcmVuY2VzKCkge1xuXG4gICAgdmFyIGVsZW1lbnRzQnlJZCA9IGNvbnRleHQuZWxlbWVudHNCeUlkO1xuICAgIHZhciByZWZlcmVuY2VzID0gY29udGV4dC5yZWZlcmVuY2VzO1xuXG4gICAgdmFyIGksIHI7XG5cbiAgICBmb3IgKGkgPSAwOyAociA9IHJlZmVyZW5jZXNbaV0pOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50ID0gci5lbGVtZW50O1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IGVsZW1lbnRzQnlJZFtyLmlkXTtcbiAgICAgIHZhciBwcm9wZXJ0eSA9IGdldE1vZGRsZURlc2NyaXB0b3IoZWxlbWVudCkucHJvcGVydGllc0J5TmFtZVtyLnByb3BlcnR5XTtcblxuICAgICAgaWYgKCFyZWZlcmVuY2UpIHtcbiAgICAgICAgY29udGV4dC5hZGRXYXJuaW5nKHtcbiAgICAgICAgICBtZXNzYWdlOiAndW5yZXNvbHZlZCByZWZlcmVuY2UgPCcgKyByLmlkICsgJz4nLFxuICAgICAgICAgIGVsZW1lbnQ6IHIuZWxlbWVudCxcbiAgICAgICAgICBwcm9wZXJ0eTogci5wcm9wZXJ0eSxcbiAgICAgICAgICB2YWx1ZTogci5pZFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BlcnR5LmlzTWFueSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGVsZW1lbnQuZ2V0KHByb3BlcnR5Lm5hbWUpLFxuICAgICAgICAgICAgaWR4ID0gY29sbGVjdGlvbi5pbmRleE9mKHIpO1xuXG4gICAgICAgIC8vIHdlIHJlcGxhY2UgYW4gZXhpc3RpbmcgcGxhY2UgaG9sZGVyIChpZHggIT0gLTEpIG9yXG4gICAgICAgIC8vIGFwcGVuZCB0byB0aGUgY29sbGVjdGlvbiBpbnN0ZWFkXG4gICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgaWR4ID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlZmVyZW5jZSkge1xuICAgICAgICAgIC8vIHJlbW92ZSB1bnJlc29sdmFibGUgcmVmZXJlbmNlXG4gICAgICAgICAgY29sbGVjdGlvbi5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhZGQgb3IgdXBkYXRlIHJlZmVyZW5jZSBpbiBjb2xsZWN0aW9uXG4gICAgICAgICAgY29sbGVjdGlvbltpZHhdID0gcmVmZXJlbmNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldChwcm9wZXJ0eS5uYW1lLCByZWZlcmVuY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xuICAgIHN0YWNrLnBvcCgpLmhhbmRsZUVuZCgpO1xuICB9XG5cbiAgdmFyIFBSRUFNQkxFX1NUQVJUX1BBVFRFUk4gPSAvXjxcXD94bWwgL2k7XG5cbiAgdmFyIEVOQ09ESU5HX1BBVFRFUk4gPSAvIGVuY29kaW5nPVwiKFteXCJdKylcIi9pO1xuXG4gIHZhciBVVEZfOF9QQVRURVJOID0gL151dGYtOCQvaTtcblxuICBmdW5jdGlvbiBoYW5kbGVRdWVzdGlvbihxdWVzdGlvbikge1xuXG4gICAgaWYgKCFQUkVBTUJMRV9TVEFSVF9QQVRURVJOLnRlc3QocXVlc3Rpb24pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoID0gRU5DT0RJTkdfUEFUVEVSTi5leGVjKHF1ZXN0aW9uKTtcbiAgICB2YXIgZW5jb2RpbmcgPSBtYXRjaCAmJiBtYXRjaFsxXTtcblxuICAgIGlmICghZW5jb2RpbmcgfHwgVVRGXzhfUEFUVEVSTi50ZXN0KGVuY29kaW5nKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuYWRkV2FybmluZyh7XG4gICAgICBtZXNzYWdlOlxuICAgICAgICAndW5zdXBwb3J0ZWQgZG9jdW1lbnQgZW5jb2RpbmcgPCcgKyBlbmNvZGluZyArICc+LCAnICtcbiAgICAgICAgJ2ZhbGxpbmcgYmFjayB0byBVVEYtOCdcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9wZW4obm9kZSwgZ2V0Q29udGV4dCkge1xuICAgIHZhciBoYW5kbGVyID0gc3RhY2sucGVlaygpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN0YWNrLnB1c2goaGFuZGxlci5oYW5kbGVOb2RlKG5vZGUpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcblxuICAgICAgaWYgKGhhbmRsZUVycm9yKGVyciwgZ2V0Q29udGV4dCwgbGF4KSkge1xuICAgICAgICBzdGFjay5wdXNoKG5ldyBOb29wSGFuZGxlcigpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDRGF0YSh0ZXh0LCBnZXRDb250ZXh0KSB7XG5cbiAgICB0cnkge1xuICAgICAgc3RhY2sucGVlaygpLmhhbmRsZVRleHQodGV4dCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBoYW5kbGVXYXJuaW5nKGVyciwgZ2V0Q29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGV4dCh0ZXh0LCBnZXRDb250ZXh0KSB7XG4gICAgLy8gc3RyaXAgd2hpdGVzcGFjZSBvbmx5IG5vZGVzLCBpLmUuIGJlZm9yZVxuICAgIC8vIDwhQ0RBVEFbIC4uLiBdPiBzZWN0aW9ucyBhbmQgaW4gYmV0d2VlbiB0YWdzXG4gICAgdGV4dCA9IHRleHQudHJpbSgpO1xuXG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlQ0RhdGEodGV4dCwgZ2V0Q29udGV4dCk7XG4gIH1cblxuICB2YXIgdXJpTWFwID0gbW9kZWwuZ2V0UGFja2FnZXMoKS5yZWR1Y2UoZnVuY3Rpb24odXJpTWFwLCBwKSB7XG4gICAgdXJpTWFwW3AudXJpXSA9IHAucHJlZml4O1xuXG4gICAgcmV0dXJuIHVyaU1hcDtcbiAgfSwge30pO1xuXG4gIHBhcnNlclxuICAgIC5ucyh1cmlNYXApXG4gICAgLm9uKCdvcGVuVGFnJywgZnVuY3Rpb24ob2JqLCBkZWNvZGVTdHIsIHNlbGZDbG9zaW5nLCBnZXRDb250ZXh0KSB7XG5cbiAgICAgIC8vIGdyYWNlZnVsbHkgaGFuZGxlIHVucGFyc2FibGUgYXR0cmlidXRlcyAoYXR0cnM9ZmFsc2UpXG4gICAgICB2YXIgYXR0cnMgPSBvYmouYXR0cnMgfHwge307XG5cbiAgICAgIHZhciBkZWNvZGVkQXR0cnMgPSBPYmplY3Qua2V5cyhhdHRycykucmVkdWNlKGZ1bmN0aW9uKGQsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBkZWNvZGVTdHIoYXR0cnNba2V5XSk7XG5cbiAgICAgICAgZFtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIHZhciBub2RlID0ge1xuICAgICAgICBuYW1lOiBvYmoubmFtZSxcbiAgICAgICAgb3JpZ2luYWxOYW1lOiBvYmoub3JpZ2luYWxOYW1lLFxuICAgICAgICBhdHRyaWJ1dGVzOiBkZWNvZGVkQXR0cnMsXG4gICAgICAgIG5zOiBvYmoubnNcbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZU9wZW4obm9kZSwgZ2V0Q29udGV4dCk7XG4gICAgfSlcbiAgICAub24oJ3F1ZXN0aW9uJywgaGFuZGxlUXVlc3Rpb24pXG4gICAgLm9uKCdjbG9zZVRhZycsIGhhbmRsZUNsb3NlKVxuICAgIC5vbignY2RhdGEnLCBoYW5kbGVDRGF0YSlcbiAgICAub24oJ3RleHQnLCBmdW5jdGlvbih0ZXh0LCBkZWNvZGVFbnRpdGllcywgZ2V0Q29udGV4dCkge1xuICAgICAgaGFuZGxlVGV4dChkZWNvZGVFbnRpdGllcyh0ZXh0KSwgZ2V0Q29udGV4dCk7XG4gICAgfSlcbiAgICAub24oJ2Vycm9yJywgaGFuZGxlRXJyb3IpXG4gICAgLm9uKCd3YXJuJywgaGFuZGxlV2FybmluZyk7XG5cbiAgLy8gZGVmZXJyZWQgcGFyc2UgWE1MIHRvIG1ha2UgbG9hZGluZyByZWFsbHkgYXNjbmNocm9ub3VzXG4gIC8vIHRoaXMgZW5zdXJlcyB0aGUgZXhlY3V0aW9uIGVudmlyb25tZW50IChub2RlIG9yIGJyb3dzZXIpXG4gIC8vIGlzIGtlcHQgcmVzcG9uc2l2ZSBhbmQgdGhhdCBjZXJ0YWluIG9wdGltaXphdGlvbiBzdHJhdGVnaWVzXG4gIC8vIGNhbiBraWNrIGluXG4gIGRlZmVyKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlcnI7XG5cbiAgICB0cnkge1xuICAgICAgcGFyc2VyLnBhcnNlKHhtbCk7XG5cbiAgICAgIHJlc29sdmVSZWZlcmVuY2VzKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyID0gZTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IHJvb3RIYW5kbGVyLmVsZW1lbnQ7XG5cbiAgICAvLyBoYW5kbGUgdGhlIHNpdHVhdGlvbiB0aGF0IHdlIGNvdWxkIG5vdCBleHRyYWN0XG4gICAgLy8gdGhlIGRlc2lyZWQgcm9vdCBlbGVtZW50IGZyb20gdGhlIGRvY3VtZW50XG4gICAgaWYgKCFlcnIgJiYgIWVsZW1lbnQpIHtcbiAgICAgIGVyciA9IGVycm9yKCdmYWlsZWQgdG8gcGFyc2UgZG9jdW1lbnQgYXMgPCcgKyByb290SGFuZGxlci50eXBlLiRkZXNjcmlwdG9yLm5hbWUgKyAnPicpO1xuICAgIH1cblxuICAgIGRvbmUoZXJyLCBlcnIgPyB1bmRlZmluZWQgOiBlbGVtZW50LCBjb250ZXh0KTtcbiAgfSk7XG59O1xuXG5SZWFkZXIucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiBuZXcgUm9vdEVsZW1lbnRIYW5kbGVyKHRoaXMubW9kZWwsIG5hbWUpO1xufTtcblxuXG4vLyBoZWxwZXJzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YWNrKCkge1xuICB2YXIgc3RhY2sgPSBbXTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3RhY2ssICdwZWVrJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhY2s7XG59XG5cbnZhciBYTUxfUFJFQU1CTEUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XFxuJztcblxudmFyIEVTQ0FQRV9BVFRSX0NIQVJTID0gLzx8PnwnfFwifCZ8XFxuXFxyfFxcbi9nO1xudmFyIEVTQ0FQRV9DSEFSUyA9IC88fD58Ji9nO1xuXG5cbmZ1bmN0aW9uIE5hbWVzcGFjZXMocGFyZW50KSB7XG5cbiAgdmFyIHByZWZpeE1hcCA9IHt9O1xuICB2YXIgdXJpTWFwID0ge307XG4gIHZhciB1c2VkID0ge307XG5cbiAgdmFyIHdlbGxrbm93biA9IFtdO1xuICB2YXIgY3VzdG9tID0gW107XG5cbiAgLy8gQVBJXG5cbiAgdGhpcy5ieVVyaSA9IGZ1bmN0aW9uKHVyaSkge1xuICAgIHJldHVybiB1cmlNYXBbdXJpXSB8fCAoXG4gICAgICBwYXJlbnQgJiYgcGFyZW50LmJ5VXJpKHVyaSlcbiAgICApO1xuICB9O1xuXG4gIHRoaXMuYWRkID0gZnVuY3Rpb24obnMsIGlzV2VsbGtub3duKSB7XG5cbiAgICB1cmlNYXBbbnMudXJpXSA9IG5zO1xuXG4gICAgaWYgKGlzV2VsbGtub3duKSB7XG4gICAgICB3ZWxsa25vd24ucHVzaChucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1c3RvbS5wdXNoKG5zKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcFByZWZpeChucy5wcmVmaXgsIG5zLnVyaSk7XG4gIH07XG5cbiAgdGhpcy51cmlCeVByZWZpeCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXhNYXBbcHJlZml4IHx8ICd4bWxucyddO1xuICB9O1xuXG4gIHRoaXMubWFwUHJlZml4ID0gZnVuY3Rpb24ocHJlZml4LCB1cmkpIHtcbiAgICBwcmVmaXhNYXBbcHJlZml4IHx8ICd4bWxucyddID0gdXJpO1xuICB9O1xuXG4gIHRoaXMubG9nVXNlZCA9IGZ1bmN0aW9uKG5zKSB7XG4gICAgdmFyIHVyaSA9IG5zLnVyaTtcblxuICAgIHVzZWRbdXJpXSA9IHRoaXMuYnlVcmkodXJpKTtcbiAgfTtcblxuICB0aGlzLmdldFVzZWQgPSBmdW5jdGlvbihucykge1xuXG4gICAgZnVuY3Rpb24gaXNVc2VkKG5zKSB7XG4gICAgICByZXR1cm4gdXNlZFtucy51cmldO1xuICAgIH1cblxuICAgIHZhciBhbGxOcyA9IFtdLmNvbmNhdCh3ZWxsa25vd24sIGN1c3RvbSk7XG5cbiAgICByZXR1cm4gYWxsTnMuZmlsdGVyKGlzVXNlZCk7XG4gIH07XG5cbn1cblxuZnVuY3Rpb24gbG93ZXIoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIG5hbWVUb0FsaWFzKG5hbWUsIHBrZykge1xuICBpZiAoaGFzTG93ZXJDYXNlQWxpYXMocGtnKSkge1xuICAgIHJldHVybiBsb3dlcihuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3I7XG4gIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5zTmFtZShucykge1xuICBpZiAoaXNTdHJpbmcobnMpKSB7XG4gICAgcmV0dXJuIG5zO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAobnMucHJlZml4ID8gbnMucHJlZml4ICsgJzonIDogJycpICsgbnMubG9jYWxOYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE5zQXR0cnMobmFtZXNwYWNlcykge1xuXG4gIHJldHVybiBtYXAobmFtZXNwYWNlcy5nZXRVc2VkKCksIGZ1bmN0aW9uKG5zKSB7XG4gICAgdmFyIG5hbWUgPSAneG1sbnMnICsgKG5zLnByZWZpeCA/ICc6JyArIG5zLnByZWZpeCA6ICcnKTtcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCB2YWx1ZTogbnMudXJpIH07XG4gIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnROcyhucywgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5pc0dlbmVyaWMpIHtcbiAgICByZXR1cm4gYXNzaWduKHsgbG9jYWxOYW1lOiBkZXNjcmlwdG9yLm5zLmxvY2FsTmFtZSB9LCBucyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFzc2lnbih7IGxvY2FsTmFtZTogbmFtZVRvQWxpYXMoZGVzY3JpcHRvci5ucy5sb2NhbE5hbWUsIGRlc2NyaXB0b3IuJHBrZykgfSwgbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5TnMobnMsIGRlc2NyaXB0b3IpIHtcbiAgcmV0dXJuIGFzc2lnbih7IGxvY2FsTmFtZTogZGVzY3JpcHRvci5ucy5sb2NhbE5hbWUgfSwgbnMpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXJpYWxpemFibGVQcm9wZXJ0aWVzKGVsZW1lbnQpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBlbGVtZW50LiRkZXNjcmlwdG9yO1xuXG4gIHJldHVybiBmaWx0ZXIoZGVzY3JpcHRvci5wcm9wZXJ0aWVzLCBmdW5jdGlvbihwKSB7XG4gICAgdmFyIG5hbWUgPSBwLm5hbWU7XG5cbiAgICBpZiAocC5pc1ZpcnR1YWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkbyBub3Qgc2VyaWFsaXplIGRlZmF1bHRzXG4gICAgaWYgKCFlbGVtZW50Lmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gZWxlbWVudFtuYW1lXTtcblxuICAgIC8vIGRvIG5vdCBzZXJpYWxpemUgZGVmYXVsdCBlcXVhbHNcbiAgICBpZiAodmFsdWUgPT09IHAuZGVmYXVsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGRvIG5vdCBzZXJpYWxpemUgbnVsbCBwcm9wZXJ0aWVzXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAuaXNNYW55ID8gdmFsdWUubGVuZ3RoIDogdHJ1ZTtcbiAgfSk7XG59XG5cbnZhciBFU0NBUEVfQVRUUl9NQVAgPSB7XG4gICdcXG4nOiAnIzEwJyxcbiAgJ1xcblxccic6ICcjMTAnLFxuICAnXCInOiAnIzM0JyxcbiAgJ1xcJyc6ICcjMzknLFxuICAnPCc6ICcjNjAnLFxuICAnPic6ICcjNjInLFxuICAnJic6ICcjMzgnXG59O1xuXG52YXIgRVNDQVBFX01BUCA9IHtcbiAgJzwnOiAnbHQnLFxuICAnPic6ICdndCcsXG4gICcmJzogJ2FtcCdcbn07XG5cbmZ1bmN0aW9uIGVzY2FwZShzdHIsIGNoYXJQYXR0ZXJuLCByZXBsYWNlTWFwKSB7XG5cbiAgLy8gZW5zdXJlIHdlIGFyZSBoYW5kbGluZyBzdHJpbmdzIGhlcmVcbiAgc3RyID0gaXNTdHJpbmcoc3RyKSA/IHN0ciA6ICcnICsgc3RyO1xuXG4gIHJldHVybiBzdHIucmVwbGFjZShjaGFyUGF0dGVybiwgZnVuY3Rpb24ocykge1xuICAgIHJldHVybiAnJicgKyByZXBsYWNlTWFwW3NdICsgJzsnO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBzdHJpbmcgYXR0cmlidXRlIHRvIG5vdCBjb250YWluIGFueSBiYWQgdmFsdWVzIChsaW5lIGJyZWFrcywgJ1wiJywgLi4uKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgdGhlIHN0cmluZyB0byBlc2NhcGVcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGVzY2FwZWQgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUF0dHIoc3RyKSB7XG4gIHJldHVybiBlc2NhcGUoc3RyLCBFU0NBUEVfQVRUUl9DSEFSUywgRVNDQVBFX0FUVFJfTUFQKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlQm9keShzdHIpIHtcbiAgcmV0dXJuIGVzY2FwZShzdHIsIEVTQ0FQRV9DSEFSUywgRVNDQVBFX01BUCk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckF0dHJpYnV0ZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZpbHRlcihwcm9wcywgZnVuY3Rpb24ocCkgeyByZXR1cm4gcC5pc0F0dHI7IH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJDb250YWluZWQocHJvcHMpIHtcbiAgcmV0dXJuIGZpbHRlcihwcm9wcywgZnVuY3Rpb24ocCkgeyByZXR1cm4gIXAuaXNBdHRyOyB9KTtcbn1cblxuXG5mdW5jdGlvbiBSZWZlcmVuY2VTZXJpYWxpemVyKHRhZ05hbWUpIHtcbiAgdGhpcy50YWdOYW1lID0gdGFnTmFtZTtcbn1cblxuUmVmZXJlbmNlU2VyaWFsaXplci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVmZXJlbmNlU2VyaWFsaXplci5wcm90b3R5cGUuc2VyaWFsaXplVG8gPSBmdW5jdGlvbih3cml0ZXIpIHtcbiAgd3JpdGVyXG4gICAgLmFwcGVuZEluZGVudCgpXG4gICAgLmFwcGVuZCgnPCcgKyB0aGlzLnRhZ05hbWUgKyAnPicgKyB0aGlzLmVsZW1lbnQuaWQgKyAnPC8nICsgdGhpcy50YWdOYW1lICsgJz4nKVxuICAgIC5hcHBlbmROZXdMaW5lKCk7XG59O1xuXG5mdW5jdGlvbiBCb2R5U2VyaWFsaXplcigpIHt9XG5cbkJvZHlTZXJpYWxpemVyLnByb3RvdHlwZS5zZXJpYWxpemVWYWx1ZSA9XG5Cb2R5U2VyaWFsaXplci5wcm90b3R5cGUuc2VyaWFsaXplVG8gPSBmdW5jdGlvbih3cml0ZXIpIHtcbiAgd3JpdGVyLmFwcGVuZChcbiAgICB0aGlzLmVzY2FwZVxuICAgICAgPyBlc2NhcGVCb2R5KHRoaXMudmFsdWUpXG4gICAgICA6IHRoaXMudmFsdWVcbiAgKTtcbn07XG5cbkJvZHlTZXJpYWxpemVyLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICBpZiAocHJvcC50eXBlID09PSAnU3RyaW5nJyAmJiB2YWx1ZS5zZWFyY2goRVNDQVBFX0NIQVJTKSAhPT0gLTEpIHtcbiAgICB0aGlzLmVzY2FwZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIFZhbHVlU2VyaWFsaXplcih0YWdOYW1lKSB7XG4gIHRoaXMudGFnTmFtZSA9IHRhZ05hbWU7XG59XG5cbmluaGVyaXRzKFZhbHVlU2VyaWFsaXplciwgQm9keVNlcmlhbGl6ZXIpO1xuXG5WYWx1ZVNlcmlhbGl6ZXIucHJvdG90eXBlLnNlcmlhbGl6ZVRvID0gZnVuY3Rpb24od3JpdGVyKSB7XG5cbiAgd3JpdGVyXG4gICAgLmFwcGVuZEluZGVudCgpXG4gICAgLmFwcGVuZCgnPCcgKyB0aGlzLnRhZ05hbWUgKyAnPicpO1xuXG4gIHRoaXMuc2VyaWFsaXplVmFsdWUod3JpdGVyKTtcblxuICB3cml0ZXJcbiAgICAuYXBwZW5kKCc8LycgKyB0aGlzLnRhZ05hbWUgKyAnPicpXG4gICAgLmFwcGVuZE5ld0xpbmUoKTtcbn07XG5cbmZ1bmN0aW9uIEVsZW1lbnRTZXJpYWxpemVyKHBhcmVudCwgcHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gIHRoaXMuYm9keSA9IFtdO1xuICB0aGlzLmF0dHJzID0gW107XG5cbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMucHJvcGVydHlEZXNjcmlwdG9yID0gcHJvcGVydHlEZXNjcmlwdG9yO1xufVxuXG5FbGVtZW50U2VyaWFsaXplci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1lbnREZXNjcmlwdG9yID0gZWxlbWVudC4kZGVzY3JpcHRvcixcbiAgICAgIHByb3BlcnR5RGVzY3JpcHRvciA9IHRoaXMucHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIHZhciBvdGhlckF0dHJzLFxuICAgICAgcHJvcGVydGllcztcblxuICB2YXIgaXNHZW5lcmljID0gZWxlbWVudERlc2NyaXB0b3IuaXNHZW5lcmljO1xuXG4gIGlmIChpc0dlbmVyaWMpIHtcbiAgICBvdGhlckF0dHJzID0gdGhpcy5wYXJzZUdlbmVyaWMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgb3RoZXJBdHRycyA9IHRoaXMucGFyc2VOc0F0dHJpYnV0ZXMoZWxlbWVudCk7XG4gIH1cblxuICBpZiAocHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgdGhpcy5ucyA9IHRoaXMubnNQcm9wZXJ0eVRhZ05hbWUocHJvcGVydHlEZXNjcmlwdG9yKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm5zID0gdGhpcy5uc1RhZ05hbWUoZWxlbWVudERlc2NyaXB0b3IpO1xuICB9XG5cbiAgLy8gY29tcHV0ZSB0YWcgbmFtZVxuICB0aGlzLnRhZ05hbWUgPSB0aGlzLmFkZFRhZ05hbWUodGhpcy5ucyk7XG5cbiAgaWYgKCFpc0dlbmVyaWMpIHtcbiAgICBwcm9wZXJ0aWVzID0gZ2V0U2VyaWFsaXphYmxlUHJvcGVydGllcyhlbGVtZW50KTtcblxuICAgIHRoaXMucGFyc2VBdHRyaWJ1dGVzKGZpbHRlckF0dHJpYnV0ZXMocHJvcGVydGllcykpO1xuICAgIHRoaXMucGFyc2VDb250YWlubWVudHMoZmlsdGVyQ29udGFpbmVkKHByb3BlcnRpZXMpKTtcbiAgfVxuXG4gIHRoaXMucGFyc2VHZW5lcmljQXR0cmlidXRlcyhlbGVtZW50LCBvdGhlckF0dHJzKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkVsZW1lbnRTZXJpYWxpemVyLnByb3RvdHlwZS5uc1RhZ05hbWUgPSBmdW5jdGlvbihkZXNjcmlwdG9yKSB7XG4gIHZhciBlZmZlY3RpdmVOcyA9IHRoaXMubG9nTmFtZXNwYWNlVXNlZChkZXNjcmlwdG9yLm5zKTtcbiAgcmV0dXJuIGdldEVsZW1lbnROcyhlZmZlY3RpdmVOcywgZGVzY3JpcHRvcik7XG59O1xuXG5FbGVtZW50U2VyaWFsaXplci5wcm90b3R5cGUubnNQcm9wZXJ0eVRhZ05hbWUgPSBmdW5jdGlvbihkZXNjcmlwdG9yKSB7XG4gIHZhciBlZmZlY3RpdmVOcyA9IHRoaXMubG9nTmFtZXNwYWNlVXNlZChkZXNjcmlwdG9yLm5zKTtcbiAgcmV0dXJuIGdldFByb3BlcnR5TnMoZWZmZWN0aXZlTnMsIGRlc2NyaXB0b3IpO1xufTtcblxuRWxlbWVudFNlcmlhbGl6ZXIucHJvdG90eXBlLmlzTG9jYWxOcyA9IGZ1bmN0aW9uKG5zKSB7XG4gIHJldHVybiBucy51cmkgPT09IHRoaXMubnMudXJpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFjdHVhbCBucyBhdHRyaWJ1dGUgbmFtZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VsZW1lbnQuaW5oZXJpdGVkPWZhbHNlXVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gbnNOYW1lXG4gKi9cbkVsZW1lbnRTZXJpYWxpemVyLnByb3RvdHlwZS5uc0F0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgdmFyIG5zO1xuXG4gIGlmIChpc1N0cmluZyhlbGVtZW50KSkge1xuICAgIG5zID0gcGFyc2VOYW1lTlMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgbnMgPSBlbGVtZW50Lm5zO1xuICB9XG5cbiAgLy8gcmV0dXJuIGp1c3QgbG9jYWwgbmFtZSBmb3IgaW5oZXJpdGVkIGF0dHJpYnV0ZXNcbiAgaWYgKGVsZW1lbnQuaW5oZXJpdGVkKSB7XG4gICAgcmV0dXJuIHsgbG9jYWxOYW1lOiBucy5sb2NhbE5hbWUgfTtcbiAgfVxuXG4gIC8vIHBhcnNlICsgbG9nIGVmZmVjdGl2ZSBuc1xuICB2YXIgZWZmZWN0aXZlTnMgPSB0aGlzLmxvZ05hbWVzcGFjZVVzZWQobnMpO1xuXG4gIC8vIExPRyBBQ1RVQUwgbmFtZXNwYWNlIHVzZVxuICB0aGlzLmdldE5hbWVzcGFjZXMoKS5sb2dVc2VkKGVmZmVjdGl2ZU5zKTtcblxuICAvLyBzdHJpcCBwcmVmaXggaWYgc2FtZSBuYW1lc3BhY2UgbGlrZSBwYXJlbnRcbiAgaWYgKHRoaXMuaXNMb2NhbE5zKGVmZmVjdGl2ZU5zKSkge1xuICAgIHJldHVybiB7IGxvY2FsTmFtZTogbnMubG9jYWxOYW1lIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFzc2lnbih7IGxvY2FsTmFtZTogbnMubG9jYWxOYW1lIH0sIGVmZmVjdGl2ZU5zKTtcbiAgfVxufTtcblxuRWxlbWVudFNlcmlhbGl6ZXIucHJvdG90eXBlLnBhcnNlR2VuZXJpYyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBib2R5ID0gdGhpcy5ib2R5O1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gW107XG5cbiAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbih2YWwsIGtleSkge1xuXG4gICAgdmFyIG5vbk5zQXR0cjtcblxuICAgIGlmIChrZXkgPT09ICckYm9keScpIHtcbiAgICAgIGJvZHkucHVzaChuZXcgQm9keVNlcmlhbGl6ZXIoKS5idWlsZCh7IHR5cGU6ICdTdHJpbmcnIH0sIHZhbCkpO1xuICAgIH0gZWxzZVxuICAgIGlmIChrZXkgPT09ICckY2hpbGRyZW4nKSB7XG4gICAgICBmb3JFYWNoKHZhbCwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgYm9keS5wdXNoKG5ldyBFbGVtZW50U2VyaWFsaXplcihzZWxmKS5idWlsZChjaGlsZCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlXG4gICAgaWYgKGtleS5pbmRleE9mKCckJykgIT09IDApIHtcbiAgICAgIG5vbk5zQXR0ciA9IHNlbGYucGFyc2VOc0F0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbCk7XG5cbiAgICAgIGlmIChub25Oc0F0dHIpIHtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKHsgbmFtZToga2V5LCB2YWx1ZTogdmFsIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGF0dHJpYnV0ZXM7XG59O1xuXG5FbGVtZW50U2VyaWFsaXplci5wcm90b3R5cGUucGFyc2VOc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIHZhciBtb2RlbCA9IGVsZW1lbnQuJG1vZGVsO1xuXG4gIHZhciBuYW1lTnMgPSBwYXJzZU5hbWVOUyhuYW1lKTtcblxuICB2YXIgbnM7XG5cbiAgLy8gcGFyc2UgeG1sbnM6Zm9vPVwiaHR0cDovL2Zvby5iYXJcIlxuICBpZiAobmFtZU5zLnByZWZpeCA9PT0gJ3htbG5zJykge1xuICAgIG5zID0geyBwcmVmaXg6IG5hbWVOcy5sb2NhbE5hbWUsIHVyaTogdmFsdWUgfTtcbiAgfVxuXG4gIC8vIHBhcnNlIHhtbG5zPVwiaHR0cDovL2Zvby5iYXJcIlxuICBpZiAoIW5hbWVOcy5wcmVmaXggJiYgbmFtZU5zLmxvY2FsTmFtZSA9PT0gJ3htbG5zJykge1xuICAgIG5zID0geyB1cmk6IHZhbHVlIH07XG4gIH1cblxuICBpZiAoIW5zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmdldFBhY2thZ2UodmFsdWUpKSB7XG4gICAgLy8gcmVnaXN0ZXIgd2VsbCBrbm93biBuYW1lc3BhY2VcbiAgICB0aGlzLmxvZ05hbWVzcGFjZShucywgdHJ1ZSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gbG9nIGN1c3RvbSBuYW1lc3BhY2UgZGlyZWN0bHkgYXMgdXNlZFxuICAgIHZhciBhY3R1YWxOcyA9IHRoaXMubG9nTmFtZXNwYWNlVXNlZChucywgdHJ1ZSk7XG5cbiAgICB0aGlzLmdldE5hbWVzcGFjZXMoKS5sb2dVc2VkKGFjdHVhbE5zKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFBhcnNlIG5hbWVzcGFjZXMgYW5kIHJldHVybiBhIGxpc3Qgb2YgbGVmdCBvdmVyIGdlbmVyaWMgYXR0cmlidXRlc1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gZWxlbWVudFxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAqL1xuRWxlbWVudFNlcmlhbGl6ZXIucHJvdG90eXBlLnBhcnNlTnNBdHRyaWJ1dGVzID0gZnVuY3Rpb24oZWxlbWVudCwgYXR0cnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHZhciBnZW5lcmljQXR0cnMgPSBlbGVtZW50LiRhdHRycztcblxuICB2YXIgYXR0cmlidXRlcyA9IFtdO1xuXG4gIC8vIHBhcnNlIG5hbWVzcGFjZSBhdHRyaWJ1dGVzIGZpcnN0XG4gIC8vIGFuZCBsb2cgdGhlbS4gcHVzaCBub24gbmFtZXNwYWNlIGF0dHJpYnV0ZXMgdG8gYSBsaXN0XG4gIC8vIGFuZCBwcm9jZXNzIHRoZW0gbGF0ZXJcbiAgZm9yRWFjaChnZW5lcmljQXR0cnMsIGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG5cbiAgICB2YXIgbm9uTnNBdHRyID0gc2VsZi5wYXJzZU5zQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcblxuICAgIGlmIChub25Oc0F0dHIpIHtcbiAgICAgIGF0dHJpYnV0ZXMucHVzaChub25Oc0F0dHIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGF0dHJpYnV0ZXM7XG59O1xuXG5FbGVtZW50U2VyaWFsaXplci5wcm90b3R5cGUucGFyc2VHZW5lcmljQXR0cmlidXRlcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZm9yRWFjaChhdHRyaWJ1dGVzLCBmdW5jdGlvbihhdHRyKSB7XG5cbiAgICAvLyBkbyBub3Qgc2VyaWFsaXplIHhzaTp0eXBlIGF0dHJpYnV0ZVxuICAgIC8vIGl0IGlzIHNldCBtYW51YWxseSBiYXNlZCBvbiB0aGUgYWN0dWFsIGltcGxlbWVudGF0aW9uIHR5cGVcbiAgICBpZiAoYXR0ci5uYW1lID09PSBYU0lfVFlQRSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzZWxmLmFkZEF0dHJpYnV0ZShzZWxmLm5zQXR0cmlidXRlTmFtZShhdHRyLm5hbWUpLCBhdHRyLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdtaXNzaW5nIG5hbWVzcGFjZSBpbmZvcm1hdGlvbiBmb3IgJyxcbiAgICAgICAgYXR0ci5uYW1lLCAnPScsIGF0dHIudmFsdWUsICdvbicsIGVsZW1lbnQsXG4gICAgICAgIGUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5FbGVtZW50U2VyaWFsaXplci5wcm90b3R5cGUucGFyc2VDb250YWlubWVudHMgPSBmdW5jdGlvbihwcm9wZXJ0aWVzKSB7XG5cbiAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYm9keSA9IHRoaXMuYm9keSxcbiAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgZm9yRWFjaChwcm9wZXJ0aWVzLCBmdW5jdGlvbihwKSB7XG4gICAgdmFyIHZhbHVlID0gZWxlbWVudC5nZXQocC5uYW1lKSxcbiAgICAgICAgaXNSZWZlcmVuY2UgPSBwLmlzUmVmZXJlbmNlLFxuICAgICAgICBpc01hbnkgPSBwLmlzTWFueTtcblxuICAgIGlmICghaXNNYW55KSB7XG4gICAgICB2YWx1ZSA9IFsgdmFsdWUgXTtcbiAgICB9XG5cbiAgICBpZiAocC5pc0JvZHkpIHtcbiAgICAgIGJvZHkucHVzaChuZXcgQm9keVNlcmlhbGl6ZXIoKS5idWlsZChwLCB2YWx1ZVswXSkpO1xuICAgIH0gZWxzZVxuICAgIGlmIChpc1NpbXBsZVR5cGUocC50eXBlKSkge1xuICAgICAgZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24odikge1xuICAgICAgICBib2R5LnB1c2gobmV3IFZhbHVlU2VyaWFsaXplcihzZWxmLmFkZFRhZ05hbWUoc2VsZi5uc1Byb3BlcnR5VGFnTmFtZShwKSkpLmJ1aWxkKHAsIHYpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZVxuICAgIGlmIChpc1JlZmVyZW5jZSkge1xuICAgICAgZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24odikge1xuICAgICAgICBib2R5LnB1c2gobmV3IFJlZmVyZW5jZVNlcmlhbGl6ZXIoc2VsZi5hZGRUYWdOYW1lKHNlbGYubnNQcm9wZXJ0eVRhZ05hbWUocCkpKS5idWlsZCh2KSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWxsb3cgc2VyaWFsaXphdGlvbiB2aWEgdHlwZVxuICAgICAgLy8gcmF0aGVyIHRoYW4gZWxlbWVudCBuYW1lXG4gICAgICB2YXIgYXNUeXBlID0gc2VyaWFsaXplQXNUeXBlKHApLFxuICAgICAgICAgIGFzUHJvcGVydHkgPSBzZXJpYWxpemVBc1Byb3BlcnR5KHApO1xuXG4gICAgICBmb3JFYWNoKHZhbHVlLCBmdW5jdGlvbih2KSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVyO1xuXG4gICAgICAgIGlmIChhc1R5cGUpIHtcbiAgICAgICAgICBzZXJpYWxpemVyID0gbmV3IFR5cGVTZXJpYWxpemVyKHNlbGYsIHApO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKGFzUHJvcGVydHkpIHtcbiAgICAgICAgICBzZXJpYWxpemVyID0gbmV3IEVsZW1lbnRTZXJpYWxpemVyKHNlbGYsIHApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlcmlhbGl6ZXIgPSBuZXcgRWxlbWVudFNlcmlhbGl6ZXIoc2VsZik7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5LnB1c2goc2VyaWFsaXplci5idWlsZCh2KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuRWxlbWVudFNlcmlhbGl6ZXIucHJvdG90eXBlLmdldE5hbWVzcGFjZXMgPSBmdW5jdGlvbihsb2NhbCkge1xuXG4gIHZhciBuYW1lc3BhY2VzID0gdGhpcy5uYW1lc3BhY2VzLFxuICAgICAgcGFyZW50ID0gdGhpcy5wYXJlbnQsXG4gICAgICBwYXJlbnROYW1lc3BhY2VzO1xuXG4gIGlmICghbmFtZXNwYWNlcykge1xuICAgIHBhcmVudE5hbWVzcGFjZXMgPSBwYXJlbnQgJiYgcGFyZW50LmdldE5hbWVzcGFjZXMoKTtcblxuICAgIGlmIChsb2NhbCB8fCAhcGFyZW50TmFtZXNwYWNlcykge1xuICAgICAgdGhpcy5uYW1lc3BhY2VzID0gbmFtZXNwYWNlcyA9IG5ldyBOYW1lc3BhY2VzKHBhcmVudE5hbWVzcGFjZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lc3BhY2VzID0gcGFyZW50TmFtZXNwYWNlcztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZXNwYWNlcztcbn07XG5cbkVsZW1lbnRTZXJpYWxpemVyLnByb3RvdHlwZS5sb2dOYW1lc3BhY2UgPSBmdW5jdGlvbihucywgd2VsbGtub3duLCBsb2NhbCkge1xuICB2YXIgbmFtZXNwYWNlcyA9IHRoaXMuZ2V0TmFtZXNwYWNlcyhsb2NhbCk7XG5cbiAgdmFyIG5zVXJpID0gbnMudXJpLFxuICAgICAgbnNQcmVmaXggPSBucy5wcmVmaXg7XG5cbiAgdmFyIGV4aXN0aW5nID0gbmFtZXNwYWNlcy5ieVVyaShuc1VyaSk7XG5cbiAgaWYgKCFleGlzdGluZykge1xuICAgIG5hbWVzcGFjZXMuYWRkKG5zLCB3ZWxsa25vd24pO1xuICB9XG5cbiAgbmFtZXNwYWNlcy5tYXBQcmVmaXgobnNQcmVmaXgsIG5zVXJpKTtcblxuICByZXR1cm4gbnM7XG59O1xuXG5FbGVtZW50U2VyaWFsaXplci5wcm90b3R5cGUubG9nTmFtZXNwYWNlVXNlZCA9IGZ1bmN0aW9uKG5zLCBsb2NhbCkge1xuICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG1vZGVsID0gZWxlbWVudC4kbW9kZWwsXG4gICAgICBuYW1lc3BhY2VzID0gdGhpcy5nZXROYW1lc3BhY2VzKGxvY2FsKTtcblxuICAvLyBucyBtYXkgYmVcbiAgLy9cbiAgLy8gICAqIHByZWZpeCBvbmx5XG4gIC8vICAgKiBwcmVmaXg6dXJpXG4gIC8vICAgKiBsb2NhbE5hbWUgb25seVxuXG4gIHZhciBwcmVmaXggPSBucy5wcmVmaXgsXG4gICAgICB1cmkgPSBucy51cmksXG4gICAgICBuZXdQcmVmaXgsIGlkeCxcbiAgICAgIHdlbGxrbm93blVyaTtcblxuICAvLyBoYW5kbGUgYW5vbnltb3VzIG5hbWVzcGFjZXMgKGVsZW1lbnRGb3JtPXVucXVhbGlmaWVkKSwgY2YuICMyM1xuICBpZiAoIXByZWZpeCAmJiAhdXJpKSB7XG4gICAgcmV0dXJuIHsgbG9jYWxOYW1lOiBucy5sb2NhbE5hbWUgfTtcbiAgfVxuXG4gIHdlbGxrbm93blVyaSA9IERFRkFVTFRfTlNfTUFQW3ByZWZpeF0gfHwgbW9kZWwgJiYgKG1vZGVsLmdldFBhY2thZ2UocHJlZml4KSB8fCB7fSkudXJpO1xuXG4gIHVyaSA9IHVyaSB8fCB3ZWxsa25vd25VcmkgfHwgbmFtZXNwYWNlcy51cmlCeVByZWZpeChwcmVmaXgpO1xuXG4gIGlmICghdXJpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdubyBuYW1lc3BhY2UgdXJpIGdpdmVuIGZvciBwcmVmaXggPCcgKyBwcmVmaXggKyAnPicpO1xuICB9XG5cbiAgbnMgPSBuYW1lc3BhY2VzLmJ5VXJpKHVyaSk7XG5cbiAgaWYgKCFucykge1xuICAgIG5ld1ByZWZpeCA9IHByZWZpeDtcbiAgICBpZHggPSAxO1xuXG4gICAgLy8gZmluZCBhIHByZWZpeCB0aGF0IGlzIG5vdCBtYXBwZWQgeWV0XG4gICAgd2hpbGUgKG5hbWVzcGFjZXMudXJpQnlQcmVmaXgobmV3UHJlZml4KSkge1xuICAgICAgbmV3UHJlZml4ID0gcHJlZml4ICsgJ18nICsgaWR4Kys7XG4gICAgfVxuXG4gICAgbnMgPSB0aGlzLmxvZ05hbWVzcGFjZSh7IHByZWZpeDogbmV3UHJlZml4LCB1cmk6IHVyaSB9LCB3ZWxsa25vd25VcmkgPT09IHVyaSk7XG4gIH1cblxuICBpZiAocHJlZml4KSB7XG4gICAgbmFtZXNwYWNlcy5tYXBQcmVmaXgocHJlZml4LCB1cmkpO1xuICB9XG5cbiAgcmV0dXJuIG5zO1xufTtcblxuRWxlbWVudFNlcmlhbGl6ZXIucHJvdG90eXBlLnBhcnNlQXR0cmlidXRlcyA9IGZ1bmN0aW9uKHByb3BlcnRpZXMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblxuICBmb3JFYWNoKHByb3BlcnRpZXMsIGZ1bmN0aW9uKHApIHtcblxuICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZ2V0KHAubmFtZSk7XG5cbiAgICBpZiAocC5pc1JlZmVyZW5jZSkge1xuXG4gICAgICBpZiAoIXAuaXNNYW55KSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuaWQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICBmb3JFYWNoKHZhbHVlLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2godi5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBJRFJFRlMgaXMgYSB3aGl0ZXNwYWNlLXNlcGFyYXRlZCBsaXN0IG9mIHJlZmVyZW5jZXMuXG4gICAgICAgIHZhbHVlID0gdmFsdWVzLmpvaW4oJyAnKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHNlbGYuYWRkQXR0cmlidXRlKHNlbGYubnNBdHRyaWJ1dGVOYW1lKHApLCB2YWx1ZSk7XG4gIH0pO1xufTtcblxuRWxlbWVudFNlcmlhbGl6ZXIucHJvdG90eXBlLmFkZFRhZ05hbWUgPSBmdW5jdGlvbihuc1RhZ05hbWUpIHtcbiAgdmFyIGFjdHVhbE5zID0gdGhpcy5sb2dOYW1lc3BhY2VVc2VkKG5zVGFnTmFtZSk7XG5cbiAgdGhpcy5nZXROYW1lc3BhY2VzKCkubG9nVXNlZChhY3R1YWxOcyk7XG5cbiAgcmV0dXJuIG5zTmFtZShuc1RhZ05hbWUpO1xufTtcblxuRWxlbWVudFNlcmlhbGl6ZXIucHJvdG90eXBlLmFkZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBhdHRycyA9IHRoaXMuYXR0cnM7XG5cbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhbHVlID0gZXNjYXBlQXR0cih2YWx1ZSk7XG4gIH1cblxuICBhdHRycy5wdXNoKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0pO1xufTtcblxuRWxlbWVudFNlcmlhbGl6ZXIucHJvdG90eXBlLnNlcmlhbGl6ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbih3cml0ZXIpIHtcbiAgdmFyIGF0dHJzID0gdGhpcy5hdHRycyxcbiAgICAgIG5hbWVzcGFjZXMgPSB0aGlzLm5hbWVzcGFjZXM7XG5cbiAgaWYgKG5hbWVzcGFjZXMpIHtcbiAgICBhdHRycyA9IGdldE5zQXR0cnMobmFtZXNwYWNlcykuY29uY2F0KGF0dHJzKTtcbiAgfVxuXG4gIGZvckVhY2goYXR0cnMsIGZ1bmN0aW9uKGEpIHtcbiAgICB3cml0ZXJcbiAgICAgIC5hcHBlbmQoJyAnKVxuICAgICAgLmFwcGVuZChuc05hbWUoYS5uYW1lKSkuYXBwZW5kKCc9XCInKS5hcHBlbmQoYS52YWx1ZSkuYXBwZW5kKCdcIicpO1xuICB9KTtcbn07XG5cbkVsZW1lbnRTZXJpYWxpemVyLnByb3RvdHlwZS5zZXJpYWxpemVUbyA9IGZ1bmN0aW9uKHdyaXRlcikge1xuICB2YXIgZmlyc3RCb2R5ID0gdGhpcy5ib2R5WzBdLFxuICAgICAgaW5kZW50ID0gZmlyc3RCb2R5ICYmIGZpcnN0Qm9keS5jb25zdHJ1Y3RvciAhPT0gQm9keVNlcmlhbGl6ZXI7XG5cbiAgd3JpdGVyXG4gICAgLmFwcGVuZEluZGVudCgpXG4gICAgLmFwcGVuZCgnPCcgKyB0aGlzLnRhZ05hbWUpO1xuXG4gIHRoaXMuc2VyaWFsaXplQXR0cmlidXRlcyh3cml0ZXIpO1xuXG4gIHdyaXRlci5hcHBlbmQoZmlyc3RCb2R5ID8gJz4nIDogJyAvPicpO1xuXG4gIGlmIChmaXJzdEJvZHkpIHtcblxuICAgIGlmIChpbmRlbnQpIHtcbiAgICAgIHdyaXRlclxuICAgICAgICAuYXBwZW5kTmV3TGluZSgpXG4gICAgICAgIC5pbmRlbnQoKTtcbiAgICB9XG5cbiAgICBmb3JFYWNoKHRoaXMuYm9keSwgZnVuY3Rpb24oYikge1xuICAgICAgYi5zZXJpYWxpemVUbyh3cml0ZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluZGVudCkge1xuICAgICAgd3JpdGVyXG4gICAgICAgIC51bmluZGVudCgpXG4gICAgICAgIC5hcHBlbmRJbmRlbnQoKTtcbiAgICB9XG5cbiAgICB3cml0ZXIuYXBwZW5kKCc8LycgKyB0aGlzLnRhZ05hbWUgKyAnPicpO1xuICB9XG5cbiAgd3JpdGVyLmFwcGVuZE5ld0xpbmUoKTtcbn07XG5cbi8qKlxuICogQSBzZXJpYWxpemVyIGZvciB0eXBlcyB0aGF0IGhhbmRsZXMgc2VyaWFsaXphdGlvbiBvZiBkYXRhIHR5cGVzXG4gKi9cbmZ1bmN0aW9uIFR5cGVTZXJpYWxpemVyKHBhcmVudCwgcHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gIEVsZW1lbnRTZXJpYWxpemVyLmNhbGwodGhpcywgcGFyZW50LCBwcm9wZXJ0eURlc2NyaXB0b3IpO1xufVxuXG5pbmhlcml0cyhUeXBlU2VyaWFsaXplciwgRWxlbWVudFNlcmlhbGl6ZXIpO1xuXG5UeXBlU2VyaWFsaXplci5wcm90b3R5cGUucGFyc2VOc0F0dHJpYnV0ZXMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgLy8gZXh0cmFjdGVkIGF0dHJpYnV0ZXNcbiAgdmFyIGF0dHJpYnV0ZXMgPSBFbGVtZW50U2VyaWFsaXplci5wcm90b3R5cGUucGFyc2VOc0F0dHJpYnV0ZXMuY2FsbCh0aGlzLCBlbGVtZW50KTtcblxuICB2YXIgZGVzY3JpcHRvciA9IGVsZW1lbnQuJGRlc2NyaXB0b3I7XG5cbiAgLy8gb25seSBzZXJpYWxpemUgeHNpOnR5cGUgaWYgbmVjZXNzYXJ5XG4gIGlmIChkZXNjcmlwdG9yLm5hbWUgPT09IHRoaXMucHJvcGVydHlEZXNjcmlwdG9yLnR5cGUpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgfVxuXG4gIHZhciB0eXBlTnMgPSB0aGlzLnR5cGVOcyA9IHRoaXMubnNUYWdOYW1lKGRlc2NyaXB0b3IpO1xuICB0aGlzLmdldE5hbWVzcGFjZXMoKS5sb2dVc2VkKHRoaXMudHlwZU5zKTtcblxuICAvLyBhZGQgeHNpOnR5cGUgYXR0cmlidXRlIHRvIHJlcHJlc2VudCB0aGUgZWxlbWVudHNcbiAgLy8gYWN0dWFsIHR5cGVcblxuICB2YXIgcGtnID0gZWxlbWVudC4kbW9kZWwuZ2V0UGFja2FnZSh0eXBlTnMudXJpKSxcbiAgICAgIHR5cGVQcmVmaXggPSAocGtnLnhtbCAmJiBwa2cueG1sLnR5cGVQcmVmaXgpIHx8ICcnO1xuXG4gIHRoaXMuYWRkQXR0cmlidXRlKFxuICAgIHRoaXMubnNBdHRyaWJ1dGVOYW1lKFhTSV9UWVBFKSxcbiAgICAodHlwZU5zLnByZWZpeCA/IHR5cGVOcy5wcmVmaXggKyAnOicgOiAnJykgKyB0eXBlUHJlZml4ICsgZGVzY3JpcHRvci5ucy5sb2NhbE5hbWVcbiAgKTtcblxuICByZXR1cm4gYXR0cmlidXRlcztcbn07XG5cblR5cGVTZXJpYWxpemVyLnByb3RvdHlwZS5pc0xvY2FsTnMgPSBmdW5jdGlvbihucykge1xuICByZXR1cm4gbnMudXJpID09PSAodGhpcy50eXBlTnMgfHwgdGhpcy5ucykudXJpO1xufTtcblxuZnVuY3Rpb24gU2F2aW5nV3JpdGVyKCkge1xuICB0aGlzLnZhbHVlID0gJyc7XG5cbiAgdGhpcy53cml0ZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHRoaXMudmFsdWUgKz0gc3RyO1xuICB9O1xufVxuXG5mdW5jdGlvbiBGb3JtYXRpbmdXcml0ZXIob3V0LCBmb3JtYXQpIHtcblxuICB2YXIgaW5kZW50ID0gWycnXTtcblxuICB0aGlzLmFwcGVuZCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIG91dC53cml0ZShzdHIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhpcy5hcHBlbmROZXdMaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGZvcm1hdCkge1xuICAgICAgb3V0LndyaXRlKCdcXG4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB0aGlzLmFwcGVuZEluZGVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChmb3JtYXQpIHtcbiAgICAgIG91dC53cml0ZShpbmRlbnQuam9pbignICAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhpcy5pbmRlbnQgPSBmdW5jdGlvbigpIHtcbiAgICBpbmRlbnQucHVzaCgnJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdGhpcy51bmluZGVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGluZGVudC5wb3AoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHdyaXRlciBmb3IgbWV0YS1tb2RlbCBiYWNrZWQgZG9jdW1lbnQgdHJlZXNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvdXRwdXQgb3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHdyaXRlclxuICovXG5mdW5jdGlvbiBXcml0ZXIob3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBhc3NpZ24oeyBmb3JtYXQ6IGZhbHNlLCBwcmVhbWJsZTogdHJ1ZSB9LCBvcHRpb25zIHx8IHt9KTtcblxuICBmdW5jdGlvbiB0b1hNTCh0cmVlLCB3cml0ZXIpIHtcbiAgICB2YXIgaW50ZXJuYWxXcml0ZXIgPSB3cml0ZXIgfHwgbmV3IFNhdmluZ1dyaXRlcigpO1xuICAgIHZhciBmb3JtYXRpbmdXcml0ZXIgPSBuZXcgRm9ybWF0aW5nV3JpdGVyKGludGVybmFsV3JpdGVyLCBvcHRpb25zLmZvcm1hdCk7XG5cbiAgICBpZiAob3B0aW9ucy5wcmVhbWJsZSkge1xuICAgICAgZm9ybWF0aW5nV3JpdGVyLmFwcGVuZChYTUxfUFJFQU1CTEUpO1xuICAgIH1cblxuICAgIG5ldyBFbGVtZW50U2VyaWFsaXplcigpLmJ1aWxkKHRyZWUpLnNlcmlhbGl6ZVRvKGZvcm1hdGluZ1dyaXRlcik7XG5cbiAgICBpZiAoIXdyaXRlcikge1xuICAgICAgcmV0dXJuIGludGVybmFsV3JpdGVyLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9YTUw6IHRvWE1MXG4gIH07XG59XG5cbmV4cG9ydCB7IFJlYWRlciwgV3JpdGVyIH07XG4iLCJpbXBvcnQgeyBmb3JFYWNoLCBiaW5kLCBwaWNrLCBhc3NpZ24sIGlzU3RyaW5nLCBpc09iamVjdCB9IGZyb20gJ21pbi1kYXNoJztcblxuLyoqXG4gKiBNb2RkbGUgYmFzZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBCYXNlKCkgeyB9XG5cbkJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuJG1vZGVsLnByb3BlcnRpZXMuZ2V0KHRoaXMsIG5hbWUpO1xufTtcblxuQmFzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdGhpcy4kbW9kZWwucHJvcGVydGllcy5zZXQodGhpcywgbmFtZSwgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBBIG1vZGVsIGVsZW1lbnQgZmFjdG9yeS5cbiAqXG4gKiBAcGFyYW0ge01vZGRsZX0gbW9kZWxcbiAqIEBwYXJhbSB7UHJvcGVydGllc30gcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBGYWN0b3J5KG1vZGVsLCBwcm9wZXJ0aWVzKSB7XG4gIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbn1cblxuXG5GYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVUeXBlID0gZnVuY3Rpb24oZGVzY3JpcHRvcikge1xuXG4gIHZhciBtb2RlbCA9IHRoaXMubW9kZWw7XG5cbiAgdmFyIHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlLnByb3RvdHlwZSk7XG5cbiAgLy8gaW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xuICBmb3JFYWNoKGRlc2NyaXB0b3IucHJvcGVydGllcywgZnVuY3Rpb24ocCkge1xuICAgIGlmICghcC5pc01hbnkgJiYgcC5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3RvdHlwZVtwLm5hbWVdID0gcC5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG5cbiAgcHJvcHMuZGVmaW5lTW9kZWwocHJvdG90eXBlLCBtb2RlbCk7XG4gIHByb3BzLmRlZmluZURlc2NyaXB0b3IocHJvdG90eXBlLCBkZXNjcmlwdG9yKTtcblxuICB2YXIgbmFtZSA9IGRlc2NyaXB0b3IubnMubmFtZTtcblxuICAvKipcbiAgICogVGhlIG5ldyB0eXBlIGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBNb2RkbGVFbGVtZW50KGF0dHJzKSB7XG4gICAgcHJvcHMuZGVmaW5lKHRoaXMsICckdHlwZScsIHsgdmFsdWU6IG5hbWUsIGVudW1lcmFibGU6IHRydWUgfSk7XG4gICAgcHJvcHMuZGVmaW5lKHRoaXMsICckYXR0cnMnLCB7IHZhbHVlOiB7fSB9KTtcbiAgICBwcm9wcy5kZWZpbmUodGhpcywgJyRwYXJlbnQnLCB7IHdyaXRhYmxlOiB0cnVlIH0pO1xuXG4gICAgZm9yRWFjaChhdHRycywgYmluZChmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgdGhpcy5zZXQoa2V5LCB2YWwpO1xuICAgIH0sIHRoaXMpKTtcbiAgfVxuXG4gIE1vZGRsZUVsZW1lbnQucHJvdG90eXBlID0gcHJvdG90eXBlO1xuXG4gIE1vZGRsZUVsZW1lbnQuaGFzVHlwZSA9IHByb3RvdHlwZS4kaW5zdGFuY2VPZiA9IHRoaXMubW9kZWwuaGFzVHlwZTtcblxuICAvLyBzdGF0aWMgbGlua3NcbiAgcHJvcHMuZGVmaW5lTW9kZWwoTW9kZGxlRWxlbWVudCwgbW9kZWwpO1xuICBwcm9wcy5kZWZpbmVEZXNjcmlwdG9yKE1vZGRsZUVsZW1lbnQsIGRlc2NyaXB0b3IpO1xuXG4gIHJldHVybiBNb2RkbGVFbGVtZW50O1xufTtcblxuLyoqXG4gKiBCdWlsdC1pbiBtb2RkbGUgdHlwZXNcbiAqL1xudmFyIEJVSUxUSU5TID0ge1xuICBTdHJpbmc6IHRydWUsXG4gIEJvb2xlYW46IHRydWUsXG4gIEludGVnZXI6IHRydWUsXG4gIFJlYWw6IHRydWUsXG4gIEVsZW1lbnQ6IHRydWVcbn07XG5cbi8qKlxuICogQ29udmVydGVycyBmb3IgYnVpbHQgaW4gdHlwZXMgZnJvbSBzdHJpbmcgcmVwcmVzZW50YXRpb25zXG4gKi9cbnZhciBUWVBFX0NPTlZFUlRFUlMgPSB7XG4gIFN0cmluZzogZnVuY3Rpb24ocykgeyByZXR1cm4gczsgfSxcbiAgQm9vbGVhbjogZnVuY3Rpb24ocykgeyByZXR1cm4gcyA9PT0gJ3RydWUnOyB9LFxuICBJbnRlZ2VyOiBmdW5jdGlvbihzKSB7IHJldHVybiBwYXJzZUludChzLCAxMCk7IH0sXG4gIFJlYWw6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHBhcnNlRmxvYXQocywgMTApOyB9XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYSB0eXBlIHRvIGl0cyByZWFsIHJlcHJlc2VudGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGNvZXJjZVR5cGUodHlwZSwgdmFsdWUpIHtcblxuICB2YXIgY29udmVydGVyID0gVFlQRV9DT05WRVJURVJTW3R5cGVdO1xuXG4gIGlmIChjb252ZXJ0ZXIpIHtcbiAgICByZXR1cm4gY29udmVydGVyKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gd2hldGhlciB0aGUgZ2l2ZW4gdHlwZSBpcyBidWlsdC1pblxuICovXG5mdW5jdGlvbiBpc0J1aWx0SW4odHlwZSkge1xuICByZXR1cm4gISFCVUlMVElOU1t0eXBlXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gd2hldGhlciB0aGUgZ2l2ZW4gdHlwZSBpcyBzaW1wbGVcbiAqL1xuZnVuY3Rpb24gaXNTaW1wbGUodHlwZSkge1xuICByZXR1cm4gISFUWVBFX0NPTlZFUlRFUlNbdHlwZV07XG59XG5cbi8qKlxuICogUGFyc2VzIGEgbmFtZXNwYWNlZCBhdHRyaWJ1dGUgbmFtZSBvZiB0aGUgZm9ybSAobnM6KWxvY2FsTmFtZSB0byBhbiBvYmplY3QsXG4gKiBnaXZlbiBhIGRlZmF1bHQgcHJlZml4IHRvIGFzc3VtZSBpbiBjYXNlIG5vIGV4cGxpY2l0IG5hbWVzcGFjZSBpcyBnaXZlbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IFtkZWZhdWx0UHJlZml4XSB0aGUgZGVmYXVsdCBwcmVmaXggdG8gdGFrZSwgaWYgbm9uZSBpcyBwcmVzZW50LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHBhcnNlZCBuYW1lXG4gKi9cbmZ1bmN0aW9uIHBhcnNlTmFtZShuYW1lLCBkZWZhdWx0UHJlZml4KSB7XG4gIHZhciBwYXJ0cyA9IG5hbWUuc3BsaXQoLzovKSxcbiAgICAgIGxvY2FsTmFtZSwgcHJlZml4O1xuXG4gIC8vIG5vIHByZWZpeCAoaS5lLiBvbmx5IGxvY2FsIG5hbWUpXG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICBsb2NhbE5hbWUgPSBuYW1lO1xuICAgIHByZWZpeCA9IGRlZmF1bHRQcmVmaXg7XG4gIH0gZWxzZVxuICAvLyBwcmVmaXggKyBsb2NhbCBuYW1lXG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICBsb2NhbE5hbWUgPSBwYXJ0c1sxXTtcbiAgICBwcmVmaXggPSBwYXJ0c1swXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4cGVjdGVkIDxwcmVmaXg6bG9jYWxOYW1lPiBvciA8bG9jYWxOYW1lPiwgZ290ICcgKyBuYW1lKTtcbiAgfVxuXG4gIG5hbWUgPSAocHJlZml4ID8gcHJlZml4ICsgJzonIDogJycpICsgbG9jYWxOYW1lO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBsb2NhbE5hbWU6IGxvY2FsTmFtZVxuICB9O1xufVxuXG4vKipcbiAqIEEgdXRpbGl0eSB0byBidWlsZCBlbGVtZW50IGRlc2NyaXB0b3JzLlxuICovXG5mdW5jdGlvbiBEZXNjcmlwdG9yQnVpbGRlcihuYW1lTnMpIHtcbiAgdGhpcy5ucyA9IG5hbWVOcztcbiAgdGhpcy5uYW1lID0gbmFtZU5zLm5hbWU7XG4gIHRoaXMuYWxsVHlwZXMgPSBbXTtcbiAgdGhpcy5hbGxUeXBlc0J5TmFtZSA9IHt9O1xuICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgdGhpcy5wcm9wZXJ0aWVzQnlOYW1lID0ge307XG59XG5cblxuRGVzY3JpcHRvckJ1aWxkZXIucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwaWNrKHRoaXMsIFtcbiAgICAnbnMnLFxuICAgICduYW1lJyxcbiAgICAnYWxsVHlwZXMnLFxuICAgICdhbGxUeXBlc0J5TmFtZScsXG4gICAgJ3Byb3BlcnRpZXMnLFxuICAgICdwcm9wZXJ0aWVzQnlOYW1lJyxcbiAgICAnYm9keVByb3BlcnR5JyxcbiAgICAnaWRQcm9wZXJ0eSdcbiAgXSk7XG59O1xuXG4vKipcbiAqIEFkZCBwcm9wZXJ0eSBhdCBnaXZlbiBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcFxuICogQHBhcmFtIHtOdW1iZXJ9IFtpZHhdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt2YWxpZGF0ZT10cnVlXVxuICovXG5EZXNjcmlwdG9yQnVpbGRlci5wcm90b3R5cGUuYWRkUHJvcGVydHkgPSBmdW5jdGlvbihwLCBpZHgsIHZhbGlkYXRlKSB7XG5cbiAgaWYgKHR5cGVvZiBpZHggPT09ICdib29sZWFuJykge1xuICAgIHZhbGlkYXRlID0gaWR4O1xuICAgIGlkeCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRoaXMuYWRkTmFtZWRQcm9wZXJ0eShwLCB2YWxpZGF0ZSAhPT0gZmFsc2UpO1xuXG4gIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gIGlmIChpZHggIT09IHVuZGVmaW5lZCkge1xuICAgIHByb3BlcnRpZXMuc3BsaWNlKGlkeCwgMCwgcCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvcGVydGllcy5wdXNoKHApO1xuICB9XG59O1xuXG5cbkRlc2NyaXB0b3JCdWlsZGVyLnByb3RvdHlwZS5yZXBsYWNlUHJvcGVydHkgPSBmdW5jdGlvbihvbGRQcm9wZXJ0eSwgbmV3UHJvcGVydHksIHJlcGxhY2UpIHtcbiAgdmFyIG9sZE5hbWVOcyA9IG9sZFByb3BlcnR5Lm5zO1xuXG4gIHZhciBwcm9wcyA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgIHByb3BlcnRpZXNCeU5hbWUgPSB0aGlzLnByb3BlcnRpZXNCeU5hbWUsXG4gICAgICByZW5hbWUgPSBvbGRQcm9wZXJ0eS5uYW1lICE9PSBuZXdQcm9wZXJ0eS5uYW1lO1xuXG4gIGlmIChvbGRQcm9wZXJ0eS5pc0lkKSB7XG4gICAgaWYgKCFuZXdQcm9wZXJ0eS5pc0lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdwcm9wZXJ0eSA8JyArIG5ld1Byb3BlcnR5Lm5zLm5hbWUgKyAnPiBtdXN0IGJlIGlkIHByb3BlcnR5ICcgK1xuICAgICAgICAndG8gcmVmaW5lIDwnICsgb2xkUHJvcGVydHkubnMubmFtZSArICc+Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRJZFByb3BlcnR5KG5ld1Byb3BlcnR5LCBmYWxzZSk7XG4gIH1cblxuICBpZiAob2xkUHJvcGVydHkuaXNCb2R5KSB7XG5cbiAgICBpZiAoIW5ld1Byb3BlcnR5LmlzQm9keSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncHJvcGVydHkgPCcgKyBuZXdQcm9wZXJ0eS5ucy5uYW1lICsgJz4gbXVzdCBiZSBib2R5IHByb3BlcnR5ICcgK1xuICAgICAgICAndG8gcmVmaW5lIDwnICsgb2xkUHJvcGVydHkubnMubmFtZSArICc+Jyk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogQ2hlY2sgY29tcGF0aWJpbGl0eVxuICAgIHRoaXMuc2V0Qm9keVByb3BlcnR5KG5ld1Byb3BlcnR5LCBmYWxzZSk7XG4gIH1cblxuICAvLyB2YWxpZGF0ZSBleGlzdGVuY2UgYW5kIGdldCBsb2NhdGlvbiBvZiBvbGQgcHJvcGVydHlcbiAgdmFyIGlkeCA9IHByb3BzLmluZGV4T2Yob2xkUHJvcGVydHkpO1xuICBpZiAoaWR4ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvcGVydHkgPCcgKyBvbGROYW1lTnMubmFtZSArICc+IG5vdCBmb3VuZCBpbiBwcm9wZXJ0eSBsaXN0Jyk7XG4gIH1cblxuICAvLyByZW1vdmUgb2xkIHByb3BlcnR5XG4gIHByb3BzLnNwbGljZShpZHgsIDEpO1xuXG4gIC8vIHJlcGxhY2luZyB0aGUgbmFtZWQgcHJvcGVydHkgaXMgaW50ZW50aW9uYWxcbiAgLy9cbiAgLy8gICogdmFsaWRhdGUgb25seSBpZiB0aGlzIGlzIGEgXCJyZW5hbWVcIiBvcGVyYXRpb25cbiAgLy8gICogYWRkIGF0IHNwZWNpZmljIGluZGV4IHVubGVzcyB3ZSBcInJlcGxhY2VcIlxuICAvL1xuICB0aGlzLmFkZFByb3BlcnR5KG5ld1Byb3BlcnR5LCByZXBsYWNlID8gdW5kZWZpbmVkIDogaWR4LCByZW5hbWUpO1xuXG4gIC8vIG1ha2UgbmV3IHByb3BlcnR5IGF2YWlsYWJsZSB1bmRlciBvbGQgbmFtZVxuICBwcm9wZXJ0aWVzQnlOYW1lW29sZE5hbWVOcy5uYW1lXSA9IHByb3BlcnRpZXNCeU5hbWVbb2xkTmFtZU5zLmxvY2FsTmFtZV0gPSBuZXdQcm9wZXJ0eTtcbn07XG5cblxuRGVzY3JpcHRvckJ1aWxkZXIucHJvdG90eXBlLnJlZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbihwLCB0YXJnZXRQcm9wZXJ0eU5hbWUsIHJlcGxhY2UpIHtcblxuICB2YXIgbnNQcmVmaXggPSBwLm5zLnByZWZpeDtcbiAgdmFyIHBhcnRzID0gdGFyZ2V0UHJvcGVydHlOYW1lLnNwbGl0KCcjJyk7XG5cbiAgdmFyIG5hbWUgPSBwYXJzZU5hbWUocGFydHNbMF0sIG5zUHJlZml4KTtcbiAgdmFyIGF0dHJOYW1lID0gcGFyc2VOYW1lKHBhcnRzWzFdLCBuYW1lLnByZWZpeCkubmFtZTtcblxuICB2YXIgcmVkZWZpbmVkUHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNCeU5hbWVbYXR0ck5hbWVdO1xuICBpZiAoIXJlZGVmaW5lZFByb3BlcnR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZWZpbmVkIHByb3BlcnR5IDwnICsgYXR0ck5hbWUgKyAnPiBub3QgZm91bmQnKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlcGxhY2VQcm9wZXJ0eShyZWRlZmluZWRQcm9wZXJ0eSwgcCwgcmVwbGFjZSk7XG4gIH1cblxuICBkZWxldGUgcC5yZWRlZmluZXM7XG59O1xuXG5EZXNjcmlwdG9yQnVpbGRlci5wcm90b3R5cGUuYWRkTmFtZWRQcm9wZXJ0eSA9IGZ1bmN0aW9uKHAsIHZhbGlkYXRlKSB7XG4gIHZhciBucyA9IHAubnMsXG4gICAgICBwcm9wc0J5TmFtZSA9IHRoaXMucHJvcGVydGllc0J5TmFtZTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICB0aGlzLmFzc2VydE5vdERlZmluZWQocCwgbnMubmFtZSk7XG4gICAgdGhpcy5hc3NlcnROb3REZWZpbmVkKHAsIG5zLmxvY2FsTmFtZSk7XG4gIH1cblxuICBwcm9wc0J5TmFtZVtucy5uYW1lXSA9IHByb3BzQnlOYW1lW25zLmxvY2FsTmFtZV0gPSBwO1xufTtcblxuRGVzY3JpcHRvckJ1aWxkZXIucHJvdG90eXBlLnJlbW92ZU5hbWVkUHJvcGVydHkgPSBmdW5jdGlvbihwKSB7XG4gIHZhciBucyA9IHAubnMsXG4gICAgICBwcm9wc0J5TmFtZSA9IHRoaXMucHJvcGVydGllc0J5TmFtZTtcblxuICBkZWxldGUgcHJvcHNCeU5hbWVbbnMubmFtZV07XG4gIGRlbGV0ZSBwcm9wc0J5TmFtZVtucy5sb2NhbE5hbWVdO1xufTtcblxuRGVzY3JpcHRvckJ1aWxkZXIucHJvdG90eXBlLnNldEJvZHlQcm9wZXJ0eSA9IGZ1bmN0aW9uKHAsIHZhbGlkYXRlKSB7XG5cbiAgaWYgKHZhbGlkYXRlICYmIHRoaXMuYm9keVByb3BlcnR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2JvZHkgcHJvcGVydHkgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyAnICtcbiAgICAgICcoPCcgKyB0aGlzLmJvZHlQcm9wZXJ0eS5ucy5uYW1lICsgJz4sIDwnICsgcC5ucy5uYW1lICsgJz4pJyk7XG4gIH1cblxuICB0aGlzLmJvZHlQcm9wZXJ0eSA9IHA7XG59O1xuXG5EZXNjcmlwdG9yQnVpbGRlci5wcm90b3R5cGUuc2V0SWRQcm9wZXJ0eSA9IGZ1bmN0aW9uKHAsIHZhbGlkYXRlKSB7XG5cbiAgaWYgKHZhbGlkYXRlICYmIHRoaXMuaWRQcm9wZXJ0eSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdpZCBwcm9wZXJ0eSBkZWZpbmVkIG11bHRpcGxlIHRpbWVzICcgK1xuICAgICAgJyg8JyArIHRoaXMuaWRQcm9wZXJ0eS5ucy5uYW1lICsgJz4sIDwnICsgcC5ucy5uYW1lICsgJz4pJyk7XG4gIH1cblxuICB0aGlzLmlkUHJvcGVydHkgPSBwO1xufTtcblxuRGVzY3JpcHRvckJ1aWxkZXIucHJvdG90eXBlLmFzc2VydE5vdERlZmluZWQgPSBmdW5jdGlvbihwLCBuYW1lKSB7XG4gIHZhciBwcm9wZXJ0eU5hbWUgPSBwLm5hbWUsXG4gICAgICBkZWZpbmVkUHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNCeU5hbWVbcHJvcGVydHlOYW1lXTtcblxuICBpZiAoZGVmaW5lZFByb3BlcnR5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ3Byb3BlcnR5IDwnICsgcHJvcGVydHlOYW1lICsgJz4gYWxyZWFkeSBkZWZpbmVkOyAnICtcbiAgICAgICdvdmVycmlkZSBvZiA8JyArIGRlZmluZWRQcm9wZXJ0eS5kZWZpbmVkQnkubnMubmFtZSArICcjJyArIGRlZmluZWRQcm9wZXJ0eS5ucy5uYW1lICsgJz4gYnkgJyArXG4gICAgICAnPCcgKyBwLmRlZmluZWRCeS5ucy5uYW1lICsgJyMnICsgcC5ucy5uYW1lICsgJz4gbm90IGFsbG93ZWQgd2l0aG91dCByZWRlZmluZXMnKTtcbiAgfVxufTtcblxuRGVzY3JpcHRvckJ1aWxkZXIucHJvdG90eXBlLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzQnlOYW1lW25hbWVdO1xufTtcblxuRGVzY3JpcHRvckJ1aWxkZXIucHJvdG90eXBlLmFkZFRyYWl0ID0gZnVuY3Rpb24odCwgaW5oZXJpdGVkKSB7XG5cbiAgdmFyIHR5cGVzQnlOYW1lID0gdGhpcy5hbGxUeXBlc0J5TmFtZSxcbiAgICAgIHR5cGVzID0gdGhpcy5hbGxUeXBlcztcblxuICB2YXIgdHlwZU5hbWUgPSB0Lm5hbWU7XG5cbiAgaWYgKHR5cGVOYW1lIGluIHR5cGVzQnlOYW1lKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yRWFjaCh0LnByb3BlcnRpZXMsIGJpbmQoZnVuY3Rpb24ocCkge1xuXG4gICAgLy8gY2xvbmUgcHJvcGVydHkgdG8gYWxsb3cgZXh0ZW5zaW9uc1xuICAgIHAgPSBhc3NpZ24oe30sIHAsIHtcbiAgICAgIG5hbWU6IHAubnMubG9jYWxOYW1lLFxuICAgICAgaW5oZXJpdGVkOiBpbmhlcml0ZWRcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCAnZGVmaW5lZEJ5Jywge1xuICAgICAgdmFsdWU6IHRcbiAgICB9KTtcblxuICAgIHZhciByZXBsYWNlcyA9IHAucmVwbGFjZXMsXG4gICAgICAgIHJlZGVmaW5lcyA9IHAucmVkZWZpbmVzO1xuXG4gICAgLy8gYWRkIHJlcGxhY2UvcmVkZWZpbmUgc3VwcG9ydFxuICAgIGlmIChyZXBsYWNlcyB8fCByZWRlZmluZXMpIHtcbiAgICAgIHRoaXMucmVkZWZpbmVQcm9wZXJ0eShwLCByZXBsYWNlcyB8fCByZWRlZmluZXMsIHJlcGxhY2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHAuaXNCb2R5KSB7XG4gICAgICAgIHRoaXMuc2V0Qm9keVByb3BlcnR5KHApO1xuICAgICAgfVxuICAgICAgaWYgKHAuaXNJZCkge1xuICAgICAgICB0aGlzLnNldElkUHJvcGVydHkocCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZFByb3BlcnR5KHApO1xuICAgIH1cbiAgfSwgdGhpcykpO1xuXG4gIHR5cGVzLnB1c2godCk7XG4gIHR5cGVzQnlOYW1lW3R5cGVOYW1lXSA9IHQ7XG59O1xuXG4vKipcbiAqIEEgcmVnaXN0cnkgb2YgTW9kZGxlIHBhY2thZ2VzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8UGFja2FnZT59IHBhY2thZ2VzXG4gKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gUmVnaXN0cnkocGFja2FnZXMsIHByb3BlcnRpZXMpIHtcbiAgdGhpcy5wYWNrYWdlTWFwID0ge307XG4gIHRoaXMudHlwZU1hcCA9IHt9O1xuXG4gIHRoaXMucGFja2FnZXMgPSBbXTtcblxuICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuXG4gIGZvckVhY2gocGFja2FnZXMsIGJpbmQodGhpcy5yZWdpc3RlclBhY2thZ2UsIHRoaXMpKTtcbn1cblxuXG5SZWdpc3RyeS5wcm90b3R5cGUuZ2V0UGFja2FnZSA9IGZ1bmN0aW9uKHVyaU9yUHJlZml4KSB7XG4gIHJldHVybiB0aGlzLnBhY2thZ2VNYXBbdXJpT3JQcmVmaXhdO1xufTtcblxuUmVnaXN0cnkucHJvdG90eXBlLmdldFBhY2thZ2VzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBhY2thZ2VzO1xufTtcblxuXG5SZWdpc3RyeS5wcm90b3R5cGUucmVnaXN0ZXJQYWNrYWdlID0gZnVuY3Rpb24ocGtnKSB7XG5cbiAgLy8gY29weSBwYWNrYWdlXG4gIHBrZyA9IGFzc2lnbih7fSwgcGtnKTtcblxuICB2YXIgcGtnTWFwID0gdGhpcy5wYWNrYWdlTWFwO1xuXG4gIGVuc3VyZUF2YWlsYWJsZShwa2dNYXAsIHBrZywgJ3ByZWZpeCcpO1xuICBlbnN1cmVBdmFpbGFibGUocGtnTWFwLCBwa2csICd1cmknKTtcblxuICAvLyByZWdpc3RlciB0eXBlc1xuICBmb3JFYWNoKHBrZy50eXBlcywgYmluZChmdW5jdGlvbihkZXNjcmlwdG9yKSB7XG4gICAgdGhpcy5yZWdpc3RlclR5cGUoZGVzY3JpcHRvciwgcGtnKTtcbiAgfSwgdGhpcykpO1xuXG4gIHBrZ01hcFtwa2cudXJpXSA9IHBrZ01hcFtwa2cucHJlZml4XSA9IHBrZztcbiAgdGhpcy5wYWNrYWdlcy5wdXNoKHBrZyk7XG59O1xuXG5cbi8qKlxuICogUmVnaXN0ZXIgYSB0eXBlIGZyb20gYSBzcGVjaWZpYyBwYWNrYWdlIHdpdGggdXNcbiAqL1xuUmVnaXN0cnkucHJvdG90eXBlLnJlZ2lzdGVyVHlwZSA9IGZ1bmN0aW9uKHR5cGUsIHBrZykge1xuXG4gIHR5cGUgPSBhc3NpZ24oe30sIHR5cGUsIHtcbiAgICBzdXBlckNsYXNzOiAodHlwZS5zdXBlckNsYXNzIHx8IFtdKS5zbGljZSgpLFxuICAgIGV4dGVuZHM6ICh0eXBlLmV4dGVuZHMgfHwgW10pLnNsaWNlKCksXG4gICAgcHJvcGVydGllczogKHR5cGUucHJvcGVydGllcyB8fCBbXSkuc2xpY2UoKSxcbiAgICBtZXRhOiBhc3NpZ24oKHR5cGUubWV0YSB8fCB7fSkpXG4gIH0pO1xuXG4gIHZhciBucyA9IHBhcnNlTmFtZSh0eXBlLm5hbWUsIHBrZy5wcmVmaXgpLFxuICAgICAgbmFtZSA9IG5zLm5hbWUsXG4gICAgICBwcm9wZXJ0aWVzQnlOYW1lID0ge307XG5cbiAgLy8gcGFyc2UgcHJvcGVydGllc1xuICBmb3JFYWNoKHR5cGUucHJvcGVydGllcywgYmluZChmdW5jdGlvbihwKSB7XG5cbiAgICAvLyBuYW1lc3BhY2UgcHJvcGVydHkgbmFtZXNcbiAgICB2YXIgcHJvcGVydHlOcyA9IHBhcnNlTmFtZShwLm5hbWUsIG5zLnByZWZpeCksXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TnMubmFtZTtcblxuICAgIC8vIG5hbWVzcGFjZSBwcm9wZXJ0eSB0eXBlc1xuICAgIGlmICghaXNCdWlsdEluKHAudHlwZSkpIHtcbiAgICAgIHAudHlwZSA9IHBhcnNlTmFtZShwLnR5cGUsIHByb3BlcnR5TnMucHJlZml4KS5uYW1lO1xuICAgIH1cblxuICAgIGFzc2lnbihwLCB7XG4gICAgICBuczogcHJvcGVydHlOcyxcbiAgICAgIG5hbWU6IHByb3BlcnR5TmFtZVxuICAgIH0pO1xuXG4gICAgcHJvcGVydGllc0J5TmFtZVtwcm9wZXJ0eU5hbWVdID0gcDtcbiAgfSwgdGhpcykpO1xuXG4gIC8vIHVwZGF0ZSBucyArIG5hbWVcbiAgYXNzaWduKHR5cGUsIHtcbiAgICBuczogbnMsXG4gICAgbmFtZTogbmFtZSxcbiAgICBwcm9wZXJ0aWVzQnlOYW1lOiBwcm9wZXJ0aWVzQnlOYW1lXG4gIH0pO1xuXG4gIGZvckVhY2godHlwZS5leHRlbmRzLCBiaW5kKGZ1bmN0aW9uKGV4dGVuZHNOYW1lKSB7XG4gICAgdmFyIGV4dGVuZGVkID0gdGhpcy50eXBlTWFwW2V4dGVuZHNOYW1lXTtcblxuICAgIGV4dGVuZGVkLnRyYWl0cyA9IGV4dGVuZGVkLnRyYWl0cyB8fCBbXTtcbiAgICBleHRlbmRlZC50cmFpdHMucHVzaChuYW1lKTtcbiAgfSwgdGhpcykpO1xuXG4gIC8vIGxpbmsgdG8gcGFja2FnZVxuICB0aGlzLmRlZmluZVBhY2thZ2UodHlwZSwgcGtnKTtcblxuICAvLyByZWdpc3RlclxuICB0aGlzLnR5cGVNYXBbbmFtZV0gPSB0eXBlO1xufTtcblxuXG4vKipcbiAqIFRyYXZlcnNlIHRoZSB0eXBlIGhpZXJhcmNoeSBmcm9tIGJvdHRvbSB0byB0b3AsXG4gKiBjYWxsaW5nIGl0ZXJhdG9yIHdpdGggKHR5cGUsIGluaGVyaXRlZCkgZm9yIGFsbCBlbGVtZW50cyBpblxuICogdGhlIGluaGVyaXRhbmNlIGNoYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBuc05hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdG9yXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0cmFpdD1mYWxzZV1cbiAqL1xuUmVnaXN0cnkucHJvdG90eXBlLm1hcFR5cGVzID0gZnVuY3Rpb24obnNOYW1lLCBpdGVyYXRvciwgdHJhaXQpIHtcblxuICB2YXIgdHlwZSA9IGlzQnVpbHRJbihuc05hbWUubmFtZSkgPyB7IG5hbWU6IG5zTmFtZS5uYW1lIH0gOiB0aGlzLnR5cGVNYXBbbnNOYW1lLm5hbWVdO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvKipcbiAgICogVHJhdmVyc2UgdGhlIHNlbGVjdGVkIHRyYWl0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xzXG4gICAqL1xuICBmdW5jdGlvbiB0cmF2ZXJzZVRyYWl0KGNscykge1xuICAgIHJldHVybiB0cmF2ZXJzZVN1cGVyKGNscywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhdmVyc2UgdGhlIHNlbGVjdGVkIHN1cGVyIHR5cGUgb3IgdHJhaXRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt0cmFpdD1mYWxzZV1cbiAgICovXG4gIGZ1bmN0aW9uIHRyYXZlcnNlU3VwZXIoY2xzLCB0cmFpdCkge1xuICAgIHZhciBwYXJlbnROcyA9IHBhcnNlTmFtZShjbHMsIGlzQnVpbHRJbihjbHMpID8gJycgOiBuc05hbWUucHJlZml4KTtcbiAgICBzZWxmLm1hcFR5cGVzKHBhcmVudE5zLCBpdGVyYXRvciwgdHJhaXQpO1xuICB9XG5cbiAgaWYgKCF0eXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIHR5cGUgPCcgKyBuc05hbWUubmFtZSArICc+Jyk7XG4gIH1cblxuICBmb3JFYWNoKHR5cGUuc3VwZXJDbGFzcywgdHJhaXQgPyB0cmF2ZXJzZVRyYWl0IDogdHJhdmVyc2VTdXBlcik7XG5cbiAgLy8gY2FsbCBpdGVyYXRvciB3aXRoICh0eXBlLCBpbmhlcml0ZWQ9IXRyYWl0KVxuICBpdGVyYXRvcih0eXBlLCAhdHJhaXQpO1xuXG4gIGZvckVhY2godHlwZS50cmFpdHMsIHRyYXZlcnNlVHJhaXQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGVmZmVjdGl2ZSBkZXNjcmlwdG9yIGZvciBhIHR5cGUuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB0eXBlIHRoZSBuYW1lc3BhY2VkIG5hbWUgKG5zOmxvY2FsTmFtZSkgb2YgdGhlIHR5cGVcbiAqXG4gKiBAcmV0dXJuIHtEZXNjcmlwdG9yfSB0aGUgcmVzdWx0aW5nIGVmZmVjdGl2ZSBkZXNjcmlwdG9yXG4gKi9cblJlZ2lzdHJ5LnByb3RvdHlwZS5nZXRFZmZlY3RpdmVEZXNjcmlwdG9yID0gZnVuY3Rpb24obmFtZSkge1xuXG4gIHZhciBuc05hbWUgPSBwYXJzZU5hbWUobmFtZSk7XG5cbiAgdmFyIGJ1aWxkZXIgPSBuZXcgRGVzY3JpcHRvckJ1aWxkZXIobnNOYW1lKTtcblxuICB0aGlzLm1hcFR5cGVzKG5zTmFtZSwgZnVuY3Rpb24odHlwZSwgaW5oZXJpdGVkKSB7XG4gICAgYnVpbGRlci5hZGRUcmFpdCh0eXBlLCBpbmhlcml0ZWQpO1xuICB9KTtcblxuICB2YXIgZGVzY3JpcHRvciA9IGJ1aWxkZXIuYnVpbGQoKTtcblxuICAvLyBkZWZpbmUgcGFja2FnZSBsaW5rXG4gIHRoaXMuZGVmaW5lUGFja2FnZShkZXNjcmlwdG9yLCBkZXNjcmlwdG9yLmFsbFR5cGVzW2Rlc2NyaXB0b3IuYWxsVHlwZXMubGVuZ3RoIC0gMV0uJHBrZyk7XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59O1xuXG5cblJlZ2lzdHJ5LnByb3RvdHlwZS5kZWZpbmVQYWNrYWdlID0gZnVuY3Rpb24odGFyZ2V0LCBwa2cpIHtcbiAgdGhpcy5wcm9wZXJ0aWVzLmRlZmluZSh0YXJnZXQsICckcGtnJywgeyB2YWx1ZTogcGtnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLyBoZWxwZXJzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gZW5zdXJlQXZhaWxhYmxlKHBhY2thZ2VNYXAsIHBrZywgaWRlbnRpZmllcktleSkge1xuXG4gIHZhciB2YWx1ZSA9IHBrZ1tpZGVudGlmaWVyS2V5XTtcblxuICBpZiAodmFsdWUgaW4gcGFja2FnZU1hcCkge1xuICAgIHRocm93IG5ldyBFcnJvcigncGFja2FnZSB3aXRoICcgKyBpZGVudGlmaWVyS2V5ICsgJyA8JyArIHZhbHVlICsgJz4gYWxyZWFkeSBkZWZpbmVkJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHV0aWxpdHkgdGhhdCBnZXRzIGFuZCBzZXRzIHByb3BlcnRpZXMgb2YgbW9kZWwgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtNb2RlbH0gbW9kZWxcbiAqL1xuZnVuY3Rpb24gUHJvcGVydGllcyhtb2RlbCkge1xuICB0aGlzLm1vZGVsID0gbW9kZWw7XG59XG5cblxuLyoqXG4gKiBTZXRzIGEgbmFtZWQgcHJvcGVydHkgb24gdGhlIHRhcmdldCBlbGVtZW50LlxuICogSWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlIHByb3BlcnR5IGdldHMgZGVsZXRlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKi9cblByb3BlcnRpZXMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcblxuICB2YXIgcHJvcGVydHkgPSB0aGlzLm1vZGVsLmdldFByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIG5hbWUpO1xuXG4gIHZhciBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5uYW1lO1xuXG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAvLyB1bnNldCB0aGUgcHJvcGVydHksIGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdW5kZWZpbmVkO1xuICAgIC8vIGRlbGV0ZSBmcm9tICRhdHRycyAoZm9yIGV4dGVuc2lvbnMpIG9yIHRoZSB0YXJnZXQgaXRzZWxmXG4gICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5TmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXQuJGF0dHJzW25hbWVdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBzZXQgdGhlIHByb3BlcnR5LCBkZWZpbmluZyB3ZWxsIGRlZmluZWQgcHJvcGVydGllcyBvbiB0aGUgZmx5XG4gICAgLy8gb3Igc2ltcGx5IHVwZGF0aW5nIHRoZW0gaW4gdGFyZ2V0LiRhdHRycyAoZm9yIGV4dGVuc2lvbnMpXG4gICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICBpZiAocHJvcGVydHlOYW1lIGluIHRhcmdldCkge1xuICAgICAgICB0YXJnZXRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuJGF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG5hbWVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuUHJvcGVydGllcy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBuYW1lKSB7XG5cbiAgdmFyIHByb3BlcnR5ID0gdGhpcy5tb2RlbC5nZXRQcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKTtcblxuICBpZiAoIXByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHRhcmdldC4kYXR0cnNbbmFtZV07XG4gIH1cblxuICB2YXIgcHJvcGVydHlOYW1lID0gcHJvcGVydHkubmFtZTtcblxuICAvLyBjaGVjayBpZiBhY2Nlc3MgdG8gY29sbGVjdGlvbiBwcm9wZXJ0eSBhbmQgbGF6aWx5IGluaXRpYWxpemUgaXRcbiAgaWYgKCF0YXJnZXRbcHJvcGVydHlOYW1lXSAmJiBwcm9wZXJ0eS5pc01hbnkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBbXSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5TmFtZV07XG59O1xuXG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkgb24gdGhlIHRhcmdldCBlbGVtZW50XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblByb3BlcnRpZXMucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uKHRhcmdldCwgbmFtZSwgb3B0aW9ucykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBvcHRpb25zKTtcbn07XG5cblxuLyoqXG4gKiBEZWZpbmUgdGhlIGRlc2NyaXB0b3IgZm9yIGFuIGVsZW1lbnRcbiAqL1xuUHJvcGVydGllcy5wcm90b3R5cGUuZGVmaW5lRGVzY3JpcHRvciA9IGZ1bmN0aW9uKHRhcmdldCwgZGVzY3JpcHRvcikge1xuICB0aGlzLmRlZmluZSh0YXJnZXQsICckZGVzY3JpcHRvcicsIHsgdmFsdWU6IGRlc2NyaXB0b3IgfSk7XG59O1xuXG4vKipcbiAqIERlZmluZSB0aGUgbW9kZWwgZm9yIGFuIGVsZW1lbnRcbiAqL1xuUHJvcGVydGllcy5wcm90b3R5cGUuZGVmaW5lTW9kZWwgPSBmdW5jdGlvbih0YXJnZXQsIG1vZGVsKSB7XG4gIHRoaXMuZGVmaW5lKHRhcmdldCwgJyRtb2RlbCcsIHsgdmFsdWU6IG1vZGVsIH0pO1xufTtcblxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eS5uYW1lLCB7XG4gICAgZW51bWVyYWJsZTogIXByb3BlcnR5LmlzUmVmZXJlbmNlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8vLy8gTW9kZGxlIGltcGxlbWVudGF0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBAY2xhc3MgTW9kZGxlXG4gKlxuICogQSBtb2RlbCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBlbGVtZW50cyBvZiBhIHNwZWNpZmljIHR5cGUuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgTW9kZGxlID0gcmVxdWlyZSgnbW9kZGxlJyk7XG4gKlxuICogdmFyIHBrZyA9IHtcbiAqICAgbmFtZTogJ215cGFja2FnZScsXG4gKiAgIHByZWZpeDogJ215JyxcbiAqICAgdHlwZXM6IFtcbiAqICAgICB7IG5hbWU6ICdSb290JyB9XG4gKiAgIF1cbiAqIH07XG4gKlxuICogdmFyIG1vZGRsZSA9IG5ldyBNb2RkbGUoW3BrZ10pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXk8UGFja2FnZT59IHBhY2thZ2VzIHRoZSBwYWNrYWdlcyB0byBjb250YWluXG4gKi9cbmZ1bmN0aW9uIE1vZGRsZShwYWNrYWdlcykge1xuXG4gIHRoaXMucHJvcGVydGllcyA9IG5ldyBQcm9wZXJ0aWVzKHRoaXMpO1xuXG4gIHRoaXMuZmFjdG9yeSA9IG5ldyBGYWN0b3J5KHRoaXMsIHRoaXMucHJvcGVydGllcyk7XG4gIHRoaXMucmVnaXN0cnkgPSBuZXcgUmVnaXN0cnkocGFja2FnZXMsIHRoaXMucHJvcGVydGllcyk7XG5cbiAgdGhpcy50eXBlQ2FjaGUgPSB7fTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuXG4gKlxuICogQG1ldGhvZCBNb2RkbGUjY3JlYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgZm9vID0gbW9kZGxlLmNyZWF0ZSgnbXk6Rm9vJyk7XG4gKiB2YXIgYmFyID0gbW9kZGxlLmNyZWF0ZSgnbXk6QmFyJywgeyBpZDogJ0JBUl8xJyB9KTtcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd8T2JqZWN0fSBkZXNjcmlwdG9yIHRoZSB0eXBlIGRlc2NyaXB0b3Igb3IgbmFtZSBrbm93IHRvIHRoZSBtb2RlbFxuICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyAgIGEgbnVtYmVyIG9mIGF0dHJpYnV0ZXMgdG8gaW5pdGlhbGl6ZSB0aGUgbW9kZWwgaW5zdGFuY2Ugd2l0aFxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIG1vZGVsIGluc3RhbmNlXG4gKi9cbk1vZGRsZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24oZGVzY3JpcHRvciwgYXR0cnMpIHtcbiAgdmFyIFR5cGUgPSB0aGlzLmdldFR5cGUoZGVzY3JpcHRvcik7XG5cbiAgaWYgKCFUeXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIHR5cGUgPCcgKyBkZXNjcmlwdG9yICsgJz4nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVHlwZShhdHRycyk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHlwZSByZXByZXNlbnRpbmcgYSBnaXZlbiBkZXNjcmlwdG9yXG4gKlxuICogQG1ldGhvZCBNb2RkbGUjZ2V0VHlwZVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIEZvbyA9IG1vZGRsZS5nZXRUeXBlKCdteTpGb28nKTtcbiAqIHZhciBmb28gPSBuZXcgRm9vKHsgJ2lkJyA6ICdGT09fMScgfSk7XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfE9iamVjdH0gZGVzY3JpcHRvciB0aGUgdHlwZSBkZXNjcmlwdG9yIG9yIG5hbWUga25vdyB0byB0aGUgbW9kZWxcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICB0aGUgdHlwZSByZXByZXNlbnRpbmcgdGhlIGRlc2NyaXB0b3JcbiAqL1xuTW9kZGxlLnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24oZGVzY3JpcHRvcikge1xuXG4gIHZhciBjYWNoZSA9IHRoaXMudHlwZUNhY2hlO1xuXG4gIHZhciBuYW1lID0gaXNTdHJpbmcoZGVzY3JpcHRvcikgPyBkZXNjcmlwdG9yIDogZGVzY3JpcHRvci5ucy5uYW1lO1xuXG4gIHZhciB0eXBlID0gY2FjaGVbbmFtZV07XG5cbiAgaWYgKCF0eXBlKSB7XG4gICAgZGVzY3JpcHRvciA9IHRoaXMucmVnaXN0cnkuZ2V0RWZmZWN0aXZlRGVzY3JpcHRvcihuYW1lKTtcbiAgICB0eXBlID0gY2FjaGVbbmFtZV0gPSB0aGlzLmZhY3RvcnkuY3JlYXRlVHlwZShkZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYW55LWVsZW1lbnQgdHlwZSB0byBiZSB1c2VkIHdpdGhpbiBtb2RlbCBpbnN0YW5jZXMuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIHRoYXQgbGllIG91dHNpZGUgdGhlIG1ldGEtbW9kZWwuXG4gKiBUaGUgY3JlYXRlZCBlbGVtZW50IGNvbnRhaW5zIGFsbCB0aGUgbWV0YS1kYXRhIHJlcXVpcmVkIHRvIHNlcmlhbGl6ZSBpdFxuICogYXMgcGFydCBvZiBtZXRhLW1vZGVsIGVsZW1lbnRzLlxuICpcbiAqIEBtZXRob2QgTW9kZGxlI2NyZWF0ZUFueVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGZvbyA9IG1vZGRsZS5jcmVhdGVBbnkoJ3ZlbmRvcjpGb28nLCAnaHR0cDovL3ZlbmRvcicsIHtcbiAqICAgdmFsdWU6ICdiYXInXG4gKiB9KTtcbiAqXG4gKiB2YXIgY29udGFpbmVyID0gbW9kZGxlLmNyZWF0ZSgnbXk6Q29udGFpbmVyJywgJ2h0dHA6Ly9teScsIHtcbiAqICAgYW55OiBbIGZvbyBdXG4gKiB9KTtcbiAqXG4gKiAvLyBnbyBhaGVhZCBhbmQgc2VyaWFsaXplIHRoZSBzdHVmZlxuICpcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgIHRoZSBuYW1lIG9mIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5zVXJpIHRoZSBuYW1lc3BhY2UgdXJpIG9mIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0gIHtPYmplY3R9IFtwcm9wZXJ0aWVzXSBhIG1hcCBvZiBwcm9wZXJ0aWVzIHRvIGluaXRpYWxpemUgdGhlIGluc3RhbmNlIHdpdGhcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFueSB0eXBlIGluc3RhbmNlXG4gKi9cbk1vZGRsZS5wcm90b3R5cGUuY3JlYXRlQW55ID0gZnVuY3Rpb24obmFtZSwgbnNVcmksIHByb3BlcnRpZXMpIHtcblxuICB2YXIgbmFtZU5zID0gcGFyc2VOYW1lKG5hbWUpO1xuXG4gIHZhciBlbGVtZW50ID0ge1xuICAgICR0eXBlOiBuYW1lLFxuICAgICRpbnN0YW5jZU9mOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgICByZXR1cm4gdHlwZSA9PT0gdGhpcy4kdHlwZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlc2NyaXB0b3IgPSB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpc0dlbmVyaWM6IHRydWUsXG4gICAgbnM6IHtcbiAgICAgIHByZWZpeDogbmFtZU5zLnByZWZpeCxcbiAgICAgIGxvY2FsTmFtZTogbmFtZU5zLmxvY2FsTmFtZSxcbiAgICAgIHVyaTogbnNVcmlcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wcm9wZXJ0aWVzLmRlZmluZURlc2NyaXB0b3IoZWxlbWVudCwgZGVzY3JpcHRvcik7XG4gIHRoaXMucHJvcGVydGllcy5kZWZpbmVNb2RlbChlbGVtZW50LCB0aGlzKTtcbiAgdGhpcy5wcm9wZXJ0aWVzLmRlZmluZShlbGVtZW50LCAnJHBhcmVudCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlIH0pO1xuXG4gIGZvckVhY2gocHJvcGVydGllcywgZnVuY3Rpb24oYSwga2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KGEpICYmIGEudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbWVudFthLm5hbWVdID0gYS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudFtrZXldID0gYTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVnaXN0ZXJlZCBwYWNrYWdlIGJ5IHVyaSBvciBwcmVmaXhcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwYWNrYWdlXG4gKi9cbk1vZGRsZS5wcm90b3R5cGUuZ2V0UGFja2FnZSA9IGZ1bmN0aW9uKHVyaU9yUHJlZml4KSB7XG4gIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmdldFBhY2thZ2UodXJpT3JQcmVmaXgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc25hcHNob3Qgb2YgYWxsIGtub3duIHBhY2thZ2VzXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgcGFja2FnZVxuICovXG5Nb2RkbGUucHJvdG90eXBlLmdldFBhY2thZ2VzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmdldFBhY2thZ2VzKCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlc2NyaXB0b3IgZm9yIGFuIGVsZW1lbnRcbiAqL1xuTW9kZGxlLnByb3RvdHlwZS5nZXRFbGVtZW50RGVzY3JpcHRvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQuJGRlc2NyaXB0b3I7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gZGVzY3JpcHRvciBvciBpbnN0YW5jZVxuICogcmVwcmVzZW50cyB0aGUgZ2l2ZW4gdHlwZS5cbiAqXG4gKiBNYXkgYmUgYXBwbGllZCB0byB0aGlzLCBpZiBlbGVtZW50IGlzIG9taXR0ZWQuXG4gKi9cbk1vZGRsZS5wcm90b3R5cGUuaGFzVHlwZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHR5cGUgPSBlbGVtZW50O1xuICAgIGVsZW1lbnQgPSB0aGlzO1xuICB9XG5cbiAgdmFyIGRlc2NyaXB0b3IgPSBlbGVtZW50LiRtb2RlbC5nZXRFbGVtZW50RGVzY3JpcHRvcihlbGVtZW50KTtcblxuICByZXR1cm4gKHR5cGUgaW4gZGVzY3JpcHRvci5hbGxUeXBlc0J5TmFtZSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlc2NyaXB0b3Igb2YgYW4gZWxlbWVudHMgbmFtZWQgcHJvcGVydHlcbiAqL1xuTW9kZGxlLnByb3RvdHlwZS5nZXRQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gdGhpcy5nZXRFbGVtZW50RGVzY3JpcHRvcihlbGVtZW50KS5wcm9wZXJ0aWVzQnlOYW1lW3Byb3BlcnR5XTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIG1hcHBlZCB0eXBlJ3MgZGVzY3JpcHRvclxuICovXG5Nb2RkbGUucHJvdG90eXBlLmdldFR5cGVEZXNjcmlwdG9yID0gZnVuY3Rpb24odHlwZSkge1xuICByZXR1cm4gdGhpcy5yZWdpc3RyeS50eXBlTWFwW3R5cGVdO1xufTtcblxuZXhwb3J0IHsgTW9kZGxlLCBjb2VyY2VUeXBlLCBpc0J1aWx0SW4gYXMgaXNCdWlsdEluVHlwZSwgaXNTaW1wbGUgYXMgaXNTaW1wbGVUeXBlLCBwYXJzZU5hbWUgYXMgcGFyc2VOYW1lTlMgfTtcbiIsInZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgRU5USVRZX1BBVFRFUk4gPSAvJiMoXFxkKyk7fCYjeChbMC05YS1mXSspO3wmKFxcdyspOy9pZztcblxudmFyIEVOVElUWV9NQVBQSU5HID0ge1xuICAnYW1wJzogJyYnLFxuICAnYXBvcyc6ICdcXCcnLFxuICAnZ3QnOiAnPicsXG4gICdsdCc6ICc8JyxcbiAgJ3F1b3QnOiAnXCInXG59O1xuXG4vLyBtYXAgVVBQRVJDQVNFIHZhcmlhbnRzIG9mIHN1cHBvcnRlZCBzcGVjaWFsIGNoYXJzXG5PYmplY3Qua2V5cyhFTlRJVFlfTUFQUElORykuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gIEVOVElUWV9NQVBQSU5HW2sudG9VcHBlckNhc2UoKV0gPSBFTlRJVFlfTUFQUElOR1trXTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHJlcGxhY2VFbnRpdGllcyhfLCBkLCB4LCB6KSB7XG5cbiAgLy8gcmVzZXJ2ZWQgbmFtZXMsIGkuZS4gJm5ic3A7XG4gIGlmICh6KSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoRU5USVRZX01BUFBJTkcsIHopKSB7XG4gICAgICByZXR1cm4gRU5USVRZX01BUFBJTkdbel07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZhbGwgYmFjayB0byBvcmlnaW5hbCB2YWx1ZVxuICAgICAgcmV0dXJuICcmJyArIHogKyAnOyc7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVjaW1hbCBlbmNvZGVkIGNoYXJcbiAgaWYgKGQpIHtcbiAgICByZXR1cm4gZnJvbUNoYXJDb2RlKGQpO1xuICB9XG5cbiAgLy8gaGV4IGVuY29kZWQgY2hhclxuICByZXR1cm4gZnJvbUNoYXJDb2RlKHBhcnNlSW50KHgsIDE2KSk7XG59XG5cblxuLyoqXG4gKiBBIGJhc2ljIGVudGl0eSBkZWNvZGVyIHRoYXQgY2FuIGRlY29kZSBhIG1pbmltYWxcbiAqIHN1Yi1zZXQgb2YgcmVzZXJ2ZWQgbmFtZXMgKCZhbXA7KSBhcyB3ZWxsIGFzXG4gKiBoZXggKCYjeGFhZjspIGFuZCBkZWNpbWFsICgmIzEyMzE7KSBlbmNvZGVkIGNoYXJhY3RlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gZGVjb2RlZCBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZGVjb2RlRW50aXRpZXMocykge1xuICBpZiAocy5sZW5ndGggPiAzICYmIHMuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgIHJldHVybiBzLnJlcGxhY2UoRU5USVRZX1BBVFRFUk4sIHJlcGxhY2VFbnRpdGllcyk7XG4gIH1cblxuICByZXR1cm4gcztcbn1cblxudmFyIFhTSV9VUkkgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UnO1xudmFyIFhTSV9QUkVGSVggPSAneHNpJztcbnZhciBYU0lfVFlQRSA9ICd4c2k6dHlwZSc7XG5cbnZhciBOT05fV0hJVEVTUEFDRV9PVVRTSURFX1JPT1RfTk9ERSA9ICdub24td2hpdGVzcGFjZSBvdXRzaWRlIG9mIHJvb3Qgbm9kZSc7XG5cbmZ1bmN0aW9uIGVycm9yKG1zZykge1xuICByZXR1cm4gbmV3IEVycm9yKG1zZyk7XG59XG5cbmZ1bmN0aW9uIG1pc3NpbmdOYW1lc3BhY2VGb3JQcmVmaXgocHJlZml4KSB7XG4gIHJldHVybiAnbWlzc2luZyBuYW1lc3BhY2UgZm9yIHByZWZpeCA8JyArIHByZWZpeCArICc+Jztcbn1cblxuZnVuY3Rpb24gZ2V0dGVyKGdldEZuKSB7XG4gIHJldHVybiB7XG4gICAgJ2dldCc6IGdldEZuLFxuICAgICdlbnVtZXJhYmxlJzogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjbG9uZU5zTWF0cml4KG5zTWF0cml4KSB7XG4gIHZhciBjbG9uZSA9IHt9LCBrZXk7XG4gIGZvciAoa2V5IGluIG5zTWF0cml4KSB7XG4gICAgY2xvbmVba2V5XSA9IG5zTWF0cml4W2tleV07XG4gIH1cbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiB1cmlQcmVmaXgocHJlZml4KSB7XG4gIHJldHVybiBwcmVmaXggKyAnJHVyaSc7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnNNYXRyaXgobnNVcmlUb1ByZWZpeCkge1xuICB2YXIgbnNNYXRyaXggPSB7fSxcbiAgICAgIHVyaSxcbiAgICAgIHByZWZpeDtcblxuICBmb3IgKHVyaSBpbiBuc1VyaVRvUHJlZml4KSB7XG4gICAgcHJlZml4ID0gbnNVcmlUb1ByZWZpeFt1cmldO1xuICAgIG5zTWF0cml4W3ByZWZpeF0gPSBwcmVmaXg7XG4gICAgbnNNYXRyaXhbdXJpUHJlZml4KHByZWZpeCldID0gdXJpO1xuICB9XG5cbiAgcmV0dXJuIG5zTWF0cml4O1xufVxuXG5mdW5jdGlvbiBub29wR2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHsgJ2xpbmUnOiAwLCAnY29sdW1uJzogMCB9O1xufVxuXG5mdW5jdGlvbiB0aHJvd0Z1bmMoZXJyKSB7XG4gIHRocm93IGVycjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHBhcnNlciB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSAgeyFPYmplY3Q8c3RyaW5nLCA/Pj19IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gUGFyc2VyKG9wdGlvbnMpIHtcblxuICBpZiAoIXRoaXMpIHtcbiAgICByZXR1cm4gbmV3IFBhcnNlcihvcHRpb25zKTtcbiAgfVxuXG4gIHZhciBwcm94eSA9IG9wdGlvbnMgJiYgb3B0aW9uc1sncHJveHknXTtcblxuICB2YXIgb25UZXh0LFxuICAgICAgb25PcGVuVGFnLFxuICAgICAgb25DbG9zZVRhZyxcbiAgICAgIG9uQ0RBVEEsXG4gICAgICBvbkVycm9yID0gdGhyb3dGdW5jLFxuICAgICAgb25XYXJuaW5nLFxuICAgICAgb25Db21tZW50LFxuICAgICAgb25RdWVzdGlvbixcbiAgICAgIG9uQXR0ZW50aW9uO1xuXG4gIHZhciBnZXRDb250ZXh0ID0gbm9vcEdldENvbnRleHQ7XG5cbiAgLyoqXG4gICAqIERvIHdlIG5lZWQgdG8gcGFyc2UgdGhlIGN1cnJlbnQgZWxlbWVudHMgYXR0cmlidXRlcyBmb3IgbmFtZXNwYWNlcz9cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgbWF5YmVOUyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEbyB3ZSBwcm9jZXNzIG5hbWVzcGFjZXMgYXQgYWxsP1xuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc05hbWVzcGFjZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgY2F1Z2h0IGVycm9yIHJldHVybmVkIG9uIHBhcnNlIGVuZFxuICAgKlxuICAgKiBAdHlwZSB7RXJyb3J9XG4gICAqL1xuICB2YXIgcmV0dXJuRXJyb3IgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgd2Ugc3RvcCBwYXJzaW5nP1xuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBwYXJzZVN0b3AgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBtYXAgb2YgeyB1cmk6IHByZWZpeCB9IHVzZWQgYnkgdGhlIHBhcnNlci5cbiAgICpcbiAgICogVGhpcyBtYXAgd2lsbCBlbnN1cmUgd2UgY2FuIG5vcm1hbGl6ZSBwcmVmaXhlcyBkdXJpbmcgcHJvY2Vzc2luZztcbiAgICogZm9yIGVhY2ggdXJpLCBvbmx5IG9uZSBwcmVmaXggd2lsbCBiZSBleHBvc2VkIHRvIHRoZSBoYW5kbGVycy5cbiAgICpcbiAgICogQHR5cGUgeyFPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fX1cbiAgICovXG4gIHZhciBuc1VyaVRvUHJlZml4O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgcGFyc2UgZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ3xFcnJvcn0gZXJyXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnIpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgIGVyciA9IGVycm9yKGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuRXJyb3IgPSBlcnI7XG5cbiAgICBvbkVycm9yKGVyciwgZ2V0Q29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHBhcnNlIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd8RXJyb3J9IGVyclxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlV2FybmluZyhlcnIpIHtcblxuICAgIGlmICghb25XYXJuaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICBlcnIgPSBlcnJvcihlcnIpO1xuICAgIH1cblxuICAgIG9uV2FybmluZyhlcnIsIGdldENvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHBhcnNlIGxpc3RlbmVyLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZVxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2JcbiAgICpcbiAgICogQHJldHVybiB7UGFyc2VyfVxuICAgKi9cbiAgdGhpc1snb24nXSA9IGZ1bmN0aW9uKG5hbWUsIGNiKSB7XG5cbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBlcnJvcigncmVxdWlyZWQgYXJncyA8bmFtZSwgY2I+Jyk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAnb3BlblRhZyc6IG9uT3BlblRhZyA9IGNiOyBicmVhaztcbiAgICBjYXNlICd0ZXh0Jzogb25UZXh0ID0gY2I7IGJyZWFrO1xuICAgIGNhc2UgJ2Nsb3NlVGFnJzogb25DbG9zZVRhZyA9IGNiOyBicmVhaztcbiAgICBjYXNlICdlcnJvcic6IG9uRXJyb3IgPSBjYjsgYnJlYWs7XG4gICAgY2FzZSAnd2Fybic6IG9uV2FybmluZyA9IGNiOyBicmVhaztcbiAgICBjYXNlICdjZGF0YSc6IG9uQ0RBVEEgPSBjYjsgYnJlYWs7XG4gICAgY2FzZSAnYXR0ZW50aW9uJzogb25BdHRlbnRpb24gPSBjYjsgYnJlYWs7IC8vIDwhWFhYWFggenp6ej1cImVlZWVcIj5cbiAgICBjYXNlICdxdWVzdGlvbic6IG9uUXVlc3Rpb24gPSBjYjsgYnJlYWs7IC8vIDw/IC4uLi4gID8+XG4gICAgY2FzZSAnY29tbWVudCc6IG9uQ29tbWVudCA9IGNiOyBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgZXJyb3IoJ3Vuc3VwcG9ydGVkIGV2ZW50OiAnICsgbmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbmFtZXNwYWNlIHRvIHByZWZpeCBtYXBwaW5nLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBwYXJzZXIubnMoe1xuICAgKiAgICdodHRwOi8vZm9vJzogJ2ZvbycsXG4gICAqICAgJ2h0dHA6Ly9iYXInOiAnYmFyJ1xuICAgKiB9KTtcbiAgICpcbiAgICogQHBhcmFtICB7IU9iamVjdDxzdHJpbmcsIHN0cmluZz59IG5zTWFwXG4gICAqXG4gICAqIEByZXR1cm4ge1BhcnNlcn1cbiAgICovXG4gIHRoaXNbJ25zJ10gPSBmdW5jdGlvbihuc01hcCkge1xuXG4gICAgaWYgKHR5cGVvZiBuc01hcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5zTWFwID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuc01hcCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IGVycm9yKCdyZXF1aXJlZCBhcmdzIDxuc01hcD17fT4nKTtcbiAgICB9XG5cbiAgICB2YXIgX25zVXJpVG9QcmVmaXggPSB7fSwgaztcblxuICAgIGZvciAoayBpbiBuc01hcCkge1xuICAgICAgX25zVXJpVG9QcmVmaXhba10gPSBuc01hcFtrXTtcbiAgICB9XG5cbiAgICAvLyBGT1JDRSBkZWZhdWx0IG1hcHBpbmcgZm9yIHNjaGVtYSBpbnN0YW5jZVxuICAgIF9uc1VyaVRvUHJlZml4W1hTSV9VUkldID0gWFNJX1BSRUZJWDtcblxuICAgIGlzTmFtZXNwYWNlID0gdHJ1ZTtcbiAgICBuc1VyaVRvUHJlZml4ID0gX25zVXJpVG9QcmVmaXg7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2UgeG1sIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSB4bWxcbiAgICpcbiAgICogQHJldHVybiB7RXJyb3J9IHJldHVybkVycm9yLCBpZiBub3QgdGhyb3duXG4gICAqL1xuICB0aGlzWydwYXJzZSddID0gZnVuY3Rpb24oeG1sKSB7XG4gICAgaWYgKHR5cGVvZiB4bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBlcnJvcigncmVxdWlyZWQgYXJncyA8eG1sPXN0cmluZz4nKTtcbiAgICB9XG5cbiAgICByZXR1cm5FcnJvciA9IG51bGw7XG5cbiAgICBwYXJzZSh4bWwpO1xuXG4gICAgZ2V0Q29udGV4dCA9IG5vb3BHZXRDb250ZXh0O1xuICAgIHBhcnNlU3RvcCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHJldHVybkVycm9yO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdG9wIHBhcnNpbmcuXG4gICAqL1xuICB0aGlzWydzdG9wJ10gPSBmdW5jdGlvbigpIHtcbiAgICBwYXJzZVN0b3AgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZSBzdHJpbmcsIGludm9raW5nIGNvbmZpZ3VyZWQgbGlzdGVuZXJzIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30geG1sXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZSh4bWwpIHtcbiAgICB2YXIgbnNNYXRyaXhTdGFjayA9IGlzTmFtZXNwYWNlID8gW10gOiBudWxsLFxuICAgICAgICBuc01hdHJpeCA9IGlzTmFtZXNwYWNlID8gYnVpbGROc01hdHJpeChuc1VyaVRvUHJlZml4KSA6IG51bGwsXG4gICAgICAgIF9uc01hdHJpeCxcbiAgICAgICAgbm9kZVN0YWNrID0gW10sXG4gICAgICAgIGFub255bW91c05zQ291bnQgPSAwLFxuICAgICAgICB0YWdTdGFydCA9IGZhbHNlLFxuICAgICAgICB0YWdFbmQgPSBmYWxzZSxcbiAgICAgICAgaSA9IDAsIGogPSAwLFxuICAgICAgICB4LCB5LCBxLCB3LFxuICAgICAgICB4bWxucyxcbiAgICAgICAgZWxlbWVudE5hbWUsXG4gICAgICAgIF9lbGVtZW50TmFtZSxcbiAgICAgICAgZWxlbWVudFByb3h5XG4gICAgICAgIDtcblxuICAgIHZhciBhdHRyc1N0cmluZyA9ICcnLFxuICAgICAgICBhdHRyc1N0YXJ0ID0gMCxcbiAgICAgICAgY2FjaGVkQXR0cnMgLy8gZmFsc2UgPSBwYXJzZWQgd2l0aCBlcnJvcnMsIG51bGwgPSBuZWVkcyBwYXJzaW5nXG4gICAgICAgIDtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGF0dHJpYnV0ZXMgb24gZGVtYW5kIGFuZCByZXR1cm5zIHRoZSBwYXJzZWQgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIFJldHVybiBzZW1hbnRpY3M6ICgxKSBgZmFsc2VgIG9uIGF0dHJpYnV0ZSBwYXJzZSBlcnJvcixcbiAgICAgKiAoMikgb2JqZWN0IGhhc2ggb24gZXh0cmFjdGVkIGF0dHJzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbnxPYmplY3R9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0QXR0cnMoKSB7XG4gICAgICBpZiAoY2FjaGVkQXR0cnMgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZEF0dHJzO1xuICAgICAgfVxuXG4gICAgICB2YXIgbnNVcmksXG4gICAgICAgICAgbnNVcmlQcmVmaXgsXG4gICAgICAgICAgbnNOYW1lLFxuICAgICAgICAgIGRlZmF1bHRBbGlhcyA9IGlzTmFtZXNwYWNlICYmIG5zTWF0cml4Wyd4bWxucyddLFxuICAgICAgICAgIGF0dHJMaXN0ID0gaXNOYW1lc3BhY2UgJiYgbWF5YmVOUyA/IFtdIDogbnVsbCxcbiAgICAgICAgICBpID0gYXR0cnNTdGFydCxcbiAgICAgICAgICBzID0gYXR0cnNTdHJpbmcsXG4gICAgICAgICAgbCA9IHMubGVuZ3RoLFxuICAgICAgICAgIGhhc05ld01hdHJpeCxcbiAgICAgICAgICBuZXdhbGlhcyxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBhbGlhcyxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGF0dHJzID0ge30sXG4gICAgICAgICAgc2VlbkF0dHJzID0ge30sXG4gICAgICAgICAgc2tpcEF0dHIsXG4gICAgICAgICAgdyxcbiAgICAgICAgICBqO1xuXG4gICAgICBwYXJzZUF0dHI6XG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICBza2lwQXR0ciA9IGZhbHNlO1xuICAgICAgICB3ID0gcy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmICh3ID09PSAzMiB8fCAodyA8IDE0ICYmIHcgPiA4KSkgeyAvLyBXSElURVNQQUNFPXsgXFxmXFxuXFxyXFx0XFx2fVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2FpdCBmb3Igbm9uIHdoaXRlc3BhY2UgY2hhcmFjdGVyXG4gICAgICAgIGlmICh3IDwgNjUgfHwgdyA+IDEyMiB8fCAodyA+IDkwICYmIHcgPCA5NykpIHtcbiAgICAgICAgICBpZiAodyAhPT0gOTUgJiYgdyAhPT0gNTgpIHsgLy8gY2hhciA5NVwiX1wiIDU4XCI6XCJcbiAgICAgICAgICAgIGhhbmRsZVdhcm5pbmcoJ2lsbGVnYWwgZmlyc3QgY2hhciBhdHRyaWJ1dGUgbmFtZScpO1xuICAgICAgICAgICAgc2tpcEF0dHIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgdyA9IHMuY2hhckNvZGVBdChqKTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHcgPiA5NiAmJiB3IDwgMTIzIHx8XG4gICAgICAgICAgICB3ID4gNjQgJiYgdyA8IDkxIHx8XG4gICAgICAgICAgICB3ID4gNDcgJiYgdyA8IDU5IHx8XG4gICAgICAgICAgICB3ID09PSA0NiB8fCAvLyAnLidcbiAgICAgICAgICAgIHcgPT09IDQ1IHx8IC8vICctJ1xuICAgICAgICAgICAgdyA9PT0gOTUgLy8gJ18nXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHdoaXRlc3BhY2VcbiAgICAgICAgICBpZiAodyA9PT0gMzIgfHwgKHcgPCAxNCAmJiB3ID4gOCkpIHsgLy8gV0hJVEVTUEFDRVxuICAgICAgICAgICAgaGFuZGxlV2FybmluZygnbWlzc2luZyBhdHRyaWJ1dGUgdmFsdWUnKTtcbiAgICAgICAgICAgIGkgPSBqO1xuXG4gICAgICAgICAgICBjb250aW51ZSBwYXJzZUF0dHI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZXhwZWN0ZWQgXCI9XCJcbiAgICAgICAgICBpZiAodyA9PT0gNjEpIHsgLy8gXCI9XCIgPT0gNjFcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhbmRsZVdhcm5pbmcoJ2lsbGVnYWwgYXR0cmlidXRlIG5hbWUgY2hhcicpO1xuICAgICAgICAgIHNraXBBdHRyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWUgPSBzLnN1YnN0cmluZyhpLCBqKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gJ3htbG5zOnhtbG5zJykge1xuICAgICAgICAgIGhhbmRsZVdhcm5pbmcoJ2lsbGVnYWwgZGVjbGFyYXRpb24gb2YgeG1sbnMnKTtcbiAgICAgICAgICBza2lwQXR0ciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB3ID0gcy5jaGFyQ29kZUF0KGogKyAxKTtcblxuICAgICAgICBpZiAodyA9PT0gMzQpIHsgLy8gJ1wiJ1xuICAgICAgICAgIGogPSBzLmluZGV4T2YoJ1wiJywgaSA9IGogKyAyKTtcblxuICAgICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgICAgaiA9IHMuaW5kZXhPZignXFwnJywgaSk7XG5cbiAgICAgICAgICAgIGlmIChqICE9PSAtMSkge1xuICAgICAgICAgICAgICBoYW5kbGVXYXJuaW5nKCdhdHRyaWJ1dGUgdmFsdWUgcXVvdGUgbWlzc21hdGNoJyk7XG4gICAgICAgICAgICAgIHNraXBBdHRyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmICh3ID09PSAzOSkgeyAvLyBcIidcIlxuICAgICAgICAgIGogPSBzLmluZGV4T2YoJ1xcJycsIGkgPSBqICsgMik7XG5cbiAgICAgICAgICBpZiAoaiA9PT0gLTEpIHtcbiAgICAgICAgICAgIGogPSBzLmluZGV4T2YoJ1wiJywgaSk7XG5cbiAgICAgICAgICAgIGlmIChqICE9PSAtMSkge1xuICAgICAgICAgICAgICBoYW5kbGVXYXJuaW5nKCdhdHRyaWJ1dGUgdmFsdWUgcXVvdGUgbWlzc21hdGNoJyk7XG4gICAgICAgICAgICAgIHNraXBBdHRyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGVXYXJuaW5nKCdtaXNzaW5nIGF0dHJpYnV0ZSB2YWx1ZSBxdW90ZXMnKTtcbiAgICAgICAgICBza2lwQXR0ciA9IHRydWU7XG5cbiAgICAgICAgICAvLyBza2lwIHRvIG5leHQgc3BhY2VcbiAgICAgICAgICBmb3IgKGogPSBqICsgMTsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgdyA9IHMuY2hhckNvZGVBdChqICsgMSk7XG5cbiAgICAgICAgICAgIGlmICh3ID09PSAzMiB8fCAodyA8IDE0ICYmIHcgPiA4KSkgeyAvLyBXSElURVNQQUNFXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPT09IC0xKSB7XG4gICAgICAgICAgaGFuZGxlV2FybmluZygnbWlzc2luZyBjbG9zaW5nIHF1b3RlcycpO1xuXG4gICAgICAgICAgaiA9IGw7XG4gICAgICAgICAgc2tpcEF0dHIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFza2lwQXR0cikge1xuICAgICAgICAgIHZhbHVlID0gcy5zdWJzdHJpbmcoaSwgaik7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gajtcblxuICAgICAgICAvLyBlbnN1cmUgU1BBQ0UgZm9sbG93cyBhdHRyaWJ1dGVcbiAgICAgICAgLy8gc2tpcCBpbGxlZ2FsIGNvbnRlbnQgb3RoZXJ3aXNlXG4gICAgICAgIC8vIGV4YW1wbGUgYT1cImJcImNcbiAgICAgICAgZm9yICg7IGogKyAxIDwgbDsgaisrKSB7XG4gICAgICAgICAgdyA9IHMuY2hhckNvZGVBdChqICsgMSk7XG5cbiAgICAgICAgICBpZiAodyA9PT0gMzIgfHwgKHcgPCAxNCAmJiB3ID4gOCkpIHsgLy8gV0hJVEVTUEFDRVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRklSU1QgSUxMRUdBTCBDSEFSXG4gICAgICAgICAgaWYgKGkgPT09IGopIHtcbiAgICAgICAgICAgIGhhbmRsZVdhcm5pbmcoJ2lsbGVnYWwgY2hhcmFjdGVyIGFmdGVyIGF0dHJpYnV0ZSBlbmQnKTtcbiAgICAgICAgICAgIHNraXBBdHRyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZHZhbmNlIGN1cnNvciB0byBuZXh0IGF0dHJpYnV0ZVxuICAgICAgICBpID0gaiArIDE7XG5cbiAgICAgICAgaWYgKHNraXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWUgcGFyc2VBdHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgYXR0cmlidXRlIHJlLWRlY2xhcmF0aW9uXG4gICAgICAgIGlmIChuYW1lIGluIHNlZW5BdHRycykge1xuICAgICAgICAgIGhhbmRsZVdhcm5pbmcoJ2F0dHJpYnV0ZSA8JyArIG5hbWUgKyAnPiBhbHJlYWR5IGRlZmluZWQnKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlZW5BdHRyc1tuYW1lXSA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFpc05hbWVzcGFjZSkge1xuICAgICAgICAgIGF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cnkgdG8gZXh0cmFjdCBuYW1lc3BhY2UgaW5mb3JtYXRpb25cbiAgICAgICAgaWYgKG1heWJlTlMpIHtcbiAgICAgICAgICBuZXdhbGlhcyA9IChcbiAgICAgICAgICAgIG5hbWUgPT09ICd4bWxucydcbiAgICAgICAgICAgICAgPyAneG1sbnMnXG4gICAgICAgICAgICAgIDogKG5hbWUuY2hhckNvZGVBdCgwKSA9PT0gMTIwICYmIG5hbWUuc3Vic3RyKDAsIDYpID09PSAneG1sbnM6JylcbiAgICAgICAgICAgICAgICA/IG5hbWUuc3Vic3RyKDYpXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIGhhbmRsZSB4bWxucyg6YWxpYXMpIGFzc2lnbm1lbnRcbiAgICAgICAgICBpZiAobmV3YWxpYXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5zVXJpID0gZGVjb2RlRW50aXRpZXModmFsdWUpO1xuICAgICAgICAgICAgbnNVcmlQcmVmaXggPSB1cmlQcmVmaXgobmV3YWxpYXMpO1xuXG4gICAgICAgICAgICBhbGlhcyA9IG5zVXJpVG9QcmVmaXhbbnNVcmldO1xuXG4gICAgICAgICAgICBpZiAoIWFsaWFzKSB7XG4gICAgICAgICAgICAgIC8vIG5vIHByZWZpeCBkZWZpbmVkIG9yIHByZWZpeCBjb2xsaXNpb25cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChuZXdhbGlhcyA9PT0gJ3htbG5zJykgfHxcbiAgICAgICAgICAgICAgICAobnNVcmlQcmVmaXggaW4gbnNNYXRyaXggJiYgbnNNYXRyaXhbbnNVcmlQcmVmaXhdICE9PSBuc1VyaSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gYWxvY2F0ZSBmcmVlIG5zIHByZWZpeFxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgIGFsaWFzID0gJ25zJyArIChhbm9ueW1vdXNOc0NvdW50KyspO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHR5cGVvZiBuc01hdHJpeFthbGlhc10gIT09ICd1bmRlZmluZWQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGlhcyA9IG5ld2FsaWFzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbnNVcmlUb1ByZWZpeFtuc1VyaV0gPSBhbGlhcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5zTWF0cml4W25ld2FsaWFzXSAhPT0gYWxpYXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFoYXNOZXdNYXRyaXgpIHtcbiAgICAgICAgICAgICAgICBuc01hdHJpeCA9IGNsb25lTnNNYXRyaXgobnNNYXRyaXgpO1xuICAgICAgICAgICAgICAgIGhhc05ld01hdHJpeCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBuc01hdHJpeFtuZXdhbGlhc10gPSBhbGlhcztcbiAgICAgICAgICAgICAgaWYgKG5ld2FsaWFzID09PSAneG1sbnMnKSB7XG4gICAgICAgICAgICAgICAgbnNNYXRyaXhbdXJpUHJlZml4KGFsaWFzKV0gPSBuc1VyaTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWxpYXMgPSBhbGlhcztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG5zTWF0cml4W25zVXJpUHJlZml4XSA9IG5zVXJpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBleHBvc2UgeG1sbnMoOmFzZCk9XCIuLi5cIiBpbiBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBhdHRyc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29sbGVjdCBhdHRyaWJ1dGVzIHVudGlsIGFsbCBuYW1lc3BhY2VcbiAgICAgICAgICAvLyBkZWNsYXJhdGlvbnMgYXJlIHByb2Nlc3NlZFxuICAgICAgICAgIGF0dHJMaXN0LnB1c2gobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgIH0gLyoqIGVuZCBpZiAobWF5YmVOcykgKi9cblxuICAgICAgICAvLyBoYW5kbGUgYXR0cmlidXRlcyBvbiBlbGVtZW50IHdpdGhvdXRcbiAgICAgICAgLy8gbmFtZXNwYWNlIGRlY2xhcmF0aW9uc1xuICAgICAgICB3ID0gbmFtZS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGlmICh3ID09PSAtMSkge1xuICAgICAgICAgIGF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3JtYWxpemUgbnMgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgaWYgKCEobnNOYW1lID0gbnNNYXRyaXhbbmFtZS5zdWJzdHJpbmcoMCwgdyldKSkge1xuICAgICAgICAgIGhhbmRsZVdhcm5pbmcobWlzc2luZ05hbWVzcGFjZUZvclByZWZpeChuYW1lLnN1YnN0cmluZygwLCB3KSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZSA9IGRlZmF1bHRBbGlhcyA9PT0gbnNOYW1lXG4gICAgICAgICAgPyBuYW1lLnN1YnN0cih3ICsgMSlcbiAgICAgICAgICA6IG5zTmFtZSArIG5hbWUuc3Vic3RyKHcpO1xuICAgICAgICAvLyBlbmQ6IG5vcm1hbGl6ZSBucyBhdHRyaWJ1dGUgbmFtZVxuXG4gICAgICAgIC8vIG5vcm1hbGl6ZSB4c2k6dHlwZSBucyBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgaWYgKG5hbWUgPT09IFhTSV9UWVBFKSB7XG4gICAgICAgICAgdyA9IHZhbHVlLmluZGV4T2YoJzonKTtcblxuICAgICAgICAgIGlmICh3ICE9PSAtMSkge1xuICAgICAgICAgICAgbnNOYW1lID0gdmFsdWUuc3Vic3RyaW5nKDAsIHcpO1xuICAgICAgICAgICAgLy8gaGFuZGxlIGRlZmF1bHQgcHJlZml4ZXMsIGkuZS4geHM6U3RyaW5nIGdyYWNlZnVsbHlcbiAgICAgICAgICAgIG5zTmFtZSA9IG5zTWF0cml4W25zTmFtZV0gfHwgbnNOYW1lO1xuICAgICAgICAgICAgdmFsdWUgPSBuc05hbWUgKyB2YWx1ZS5zdWJzdHJpbmcodyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gZGVmYXVsdEFsaWFzICsgJzonICsgdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVuZDogbm9ybWFsaXplIHhzaTp0eXBlIG5zIGF0dHJpYnV0ZSB2YWx1ZVxuXG4gICAgICAgIGF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cblxuICAgICAgLy8gaGFuZGxlIGRlZmVycmVkLCBwb3NzaWJseSBuYW1lc3BhY2VkIGF0dHJpYnV0ZXNcbiAgICAgIGlmIChtYXliZU5TKSB7XG5cbiAgICAgICAgLy8gbm9ybWFsaXplIGNhcHR1cmVkIGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGF0dHJMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXG4gICAgICAgICAgbmFtZSA9IGF0dHJMaXN0W2krK107XG4gICAgICAgICAgdmFsdWUgPSBhdHRyTGlzdFtpXTtcblxuICAgICAgICAgIHcgPSBuYW1lLmluZGV4T2YoJzonKTtcblxuICAgICAgICAgIGlmICh3ICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gbm9ybWFsaXplIG5zIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICBpZiAoIShuc05hbWUgPSBuc01hdHJpeFtuYW1lLnN1YnN0cmluZygwLCB3KV0pKSB7XG4gICAgICAgICAgICAgIGhhbmRsZVdhcm5pbmcobWlzc2luZ05hbWVzcGFjZUZvclByZWZpeChuYW1lLnN1YnN0cmluZygwLCB3KSkpO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZSA9IGRlZmF1bHRBbGlhcyA9PT0gbnNOYW1lXG4gICAgICAgICAgICAgID8gbmFtZS5zdWJzdHIodyArIDEpXG4gICAgICAgICAgICAgIDogbnNOYW1lICsgbmFtZS5zdWJzdHIodyk7XG4gICAgICAgICAgICAvLyBlbmQ6IG5vcm1hbGl6ZSBucyBhdHRyaWJ1dGUgbmFtZVxuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUgeHNpOnR5cGUgbnMgYXR0cmlidXRlIHZhbHVlXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gWFNJX1RZUEUpIHtcbiAgICAgICAgICAgICAgdyA9IHZhbHVlLmluZGV4T2YoJzonKTtcblxuICAgICAgICAgICAgICBpZiAodyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBuc05hbWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgdyk7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGRlZmF1bHQgcHJlZml4ZXMsIGkuZS4geHM6U3RyaW5nIGdyYWNlZnVsbHlcbiAgICAgICAgICAgICAgICBuc05hbWUgPSBuc01hdHJpeFtuc05hbWVdIHx8IG5zTmFtZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5zTmFtZSArIHZhbHVlLnN1YnN0cmluZyh3KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlZmF1bHRBbGlhcyArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbmQ6IG5vcm1hbGl6ZSB4c2k6dHlwZSBucyBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhdHRyc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuZDogbm9ybWFsaXplIGNhcHR1cmVkIGF0dHJpYnV0ZXNcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlZEF0dHJzID0gYXR0cnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgcGFyc2UgY29udGV4dCB7IGxpbmUsIGNvbHVtbiwgcGFydCB9XG4gICAgICogZnJvbSB0aGUgY3VycmVudCBwYXJzZXIgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHBhcnNlIGNvbnRleHRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRQYXJzZUNvbnRleHQoKSB7XG4gICAgICB2YXIgc3BsaXRzUmUgPSAvKFxcclxcbnxcXHJ8XFxuKS9nO1xuXG4gICAgICB2YXIgbGluZSA9IDA7XG4gICAgICB2YXIgY29sdW1uID0gMDtcbiAgICAgIHZhciBzdGFydE9mTGluZSA9IDA7XG4gICAgICB2YXIgZW5kT2ZMaW5lID0gajtcbiAgICAgIHZhciBtYXRjaDtcbiAgICAgIHZhciBkYXRhO1xuXG4gICAgICB3aGlsZSAoaSA+PSBzdGFydE9mTGluZSkge1xuXG4gICAgICAgIG1hdGNoID0gc3BsaXRzUmUuZXhlYyh4bWwpO1xuXG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuZCBvZiBsaW5lID0gKGJyZWFrIGlkeCArIGJyZWFrIGNoYXJzKVxuICAgICAgICBlbmRPZkxpbmUgPSBtYXRjaFswXS5sZW5ndGggKyBtYXRjaC5pbmRleDtcblxuICAgICAgICBpZiAoZW5kT2ZMaW5lID4gaSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWR2YW5jZSB0byBuZXh0IGxpbmVcbiAgICAgICAgbGluZSArPSAxO1xuXG4gICAgICAgIHN0YXJ0T2ZMaW5lID0gZW5kT2ZMaW5lO1xuICAgICAgfVxuXG4gICAgICAvLyBFT0YgZXJyb3JzXG4gICAgICBpZiAoaSA9PSAtMSkge1xuICAgICAgICBjb2x1bW4gPSBlbmRPZkxpbmU7XG4gICAgICAgIGRhdGEgPSB4bWwuc3Vic3RyaW5nKGopO1xuICAgICAgfSBlbHNlXG4gICAgICAvLyBzdGFydCBlcnJvcnNcbiAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkgLSBzdGFydE9mTGluZSk7XG4gICAgICAgIGRhdGEgPSB4bWwuc3Vic3RyaW5nKGosIGkpO1xuICAgICAgfVxuICAgICAgLy8gb3RoZXIgZXJyb3JzXG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sdW1uID0gaSAtIHN0YXJ0T2ZMaW5lO1xuICAgICAgICBkYXRhID0gKGogPT0gLTEgPyB4bWwuc3Vic3RyaW5nKGkpIDogeG1sLnN1YnN0cmluZyhpLCBqICsgMSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAnZGF0YSc6IGRhdGEsXG4gICAgICAgICdsaW5lJzogbGluZSxcbiAgICAgICAgJ2NvbHVtbic6IGNvbHVtblxuICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRDb250ZXh0ID0gZ2V0UGFyc2VDb250ZXh0O1xuXG5cbiAgICBpZiAocHJveHkpIHtcbiAgICAgIGVsZW1lbnRQcm94eSA9IE9iamVjdC5jcmVhdGUoe30sIHtcbiAgICAgICAgJ25hbWUnOiBnZXR0ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnROYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgJ29yaWdpbmFsTmFtZSc6IGdldHRlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX2VsZW1lbnROYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgJ2F0dHJzJzogZ2V0dGVyKGdldEF0dHJzKSxcbiAgICAgICAgJ25zJzogZ2V0dGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBuc01hdHJpeDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFjdHVhbCBwYXJzZSBsb2dpY1xuICAgIHdoaWxlIChqICE9PSAtMSkge1xuXG4gICAgICBpZiAoeG1sLmNoYXJDb2RlQXQoaikgPT09IDYwKSB7IC8vIFwiPFwiXG4gICAgICAgIGkgPSBqO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IHhtbC5pbmRleE9mKCc8Jywgaik7XG4gICAgICB9XG5cbiAgICAgIC8vIHBhcnNlIGVuZFxuICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgIGlmIChub2RlU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKCd1bmV4cGVjdGVkIGVuZCBvZiBmaWxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVFcnJvcignbWlzc2luZyBzdGFydCB0YWcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDwgeG1sLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh4bWwuc3Vic3RyaW5nKGopLnRyaW0oKSkge1xuICAgICAgICAgICAgaGFuZGxlV2FybmluZyhOT05fV0hJVEVTUEFDRV9PVVRTSURFX1JPT1RfTk9ERSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBwYXJzZSB0ZXh0XG4gICAgICBpZiAoaiAhPT0gaSkge1xuXG4gICAgICAgIGlmIChub2RlU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKG9uVGV4dCkge1xuICAgICAgICAgICAgb25UZXh0KHhtbC5zdWJzdHJpbmcoaiwgaSksIGRlY29kZUVudGl0aWVzLCBnZXRDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlU3RvcCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh4bWwuc3Vic3RyaW5nKGosIGkpLnRyaW0oKSkge1xuICAgICAgICAgICAgaGFuZGxlV2FybmluZyhOT05fV0hJVEVTUEFDRV9PVVRTSURFX1JPT1RfTk9ERSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZVN0b3ApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3ID0geG1sLmNoYXJDb2RlQXQoaSsxKTtcblxuICAgICAgLy8gcGFyc2UgY29tbWVudHMgKyBDREFUQVxuICAgICAgaWYgKHcgPT09IDMzKSB7IC8vIFwiIVwiXG4gICAgICAgIHcgPSB4bWwuY2hhckNvZGVBdChpKzIpO1xuICAgICAgICBpZiAodyA9PT0gOTEgJiYgeG1sLnN1YnN0cihpICsgMywgNikgPT09ICdDREFUQVsnKSB7IC8vIDkxID09IFwiW1wiXG4gICAgICAgICAgaiA9IHhtbC5pbmRleE9mKCddXT4nLCBpKTtcbiAgICAgICAgICBpZiAoaiA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVFcnJvcigndW5jbG9zZWQgY2RhdGEnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob25DREFUQSkge1xuICAgICAgICAgICAgb25DREFUQSh4bWwuc3Vic3RyaW5nKGkgKyA5LCBqKSwgZ2V0Q29udGV4dCk7XG4gICAgICAgICAgICBpZiAocGFyc2VTdG9wKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqICs9IDM7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh3ID09PSA0NSAmJiB4bWwuY2hhckNvZGVBdChpICsgMykgPT09IDQ1KSB7IC8vIDQ1ID09IFwiLVwiXG4gICAgICAgICAgaiA9IHhtbC5pbmRleE9mKCctLT4nLCBpKTtcbiAgICAgICAgICBpZiAoaiA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVFcnJvcigndW5jbG9zZWQgY29tbWVudCcpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgaWYgKG9uQ29tbWVudCkge1xuICAgICAgICAgICAgb25Db21tZW50KHhtbC5zdWJzdHJpbmcoaSArIDQsIGopLCBkZWNvZGVFbnRpdGllcywgZ2V0Q29udGV4dCk7XG4gICAgICAgICAgICBpZiAocGFyc2VTdG9wKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqICs9IDM7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBqID0geG1sLmluZGV4T2YoJz4nLCBpICsgMSk7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVFcnJvcigndW5jbG9zZWQgdGFnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob25BdHRlbnRpb24pIHtcbiAgICAgICAgICBvbkF0dGVudGlvbih4bWwuc3Vic3RyaW5nKGksIGogKyAxKSwgZGVjb2RlRW50aXRpZXMsIGdldENvbnRleHQpO1xuICAgICAgICAgIGlmIChwYXJzZVN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBqICs9IDE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodyA9PT0gNjMpIHsgLy8gXCI/XCJcbiAgICAgICAgaiA9IHhtbC5pbmRleE9mKCc/PicsIGkpO1xuICAgICAgICBpZiAoaiA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlRXJyb3IoJ3VuY2xvc2VkIHF1ZXN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob25RdWVzdGlvbikge1xuICAgICAgICAgIG9uUXVlc3Rpb24oeG1sLnN1YnN0cmluZyhpLCBqICsgMiksIGdldENvbnRleHQpO1xuICAgICAgICAgIGlmIChwYXJzZVN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBqICs9IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBqID0geG1sLmluZGV4T2YoJz4nLCBpICsgMSk7XG5cbiAgICAgIGlmIChqID09IC0xKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFcnJvcigndW5jbG9zZWQgdGFnJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGRvbid0IHByb2Nlc3MgYXR0cmlidXRlcztcbiAgICAgIC8vIHRoZXJlIGFyZSBub25lXG4gICAgICBjYWNoZWRBdHRycyA9IHt9O1xuXG4gICAgICAvLyBpZiAoeG1sLmNoYXJDb2RlQXQoaSsxKSA9PT0gNDcpIHsgLy8gPC8uLi5cbiAgICAgIGlmICh3ID09PSA0NykgeyAvLyA8Ly4uLlxuICAgICAgICB0YWdTdGFydCA9IGZhbHNlO1xuICAgICAgICB0YWdFbmQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghbm9kZVN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVFcnJvcignbWlzc2luZyBvcGVuIHRhZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmVyaWZ5IG9wZW4gPC0+IGNsb3NlIHRhZyBtYXRjaFxuICAgICAgICB4ID0gZWxlbWVudE5hbWUgPSBub2RlU3RhY2sucG9wKCk7XG4gICAgICAgIHEgPSBpICsgMiArIHgubGVuZ3RoO1xuXG4gICAgICAgIGlmICh4bWwuc3Vic3RyaW5nKGkgKyAyLCBxKSAhPT0geCkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVFcnJvcignY2xvc2luZyB0YWcgbWlzbWF0Y2gnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZlcmlmeSBjaGFycyBpbiBjbG9zZSB0YWdcbiAgICAgICAgZm9yICg7IHEgPCBqOyBxKyspIHtcbiAgICAgICAgICB3ID0geG1sLmNoYXJDb2RlQXQocSk7XG5cbiAgICAgICAgICBpZiAodyA9PT0gMzIgfHwgKHcgPiA4ICYmIHcgPCAxNCkpIHsgLy8gXFxmXFxuXFxyXFx0XFx2IHNwYWNlXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlRXJyb3IoJ2Nsb3NlIHRhZycpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh4bWwuY2hhckNvZGVBdChqIC0gMSkgPT09IDQ3KSB7IC8vIC4uLi8+XG4gICAgICAgICAgeCA9IGVsZW1lbnROYW1lID0geG1sLnN1YnN0cmluZyhpICsgMSwgaiAtIDEpO1xuXG4gICAgICAgICAgdGFnU3RhcnQgPSB0cnVlO1xuICAgICAgICAgIHRhZ0VuZCA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4ID0gZWxlbWVudE5hbWUgPSB4bWwuc3Vic3RyaW5nKGkgKyAxLCBqKTtcblxuICAgICAgICAgIHRhZ1N0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB0YWdFbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHcgPiA5NiAmJiB3IDwgMTIzIHx8IHcgPiA2NCAmJiB3IDwgOTEgfHwgdyA9PT0gOTUgfHwgdyA9PT0gNTgpKSB7IC8vIGNoYXIgOTVcIl9cIiA1OFwiOlwiXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKCdpbGxlZ2FsIGZpcnN0IGNoYXIgbm9kZU5hbWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocSA9IDEsIHkgPSB4Lmxlbmd0aDsgcSA8IHk7IHErKykge1xuICAgICAgICAgIHcgPSB4LmNoYXJDb2RlQXQocSk7XG5cbiAgICAgICAgICBpZiAodyA+IDk2ICYmIHcgPCAxMjMgfHwgdyA+IDY0ICYmIHcgPCA5MSB8fCB3ID4gNDcgJiYgdyA8IDU5IHx8IHcgPT09IDQ1IHx8IHcgPT09IDk1IHx8IHcgPT0gNDYpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh3ID09PSAzMiB8fCAodyA8IDE0ICYmIHcgPiA4KSkgeyAvLyBcXGZcXG5cXHJcXHRcXHYgc3BhY2VcbiAgICAgICAgICAgIGVsZW1lbnROYW1lID0geC5zdWJzdHJpbmcoMCwgcSk7XG4gICAgICAgICAgICAvLyBtYXliZSB0aGVyZSBhcmUgYXR0cmlidXRlc1xuICAgICAgICAgICAgY2FjaGVkQXR0cnMgPSBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUVycm9yKCdpbnZhbGlkIG5vZGVOYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRhZ0VuZCkge1xuICAgICAgICAgIG5vZGVTdGFjay5wdXNoKGVsZW1lbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYW1lc3BhY2UpIHtcblxuICAgICAgICBfbnNNYXRyaXggPSBuc01hdHJpeDtcblxuICAgICAgICBpZiAodGFnU3RhcnQpIHtcbiAgICAgICAgICAvLyByZW1lbWJlciBvbGQgbmFtZXNwYWNlXG4gICAgICAgICAgLy8gdW5sZXNzIHdlJ3JlIHNlbGYtY2xvc2luZ1xuICAgICAgICAgIGlmICghdGFnRW5kKSB7XG4gICAgICAgICAgICBuc01hdHJpeFN0YWNrLnB1c2goX25zTWF0cml4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2FjaGVkQXR0cnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHF1aWNrIGNoZWNrLCB3aGV0aGVyIHRoZXJlIG1heSBiZSBuYW1lc3BhY2VcbiAgICAgICAgICAgIC8vIGRlY2xhcmF0aW9ucyBvbiB0aGUgbm9kZTsgaWYgdGhhdCBpcyB0aGUgY2FzZVxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBlYWdlcmx5IHBhcnNlIHRoZSBub2RlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGlmICgobWF5YmVOUyA9IHguaW5kZXhPZigneG1sbnMnLCBxKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgIGF0dHJzU3RhcnQgPSBxO1xuICAgICAgICAgICAgICBhdHRyc1N0cmluZyA9IHg7XG5cbiAgICAgICAgICAgICAgZ2V0QXR0cnMoKTtcblxuICAgICAgICAgICAgICBtYXliZU5TID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX2VsZW1lbnROYW1lID0gZWxlbWVudE5hbWU7XG5cbiAgICAgICAgdyA9IGVsZW1lbnROYW1lLmluZGV4T2YoJzonKTtcbiAgICAgICAgaWYgKHcgIT09IC0xKSB7XG4gICAgICAgICAgeG1sbnMgPSBuc01hdHJpeFtlbGVtZW50TmFtZS5zdWJzdHJpbmcoMCwgdyldO1xuXG4gICAgICAgICAgLy8gcHJlZml4IGdpdmVuOyBuYW1lc3BhY2UgbXVzdCBleGlzdFxuICAgICAgICAgIGlmICgheG1sbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVFcnJvcignbWlzc2luZyBuYW1lc3BhY2Ugb24gPCcgKyBfZWxlbWVudE5hbWUgKyAnPicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnROYW1lID0gZWxlbWVudE5hbWUuc3Vic3RyKHcgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4bWxucyA9IG5zTWF0cml4Wyd4bWxucyddO1xuXG4gICAgICAgICAgLy8gaWYgbm8gZGVmYXVsdCBuYW1lc3BhY2UgaXMgZGVmaW5lZCxcbiAgICAgICAgICAvLyB3ZSdsbCBpbXBvcnQgdGhlIGVsZW1lbnQgYXMgYW5vbnltb3VzLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gaXQgaXMgdXAgdG8gdXNlcnMgdG8gY29ycmVjdCB0aGF0IHRvIHRoZSBkb2N1bWVudCBkZWZpbmVkXG4gICAgICAgICAgLy8gdGFyZ2V0TmFtZXNwYWNlLCBvciB3aGF0ZXZlciB0aGVpciB1bmRlcnNhbmRpbmcgb2YgdGhlXG4gICAgICAgICAgLy8gWE1MIHNwZWMgbWFuZGF0ZXMuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGp1c3QgbmFtZXNwYWNlIHByZWZpeHMgYXMgY29uZmlndXJlZFxuICAgICAgICBpZiAoeG1sbnMpIHtcbiAgICAgICAgICBlbGVtZW50TmFtZSA9IHhtbG5zICsgJzonICsgZWxlbWVudE5hbWU7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBpZiAodGFnU3RhcnQpIHtcbiAgICAgICAgYXR0cnNTdGFydCA9IHE7XG4gICAgICAgIGF0dHJzU3RyaW5nID0geDtcblxuICAgICAgICBpZiAob25PcGVuVGFnKSB7XG4gICAgICAgICAgaWYgKHByb3h5KSB7XG4gICAgICAgICAgICBvbk9wZW5UYWcoZWxlbWVudFByb3h5LCBkZWNvZGVFbnRpdGllcywgdGFnRW5kLCBnZXRDb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25PcGVuVGFnKGVsZW1lbnROYW1lLCBnZXRBdHRycywgZGVjb2RlRW50aXRpZXMsIHRhZ0VuZCwgZ2V0Q29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBhcnNlU3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmICh0YWdFbmQpIHtcblxuICAgICAgICBpZiAob25DbG9zZVRhZykge1xuICAgICAgICAgIG9uQ2xvc2VUYWcocHJveHkgPyBlbGVtZW50UHJveHkgOiBlbGVtZW50TmFtZSwgZGVjb2RlRW50aXRpZXMsIHRhZ1N0YXJ0LCBnZXRDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwYXJzZVN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXN0b3JlIG9sZCBuYW1lc3BhY2VcbiAgICAgICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICAgICAgaWYgKCF0YWdTdGFydCkge1xuICAgICAgICAgICAgbnNNYXRyaXggPSBuc01hdHJpeFN0YWNrLnBvcCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuc01hdHJpeCA9IF9uc01hdHJpeDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaiArPSAxO1xuICAgIH1cbiAgfSAvKiogZW5kIHBhcnNlICovXG5cbn1cblxuZXhwb3J0IHsgUGFyc2VyLCBkZWNvZGVFbnRpdGllcyBhcyBkZWNvZGUgfTtcbiIsImltcG9ydCBCcG1uTW9kZGxlIGZyb20gJ2JwbW4tbW9kZGxlJztcbmltcG9ydCB0ZXN0WG1sIGZyb20gJy4veG1sJztcblxuXG52YXIgbW9kZGxlID0gbmV3IEJwbW5Nb2RkbGUoKTtcbm1vZGRsZS5mcm9tWE1MKHRlc3RYbWwsIGZ1bmN0aW9uKGVyciwgZGVmaW5pdGlvbnMpIHtcblxuICBjb25zb2xlLmxvZyhkZWZpbml0aW9ucyk7XG4gIC8vIFRyYXZlcnNlIHRoZSBQcm9jZXNzXG4gIHZhciBlbGVtZW50cyA9IGRlZmluaXRpb25zLnJvb3RFbGVtZW50c1swXS5mbG93RWxlbWVudHM7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnRzKTtcbiAgY29uc3Qgc3RhcnRFdmVudCA9IGVsZW1lbnRzLmZpbmQoZWwgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGVsKTtcbiAgICByZXR1cm4gZWwuJHR5cGUgPT09ICdicG1uOlN0YXJ0RXZlbnQnO1xuICB9KTtcblxuICBjb25zdCBpZFRvRWxlbWVudE1hcCA9IHt9O1xuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGlkVG9FbGVtZW50TWFwW2VsZW1lbnQuaWRdID0gZWxlbWVudDtcbiAgfSk7XG5cblxuICBjb25zb2xlLmxvZygnX19fX19fX19fX19fX1RyYXZlcnNpbmdfX19fX19fX19fJylcblxuICBsZXQgY3VycmVudCA9IHN0YXJ0RXZlbnQ7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnQuaWQsIGN1cnJlbnQpXG5cbiAgd2hpbGUoY3VycmVudCA9IGN1cnJlbnQub3V0Z29pbmcgJiYgY3VycmVudC5vdXRnb2luZ1swXS50YXJnZXRSZWYpIHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50LmlkLCBjdXJyZW50KTtcblxuICAgIGlmKGN1cnJlbnQuJHR5cGUgPT09ICdicG1uOlNjcmlwdFRhc2snKSB7XG4gICAgICBldmFsKGN1cnJlbnQuc2NyaXB0KVxuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdfX19fX19fX19fX19fRG9uZV9fX19fX19fX18nKVxuXG5cblxuICAvLyBjb25zb2xlLmxvZyhpZFRvRWxlbWVudE1hcCk7XG4gIC8vIGNvbnNvbGUubG9nKHN0YXJ0RXZlbnQpO1xuXG5cblxuICAvLyAvLyB1cGRhdGUgaWQgYXR0cmlidXRlXG4gIC8vIGRlZmluaXRpb25zLnNldCgnaWQnLCAnTkVXIElEJyk7XG5cbiAgLy8gLy8gYWRkIGEgcm9vdCBlbGVtZW50XG4gIC8vIHZhciBicG1uUHJvY2VzcyA9IG1vZGRsZS5jcmVhdGUoJ2JwbW46UHJvY2VzcycsIHsgaWQ6ICdNeVByb2Nlc3NfMScgfSk7XG4gIC8vIGRlZmluaXRpb25zLmdldCgncm9vdEVsZW1lbnRzJykucHVzaChicG1uUHJvY2Vzcyk7XG5cbiAgLy8gbW9kZGxlLnRvWE1MKGRlZmluaXRpb25zLCBmdW5jdGlvbihlcnIsIHhtbFN0clVwZGF0ZWQpIHtcblxuICAvLyAgIC8vIHhtbFN0clVwZGF0ZWQgY29udGFpbnMgbmV3IGlkIGFuZCB0aGUgYWRkZWQgcHJvY2Vzc1xuXG4gIC8vIH0pO1xuXG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjxicG1uOmRlZmluaXRpb25zIHhtbG5zOmJwbW49XCJodHRwOi8vd3d3Lm9tZy5vcmcvc3BlYy9CUE1OLzIwMTAwNTI0L01PREVMXCIgeG1sbnM6YnBtbmRpPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvQlBNTi8yMDEwMDUyNC9ESVwiIHhtbG5zOmRjPVwiaHR0cDovL3d3dy5vbWcub3JnL3NwZWMvREQvMjAxMDA1MjQvRENcIiB4bWxuczpkaT1cImh0dHA6Ly93d3cub21nLm9yZy9zcGVjL0RELzIwMTAwNTI0L0RJXCIgaWQ9XCJEZWZpbml0aW9uc18xaHA2d2lrXCIgdGFyZ2V0TmFtZXNwYWNlPVwiaHR0cDovL2JwbW4uaW8vc2NoZW1hL2JwbW5cIiBleHBvcnRlcj1cIkNhbXVuZGEgTW9kZWxlclwiIGV4cG9ydGVyVmVyc2lvbj1cIjMuNS4wXCI+XG4gIDxicG1uOnByb2Nlc3MgaWQ9XCJQcm9jZXNzXzA5cWg1aDRcIiBpc0V4ZWN1dGFibGU9XCJ0cnVlXCI+XG4gICAgPGJwbW46c3RhcnRFdmVudCBpZD1cIlN0YXJ0RXZlbnRfMVwiPlxuICAgICAgPGJwbW46b3V0Z29pbmc+U2VxdWVuY2VGbG93XzA4dW9lcDA8L2JwbW46b3V0Z29pbmc+XG4gICAgPC9icG1uOnN0YXJ0RXZlbnQ+XG4gICAgPGJwbW46c2VxdWVuY2VGbG93IGlkPVwiU2VxdWVuY2VGbG93XzA4dW9lcDBcIiBzb3VyY2VSZWY9XCJTdGFydEV2ZW50XzFcIiB0YXJnZXRSZWY9XCJUYXNrXzE4eWhyNXJcIiAvPlxuICAgIDxicG1uOnNjcmlwdFRhc2sgaWQ9XCJUYXNrXzE4eWhyNXJcIiBzY3JpcHRGb3JtYXQ9XCJqYXZhc2NyaXB0XCI+XG4gICAgICA8YnBtbjppbmNvbWluZz5TZXF1ZW5jZUZsb3dfMDh1b2VwMDwvYnBtbjppbmNvbWluZz5cbiAgICAgIDxicG1uOm91dGdvaW5nPlNlcXVlbmNlRmxvd18wcjQ5YWc1PC9icG1uOm91dGdvaW5nPlxuICAgICAgPGJwbW46c2NyaXB0PnZhciB4ID0gNDI7XG5jb25zb2xlLmxvZygnZm9vJywgeCk7XG5cbndpbmRvdy5mb29CYXIgPSAnYmF6Jzs8L2JwbW46c2NyaXB0PlxuICAgIDwvYnBtbjpzY3JpcHRUYXNrPlxuICAgIDxicG1uOmVuZEV2ZW50IGlkPVwiRW5kRXZlbnRfMG95cDRlY1wiPlxuICAgICAgPGJwbW46aW5jb21pbmc+U2VxdWVuY2VGbG93XzByNDlhZzU8L2JwbW46aW5jb21pbmc+XG4gICAgPC9icG1uOmVuZEV2ZW50PlxuICAgIDxicG1uOnNlcXVlbmNlRmxvdyBpZD1cIlNlcXVlbmNlRmxvd18wcjQ5YWc1XCIgc291cmNlUmVmPVwiVGFza18xOHlocjVyXCIgdGFyZ2V0UmVmPVwiRW5kRXZlbnRfMG95cDRlY1wiIC8+XG4gIDwvYnBtbjpwcm9jZXNzPlxuICA8YnBtbmRpOkJQTU5EaWFncmFtIGlkPVwiQlBNTkRpYWdyYW1fMVwiPlxuICAgIDxicG1uZGk6QlBNTlBsYW5lIGlkPVwiQlBNTlBsYW5lXzFcIiBicG1uRWxlbWVudD1cIlByb2Nlc3NfMDlxaDVoNFwiPlxuICAgICAgPGJwbW5kaTpCUE1OU2hhcGUgaWQ9XCJfQlBNTlNoYXBlX1N0YXJ0RXZlbnRfMlwiIGJwbW5FbGVtZW50PVwiU3RhcnRFdmVudF8xXCI+XG4gICAgICAgIDxkYzpCb3VuZHMgeD1cIjE3OVwiIHk9XCI5OVwiIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIC8+XG4gICAgICA8L2JwbW5kaTpCUE1OU2hhcGU+XG4gICAgICA8YnBtbmRpOkJQTU5FZGdlIGlkPVwiU2VxdWVuY2VGbG93XzA4dW9lcDBfZGlcIiBicG1uRWxlbWVudD1cIlNlcXVlbmNlRmxvd18wOHVvZXAwXCI+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMjE1XCIgeT1cIjExN1wiIC8+XG4gICAgICAgIDxkaTp3YXlwb2ludCB4PVwiMjcwXCIgeT1cIjExN1wiIC8+XG4gICAgICA8L2JwbW5kaTpCUE1ORWRnZT5cbiAgICAgIDxicG1uZGk6QlBNTlNoYXBlIGlkPVwiU2NyaXB0VGFza18wdHZveHhyX2RpXCIgYnBtbkVsZW1lbnQ9XCJUYXNrXzE4eWhyNXJcIj5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiMjcwXCIgeT1cIjc3XCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCI4MFwiIC8+XG4gICAgICA8L2JwbW5kaTpCUE1OU2hhcGU+XG4gICAgICA8YnBtbmRpOkJQTU5TaGFwZSBpZD1cIkVuZEV2ZW50XzBveXA0ZWNfZGlcIiBicG1uRWxlbWVudD1cIkVuZEV2ZW50XzBveXA0ZWNcIj5cbiAgICAgICAgPGRjOkJvdW5kcyB4PVwiNDMyXCIgeT1cIjk5XCIgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgLz5cbiAgICAgIDwvYnBtbmRpOkJQTU5TaGFwZT5cbiAgICAgIDxicG1uZGk6QlBNTkVkZ2UgaWQ9XCJTZXF1ZW5jZUZsb3dfMHI0OWFnNV9kaVwiIGJwbW5FbGVtZW50PVwiU2VxdWVuY2VGbG93XzByNDlhZzVcIj5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCIzNzBcIiB5PVwiMTE3XCIgLz5cbiAgICAgICAgPGRpOndheXBvaW50IHg9XCI0MzJcIiB5PVwiMTE3XCIgLz5cbiAgICAgIDwvYnBtbmRpOkJQTU5FZGdlPlxuICAgIDwvYnBtbmRpOkJQTU5QbGFuZT5cbiAgPC9icG1uZGk6QlBNTkRpYWdyYW0+XG48L2JwbW46ZGVmaW5pdGlvbnM+XG5cbmAiXSwic291cmNlUm9vdCI6IiJ9