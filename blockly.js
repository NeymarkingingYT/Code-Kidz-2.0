const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
});

function runCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    eval(code);
  } catch (e) {
    alert("Error in code: " + e);
  }
}
