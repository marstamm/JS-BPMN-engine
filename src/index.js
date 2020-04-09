import BpmnModdle from 'bpmn-moddle';
import testXml from './xml';


var moddle = new BpmnModdle();
moddle.fromXML(testXml, function(err, definitions) {

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
