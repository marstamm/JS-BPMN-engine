import BpmnModdle from "bpmn-moddle";
import BpmnJS from "bpmn-js";

import {
  saveProcessInstance,
  getProcessInstances,
  getProcessInstance,
  removeProcessInstance,
  getCurrentId,
} from "./saveUtil";

let id = getCurrentId();
let running = false;
function isDemoModeActive() {
  return demoMode.checked;
}

function wait(millis) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, millis);
  });
}

var viewer = new BpmnJS({
  container: document.getElementById("bpmn"),
});

document.upload = async function (evt) {
  console.log(evt, document.getElementById("bpmn-file"));
  const bpmn = await document.getElementById("bpmn-file").files[0].text();
  loadAndStartFromScratch(bpmn);
};

document.start = async function (evt) {
  console.log(evt, document.getElementById("bpmn-file"));
  const bpmn = await document.getElementById("bpmn-file").files[0].text();
  loadAndStartFromScratch(bpmn);
};

document.uploadAndRun = async function (evt) {
  console.log(evt, document.getElementById("bpmn-file"));
  const bpmn = await document.getElementById("bpmn-file").files[0].text();
  loadAndStartFromScratch(bpmn);
};

function addOverlays(readyElements) {
  const overlays = viewer.get("overlays");
  overlays.clear();

  const ids = readyElements.map((val) => val.targetRef.id);

  const idCountMap = {};
  ids.forEach((element) => {
    idCountMap[element] = idCountMap[element] ? idCountMap[element] + 1 : 1;
  });

  for (const id in idCountMap) {
    try {
      overlays.add(id, {
        position: {
          top: -5,
          left: -5,
        },
        html: `<div style="width: 20px;background: lightblue;border-radius: 10px;text-align: center;height: 20px;">${idCountMap[id]}</div>`,
      });
    } catch (err) {}
  }
}

async function workOnProcess(processInstance) {
  removeProcessInstance(processInstance.id);

  idLabel.innerHTML = `Now working on Process Id ${processInstance.id}`;
  console.log(id);
  console.log(processInstance);
  while (processInstance.readyElements.length) {
    await performProcessStep(processInstance);
  }

  idLabel.innerHTML = `Finished`;

  if (autoRun.checked) bootstrap();
}

async function performProcessStep(processInstance) {
  const {
    variables: processVariables,
    readyElements,
    elements,
  } = processInstance;
  console.log(processInstance);

  let current = readyElements.shift();

  addOverlays([current, ...readyElements]);

  if (isDemoModeActive()) {
    await wait(1000);
  }

  current = current.targetRef;
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
      return;
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
      return;
    }
    readyElements.push(possibleGateways[0] || defaultPath);
    return;
  }

  // Default behaviour

  if (current.outgoing && current.outgoing[0].targetRef) {
    readyElements.push(...current.outgoing);
  }
}

function loadAndStartFromSave(definition) {
  const { xml: bpmnXml, readyElements } = definition;
  viewer.importXML(bpmnXml, async function () {
    var elements = viewer._definitions.rootElements[0].flowElements;
    console.log(elements);

    const linkedReadyElements = readyElements.map(
      (rEl) => elements.filter((el) => el.id === rEl.id)[0]
    );

    workOnProcess({
      ...definition,
      elements,
      readyElements: linkedReadyElements,
    });
  });
}

function loadAndStartFromScratch(bpmnXml) {
  viewer.importXML(bpmnXml, async function () {
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

    const processInstance = {
      id: id,
      variables: processVariables,
      readyElements: readyElements,
      elements: elements,
      xml: bpmnXml,
    };

    saveProcessInstance(processInstance);
    id++;
  });
}

function bootstrap() {
  const instances = getProcessInstances();
  console.log(instances);

  loadAndStartFromSave(instances[Object.keys(instances)[0]]);
}

document.bootstrap = bootstrap;
document.addProcess = loadAndStartFromScratch;
