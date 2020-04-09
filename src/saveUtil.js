function save(name, key, value) {
  var content = JSON.parse(localStorage.getItem(name)) || {};
  content[value[key]] = value;
  localStorage.setItem(name, JSON.stringify(content));
}

function get(name) {
  return JSON.parse(localStorage.getItem(name)) || {};
}

function saveProcessInstance(processInstance) {
  save("processInstances", "id", processInstance);
}

function saveProcessDefinition(processDefinition) {
  save("processDefinitions", "id", processDefinition);
}

function getProcessInstances() {
  return get("processInstances");
}

function getProcessDefinitions(id) {
  return get("processDefinitions");
}

function getProcessInstance(id) {
  return get("processInstances")[id];
}

function getProcessDefinition(id) {
  return get("processDefinitions")[id];
}

function removeProcessInstance(id) {
  console.log("delete");
  var content = JSON.parse(localStorage.getItem("processInstances")) || {};
  delete content[id];
  localStorage.setItem("processInstances", JSON.stringify(content));
  console.log(content);
}

function getCurrentId() {
  return Object.keys(getProcessInstances()).slice(-1).pop() || 1;
}

export {
  save,
  get,
  saveProcessDefinition,
  saveProcessInstance,
  getProcessDefinition,
  getProcessDefinitions,
  getProcessInstance,
  getProcessInstances,
  removeProcessInstance,
  getCurrentId,
};
