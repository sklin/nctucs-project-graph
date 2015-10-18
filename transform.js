var transform = function(flow) {
  var data = [];
  var name = flow.source_ip + ":" + flow.source_port;
  name += " - " + flow.destination_ip + ":" + flow.destination_port;
  data.push(name);

  for(var i=0; i<flow.packet.length; i++) {
    data.push(Math.log10(flow.packet[i].length,10));
    //data.push(flow.packet[i].length);
  }

  return data;
};
