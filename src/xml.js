export default `<?xml version="1.0" encoding="UTF-8"?>
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

`