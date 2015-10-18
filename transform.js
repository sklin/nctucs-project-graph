var genXaxis = function(flow) {
  x_axis = ['x'];
  for(var i=0; i<flow.data.length; i++){
    x_axis.push(i);
  }
  return x_axis;
};

var transform2 = function(flow) {
  // for data in lctseng's pattern
  var _data = [];
  _data.push(flow.name);
  _data = _data.concat(flow.data);

  return _data;
};


var transform = function(flow) {
  // for data in lmchen's pattern
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
