var http = require("http");
var config = require("./api/config");
var app = require("./app");
var port = process.env.PORT || 8080;
var socketIO = require("socket.io");
var axios = require("axios");

var server = http.createServer(app);
var io = socketIO(server);

const getUsers = async socket => {
  try {
    const res = await axios.get("http://192.168.1.40:8080/api/refs/getRefers");
    console.log(res.data);
    socket.emit("GetRefers", res.data);
    socket.broadcast.emit("GetRefers", res.data);
  } catch (error) {
    console.log(error);
  }
};

const getPosition = async socket => {
  try {
    const res = await axios.get(
      "http://192.168.1.40:8080/api/position/GetPositions"
    );
    console.log(res.data);
    socket.emit("GetPositions", res.data);
    socket.broadcast.emit("GetPositions", res.data);
  } catch (error) {
    console.log(error);
  }
};

const AddPosition = async (pos, description, slot) => {
  try {
    const res = await axios.post(
      "http://192.168.40:8080/api/refs/AddPosition",
      {
        pos: pos,
        description: description,
        slot: slot
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const AddRefs = async (
  emp_name,
  ref_lastname,
  ref_firstname,
  ref_address,
  ref_contact,
  ref_email,
  ref_pos
) => {
  try {
    const res = await axios.post("http://192.168.1.40:8080/api/refs/addRefer", {
      emp_name: emp_name,
      ref_lastname: ref_lastname,
      ref_firstname: ref_firstname,
      ref_address: ref_address,
      ref_contact: ref_contact,
      ref_email: ref_email,
      ref_pos: ref_pos
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const UpdateStats = async (id, status) => {
  try {
    const res = await axios.put(
      "http://192.168.1.40:8080/api/refs/updateStatus/" + id,
      {
        status: status
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const DeletePosition = async id => {
  try {
    const res = await axios.delete(
      "http://192.168.1.40:8080/api/position/DeletePosition/" + id
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

io.on("connection", socket => {
  console.log("New Client");

  getUsers(socket);
  getPosition(socket);

  socket.on("GetRefer", () => {
    getUsers(socket);
  });

  socket.on("GetPosition", () => {
    getPosition(socket);
  });

  socket.on("AddPosition", function(pos, description, slot) {
    AddPosition(pos, description, slot);
    socket.emit("change_data", getPosition(socket));
    socket.broadcast.emit("change_data", getPosition(socket));
  });

  socket.on("AddRefer", function(
    emp_name,
    ref_lastname,
    ref_firstname,
    ref_address,
    ref_contact,
    ref_email,
    ref_pos
  ) {
    AddRefs(
      emp_name,
      ref_lastname,
      ref_firstname,
      ref_address,
      ref_contact,
      ref_email,
      ref_pos
    );
    socket.emit("change_data", getUsers(socket));
    socket.broadcast.emit("change_data", getUsers(socket));
  });

  socket.on("UpdateStatus", function(id, status) {
    UpdateStats(id, status);
    socket.emit("change_data", getUsers(socket));
    socket.broadcast.emit("change_data", getUsers(socket));
  });

  socket.on("DeletePosition", function(id) {
    DeletePosition(id);
    socket.emit("chage_data", getPosition(socket));
    socket.broadcast.emit("change_data", getPosition(socket));
  });

  socket.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});

server.listen(port);
console.log("Listening at " + config.apiUrl + " Port:" + port);
