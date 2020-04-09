import BpmnModdle from "bpmn-moddle";
import BpmnJS from "bpmn-js";
import testXml from "./xml";

var viewer = new BpmnJS({
  container: document.getElementById("bpmn"),
});

document.upload = async function (evt) {
  console.log(evt, document.getElementById("bpmn-file"));
  const bpmn = await document.getElementById("bpmn-file").files[0].text();
  loadViewer(bpmn);
};

// function addOverlays() {

// }

function loadViewer(bpmnXml) {
  viewer.importXML(bpmnXml, async function (err, definitions) {
    // Traverse the Process
    console.log(err, definitions);

    var elements = viewer._definitions.rootElements[0].flowElements;
    const startEvent = elements.find((el) => {
      return el.$type === "bpmn:StartEvent";
    });

    const idToElementMap = {};
    elements.forEach((element) => {
      idToElementMap[element.id] = element;
    });

    const readyElements = [];
    let current;
    readyElements.push(...startEvent.outgoing);

    const processVariables = {};

    while ((current = readyElements.shift())) {
      current = current.targetRef;
      console.log(current);
      if (current.$type === "bpmn:ScriptTask") {
        var result = async function (str) {
          await eval(current.script);
        }.call(processVariables);
        await result;
      }

      if (current.$type === "bpmn:ParallelGateway") {
        current.waitingTokens = current.waitingTokens
          ? current.waitingTokens + 1
          : 1;

        if (current.incoming.length > current.waitingTokens) {
          continue;
        }
        current.waitingTokens -= current.incoming.length;
      }

      if (current.$type === "bpmn:ExclusiveGateway") {
        let defaultPath;
        var possibleGateways = current.outgoing.filter((val) => {
          if (
            !val.conditionExpression ||
            (val.conditionExpression && !val.conditionExpression.body)
          ) {
            // Probably default path
            defaultPath = val;
            return false;
          }
          return function () {
            return eval(val.conditionExpression.body);
          }.call(processVariables);
        });

        if (!possibleGateways.length && !defaultPath) {
          console.error("No possible Path found at element " + current);
          continue;
        }
        readyElements.push(possibleGateways[0] || defaultPath);
        continue;
      }

      // Default behaviour

      if (current.outgoing && current.outgoing[0].targetRef) {
        readyElements.push(...current.outgoing);
      }
    }
  });
}
